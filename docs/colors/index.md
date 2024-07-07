---
title: Style-Forge.Colors
titleTemplate: false
description: "Style-Forge.Colors: customizable color palettes for consistent, visually appealing web designs."

head:
  - - meta
    - name: keywords
      content: style-forge, colors, color palettes, theme, CSS-in-JS, color schemes, design, UI, web development, frontend, JavaScript, react, custom colors, color management, web design
  - - meta
    - property: og:title
      content: Style-Forge.Colors
  - - meta
    - property: og:description
      content: "Style-Forge.Colors: customizable color palettes for consistent, visually appealing web designs."
  - - meta
    - property: og:url
      content: https://style-forge.dev/colors/
  - - meta
    - name: twitter:title
      content: Style-Forge.Colors
  - - meta
    - name: twitter:description
      content: "Style-Forge.Colors: customizable color palettes for consistent, visually appealing web designs."
---

<script setup>
import { ref } from 'vue';

const activated = ref(false);
const selected = ref('aliceblue');

const webColors = [
  'aqua', 'black', 'blue', 'fuchsia', 'gray', 'green', 'lime', 'maroon', 'navy',
  'olive', 'purple', 'red', 'silver', 'teal', 'white', 'yellow'
];

const colors = [
  'aliceblue', 'antiquewhite', 'aqua', 'aquamarine', 'azure',
  'beige', 'bisque', 'black', 'blanchedalmond', 'blue',
  'blueviolet', 'brown', 'burlywood', 'cadetblue', 'chartreuse',
  'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson',
  'cyan', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray',
  'darkgrey', 'darkgreen', 'darkkhaki', 'darkmagenta', 'darkolivegreen',
  'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen',
  'darkslateblue', 'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet',
  'deeppink', 'deepskyblue', 'dimgray', 'dimgrey', 'dodgerblue',
  'firebrick', 'floralwhite', 'forestgreen', 'fuchsia', 'gainsboro',
  'ghostwhite', 'gold', 'goldenrod', 'gray', 'grey',
  'green', 'greenyellow', 'honeydew', 'hotpink', 'indianred',
  'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush',
  'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan',
  'lightgoldenrodyellow', 'lightgray', 'lightgrey', 'lightgreen', 'lightpink',
  'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightslategray', 'lightslategrey',
  'lightsteelblue', 'lightyellow', 'lime', 'limegreen', 'linen',
  'magenta', 'maroon', 'mediumaquamarine', 'mediumblue', 'mediumorchid',
  'mediumpurple', 'mediumseagreen', 'mediumslateblue', 'mediumspringgreen', 'mediumturquoise',
  'mediumvioletred', 'midnightblue', 'mintcream', 'mistyrose', 'moccasin',
  'navajowhite', 'navy', 'oldlace', 'olive', 'olivedrab',
  'orange', 'orangered', 'orchid', 'palegoldenrod', 'palegreen',
  'paleturquoise', 'palevioletred', 'papayawhip', 'peachpuff', 'peru',
  'pink', 'plum', 'powderblue', 'purple', 'rebeccapurple',
  'red', 'rosybrown', 'royalblue', 'saddlebrown', 'salmon',
  'sandybrown', 'seagreen', 'seashell', 'sienna', 'silver',
  'skyblue', 'slateblue', 'slategray', 'slategrey', 'snow',
  'springgreen', 'steelblue', 'tan', 'teal', 'thistle',
  'tomato', 'turquoise', 'violet', 'wheat', 'white',
  'whitesmoke', 'yellow', 'yellowgreen'
];

const onClick = color => selected.value = color;
const step = (x, i = 9) => x * 100 / (i + 1);
</script>

# Style-Forge.Colors

<div class="shields">

