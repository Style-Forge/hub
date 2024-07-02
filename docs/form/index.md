---
title: Style-Forge.Form
titleTemplate: false
description: "Style-Forge.Form: versatile library for easy form creation, validation, styling, and submission in web apps."

head:
  - - meta
    - name: keywords
      content: style-forge, form, input, select, switch, textarea, validate, html, css, styling, web development, frontend, form elements, form styles, responsive
  - - meta
    - property: og:title
      content: Style-Forge.Form
  - - meta
    - property: og:description
      content: "Style-Forge.Form: versatile library for easy form creation, validation, styling, and submission in web apps."
  - - meta
    - property: og:url
      content: https://style-forge.dev/form/
  - - meta
    - name: twitter:title
      content: Style-Forge.Form
  - - meta
    - name: twitter:description
      content: "Style-Forge.Form: versatile library for easy form creation, validation, styling, and submission in web apps."
---

# Style-Forge.Form

<div class="shields">

![npm](https://img.shields.io/npm/v/style-forge.form)
![license](https://img.shields.io/npm/l/style-forge.form)
![npm](https://img.shields.io/npm/dm/style-forge.form)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/62474037036e4814a74a86678031f79b)](https://app.codacy.com/gh/Sarmaged/style-forge.form/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)
![build](https://github.com/Sarmaged/style-forge.form/actions/workflows/publish.yml/badge.svg)

</div>

`Style-Forge.Form` package is a versatile and easy-to-use library designed to streamline the creation and management of forms in web applications. It offers a robust set of tools to handle form validation, styling, and submission processes, enhancing user experience and developer productivity.

## Installation

:::tabs
== npm
```shell
npm i style-forge.form
```
== yarn
```shell
yarn add style-forge.form
```
== pnpm
```shell
pnpm add style-forge.form
```
== bun
```shell
bun add style-forge.form
```
:::

## Usage

After installation, you can import the CSS file into your project or, if you are using Webpack or another module bundler:

:::tabs key:import
== CSS
```css
@import "style-forge.form";
```
== JS
```js
import 'style-forge.form';
```
:::

## Custom
:::tabs key:import
== CSS
```css
/* Require */
@import 'style-forge.form/src/var.css';
@import 'style-forge.form/src/base.css';
@import 'style-forge.form/src/global.css';
@import 'style-forge.form/src/pseudo-classes.css';

/* Inputs */
@import 'style-forge.form/src/input.css';
@import 'style-forge.form/src/button.css';
@import 'style-forge.form/src/checkbox-radio.css';
@import 'style-forge.form/src/select.css';
@import 'style-forge.form/src/textarea.css';
@import 'style-forge.form/src/color.css';
@import 'style-forge.form/src/file.css';

@import 'style-forge.form/src/time.css';

/* Custom inputs */
@import 'style-forge.form/src/switch.css';

/* Loader */
@import 'style-forge.form/src/loading.css';

/* Validation */
@import 'style-forge.form/src/validate.css';
```
== JS
```js
// Require
import 'style-forge.form/src/var.css';
import 'style-forge.form/src/base.css';
import 'style-forge.form/src/global.css';
import 'style-forge.form/src/pseudo-classes.css';

// Inputs
import 'style-forge.form/src/input.css';
import 'style-forge.form/src/button.css';
import 'style-forge.form/src/checkbox-radio.css';
import 'style-forge.form/src/select.css';
import 'style-forge.form/src/textarea.css';
import 'style-forge.form/src/color.css';
import 'style-forge.form/src/file.css';

import 'style-forge.form/src/time.css';

// Custom inputs
import 'style-forge.form/src/switch.css';

// Loader
import 'style-forge.form/src/loading.css';

// Validation
import 'style-forge.form/src/validate.css';
```
:::

## Variables

```css
:root {
  --sf-gap: 0.5em;

  --sf-disabled: 0.4;
  --sf-txt-small: 0.75rem;

  --sf-form-radius: 0.5em;

  --sf-form-p-input-block: 0.5em;
  --sf-form-p-input-inline: 0.5em;

  /* switch */
  --sf-form-switch-size: 1em;

  /* global */
  --sf-form-c-white: 0 0% 100%;
  --sf-form-c-info: 200 100% 60%;
  --sf-form-c-error: 0 100% 60%;
  --sf-form-c-success: 0 100% 60%;
  --sf-form-c-warning: 39 100% 50%;

  --sf-form-c-bg: 0 0% 100%;
  --sf-form-c-bd: 0 0% 10%;
  --sf-form-c-loading: 0 0% 10%;
  --sf-form-c-txt: 0 0% 10%;

  /* global dark theme */
  --sf-form-dark-c-white: 0 0% 100%;
  --sf-form-dark-c-info: 219 79% 66%;
  --sf-form-dark-c-error: 0 100% 65%;
  --sf-form-dark-c-success: 0 100% 65%;
  --sf-form-dark-c-warning: 39 100% 60%;

  --sf-form-dark-c-bg: 0 0% 20%;
  --sf-form-dark-c-bd: 0 0% 100%;
  --sf-form-dark-c-loading: 0 0% 100%;
  --sf-form-dark-c-txt: 0 0% 90%;
}
```
