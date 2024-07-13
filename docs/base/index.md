---
title: Style-Forge.Base
titleTemplate: false
description: "Style-Forge.Base: foundational CSS variables, base styles, typography, colors, utilities for consistent design."

head:
  - - meta
    - name: keywords
      content: style-forge, base, CSS, variables, styles, design, web development, frontend, responsive, typography, colors, system-ui, HSL, lightweight, performance, consistent
  - - meta
    - property: og:title
      content: Style-Forge.Base
  - - meta
    - property: og:description
      content: "Style-Forge.Base: foundational CSS variables, base styles, typography, colors, utilities for consistent design."
  - - meta
    - property: og:url
      content: https://style-forge.dev/base/
  - - meta
    - name: twitter:title
      content: Style-Forge.Base
  - - meta
    - name: twitter:description
      content: "Style-Forge.Base: foundational CSS variables, base styles, typography, colors, utilities for consistent design."
---

# Style-Forge.Base

<div class="shields">

![npm](https://img.shields.io/npm/v/style-forge.base)
![license](https://img.shields.io/npm/l/style-forge.base)
![npm](https://img.shields.io/npm/dm/style-forge.base)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/91b8a60a2a5e4df4a3726f1736091e72)](https://app.codacy.com/gh/Sarmaged/style-forge.base/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)
![build](https://github.com/Sarmaged/style-forge.base/actions/workflows/publish.yml/badge.svg)

</div>

`Style-Forge.Base` provides the foundational CSS variables and base styles for the Style Forge framework. It includes essential typography, color schemes, and utility classes, ensuring a consistent and customizable design system for your web projects.

## Installation

:::tabs
== npm
```shell
npm i style-forge.base
```
== yarn
```shell
yarn add style-forge.base
```
== pnpm
```shell
pnpm add style-forge.base
```
== bun
```shell
bun add style-forge.base
```
:::

## Usage

After installation, you can import the CSS file into your project or, if you are using Webpack or another module bundler:

:::tabs key:import
== CSS
```css
@import 'style-forge.base';
```
== JS
```js
import 'style-forge.base';
```
:::

## Variables

`--sf-c` - these are colors in HSL

```css
:root {
  --sf-ff: system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 
  'Segoe UI Symbol'; /* font-family */

  /* line-height */
  --sf-lh: 0.8;
  --sf-lh-txt: 1.5;

  /* font-size header */
  --sf-h1: 3rem;
  --sf-h2: 2.5rem;
  --sf-h3: 2rem;
  --sf-h4: 1.5rem;
  --sf-h5: 1.25rem;
  --sf-h6: 1rem;

  /* font-weight header */
  --sf-fw-h1: 700;
  --sf-fw-h2: 700;
  --sf-fw-h3: 700;
  --sf-fw-h4: 600;
  --sf-fw-h5: 600;
  --sf-fw-h6: 600;

  /* font-size */
  --sf-fz: 1rem;
  --sf-fz-bold: 1rem;
  --sf-fz-small: 0.75rem;

  /* font-weight */
  --sf-fw: 400;
  --sf-fw-bold: 600;
  --sf-fw-small: 300;

  --sf-disabled: 0.4; /* opacity */

  --sf-c-link: 225 73% 57%; /* <a> - color */

  --sf-c-mark-bg: 60 100% 50%; /* <mark> - background */
  --sf-c-mark-txt: 0 0% 10%; /* <mark> - color */

  --sf-c-txt: 0 0% 10%; /* All color */
  --sf-c-bg: 0 0% 100%; /* All background */
  --sf-c-shape-bg: 0 0% 90%; /* <pre> - background */
  --sf-c-backdrop: 0 0% 10%; /* ::backdrop */
  --sf-table-c-bd: 0 0% 75%; /* Table border */
  --sf-form-c-bd: 0 0% 10%; /* All Elements Form border */
}
```

