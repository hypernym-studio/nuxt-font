import { defineNuxtModule, createResolver, addImports } from '@nuxt/kit'
import { name, version, configKey, compatibility } from './meta.js'
import type { ModuleOptions } from './types/module.js'

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey,
    compatibility,
  },

  defaults: {
    autoImport: true,
  },

  setup(options, nuxt) {
    const { autoImport } = options

    const { resolve } = createResolver(import.meta.url)
    nuxt.options.build.transpile.push(resolve('./runtime'))

    const composables = resolve('./runtime/composables')
    nuxt.options.alias[`#${configKey}`] = composables

    if (autoImport) addImports([{ name: 'useFont', from: composables }])
  },
})
