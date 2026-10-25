import { EmailMessage } from 'cloudflare:email'

// The bindings and vars in wrangler.jsonc. Only the methods the Worker calls are required, so tests can stub them.
export interface Env {
  ASSETS: { fetch (request: Request): Promise<Response> }
  FORMS_EMAIL: { send (message: EmailMessage): Promise<unknown> }
  FORMS_FROM: string
  FORMS_TO: string
  // A secret (.dev.vars locally); forms answer 503 without it.
  TURNSTILE_SECRET_KEY?: string
}

type Values = Record<string, string>

interface Form {
  title: string
  subject: (data: Values) => string
  emailOptional?: boolean
}

interface TurnstileResult {
  success: boolean
  action?: unknown
  hostname?: unknown
}

// The site's forms, by the name in /api/forms/<name>. Each email lists every submitted field.
export const forms: Record<string, Form> = {
  contact: { title: 'Contact form', subject: (data) => data.subject || 'New enquiry' },
  'lead-questionnaire': { title: 'Lead questionnaire', subject: (data) => `Lead questionnaire from ${data.name || 'a visitor'}` },
  'email-checkup': { title: 'Email checkup', subject: (data) => `Email checkup for ${data.website || data.email}` },
  // The brand identity questionnaire has no email field, so its emails have no Reply-To.
  'brand-identity': { title: 'Brand identity', subject: (data) => `Brand identity questionnaire from ${data.yourCompanyName || 'a visitor'}`, emailOptional: true },
  seo: { title: 'SEO', subject: () => 'SEO enquiry' }
}

const json = (body: unknown, status = 200) => Response.json(body, { status, headers: { 'Cache-Control': 'no-store' } })
const clean = (value: unknown) => String(value ?? '').replace(/\r/g, '').trim()
const header = (value: unknown) => clean(value).replace(/\n/g, ' ').slice(0, 200)
const base64 = (text: string) => btoa(String.fromCharCode(...new TextEncoder().encode(text)))
const FIELD = /^[A-Za-z][A-Za-z0-9_-]{0,63}$/
// camelCase field names become labels: howDidYouHearAboutUs -> How did you hear about us
const label = (name: string) => {
  const words = name.replace(/([a-z0-9])([A-Z])/g, '$1 $2').replace(/[_-]+/g, ' ').toLowerCase()

  return words.charAt(0).toUpperCase() + words.slice(1)
}

const isTurnstileResult = (value: unknown): value is TurnstileResult => typeof value === 'object' && value !== null && 'success' in value && typeof value.success === 'boolean'

async function verifyTurnstile (token: string, action: string, request: Request, env: Env) {
  const verification = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ secret: env.TURNSTILE_SECRET_KEY, response: token }),
    signal: AbortSignal.timeout(10000)
  })
  if (!verification.ok) {
    throw new Error('Turnstile unavailable')
  }
  const result: unknown = await verification.json()
  if (!isTurnstileResult(result)) {
    throw new Error('Invalid Turnstile response')
  }

  return result.success && result.action === action && result.hostname === new URL(request.url).hostname
}

export async function handleForm (request: Request, env: Env, name: string) {
  const form = Object.hasOwn(forms, name) ? forms[name] : null
  if (!form) {
    return json({ error: 'Form not found' }, 404)
  }
  if (request.method !== 'POST') {
    return json({ error: 'Method not allowed' }, 405)
  }
  const origin = request.headers.get('Origin')
  if (origin && origin !== new URL(request.url).origin) {
    return json({ error: 'Forbidden' }, 403)
  }
  const data = await request.formData().catch(() => null)
  if (!data) {
    return json({ error: 'Invalid form' }, 400)
  }
  const token = data.get('cf-turnstile-response')
  const fields: [string, string][] = []
  for (const [key, value] of data) {
    if (key === 'cf-turnstile-response' || key === 'form-name' || key === 'submit') {
      continue
    }
    if (typeof value !== 'string' || !FIELD.test(key) || fields.length >= 60) {
      return json({ error: 'Invalid form' }, 400)
    }
    const text = clean(value).slice(0, 5000)
    if (text) {
      fields.push([key, text])
    }
  }
  const values: Values = Object.fromEntries(fields)
  const email = header(values.email)
  const validEmail = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(email)
  if ((!validEmail && (email || !form.emailOptional)) || fields.length < 2) {
    return json({ error: 'A valid email address and your details are required' }, 400)
  }
  if (typeof token !== 'string' || !token.trim() || token.length > 2048) {
    return json({ error: 'Please complete the spam check and try again' }, 400)
  }
  if (!env.TURNSTILE_SECRET_KEY) {
    return json({ error: 'This form is temporarily unavailable. Please email info@galexia.agency' }, 503)
  }
  try {
    if (!await verifyTurnstile(token, name, request, env)) {
      return json({ error: 'Spam check failed or expired. Please try again' }, 403)
    }
  } catch {
    return json({ error: 'Spam check is temporarily unavailable. Please try again' }, 503)
  }
  const from = header([values.firstName, values.lastName].filter(Boolean).join(' ') || values.name || email || values.yourCompanyName || 'a visitor')
  const raw = [
    `From: Galexia website <${env.FORMS_FROM}>`,
    `To: ${env.FORMS_TO}`,
    ...(validEmail ? [`Reply-To: ${email}`] : []),
    `Subject: =?UTF-8?B?${base64(`${form.title}: ${header(form.subject(values))}`)}?=`,
    `Message-ID: <${crypto.randomUUID()}@galexia.agency>`,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: base64',
    '',
    base64(`${form.title} from ${from}\n\n${fields.map(([key, value]) => `${label(key)}:\n${value}`).join('\n\n')}\n`).replace(/.{76}/g, '$&\r\n')
  ].join('\r\n')
  try {
    await env.FORMS_EMAIL.send(new EmailMessage(env.FORMS_FROM, env.FORMS_TO, raw))
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Form email failed', error instanceof Error ? error.name : typeof error)

    return json({ error: 'Message could not be sent' }, 502)
  }

  return json({ ok: true })
}

export default {
  async fetch (request: Request, env: Env) {
    const match = new URL(request.url).pathname.match(/^\/api\/forms\/([a-z-]+)\/?$/)
    if (match?.[1]) {
      return handleForm(request, env, match[1])
    }
    if (new URL(request.url).pathname.startsWith('/api/')) {
      return json({ error: 'Not found' }, 404)
    }

    return env.ASSETS.fetch(request)
  }
} satisfies ExportedHandler<Env>
