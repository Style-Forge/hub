# Themes

`Style-Forge.Themes` package is a powerful and flexible tool designed for managing and applying themes to your web applications. It provides a streamlined way to handle theme customization, allowing developers to create, switch, and maintain multiple themes effortlessly.

## Installation

You can install the package via npm or yarn:

```bash
npm install style-forge.themes
```

```bash
yarn add style-forge.themes
```

## Usage

After installation, you can import the CSS file into your project:

```css
@import "style-forge.themes";
```

Or, if you are using Webpack or another module bundler:

```js
import 'style-forge.themes';
```

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
