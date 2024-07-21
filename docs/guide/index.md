---
description: "Comprehensive guide for quickly getting started with Style-Forge in web apps."

head:
  - - meta
    - name: keywords
      content: style-forge, quick start, guide, web development, frontend, responsive, setup, installation, configuration
  - - meta
    - property: og:title
      content: "Quick Start | Style-Forge"
  - - meta
    - property: og:description
      content: "Comprehensive guide for quickly getting started with Style-Forge in web apps."
  - - meta
    - property: og:url
      content: https://style-forge.dev/guide/
  - - meta
    - name: twitter:title
      content: "Quick Start | Style-Forge"
  - - meta
    - name: twitter:description
      content: "Comprehensive guide for quickly getting started with Style-Forge in web apps."
---

# Quick Start

<div class="shields">

![npm](https://img.shields.io/npm/v/style-forge)
![license](https://img.shields.io/npm/l/style-forge)
![npm](https://img.shields.io/npm/dm/style-forge)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/cc447967c4f945ef912c865bbe77db28)](https://app.codacy.com/gh/Style-Forge/hub/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)
![build](https://github.com/Style-Forge/hub/actions/workflows/publish.yml/badge.svg)

</div>

`Style-Forge` package is a comprehensive CSS framework designed for modern web development. It provides a wide range of utilities and components to streamline the process of building responsive, aesthetically pleasing websites. With features like customizable themes, utility classes, and support for modern CSS technologies like flexbox and grid, style-forge aims to enhance productivity and maintainability in frontend development.

## Installation

:::tabs
== npm
```shell
npm i style-forge
```
== yarn
```shell
yarn add style-forge
```
== pnpm
```shell
pnpm add style-forge
```
== bun
```shell
bun add style-forge
```
:::

## Usage

After installation, you can import the CSS file into your project or, if you are using Webpack or another module bundler:

:::tabs key:import
== CSS
```css
@import 'style-forge';
```
== JS
```js
import 'style-forge';
```
:::

## Customization

Ideal for those who already have a project but need to exclude a specific module. Usually, this is the `base` module.

:::tabs key:import
== CSS
```css
@import 'style-forge.base/src/all.css';  /* Base module */
@import 'style-forge.helpers/src/all.css';  /* Helpers module */
@import 'style-forge.form/src/all.css';  /* Form module */
@import 'style-forge.themes/src/all.css';  /* Themes module */
@import 'style-forge.patterns/src/all.css';  /* Patterns module */
@import 'style-forge.colors/src/web.css';  /* Colors module */
```
== JS
```js
import 'style-forge.base/src/all.css';  // Base module
import 'style-forge.helpers/src/all.css';  // Helpers module
import 'style-forge.form/src/all.css';  // Form module
import 'style-forge.themes/src/all.css';  // Themes module
import 'style-forge.patterns/src/all.css';  // Patterns module
import 'style-forge.colors/src/web.css';  // Colors module
```
:::

You can also install any module individually for your project and customize it to match your styles:

* [Base](/base/)
* [Helpers](/helpers/)
* [Form](/form/)
* [Themes](/themes/)
* [Patterns](/patterns/)
* [Colors](/colors/)
