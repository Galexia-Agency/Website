// Third-party scripts the site loads itself: Calendly's popup widget (in the page head) and Turnstile (turnstile-widget.vue).

export interface TurnstileRenderOptions {
  sitekey: string
  action: string
  size: 'normal' | 'compact' | 'flexible'
  callback: (token: string) => void
  'expired-callback': () => void
  'timeout-callback': () => void
  'error-callback': () => void
}

export interface Turnstile {
  // The widget's id, or undefined when it could not render
  render (container: HTMLElement, options: TurnstileRenderOptions): string | undefined
  reset (widgetId: string): void
  remove (widgetId: string): void
}

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/naming-convention -- the global Calendly's script defines
    Calendly?: { initPopupWidget (options: { url: string }): void }
    turnstile?: Turnstile
  }
}
