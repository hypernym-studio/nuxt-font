import { defineNuxtConfig } from 'nuxt/config'
import Module from '../src/module'

export default defineNuxtConfig({
  telemetry: false,
  components: false,
  imports: {
    autoImport: false
  },

  modules: [Module]
})
