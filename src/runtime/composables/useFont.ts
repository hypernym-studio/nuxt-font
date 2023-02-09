import type { FontOptions } from '../../types'
import { useHead } from '#app'

/**
 * Loads fonts from the same domain as your deployment.
 *
 * @example
 *
 * ```js
 * useFont([
 *     {
 *       src: '/fonts/AspektaVF.woff2',
 *       family: 'Aspekta Variable',
 *       weight: '100 900'
 *     }
 * ])
 * ```
 *
 * @since 1.0.0
 */
export const useFont = (options: FontOptions[]) => {
  const links: object[] = []
  let fontFace = ''
  let classes = ''
  let variables = ''
  let root = ''

  for (const option of options) {
    const defaults = {
      preload: true,
      weight: 400,
      display: 'optional',
      style: 'normal',
      ...option
    }
    const { family, src, preload, class: _class, variable } = defaults
    const { fallback, weight, style, display, unicode } = defaults
    let [, format] = src.split(/\.(?=[^.]+$)/)

    if (preload) {
      if (format === 'ttf') format = 'truetype'
      else if (format === 'otf') format = 'opentype'

      if (!links.some((v: { href?: string }) => v.href === src)) {
        links.push({
          rel: 'preload',
          as: 'font',
          type: `font/${format}`,
          crossorigin: 'anonymous',
          href: src
        })
      }
    }

    const faceRules = [
      `font-family:"${family}";`,
      `font-weight:${weight};`,
      `font-style:${style};`,
      `font-display:${display};`,
      `src:url('${src}') format('${format}');`,
      unicode ? `unicode-range:${unicode};` : ''
    ].join('')

    fontFace += `@font-face{${faceRules}}`

    const fb = fallback ? `,${fallback}` : ''
    if (_class) classes += `.${_class}{font-family:"${family}"${fb};}`
    if (variable) variables += `--${variable}:"${family}"${fb};`
  }

  if (links.length) useHead({ link: links })
  if (variables) root = `:root{${variables}}`

  return useHead({ style: [{ children: `${fontFace}${classes}${root}` }] })
}
