/* eslint-disable */
const zDefault = { depth: '1rem', direction: 'both', event: 'none', eventRotation: '30deg', eventDirection: 'default', fade: !1, layers: 10, perspective: '500px', z: !0 }
function zDraw (e, t) {
  if ((t.zEngaged || zDefault.zEngaged) !== 'false') {
    const n = t.depth || zDefault.depth
    const r = n.match(/[a-z]+/)[0]
    const a = parseFloat(n.replace(r, ''))
    const s = t.direction || zDefault.direction
    const o = t.event || zDefault.event
    const l = t.eventRotation || zDefault.eventRotation
    const d = l.match(/[a-z]+/)[0]
    const c = parseFloat(l.replace(d, ''))
    const p = t.eventDirection || zDefault.eventDirection
    const f = t.fade || zDefault.fade
    const u = t.layers || zDefault.layers
    const v = t.perspective || zDefault.perspective
    let y = t.transform || zDefault.transform
    const w = e.innerHTML;
    (e.innerHTML = ''), (e.style.display = 'inline-block'), (e.style.position = 'relative'), (e.style.webkitPerspective = v), (e.style.perspective = v)
    const z = document.createElement('span')
    z.setAttribute('class', 'z-text'), (z.style.display = 'inline-block'), (z.style.webkitTransformStyle = 'preserve-3d'), (z.style.transformStyle = 'preserve-3d')
    const h = document.createElement('span')
    let i
    for (h.setAttribute('class', 'z-layers'), h.style.display = 'inline-block', h.style.webkitTransformStyle = 'preserve-3d', h.style.transformStyle = 'preserve-3d', z.append(h), i = 0; i < u; i++) {
      const e = i / u
      const m = document.createElement('span')
      let b
      if ((m.setAttribute('class', 'z-layer'), (m.innerHTML = w), (m.style.display = 'inline-block'), s === 'backwards')) {
        b = -e * a
      }
      if (s === 'both') {
        b = -e * a + a / 2
      }
      if (s === 'forwards') {
        b = -e * a + a
      }
      y = 'translateZ(' + b + r + ')';
      (m.style.webkitTransform = y),
      (m.style.transform = y),
      i >= 1 &&
        ((m.style.position = 'absolute'),
        (m.style.top = 0),
        (m.style.left = 0),
        m.setAttribute('aria-hidden', 'true'),
        (m.style.pointerEvents = 'none'),
        (m.style.mozUserSelect = 'none'),
        (m.style.msUserSelect = 'none'),
        (m.style.webkitUserSelect = 'none'),
        (m.style.userSelect = 'none'),
        (!0 !== f && f !== 'true') || (m.style.opacity = (1 - e) / 2)),
      h.append(m)
    }
    function g (e, t) {
      if (p == 'reverse') {
        var n = -1
      } else {
        n = 1
      }
      const r = e * c * n
      const i = -t * c * n
      const a = (Math.min(Math.max(r, -1), 1), Math.min(Math.max(i, -1), 1), 'rotateX(' + i + d + ') rotateY(' + r + d + ')');
      (h.style.webkitTransform = a), (h.style.transform = a)
    }
    if (
      (e.append(z),
      o === 'pointer' &&
      (window.addEventListener(
        'mousemove',
        (e) => {
          g(2 * (e.clientX / window.innerWidth - 0.5), 2 * (e.clientY / window.innerHeight - 0.5))
        },
        !1
      ),
      window.addEventListener(
        'touchmove',
        (e) => {
          g(2 * (e.touches[0].clientX / window.innerWidth - 0.5), 2 * (e.touches[0].clientY / window.innerHeight - 0.5))
        },
        !1
      )),
      o == 'scroll')
    ) {
      scroll(),
      window.addEventListener(
        'scroll',
        function () {
          const t = e.getBoundingClientRect()
          const n = t.left + t.width / 2 - window.innerWidth / 2
          const r = t.top + t.height / 2 - window.innerHeight / 2
          g((n / window.innerWidth) * -2, (r / window.innerHeight) * -2)
        },
        !1
      )
    }
    if (o == 'scrollY') {
      scrollY(),
      window.addEventListener(
        'scroll',
        function () {
          const t = e.getBoundingClientRect()
          g(0, ((t.top + t.height / 2 - window.innerHeight / 2) / window.innerHeight) * -2)
        },
        !1
      )
    }
    if (o == 'scrollX') {
      scrollX(),
      window.addEventListener(
        'scroll',
        function () {
          const t = e.getBoundingClientRect()
          g(((t.left + t.width / 2 - window.innerWidth / 2) / window.innerWidth) * -2, 0)
        },
        !1
      )
    }
  }
}
export default ({ app }, inject) => {
  if (CSS.supports('-moz-transform-style', 'preserve-3d') || CSS.supports('-ms-transform-style', 'preserve-3d') || CSS.supports('-webkit-transform-style', 'preserve-3d') || CSS.supports('transform-style', 'preserve-3d')) {
    inject('Ztextify', (e, t) => document.querySelectorAll(e).forEach((e) => { zDraw(e, t) }))
  }
}
