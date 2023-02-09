<h1 align="center">Nuxt Fonty</h1>

<p align="center">A tiny and flexible font loader for Nuxt.</p>

## Features

- Includes automatic optimization
- Provides a _composable_ font strategy
- Designed for Nuxt 3+
- TypeScript friendly
- Super easy to use
- No dependencies

## Size Info

<h6>Zero-dependencies — Tree-shakeable</h6>

<table>
  <thead>
    <tr>
      <th align="left" width="500px">Core</th>
      <th align="left" width="500px">Size</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>module</td>
      <td><code>~450 B</code> minified</td>
    </tr>
  </tbody>
</table>

<table>
  <thead>
    <tr>
      <th align="left" width="500px">Composable</th>
      <th align="left" width="500px">Size</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>useFont</td>
      <td><code>~840 B</code> minified</td>
    </tr>
  </tbody>
</table>

## Installation

1. Install `nuxt-fonty` to your project

```sh
npm i -D nuxt-fonty
```

2. Enable the module in the main config file

```js
// nuxt.config.ts

{
  modules: ['nuxt-fonty']
}
```

That's it! Start developing your app!

## Optimization

**Fonty** automatically optimizes all your font sources and improves page loading speed so you don't have to worry about it at all.

## Strategy

To simplify, **Nuxt Fonty** is actually a lighter version of [Nuxt Font Loader](https://github.com/ivodolenc/nuxt-font-loader).

It's designed with the same API, but only supports _local_ font loading. This results in simplicity and a much smaller final size which is awesome. Another difference is that there are no global settings.

Fonts are loaded via a custom function from the same domain as your deployment. Using this _font composable_, you can easily load fonts on different pages or layouts with _performance_, _flexibility_ and _privacy_ in mind.

Also, try to use _variable_ fonts whenever you can to take advantage of their customization and fast loading speed.

## Usage

Place the previously downloaded fonts in the `public/fonts/` directory and simply import the function where you need it.

```html
<!-- app.vue, layout.vue, page.vue ... -->

<template>
  <h1 class="font-aspekta">Nuxt Font Loader</h1>
</template>

<script setup lang="ts">
  import { useFont } from '#fonty'

  useFont([
    {
      src: '/fonts/AspektaVF.woff2',
      family: 'Aspekta Variable',
      weight: '100 900',
      class: 'font-aspekta'
    }
  ])
</script>
```

## useFont

The function accepts an array of objects that specifies local font sources.

Each object is treated as a separate block of rules. See [types](./src/types/index.ts).

### preload

- Type: `boolean`
- Default: `true`

Specifies the _preload_ links.

```js
{
  preload: true
}
```

### src

- Type: `string`
- Required: `true`

Specifies path to the font file.

```js
{
  src: '/path/to/font.woff2'
}
```

### family

- Type: `string`
- Required: `true`

Defines the font family name.

```js
{
  family: 'Family Name'
}
```

### fallback

- Type: `string[]`
- Default: `undefined`

Defines the font family fallback.

```js
{
  fallback: ['sans-serif'] // or ['"Arial"', 'Helvetica', 'sans-serif']
}
```

### weight

- Type: `string`
- Default: `400`

Defines the font weight.

```js
{
  weight: '400' // or '100 900' for variable font
}
```

### display

- Type: `string`
- Default: `optional`

Specifies how a font face is displayed.

```js
{
  display: 'optional'
}
```

### style

- Type: `string`
- Default: `normal`

Defines the font style.

```js
{
  style: 'normal'
}
```

### class

- Type: `string`
- Default: `undefined`

Defines the global css _class_ for the current source.

```js
{
  class: 'my-font'
}
```

Example above will generate global css class:

```css
.my-font {
  font-family: 'family-name';
}
```

So it can be used in templates:

```html
<h1 class="my-font">Fonty</h1>
```

### variable

- Type: `string`
- Default: `undefined`

Defines the global css _variable_ for the current source.

```js
{
  variable: 'my-font'
}
```

Example above will generate global css variable:

```css
:root {
  --my-font: 'family-name';
}
```

So it can be used in templates:

```css
h1 {
  font-family: var(--my-font);
}
```

### unicode

- Type: `string[]`
- Default: `undefined`

Defines a specific range of characters to be used from the font.

```js
{
  preload: false, // disables the preload link
  display: 'swap', // or 'fallback', 'auto' ...
  unicode: ['U+26']
}
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
- Default: `false`

Manages the built-in `auto-import` feature.

If enabled, you can use _font composables_ across your application without explicitly importing them.

```js
// nuxt.config.ts

{
  fonty: {
    autoImport: true
  }
}
```

## Support

This is a free and open source project available to everyone.

If you like it, _star the repo_ to show your support.

## License

Developed in Croatia 🇭🇷

[MIT License](LICENSE)

© Ivo Dolenc
