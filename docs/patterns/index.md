---
title: Style-Forge.Patterns
titleTemplate: false
description: "Style-Forge.Patterns: versatile CSS library with pre-defined classes for responsive, consistent user interfaces."

head:
  - - meta
    - name: keywords
      content: style-forge, helpers, CSS, HTML, utilities, styles, web development, frontend, styling, design, responsive, lightweight, performance, modular, consistent
  - - meta
    - property: og:title
      content: Style-Forge.Patterns
  - - meta
    - property: og:description
      content: "Style-Forge.Patterns: versatile CSS library with pre-defined classes for responsive, consistent user interfaces."
  - - meta
    - property: og:url
      content: https://style-forge.dev/patterns/
  - - meta
    - name: twitter:title
      content: Style-Forge.Patterns
  - - meta
    - name: twitter:description
      content: "Style-Forge.Patterns: versatile CSS library with pre-defined classes for responsive, consistent user interfaces."
---

# Style-Forge.Patterns

<div class="shields">

![npm](https://img.shields.io/npm/v/style-forge.patterns)
![license](https://img.shields.io/npm/l/style-forge.patterns)
![npm](https://img.shields.io/npm/dm/style-forge.patterns)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/90fd8e204aef4dbc971fb93810fb89ec)](https://app.codacy.com/gh/Sarmaged/style-forge.patterns/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)
![build](https://github.com/Sarmaged/style-forge.patterns/actions/workflows/publish.yml/badge.svg)

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

<div class="sf-pattern area-header area-footer area-menu area-aside">
  <div class="area-footer sf-c-lavender">Footer</div>
  <div class="area-header sf-c-antiquewhite">Header</div>
  <div class="area-menu sf-c-lightcyan">Menu</div>
  <div class="area-aside sf-c-mistyrose">Aside</div>

  <div class="area-main sf-c-beige">
    <h1>Main</h1>
  </div>
</div>

```html
<div class="sf-pattern area-header area-footer area-menu area-aside">
  <div class="area-footer">Footer</div>
  <div class="area-header">Header</div>
  <div class="area-menu">Menu</div>
  <div class="area-aside">Aside</div>

  <!-- Should always be -->
  <div class="area-main">
    <h1>Main</h1>
  </div>
  <!-- // -->
</div>
```

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
<div class="sf-pattern area-header area-footer area-menu area-aside">
  <div class="area-footer">Footer</div>
  <div class="area-header">Header</div>
  <div class="area-menu">Menu</div>
  <div class="area-aside">Aside</div>

  <!-- Should always be -->
  <div class="area-main">
    <h1>Main</h1>
  </div>
  <!-- // -->
</div>
```

<script setup>
import 'style-forge.patterns';
import 'style-forge.colors/src/colors/10/lavender.css';
import 'style-forge.colors/src/colors/10/antiquewhite.css';
import 'style-forge.colors/src/colors/10/lightcyan.css';
import 'style-forge.colors/src/colors/10/mistyrose.css';
import 'style-forge.colors/src/colors/10/beige.css';
</script>

<style scoped>
.box\:64 {
  width: 64px;
  height: 64px;
}
.box\:32 {
  width: 32px;
  height: 32px;
}
</style>
