import { defineNuxtModule, createResolver, addImports } from '@nuxt/kit'
import { name, version, configKey } from '../package.json'
import type { ModuleOptions } from './types'

export * from './types'

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey,
    compatibility: {
      nuxt: '>=3.0.0'
    }
  },

  defaults: {
    autoImport: true
  },

  setup(options, nuxt) {
    const { autoImport } = options

    const { resolve } = createResolver(import.meta.url)
    nuxt.options.build.transpile.push(resolve('./runtime'))

    const composables = resolve('./runtime/composables')
    nuxt.options.alias['#font'] = composables

    if (autoImport) addImports([{ name: 'useFont', from: composables }])
  }
})
