export interface FontOptions {
  /**
   * Specifies path to the font file.
   *
   * Fonts must be placed within a `public/` directory.
   *
   * @example
   *
   * ```ts
   * {
   *   src: '/fonts/AspektaVF.woff2'
   * }
   * ```
   */
  src: string
  /**
   * Specifies the font family name.
   *
   * @example
   *
   * ```ts
   * {
   *   family: 'Aspekta Variable'
   * }
   * ```
   */
  family: string
  /**
   * Specifies the `preload` links.
   *
   * @default true
   */
  preload?: boolean
  /**
   * Specifies the font family fallback.
   *
   * @example
   *
   * ```ts
   * {
   *   fallback: 'sans-serif'
   * }
   * ```
   *
   * Example above will generate:
   *
   * ```css
   * .font-aspekta { font-family: "Aspekta Variable", sans-serif; }
   * ```
   *
   * @default ['sans-serif']
   */
  fallback?: string[]
  /**
   * Specifies the font weight.
   *
   * @example
   *
   * ```ts
   * {
   *   // variable weight range
   *   weight: '100 900'
   * }
   * ```
   *
   * @example
   *
   * ```ts
   * {
   *   // static weight
   *   weight: '300'
   * }
   * ```
   *
   * @default '400'
   */
  weight?: string
  /**
   * Specifies the font style.
   *
   * @example
   *
   * ```ts
   * {
   *   style: 'italic'
   * }
   * ```
   *
   * @default 'normal'
   */
  style?: string
  /**
   * Specifies how a font face is displayed.
   *
   * @default 'optional'
   */
  display?: 'auto' | 'block' | 'swap' | 'fallback' | 'optional'
  /**
   * Specifies the global css `class` for the current source.
   *
   * @example
   *
   * ```ts
   * {
   *   class: 'font-aspekta'
   * }
   * ```
   *
   * Example above will generate:
   *
   * ```css
   * .font-aspekta { font-family: "Aspekta Variable", sans-serif; }
   * ```
   *
   * So it can be used in templates:
   *
   * ```html
   * <h1 class="font-aspekta">Font Loader</h1>
   * ```
   *
   * @default undefined
   */
  class?: string
  /**
   * Specifies the global css `variable` for the current source.
   *
   * @example
   *
   * ```ts
   * {
   *   variable: 'font-aspekta'
   * }
   * ```
   *
   * Example above will generate:
   *
   * ```css
   * :root { --font-aspekta: "Aspekta Variable", sans-serif; }
   * ```
   *
   * So it can be used in templates:
   *
   * ```css
   * h1 {
   *   font-family: var(--font-aspekta);
   * }
   * ```
   *
   * @default undefined
   */
  variable?: string
  /**
   * Specifies a specific range of characters to be used from the font.
   *
   * @example
   *
   * ```ts
   * {
   *   preload: false,
   *   display: 'swap',
   *   unicode: ['U+26']
   * }
   * ```
   *
   * Example above will generate:
   *
   * ```css
   * font-face { font-display: swap; unicode-range: U+26; }
   * ```
   *
   * @default undefined
   */
  unicode?: string[]
}

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
export declare const useFont: (options: FontOptions[]) => any
