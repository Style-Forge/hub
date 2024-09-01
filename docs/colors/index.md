---
title: Style-Forge.Colors
titleTemplate: false
description: "Customizable color palettes for consistent, visually appealing web designs."

head:
  - - meta
    - name: keywords
      content: style-forge, colors, color palettes, theme, CSS-in-JS, color schemes, design, UI, web development, frontend, JavaScript, react, custom colors, color management, web design
  - - meta
    - property: og:title
      content: Style-Forge.Colors
  - - meta
    - property: og:description
      content: "Customizable color palettes for consistent, visually appealing web designs."
  - - meta
    - property: og:url
      content: https://style-forge.dev/colors/
  - - meta
    - name: twitter:title
      content: Style-Forge.Colors
  - - meta
    - name: twitter:description
      content: "Customizable color palettes for consistent, visually appealing web designs."
---

# Style-Forge.Colors

<div class="shields">

![npm](https://img.shields.io/npm/v/style-forge.colors)
![license](https://img.shields.io/npm/l/style-forge.colors)
![npm](https://img.shields.io/npm/dm/style-forge.colors)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/e659ed33f24740a6942f68b7f87e254f)](https://app.codacy.com/gh/Style-Forge/colors/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)
![build](https://github.com/Style-Forge/colors/actions/workflows/publish.yml/badge.svg)

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
@import 'style-forge.colors';
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

## Choose your color
You can select a single color with [10 or 20] lightness gradient

<div class="d:f:y">
  <div class="pos:s t z:1">
    <label class="sf-switch">
      <span>{{ 'All ' + colors.length }}</span> <input v-model="activated" type="checkbox" /> <span>{{ 'Web ' + webColors.length }} colors</span>
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
    <div class="d:f:x even">
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
@import 'style-forge.colors/src/colors/10/{{ selected }}.css';
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
    <div class="d:f:x even">
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
@import 'style-forge.colors/src/colors/20/{{ selected }}.css';
</highlight>
== JS
<highlight lang="js">
import 'style-forge.colors/src/colors/20/{{ selected }}.css';
</highlight>
:::

  </div>
</div>

## Change dark color

You can change the color in the dark theme to another color by using classes that are applied only in the dark theme. 
This allows you to set different colors for light and dark themes.

<div class="d:f:y">
  <label class="sf-switch">
    <input :checked="isDark" type="checkbox" @click="hasDark" /> <span>Theme: {{ isDark ? 'dark' : 'light' }}</span>
  </label>
  
  <div class="d:f">
    <button class="VPSwitch VPSwitchAppearance" type="button" role="switch" title="Switch to light theme" aria-checked="true">
      <span class="check">
        <span class="icon">
          <span class="vpi-sun sun"></span>
          <span class="vpi-moon moon"></span>
        </span>
      </span>
    </button>
  </div>

  <div class="example d:f even">
    <div :class="['sf-c-blue:90', 'ta:c', 'y:c:c']">original</div>
    <div :class="['sf-c-red:20:dark', 'sf-c-blue:90', 'ta:c', 'y:c:c']">red:20:dark</div>
  </div>
</div>

```html
<div class="sf-c-blue:90 sf-c-red:20:dark">example</div>
```

#### Example:

<table>
<thead>
<tr><th>1</th><th>2</th><th>3</th><th>addon</th></tr>
</thead>
<tbody>
<tr><td><code>sf-c-</code></td><td><code>COLOR_NAME</code></td><td><code>LIGHTNESS</code></td><td><code>dark</code></td></tr>
</tbody>
</table>

<code>sf-c-COLOR_NAME:LIGHTNESS:dark</code>

In this example:

*	The first `div` with the class `sf-c-blue:90` displays the original color used in both light and dark themes.
*	The second `div` uses two classes: `sf-c-red:20:dark` and `sf-c-blue:90`. This means that in the light theme, the 
   color from `sf-c-blue:90` will be applied, and in the dark theme, the color will change to `sf-c-red:20`.

::: info Description
* Class sf-c-blue:90 sets the color that will be applied to both light and dark themes.
* Class sf-c-red:20:dark overrides the sf-c-blue:90 color and sets a different color only in the dark theme.
:::

This way, you can set different colors for light and dark themes, with the dark theme color overriding the default when necessary.

## Tree

```plaintext
style-forge.colors/
├── src/
│   ├── colors
│   │   ├── 10
│   │   │   ├── aliceblue.css
│   │   │   ├── ...
│   │   │   └── yellowgreen.css
│   │   └── 20
│   │       ├── aliceblue.css
│   │       ├── ...
│   │       └── yellowgreen.css
│   └── web.css
└── colors.css - It is dafault (web.css)
```

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

import 'style-forge.form/src/var.css';

import 'style-forge.form/src/switch.css';

import './20.css';

let observer;
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

const isDark = ref(false);

const setDark = () => isDark.value = document.documentElement.classList.contains('dark');

if (typeof MutationObserver !== 'undefined') {
  observer = new MutationObserver(setDark);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
}

onMounted(setDark);
if (observer) {
  onBeforeUnmount(() => observer.disconnect());
}

const hasDark = () => {
  localStorage['vitepress-theme-appearance'] = !isDark.value ? 'auto' : 'light';
  document.documentElement.classList.toggle('dark');
};
const onClick = color => selected.value = color;
const step = (x, i = 9) => x * 100 / (i + 1);
</script>

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
