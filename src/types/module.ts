/**
 * Module Options
 *
 * @since 1.0.0
 */
export interface ModuleOptions {
  /**
   * Specifies the built-in `auto-import` feature.
   *
   * If enabled, font composables are available globally so there is no need for manual import.
   *
   * @default true
   *
   * @since 1.0.0
   */
  autoImport?: boolean
}

declare module '@nuxt/schema' {
  interface NuxtConfig {
    /**
     * Nuxt Font Module
     *
     * Auto-optimized font loader for Nuxt.
     *
     * @see [Repository](https://github.com/hypernym-studio/nuxt-font)
     */
    font?: ModuleOptions
  }
  interface NuxtOptions {
    /**
     * Nuxt Font Module
     *
     * Auto-optimized font loader for Nuxt.
     *
     * @see [Repository](https://github.com/hypernym-studio/nuxt-font)
     */
    font?: ModuleOptions
  }
}
