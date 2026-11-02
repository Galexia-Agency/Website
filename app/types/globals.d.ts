// Third-party scripts the site loads itself: Calendly's popup widget, in the page head. @joebailey26/turnstile-forms declares window.turnstile.

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/naming-convention -- the global Calendly's script defines
    Calendly?: { initPopupWidget (options: { url: string }): void }
  }
}

export {}
