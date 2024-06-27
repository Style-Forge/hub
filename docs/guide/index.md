# Quick Start

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
@import "style-forge";
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
/* @import 'style-forge.base/src/all.css';  /* Base module */
@import 'style-forge.helpers/src/all.css';  /* Helpers module */
@import 'style-forge.form/src/all.css';  /* Form module */
@import 'style-forge.themes/src/all.css';  /* Themes module */
@import 'style-forge.patterns/src/all.css';  /* Patterns module */
@import 'style-forge.colors/src/web.css';  /* Colors module */
```
== JS
```js
// import 'style-forge.base/src/all.css';  // Base module
import 'style-forge.helpers/src/all.css';  // Helpers module
import 'style-forge.form/src/all.css';  // Form module
import 'style-forge.themes/src/all.css';  // Themes module
import 'style-forge.patterns/src/all.css';  // Patterns module
import 'style-forge.colors/src/web.css';  // Colors module
```
:::

::: info
For this example, I have excluded the `base` module. If you are using another CSS framework, including the `base` module may cause unpredictable style conflicts.
:::

You can also install any module individually for your project and customize it to match your styles:

* [Base](/base/)
* [Helpers](/helpers/)
* [Form](/form/)
* [Themes](/themes/)
* [Patterns](/patterns/)
* [Colors](/colors/)
