---
title: Style-Forge.Themes
titleTemplate: false
description: "Style-Forge.Themes: powerful tool for managing and applying customizable themes in web applications."

head:
  - - meta
    - name: keywords
      content: style-forge, helpers, CSS, HTML, utilities, styles, web development, frontend, styling, design, responsive, lightweight, performance, modular, consistent
  - - meta
    - property: og:title
      content: Style-Forge.Themes
  - - meta
    - property: og:description
      content: "Style-Forge.Themes: powerful tool for managing and applying customizable themes in web applications."
  - - meta
    - property: og:url
      content: https://style-forge.dev/themes/
  - - meta
    - name: twitter:title
      content: Style-Forge.Themes
  - - meta
    - name: twitter:description
      content: "Style-Forge.Themes: powerful tool for managing and applying customizable themes in web applications."
---

# Style-Forge.Themes

<div class="shields">

![npm](https://img.shields.io/npm/v/style-forge.themes)
![npm](https://img.shields.io/npm/dm/style-forge.themes)
![license](https://img.shields.io/npm/l/style-forge.themes)
![build](https://github.com/Sarmaged/style-forge.themes/actions/workflows/publish.yml/badge.svg)

</div>

`Style-Forge.Themes` package is a powerful and flexible tool designed for managing and applying themes to your web applications. It provides a streamlined way to handle theme customization, allowing developers to create, switch, and maintain multiple themes effortlessly.

## Installation

:::tabs
== npm
```shell
npm i style-forge.themes
```
== yarn
```shell
yarn add style-forge.themes
```
== pnpm
```shell
pnpm add style-forge.themes
```
== bun
```shell
bun add style-forge.themes
```
:::

## Usage

After installation, you can import the CSS file into your project or, if you are using Webpack or another module bundler:

:::tabs key:import
== CSS
```css
@import "style-forge.themes";
```
== JS
```js
import 'style-forge.themes';
```
:::

## Example
There are three standard modes `dark / light / auto (system)`

`auto` - this is the system color theme selection

```html
  <html ... data-theme="auto">
  or
  <html ... data-theme="dark">
  or
  <html ... data-theme="light">
```
