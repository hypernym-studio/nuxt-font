export interface FontOptions {
  src: string
  family: string
  preload?: boolean
  fallback?: string[]
  weight?: string
  style?: string
  display?: 'auto' | 'block' | 'swap' | 'fallback' | 'optional'
  class?: string
  variable?: string
  unicode?: string[]
}

export interface ModuleOptions {
  autoImport?: boolean
}

declare module '@nuxt/schema' {
  interface NuxtConfig {
    /**
     * Nuxt Fonty
     *
     * A tiny and flexible font loader for Nuxt.
     *
     * @see [source](https://github.com/ivodolenc/nuxt-fonty)
     */
    fonty?: ModuleOptions
  }
  interface NuxtOptions {
    /**
     * Nuxt Fonty
     *
     * A tiny and flexible font loader for Nuxt.
     *
     * @see [source](https://github.com/ivodolenc/nuxt-fonty)
     */
    fonty?: ModuleOptions
  }
}
