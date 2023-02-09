import type { ModuleOptions } from './types'
import { defineNuxtModule, createResolver, addImports } from '@nuxt/kit'

export * from './types'

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-fonty',
    configKey: 'fonty',
    compatibility: {
      nuxt: '>=3.0.0'
    }
  },

  defaults: {
    autoImport: false
  },

  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)
    nuxt.options.build.transpile.push(resolve('./runtime'))

    const composables = resolve('./runtime/composables')
    nuxt.options.alias['#fonty'] = composables

    if (options.autoImport) addImports([{ name: 'useFont', from: composables }])
  }
})
