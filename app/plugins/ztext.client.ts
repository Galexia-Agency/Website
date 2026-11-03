import { defineNuxtPlugin } from '#imports'
import { zDraw } from '~/vendor/ztext'

// zText's options, as data-z-* attributes would set them.
export interface ZtextOptions {
  depth?: string
  direction?: 'backwards' | 'both' | 'forwards'
  event?: 'none' | 'pointer' | 'scroll' | 'scrollX' | 'scrollY'
  eventRotation?: string
  eventDirection?: 'default' | 'reverse'
  fade?: boolean
  layers?: number
  perspective?: string
}

const draw: (element: HTMLElement, options: ZtextOptions) => void = zDraw

// $Ztextify(selector, options) layers the matching elements' text in 3D, where the browser supports it.
export default defineNuxtPlugin(() => {
  const supported = ['-moz-transform-style', '-ms-transform-style', '-webkit-transform-style', 'transform-style'].some((property) => CSS.supports(property, 'preserve-3d'))

  return {
    provide: {
      Ztextify: (selector: string, options: ZtextOptions) => {
        if (supported) {
          document.querySelectorAll<HTMLElement>(selector).forEach((element) => { draw(element, options) })
        }
      }
    }
  }
})
