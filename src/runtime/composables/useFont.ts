import { useHead } from '#imports'
import type { FontOptions } from '../../types'

/**
 * Loads fonts from the same domain as your deployment.
 *
 * The function accepts an array of objects that specifies local font sources.
 *
 * Each object is treated as a separate block of rules.
 *
 * Also, the font composable is available globally after module activation, so there is no need for manual import.
 *
 * @example
 *
 * ```ts
 * useFont([
 *   {
 *     src: '/fonts/AspektaVF.woff2',
 *     family: 'Aspekta Variable',
 *     weight: '100 900'
 *   }
 * ])
 * ```
 *
 * @example
 *
 * ```ts
 * // Explicit import (optional)
 * import { useFont } from '#font'
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
    const defaults: FontOptions = {
      preload: true,
      weight: '400',
      fallback: ['sans-serif'],
      display: 'optional',
      style: 'normal',
      ...option
    }
    const {
      family,
      src,
      preload,
      class: _class,
      variable,
      fallback,
      weight,
      style,
      display,
      unicode
    } = defaults
    let [, format] = src.split(/\.(?=[^.]+$)/)

    if (preload) {
      if (format === 'ttf') format = 'truetype'
      if (format === 'otf') format = 'opentype'

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

  if (variables) root = `:root{${variables}}`

  return useHead({
    link: links.length ? links : undefined,
    style: [{ children: `${fontFace}${classes}${root}` }]
  })
}