![npm](https://img.shields.io/npm/v/style-forge.colors)
![license](https://img.shields.io/npm/l/style-forge.colors)
![npm](https://img.shields.io/npm/dm/style-forge.colors)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/36308e559c9a4815bdcaf747e7804807)](https://app.codacy.com/gh/Sarmaged/style-forge.colors/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)
![build](https://github.com/Sarmaged/style-forge.colors/actions/workflows/publish.yml/badge.svg)

</div>

`Style-Forge.Colors` package provides a comprehensive and customizable set of color palettes for your web applications. It includes predefined color schemes and the ability to create your own custom palettes, ensuring consistent and visually appealing designs across your projects.

## Installation

:::tabs
== npm
```shell
npm i style-forge.colors
```
== yarn
```shell
yarn add style-forge.colors
```
== pnpm
```shell
pnpm add style-forge.colors
```
== bun
```shell
bun add style-forge.colors
```
:::

## Usage

After installation, you can import the CSS file into your project or, if you are using Webpack or another module bundler:

### Web (16 colors) - `default`

Web - `default`
- 16 - colors
- 10 lightness gradient

<div class="colors d:f:x wrap gap:0">
  <div
    v-for="color in webColors"
    :key="color"
    :title="color"
    :class="'sf-c-' + color"
  />
</div>

:::tabs key:import
== CSS
```css
@import "style-forge.colors";
```
== JS
```js
import 'style-forge.colors';
```
:::

### All (148 colors) - `custom`

All - `custom`
- 16 - colors
- [10 or 20] lightness gradient

::: warning
**It is recommended to use the package by default.**<br />
If you decide to use another option [10 or 20] **lightness gradient**, you should choose the color and upload it separately.<br />
Example: <a href="#choose-your-color">Choose your color</a>
:::

<div class="colors d:f:x wrap gap:0">
  <div
    v-for="color in colors"
    :key="color"
    :title="color"
    :class="'sf-c-' + color"
  />
</div>

10 lightness gradient

:::tabs key:import
== CSS
```css
@import "style-forge.colors/10.css";
```
== JS
```js
import 'style-forge.colors/10.css';
```
:::


20 lightness gradient

:::tabs key:import
== CSS
```css
@import "style-forge.colors/20.css";
```
== JS
```js
import 'style-forge.colors/20.css';
```
:::

## Choose your color
You can select a single color with [10 or 20] lightness gradient

<div class="d:f:y">
  <div class="pos:s t z:1">
    <label class="sf-switch">
      <input v-model="activated" type="checkbox" /> <span>{{ activated ? 'Web ' + webColors.length : 'All ' + colors.length }} colors</span>
    </label>
    <div :class="['colors', 'select', 'hover', 'd:f:x', 'wrap', 'gap:0', { activated }]">
      <div
        v-for="color in colors"
        :key="color"
        :class="['sf-c-' + color, { web: webColors.includes(color) }]"
        :title="color"
        @click="onClick(color)"
      ></div>
    </div>
  </div>

  <div class="content-out d:f:y">
    <div>
      <div class="txt:c">CSS classes <code>10 lightness</code></div>
    </div>
    <div class="d:f:x auto">
      <div class="d:f:y">
        <div class="txt:c">background</div>
        <div>
          <div :class="['item', 'txt:c', 'sf-c-' + selected]">sf-c-{{ selected }}</div>
          <div v-for="i in 9" :class="['item', 'txt:c', 'sf-c-' + selected + ':' + step(i)]">sf-c-{{ selected }}:{{ step(i) }}</div>
        </div>
      </div>
      <div class="d:f:y">
        <div class="txt:c">text</div>
        <div>
          <div :class="['item', 'txt:c', 'sf-c-txt-' + selected]">sf-c-txt-{{ selected }}</div>
          <div v-for="i in 9" :class="['item', 'txt:c', 'sf-c-txt-' + selected + ':' + step(i)]">sf-c-txt-{{ selected }}:{{ step(i) }}</div>
        </div>
      </div>
    </div>

:::tabs key:import
== CSS
<highlight lang="css">
@import "style-forge.colors/src/colors/10/{{ selected }}.css";
</highlight>
== JS
<highlight lang="js">
import 'style-forge.colors/src/colors/10/{{ selected }}.css';
</highlight>
:::
  </div>

  <div v-if="!activated" class="content-out d:f:y">
    <div>
      <div class="txt:c">CSS classes <code>20 lightness</code></div>
    </div>
    <div class="d:f:x auto">
      <div class="d:f:y">
        <div class="txt:c">background</div>
        <div>
          <div :class="['item', 'txt:c', 'sf-c-' + selected]">sf-c-{{ selected }}</div>
          <div v-for="i in 19" :class="['item', 'txt:c', 'sf-c-' + selected + ':' + step(i, 19)]">sf-c-{{ selected }}:{{ step(i, 19) }}</div>
        </div>
      </div>
      <div class="d:f:y">
        <div class="txt:c">text</div>
        <div>
          <div :class="['item', 'txt:c', 'sf-c-txt-' + selected]">sf-c-txt-{{ selected }}</div>
          <div v-for="i in 19" :class="['item', 'txt:c', 'sf-c-txt-' + selected + ':' + step(i, 19)]">sf-c-txt-{{ selected }}:{{ step(i, 19) }}</div>
        </div>
      </div>
    </div>

:::tabs key:import
== CSS
<highlight lang="css">
@import "style-forge.colors/src/colors/20/{{ selected }}.css";
</highlight>
== JS
<highlight lang="js">
import 'style-forge.colors/src/colors/20/{{ selected }}.css';
</highlight>
:::

  </div>
</div>

<style scoped>
.colors > div {
  position:relative;

  --size: 20px;
  width: var(--size);
  height: var(--size);
}

.colors.activated > div:not(.web) {
  opacity: 0.1;
  pointer-events: none;
}

.pos\:s {
  top: 64px;
  background: var(--vp-c-bg);
  padding-top: 1em;
}
.sf-switch + .colors {
  margin-top: 1em;
}

.select:not(.activated) > div,
.select.activated > div.web {
  cursor:pointer;
}

.hover:not(.activated) > div::after,
.hover.activated > div.web::after {
  position: absolute;
  z-index: 1;

  content: '';

  background: inherit;

  box-shadow: 0 0 5px black;
}
.hover:not(.activated) > div:hover::after,
.hover.activated > div.web:hover::after {
  --offset: -5px;

  top: var(--offset);
  left: var(--offset);
  right: var(--offset);
  bottom: var(--offset);
}

.item {
  font-size: 14px;
  padding: 0.5em;
}

.content-out {
  margin-top: 1em;
}

.content-out + .content-out {
  padding-top: 1em;
  border-top: 1px solid;
}
</style>
