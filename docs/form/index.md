# Form

`Style-Forge.Form` package is a versatile and easy-to-use library designed to streamline the creation and management of forms in web applications. It offers a robust set of tools to handle form validation, styling, and submission processes, enhancing user experience and developer productivity.

## Installation

You can install the package via npm or yarn:

```bash
npm install style-forge.form
```

```bash
yarn add style-forge.form
```

## Usage

After installation, you can import the CSS file into your project:

```css
@import "style-forge.form";
```

Or, if you are using Webpack or another module bundler:

```js
import 'style-forge.form';
```

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
  --sf-form-c-border: 0 0% 10%;
  --sf-form-c-loading: 0 0% 10%;
  --sf-form-c-txt: 0 0% 10%;

  /* global dark theme */
  --sf-form-dark-c-white: 0 0% 100%;
  --sf-form-dark-c-info: 219 79% 66%;
  --sf-form-dark-c-error: 0 100% 65%;
  --sf-form-dark-c-success: 0 100% 65%;
  --sf-form-dark-c-warning: 39 100% 60%;

  --sf-form-dark-c-bg: 0 0% 20%;
  --sf-form-dark-c-border: 0 0% 100%;
  --sf-form-dark-c-loading: 0 0% 100%;
  --sf-form-dark-c-txt: 0 0% 90%;
}
```
