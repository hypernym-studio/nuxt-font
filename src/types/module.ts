import type { NuxtModule } from '@nuxt/schema'

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

declare const module: NuxtModule<ModuleOptions>

export { module as default }
