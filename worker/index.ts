import { createForms, type FormsEnv } from '@joebailey26/turnstile-forms'

// The bindings and vars in wrangler.jsonc. Only the methods the Worker calls are required, so tests can stub them.
export interface Env {
  ASSETS: { fetch (request: Request): Promise<Response> }
  FORMS_EMAIL: FormsEnv['email']
  FORMS_FROM: string
  FORMS_TO: string
  // A secret (.dev.vars locally); forms answer 503 without it.
  TURNSTILE_SECRET_KEY?: string
}

// The site's forms, by the name in /api/forms/<name>. Each email lists every submitted field.
export const forms = {
  contact: { title: 'Contact form', subject: (data) => `Contact form: ${data.subject || 'New enquiry'}` },
  'lead-questionnaire': { title: 'Lead questionnaire', subject: (data) => `Lead questionnaire from ${data.name || 'a visitor'}` },
  'email-checkup': { title: 'Email checkup', subject: (data) => `Email checkup for ${data.website || data.email}` },
  // The brand identity questionnaire has no email field, so its emails have no Reply-To.
  'brand-identity': { title: 'Brand identity', subject: (data) => `Brand identity questionnaire from ${data.yourCompanyName || 'a visitor'}`, emailOptional: true },
  seo: { title: 'SEO', subject: () => 'SEO enquiry' }
} satisfies Parameters<typeof createForms>[0]['forms']

const handleForm = createForms({ forms, senderName: 'Galexia website', contactEmail: 'info@galexia.agency' })

const json = (body: unknown, status = 200) => Response.json(body, { status, headers: { 'Cache-Control': 'no-store' } })

export default {
  async fetch (request: Request, env: Env) {
    const { pathname } = new URL(request.url)
    const name = pathname.match(/^\/api\/forms\/([a-z-]+)\/?$/)?.[1]
    if (name) {
      return handleForm(request, name, { email: env.FORMS_EMAIL, from: env.FORMS_FROM, to: env.FORMS_TO, turnstileSecret: env.TURNSTILE_SECRET_KEY })
    }
    if (pathname.startsWith('/api/')) {
      return json({ error: 'Not found' }, 404)
    }

    return env.ASSETS.fetch(request)
  }
} satisfies ExportedHandler<Env>
