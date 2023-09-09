import { defineConfig } from 'rolli'
import pkg from './package.json' assert { type: 'json' }

export default defineConfig({
  tsconfig: 'playground/.nuxt/tsconfig.json',
  exports: false,
  bin: false,
  entries: [
    // Module Core
    {
      input: './src/module.ts',
      output: './dist/module.mjs',
      externals: [/@nuxt/],
      replace: {
        preventAssignment: true,
        __name__: pkg.name,
        __version__: pkg.version,
      },
    },
    {
      input: './src/types/module.ts',
      output: './dist/module.d.ts',
    },
    // Runtime Composables
    {
      input: './src/runtime/composables/index.ts',
      output: './dist/runtime/composables/index.mjs',
      externals: ['#imports'],
    },
    {
      input: './src/types/runtime/composables/index.ts',
      output: './dist/runtime/composables/index.d.ts',
    },
  ],
})