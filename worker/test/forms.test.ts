import assert from 'node:assert/strict'
import { registerHooks } from 'node:module'
import { test, type TestContext } from 'node:test'
import type { Env } from '../index.ts'

// Only replace the Workers-only email constructor; exercise the real request handler.
const hooks = registerHooks({
  resolve (specifier, context, next) {
    if (specifier === 'cloudflare:email') {
      return { url: 'data:text/javascript,export class EmailMessage { constructor(...args) { this.args = args; } }', shortCircuit: true }
    }

    return next(specifier, context)
  }
})
const { default: worker, forms } = await import('../index.ts')
hooks.deregister()

type Fields = Record<string, string>
type VerifyResult = Record<string, unknown>

const contactFields: Fields = { firstName: 'Test', lastName: 'Visitor', email: 'visitor@example.com', subject: 'A new site', message: 'Please quote', howDidYouHearAboutUs: 'Other' }

function request (name = 'contact', fields: Fields = contactFields, { token = 'valid-token', ...options }: RequestInit & { token?: string | null } = {}) {
  const body = new FormData()
  for (const [key, value] of Object.entries(fields)) {
    body.set(key, value)
  }
  if (token !== null) {
    body.set('cf-turnstile-response', token)
  }

  return new Request(`https://galexia.agency/api/forms/${name}`, { method: 'POST', body, ...options })
}

function setup (t: TestContext, result: VerifyResult | ((action: string) => VerifyResult) = (action) => ({ success: true, action, hostname: 'galexia.agency' })) {
  const send = t.mock.fn(async (_message: unknown) => {})
  const verify = t.mock.method(globalThis, 'fetch', async (_url: unknown, _options?: RequestInit) => Response.json(typeof result === 'function' ? result(currentAction) : result))
  let currentAction = 'contact'
  const env: Env = {
    TURNSTILE_SECRET_KEY: 'private-test-key',
    FORMS_FROM: 'website@galexia.agency',
    FORMS_TO: 'info@galexia.agency',
    FORMS_EMAIL: { send },
    ASSETS: { fetch: async () => new Response('Not found', { status: 404 }) }
  }

  return { send, verify, env, action: (value: string) => { currentAction = value } }
}

// The stubbed EmailMessage keeps its constructor arguments: from, to and the raw message.
const sent = (message: unknown) => {
  assert.ok(typeof message === 'object' && message !== null && 'args' in message && Array.isArray(message.args))

  return message.args.map(String)
}

const decode = (raw = '') => {
  const [headers = '', body = ''] = raw.split('\r\n\r\n')

  return { headers, body: new TextDecoder().decode(Uint8Array.from(atob(body.replace(/\r\n/g, '')), (c) => c.charCodeAt(0))) }
}

test('a verified form emails every submitted field with a Reply-To', async (t) => {
  const { env, send, verify } = setup(t)
  const response = await worker.fetch(request(), env)
  assert.equal(response.status, 200)
  assert.deepEqual(await response.json(), { ok: true })
  assert.equal(response.headers.get('Cache-Control'), 'no-store')
  assert.deepEqual(JSON.parse(String(verify.mock.calls[0]?.arguments[1]?.body)), { secret: 'private-test-key', response: 'valid-token' })
  const [from, to, raw] = sent(send.mock.calls[0]?.arguments[0])
  assert.equal(from, 'website@galexia.agency')
  assert.equal(to, 'info@galexia.agency')
  const { headers, body } = decode(raw)
  assert.match(headers, /Reply-To: visitor@example.com/)
  assert.match(body, /Contact form from Test Visitor/)
  assert.match(body, /How did you hear about us:\nOther/)
  assert.doesNotMatch(body, /cf-turnstile-response|valid-token/)
})

test('every form posts to its own route and checks its own Turnstile action', async (t) => {
  const { env, send, action } = setup(t)
  for (const name of Object.keys(forms)) {
    action(name)
    const fields: Fields = name === 'brand-identity' ? { yourCompanyName: 'Acme', whatIsYourWhy: 'Because' } : { name: 'Visitor', email: 'visitor@example.com', website: 'https://example.com' }
    assert.equal((await worker.fetch(request(name, fields), env)).status, 200, name)
  }
  assert.equal(send.mock.callCount(), Object.keys(forms).length)
  action('contact')
  assert.equal((await worker.fetch(request('seo', { email: 'visitor@example.com', website: 'x' }), env)).status, 403, 'a contact token cannot submit the SEO form')
})

test('the brand identity form needs no email address and has no Reply-To', async (t) => {
  const { env, send, action } = setup(t)
  action('brand-identity')
  assert.equal((await worker.fetch(request('brand-identity', { yourCompanyName: 'Acme', whatIsYourWhy: 'Because' }), env)).status, 200)
  assert.doesNotMatch(decode(sent(send.mock.calls[0]?.arguments[0])[2]).headers, /Reply-To/)
  assert.equal((await worker.fetch(request('brand-identity', { yourCompanyName: 'Acme', email: 'not-an-email' }), env)).status, 400)
})

for (const token of [null, '', '   ', 'x'.repeat(2049)]) {
  test(`missing or invalid token is blocked (${token === null ? 'missing' : token.length})`, async (t) => {
    const { env, send, verify } = setup(t)
    assert.equal((await worker.fetch(request('contact', contactFields, { token }), env)).status, 400)
    assert.equal(send.mock.callCount(), 0)
    assert.equal(verify.mock.callCount(), 0)
  })
}

for (const result of [
  { success: false, 'error-codes': ['invalid-input-response'] },
  { success: true, hostname: 'galexia.agency', action: 'login' },
  { success: true, hostname: 'attacker.example', action: 'contact' }
]) {
  test(`rejected verification does not send (${JSON.stringify(result)})`, async (t) => {
    const { env, send } = setup(t, result)
    assert.equal((await worker.fetch(request(), env)).status, 403)
    assert.equal(send.mock.callCount(), 0)
  })
}

test('bad requests are refused before verification', async (t) => {
  const { env, send, verify } = setup(t)
  assert.equal((await worker.fetch(request('unknown'), env)).status, 404)
  assert.equal((await worker.fetch(request('contact', { ...contactFields, email: 'nope' }), env)).status, 400)
  assert.equal((await worker.fetch(request('contact', { ...contactFields, 'bad field!': 'x' }), env)).status, 400)
  assert.equal((await worker.fetch(request('contact', contactFields, { headers: { Origin: 'https://attacker.example' } }), env)).status, 403)
  assert.equal((await worker.fetch(new Request('https://galexia.agency/api/forms/contact'), env)).status, 405)
  assert.equal((await worker.fetch(new Request('https://galexia.agency/api/other'), env)).status, 404)
  assert.equal(send.mock.callCount(), 0)
  assert.equal(verify.mock.callCount(), 0)
})

test('an unconfigured secret or a failed email reports an error', async (t) => {
  const { env, send } = setup(t)
  assert.equal((await worker.fetch(request(), { ...env, TURNSTILE_SECRET_KEY: '' })).status, 503)
  send.mock.mockImplementation(async () => { throw new Error('rejected') })
  t.mock.method(console, 'error', () => {})
  assert.equal((await worker.fetch(request(), env)).status, 502)
})

test('other requests are served from the static assets', async (t) => {
  const { env } = setup(t)
  env.ASSETS = { fetch: async () => new Response('page') }
  assert.equal(await (await worker.fetch(new Request('https://galexia.agency/blog/'), env)).text(), 'page')
})
