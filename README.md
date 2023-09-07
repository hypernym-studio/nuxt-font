# Nuxt Font Module

Auto-optimized font loader for Nuxt.

## Features

- Includes automatic optimization
- Provides a composable font strategy
- Follows modern methods and practices
- TypeScript friendly
- Super easy to use
- No dependencies
- Ultra lightweight

## Quick Start

1. Install `@hypernym/nuxt-font` to your project

```sh
npm i -D @hypernym/nuxt-font
```

2. Enable the module in the main config file

```ts
// nuxt.config.ts

{
  modules: ['@hypernym/nuxt-font']
}
```

That's it!

## Optimization

The module automatically optimizes all your font sources and improves page loading speed so you don't have to worry about it at all.

It is designed with performance, flexibility and privacy in mind.

## Module

Fonts are loaded via custom `useFont` composable from the same domain as your deployment.

Using this strategy, you can easily load fonts on different components, pages or layouts.

Since it only supports local fonts, the module final size is super tiny.

## Local Fonts

The term **local fonts** refers to fonts that will be hosted with your site as well as other assets, so you have full control over them without involvement of third-party services. This is essential for speed and privacy.

Also, most fonts used on the web today are released under the OFL-1.1 license or some similar open-source code, which includes their download and free use.

For external font loading, check out <a href="https://github.com/ivodolenc/nuxt-font-loader">nuxt-font-loader</a>.

## Usage

Place the previously downloaded fonts in the `public/` directory.

After that, use the composable exactly where you need it.

```html
<!-- layout.vue | page.vue | component.vue -->

<template>
  <h1 class="font-aspekta">Nuxt Font Module</h1>
</template>

<script setup lang="ts">
  useFont([
    {
      src: '/fonts/AspektaVF.woff2',
      family: 'Aspekta Variable',
      weight: '100 900',
      class: 'font-aspekta',
    },
  ])
</script>
```

## Options

Nuxt Font Module is optimized and supports Nuxt 3 with TypeScript. It also improves the development experience with detailed descriptions, examples and code auto-completion.

```ts
// nuxt.config.ts

{
  modules: ['@hypernym/nuxt-font'],

  font: {
    // Module options
  }
}
```

## useFont

Loads fonts from the same domain as your deployment.

The function accepts an array of objects that specifies local font sources.

Each object is treated as a separate block of rules.

Also, the font composable is available globally after module activation, so there is no need for manual import.

```ts
// Explicit import (optional)

import { useFont } from '#font'
```

### src

- Type: `string`
- Required: `true`

Specifies path to the font file.

Fonts must be placed within a `public/` directory.

```ts
useFont([
  {
    src: '/fonts/AspektaVF.woff2',
  },
])
```

### family

- Type: `string`
- Required: `true`

Specifies the font family name.

```ts
useFont([
  {
    family: 'Aspekta Variable',
  },
])
```

### preload

- Type: `boolean`
- Default: `true`

Specifies the `preload` links.

```ts
useFont([
  {
    preload: true,
  },
])
```

### fallback

- Type: `string[]`
- Default: `['sans-serif']`

Specifies the font family fallback.

```ts
useFont([
  {
    fallback: ['sans-serif'],
  },
])
```

Example above will generate:

```css
.font-aspekta {
  font-family: 'Aspekta Variable', sans-serif;
}
```

### weight

- Type: `string`
- Default: `'400'`

Specifies the font weight.

```ts
useFont([
  {
    // variable weight range
    weight: '100 900',
  },
])
```

### style

- Type: `string`
- Default: `'normal'`

Specifies the font style.

```ts
useFont([
  {
    style: 'italic',
  },
])
```

### display

- Type: `string`
- Default: `'optional'`

Specifies how a font face is displayed.

```ts
useFont([
  {
    display: 'swap',
  },
])
```

### class

- Type: `string`
- Default: `undefined`

Specifies the global css `class` for the current source.

```ts
useFont([
  {
    class: 'font-aspekta',
  },
])
```

Example above will generate global css class:

```css
.font-aspekta {
  font-family: 'Aspekta Variable', sans-serif;
}
```

So it can be used in templates:

```html
<h1 class="font-aspekta">Font Loader</h1>
```

### variable

- Type: `string`
- Default: `undefined`

Specifies the global css `variable` for the current source.

```ts
useFont([
  {
    variable: 'font-aspekta',
  },
])
```

Example above will generate global css variable:

```css
:root {
  --font-aspekta: 'Aspekta Variable', sans-serif;
}
```

So it can be used in templates:

```css
h1 {
  font-family: var(--font-aspekta);
}
```

### unicode

- Type: `string[]`
- Default: `undefined`

Specifies the range of characters to be used from the font.

```ts
useFont([
  {
    preload: false,
    display: 'swap',
    unicode: ['U+26'],
  },
])
```

Example above will generate:

```css
@font-face {
  font-display: swap;
  unicode-range: U+26;
}
```

## autoImport

- Type: `boolean`
- Default: `true`

Specifies the built-in `auto-import` feature.

If enabled, font composables are available globally so there is no need for manual import.

```ts
// nuxt.config.ts

{
  font: {
    autoImport: true
  }
}
```

## Community

Feel free to use the official [discussions](https://github.com/hypernym-studio/nuxt-font/discussions) for any additional questions.

## License

Developed in 🇭🇷 Croatia

Released under the [MIT](LICENSE.txt) license.

© Hypernym Studio
