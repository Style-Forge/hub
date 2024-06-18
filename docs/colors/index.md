
# Colors

`Style-Forge.Colors` package provides a comprehensive and customizable set of color palettes for your web applications. It includes predefined color schemes and the ability to create your own custom palettes, ensuring consistent and visually appealing designs across your projects.

## Installation

You can install the package via npm or yarn:

```bash
npm install style-forge.colors
```

```bash
yarn add style-forge.colors
```

::: info
It is recommended to use the package by default.
If you decide to use another option (10/20) **lightness gradient**, you should choose the color and upload it separately.
Example: <a href="#custom-usage">Custom usage</a>
:::

## Usage

After installation, you can import the CSS file into your project:

```css
/*
Web - `default`
- 16 - colors
- 10 lightness gradient
*/
@import "style-forge.colors";
```

```css
/*
- 148 - colors
- 10 lightness gradient
 */
@import "style-forge.colors/10.css";
```

```css
/*
- 148 - colors
- 20 lightness gradient
*/
@import "style-forge.colors/20.css";
```

Or, if you are using Webpack or another module bundler:

```js
// Web - `default`
// - 16 - colors
// - 10 lightness gradient
import 'style-forge.colors';
```

```js
// - 148 - colors
// - 10 lightness gradient
import 'style-forge.colors/10.css';
```

```js
// - 148 - colors
// - 20 lightness gradient
import 'style-forge.colors/20.css';
```

## Custom usage
You can select a single color with (10/20) lightness gradient

```css
/*
- color aqua
- 10 lightness gradient
 */
@import "style-forge.colors/src/colors/10/aqua.css";
```

```css
/*
- color aqua
- 20 lightness gradient
 */
@import "style-forge.colors/src/colors/20/aqua.css";
```

Or, if you are using Webpack or another module bundler:

```js
// - color aqua
// - 10 lightness gradient
import 'style-forge.colors/src/colors/10/aqua.css';
```

```js
// - color aqua
// - 20 lightness gradient
import 'style-forge.colors/src/colors/20/aqua.css';
```
