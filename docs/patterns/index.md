---
title: Style-Forge.Patterns
titleTemplate: false
description: "Versatile CSS library with pre-defined classes for responsive, consistent user interfaces."

head:
  - - meta
    - name: keywords
      content: style-forge, helpers, CSS, HTML, utilities, styles, web development, frontend, styling, design, responsive, lightweight, performance, modular, consistent
  - - meta
    - property: og:title
      content: Style-Forge.Patterns
  - - meta
    - property: og:description
      content: "Versatile CSS library with pre-defined classes for responsive, consistent user interfaces."
  - - meta
    - property: og:url
      content: https://style-forge.dev/patterns/
  - - meta
    - name: twitter:title
      content: Style-Forge.Patterns
  - - meta
    - name: twitter:description
      content: "Versatile CSS library with pre-defined classes for responsive, consistent user interfaces."
---

# Style-Forge.Patterns

<div class="shields">

![npm](https://img.shields.io/npm/v/style-forge.patterns)
![license](https://img.shields.io/npm/l/style-forge.patterns)
![npm](https://img.shields.io/npm/dm/style-forge.patterns)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/ab57d699e51e43d686f9b0745aa60eaa)](https://app.codacy.com/gh/Style-Forge/patterns/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)
![build](https://github.com/Style-Forge/patterns/actions/workflows/publish.yml/badge.svg)

</div>

`Style-Forge.Patterns` is a versatile and efficient CSS utility library designed to simplify the creation and management of CSS patterns and utilities. It offers a comprehensive collection of pre-defined CSS classes, enabling developers to rapidly build responsive and consistent user interfaces without the need for writing repetitive styles from scratch.

## Installation

:::tabs
== npm
```shell
npm i style-forge.patterns
```
== yarn
```shell
yarn add style-forge.patterns
```
== pnpm
```shell
pnpm add style-forge.patterns
```
== bun
```shell
bun add style-forge.patterns
```
:::

## Usage

After installation, you can import the CSS file into your project or, if you are using Webpack or another module bundler:

:::tabs key:import
== CSS
```css
@import 'style-forge.patterns';
```
== JS
```js
import 'style-forge.patterns';
```
:::

## Site

<div class="pos:s t">
  <div class="d:f wrap">
    <label class="sf-switch">
      <input v-model="area.header" type="checkbox" /> <span>Header</span>
    </label>
    <label class="sf-switch">
      <input v-model="area.menu" type="checkbox" /> <span>Menu</span>
    </label>
    <label class="sf-switch">
      <input v-model="area.aside" type="checkbox" /> <span>Aside</span>
    </label>
    <label class="sf-switch">
      <input v-model="area.footer" type="checkbox" /> <span>Footer</span>
    </label>
  </div>
</div>

<br />

<div class="pExample d:f">
<div :class="['sf-pattern', 'w', classes]">
  <div v-if="area.footer" class="area-footer sf-c-lavender">Footer</div>
  <div v-if="area.header" class="area-header sf-c-antiquewhite">Header</div>
  <div v-if="area.menu" class="area-menu sf-c-lightcyan">Menu</div>
  <div v-if="area.aside" class="area-aside sf-c-mistyrose">Aside</div>

  <div class="area-main sf-c-beige">
    <h1>Main</h1>
  </div>
</div>
</div>

<highlight lang="html">
&lt;div class="{{ ['sf-pattern', classes].filter(x => x).join(' ') }}"&gt;
  {{ siteNodes }}
&lt;/div&gt;
</highlight>

<details>
  <summary>Combinations</summary>

<div class="pExample d:f">
<div class="w sf-pattern area-header">
  <div class="area-header sf-c-antiquewhite">Header</div>

  <div class="area-main sf-c-beige">
    <h1>Main</h1>
  </div>
</div>
</div>

```html
<div class="sf-pattern area-header">
  <div class="area-header">Header</div>

  <div class="area-main">
    <h1>Main</h1>
  </div>
</div>
```

---

<div class="pExample d:f">
<div class="w sf-pattern area-header area-footer">
  <div class="area-header sf-c-antiquewhite">Header</div>
  <div class="area-footer sf-c-lavender">Footer</div>

  <div class="area-main sf-c-beige">
    <h1>Main</h1>
  </div>
</div>
</div>

```html
<div class="sf-pattern area-header area-footer">
  <div class="area-header">Header</div>
  <div class="area-footer">Footer</div>

  <div class="area-main">
    <h1>Main</h1>
  </div>
</div>
```

---

<div class="pExample d:f">
<div class="w sf-pattern area-header area-footer area-menu">
  <div class="area-header sf-c-antiquewhite">Header</div>
  <div class="area-footer sf-c-lavender">Footer</div>
  <div class="area-menu sf-c-lightcyan">Menu</div>

  <div class="area-main sf-c-beige">
    <h1>Main</h1>
  </div>
</div>
</div>

```html
<div class="sf-pattern area-header area-footer area-menu">
  <div class="area-header">Header</div>
  <div class="area-footer">Footer</div>
  <div class="area-menu">Menu</div>

  <div class="area-main">
    <h1>Main</h1>
  </div>
</div>
```

---

<div class="pExample d:f">
<div class="w sf-pattern area-menu area-header area-aside area-footer">
  <div class="area-header sf-c-antiquewhite">Header</div>
  <div class="area-footer sf-c-lavender">Footer</div>
  <div class="area-menu sf-c-lightcyan">Menu</div>
  <div class="area-aside sf-c-mistyrose">Aside</div>

  <div class="area-main sf-c-beige">
    <h1>Main</h1>
  </div>
</div>
</div>

```html
<div class="sf-pattern area-menu area-header area-aside area-footer">
  <div class="area-header">Header</div>
  <div class="area-footer">Footer</div>
  <div class="area-menu">Menu</div>
  <div class="area-aside">Aside</div>

  <div class="area-main">
    <h1>Main</h1>
  </div>
</div>
```

---

<div class="pExample d:f">
<div class="w sf-pattern area-header area-aside area-footer">
  <div class="area-header sf-c-antiquewhite">Header</div>
  <div class="area-footer sf-c-lavender">Footer</div>
  <div class="area-aside sf-c-mistyrose">Aside</div>

  <div class="area-main sf-c-beige">
    <h1>Main</h1>
  </div>
</div>
</div>

```html
<div class="sf-pattern area-header area-aside area-footer">
  <div class="area-header">Header</div>
  <div class="area-footer">Footer</div>
  <div class="area-aside">Aside</div>

  <div class="area-main">
    <h1>Main</h1>
  </div>
</div>
```

---

<div class="pExample d:f">
<div class="w sf-pattern area-menu area-header">
  <div class="area-header sf-c-antiquewhite">Header</div>
  <div class="area-menu sf-c-lightcyan">Menu</div>

  <div class="area-main sf-c-beige">
    <h1>Main</h1>
  </div>
</div>
</div>

```html
<div class="sf-pattern area-menu area-header">
  <div class="area-header">Header</div>
  <div class="area-menu">Menu</div>

  <div class="area-main">
    <h1>Main</h1>
  </div>
</div>
```

---

<div class="pExample d:f">
<div class="w sf-pattern area-menu area-header area-aside">
  <div class="area-header sf-c-antiquewhite">Header</div>
  <div class="area-menu sf-c-lightcyan">Menu</div>
  <div class="area-aside sf-c-mistyrose">Aside</div>

  <div class="area-main sf-c-beige">
    <h1>Main</h1>
  </div>
</div>
</div>

```html
<div class="sf-pattern area-menu area-header area-aside">
  <div class="area-header">Header</div>
  <div class="area-menu">Menu</div>
  <div class="area-aside">Aside</div>

  <div class="area-main">
    <h1>Main</h1>
  </div>
</div>
```

---

<div class="pExample d:f">
<div class="w sf-pattern area-header area-aside">
  <div class="area-header sf-c-antiquewhite">Header</div>
  <div class="area-aside sf-c-mistyrose">Aside</div>

  <div class="area-main sf-c-beige">
    <h1>Main</h1>
  </div>
</div>
</div>

```html
<div class="sf-pattern area-header area-aside">
  <div class="area-header">Header</div>
  <div class="area-aside">Aside</div>

  <div class="area-main">
    <h1>Main</h1>
  </div>
</div>
```

---

<div class="pExample d:f">
<div class="w sf-pattern area-footer">
  <div class="area-footer sf-c-lavender">Footer</div>

  <div class="area-main sf-c-beige">
    <h1>Main</h1>
  </div>
</div>
</div>

```html
<div class="sf-pattern area-footer">
  <div class="area-footer">Footer</div>

  <div class="area-main">
    <h1>Main</h1>
  </div>
</div>
```

---

<div class="pExample d:f">
<div class="w sf-pattern area-menu area-footer">
  <div class="area-footer sf-c-lavender">Footer</div>
  <div class="area-menu sf-c-lightcyan">Menu</div>

  <div class="area-main sf-c-beige">
    <h1>Main</h1>
  </div>
</div>
</div>

```html
<div class="sf-pattern area-menu area-footer">
  <div class="area-footer">Footer</div>
  <div class="area-menu">Menu</div>

  <div class="area-main">
    <h1>Main</h1>
  </div>
</div>
```

---

<div class="pExample d:f">
<div class="w sf-pattern area-menu area-aside area-footer">
  <div class="area-footer sf-c-lavender">Footer</div>
  <div class="area-menu sf-c-lightcyan">Menu</div>
  <div class="area-aside sf-c-mistyrose">Aside</div>

  <div class="area-main sf-c-beige">
    <h1>Main</h1>
  </div>
</div>
</div>

```html
<div class="sf-pattern area-menu area-aside area-footer">
  <div class="area-footer">Footer</div>
  <div class="area-menu">Menu</div>
  <div class="area-aside">Aside</div>

  <div class="area-main">
    <h1>Main</h1>
  </div>
</div>
```

---

<div class="pExample d:f">
<div class="w sf-pattern area-aside area-footer">
  <div class="area-footer sf-c-lavender">Footer</div>
  <div class="area-aside sf-c-mistyrose">Aside</div>

  <div class="area-main sf-c-beige">
    <h1>Main</h1>
  </div>
</div>
</div>

```html
<div class="sf-pattern area-aside area-footer">
  <div class="area-footer">Footer</div>
  <div class="area-aside">Aside</div>

  <div class="area-main">
    <h1>Main</h1>
  </div>
</div>
```

---

<div class="pExample d:f">
<div class="w sf-pattern area-menu">
  <div class="area-menu sf-c-lightcyan">Menu</div>

  <div class="area-main sf-c-beige">
    <h1>Main</h1>
  </div>
</div>
</div>

```html
<div class="sf-pattern area-menu">
  <div class="area-menu">Menu</div>

  <div class="area-main">
    <h1>Main</h1>
  </div>
</div>
```

---

<div class="pExample d:f">
<div class="w sf-pattern area-menu area-aside">
  <div class="area-menu sf-c-lightcyan">Menu</div>
  <div class="area-aside sf-c-mistyrose">Aside</div>

  <div class="area-main sf-c-beige">
    <h1>Main</h1>
  </div>
</div>
</div>

```html
<div class="sf-pattern area-menu area-aside">
  <div class="area-menu">Menu</div>
  <div class="area-aside">Aside</div>

  <div class="area-main">
    <h1>Main</h1>
  </div>
</div>
```

---

<div class="pExample d:f">
<div class="w sf-pattern area-aside">
  <div class="area-aside sf-c-mistyrose">Aside</div>

  <div class="area-main sf-c-beige">
    <h1>Main</h1>
  </div>
</div>
</div>

```html
<div class="sf-pattern area-aside">
  <div class="area-aside">Aside</div>

  <div class="area-main">
    <h1>Main</h1>
  </div>
</div>
```

</details>

## Media

<div class="sf-pattern area-media">
  <div class="area-media sf-c-mistyrose">
    <div class="d:f y:i:c x:c:c box:64 sf-c-lightcyan ov:h">64x64</div>
  </div>

  <div class="area-main sf-c-beige">
    <div class="fz:h1">Main</div>
    <p>Some text... text... text... text... text... text... text... text... text... text... text... text...
text... 
text... text...</p>
    <div class="sf-pattern area-media">
      <div class="area-media sf-c-mistyrose">
        <div class="d:f y:i:c x:c:c box:32 sf-c-lightcyan fz:s ov:h">32x32</div>
      </div>
      <div class="area-main sf-c-beige">
        <div class="fz:h2">Main</div>
        <p>Some text... text... text... text... text... text... text... text... text... text... text... text... text... text... text...</p>
      </div>
    </div>
  </div>
</div>

```html
<div class="sf-pattern area-media">
  <div class="area-media">
    <img src="..." alt="" />
  </div>

  <div class="area-main">
    <h2>Main</h2>
    <p>Some text</p>
    <div class="sf-pattern area-media">
      <div class="area-media">
        <img src="..." alt="" />
      </div>
      <div class="area-main">
        <h2>Main</h2>
        <p>Some text</p>
      </div>
    </div>
  </div>
</div>
```

<script setup>
import { reactive, computed } from 'vue';

import 'style-forge.form/src/var.css';
import 'style-forge.form/src/base.css';
import 'style-forge.form/src/global.css';
import 'style-forge.form/src/pseudo-classes.css';
import 'style-forge.form/src/switch.css';

import 'style-forge.patterns';

import 'style-forge.colors/src/colors/10/lavender.css';
import 'style-forge.colors/src/colors/10/antiquewhite.css';
import 'style-forge.colors/src/colors/10/lightcyan.css';
import 'style-forge.colors/src/colors/10/mistyrose.css';
import 'style-forge.colors/src/colors/10/beige.css';

const area = reactive({
  header: true,
  menu: true,
  aside: true,
  footer: true,
});

const classes = computed(() => {
  const arr = [];
  if (area.header) arr.push('area-header');
  if (area.menu) arr.push('area-menu');
  if (area.aside) arr.push('area-aside');
  if (area.footer) arr.push('area-footer');
  return arr.filter(x => x).join(' ');
});

const siteNodes = computed(() => {
  const areasNode = {
    header: '<div class="area-header">Header</div>',
    menu: '<div class="area-menu">Menu</div>',
    aside: '<div class="area-aside">Aside</div>',
    footer: '<div class="area-footer">Footer</div>',
    main: '<div class="area-main">\n    <h1>Main</h1>\n  </div>'
  };

  const arr = [];
  
  if (area.footer) arr.unshift(areasNode.footer);
  if (area.aside) arr.unshift(areasNode.aside);
  if (area.menu) arr.unshift(areasNode.menu);
  if (area.header) arr.unshift(areasNode.header);
  return [arr.join('\n  '), areasNode.main].filter(x => x).join('\n\n  ');
});
</script>

<style scoped>
.pExample {
  height: 200px;
}
.box\:64 {
  width: 64px;
  height: 64px;
}
.box\:32 {
  width: 32px;
  height: 32px;
}
</style>
