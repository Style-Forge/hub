# Style Forge

Style Forge is a CSS framework that provides a modern approach to page design, improving performance and display on all devices.

[![npm](https://img.shields.io/npm/v/style-forge)][npm-link]
[![npm](https://img.shields.io/npm/dm/style-forge)][npm-link]
[![GitHub Repo stars](https://img.shields.io/github/stars/sarmaged/style-forge?style=social)][github-link]

<hr />

## Installation

You can install the package via npm or yarn:

```bash
npm install style-forge
```

```bash
yarn add style-forge
```

<hr />

## Usage

Here's a basic example of how to use Style Forge:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="path/to/style-forge.css">
</head>
<body>
    <!-- Your HTML content -->
</body>
</html>
```

Or, after installation, you can import the CSS file into your project:

```css
@import "style-forge";
```

Or, if you are using Webpack or another module bundler:

```js
import 'style-forge';
```


## Features

- Modern and responsive design
- Utilities for various styling needs
- Integration with different components

## Utilities and Rebuild

This repository is rebuilt using the following external repositories when their main branch is updated after a successful PR:

- [style-forge.base][npm-link-base]
- [style-forge.helpers][npm-link-helpers]
- [style-forge.form][npm-link-form]
- [style-forge.themes][npm-link-themes]
- [style-forge.patterns][npm-link-patterns]
- [style-forge.colors][npm-link-colors]

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Authors

- **Dmitrii Sagalov** - *Expert in interface development* - [Sarmaged](https://github.com/Sarmaged)

[npm-link]: https://www.npmjs.com/package/style-forge
[npm-link-base]: https://www.npmjs.com/package/style-forge.base
[npm-link-helpers]: https://www.npmjs.com/package/style-forge.helpers
[npm-link-form]: https://www.npmjs.com/package/style-forge.form
[npm-link-themes]: https://www.npmjs.com/package/style-forge.themes
[npm-link-patterns]: https://www.npmjs.com/package/style-forge.patterns
[npm-link-colors]: https://www.npmjs.com/package/style-forge.colors

[github-link]: https://github.com/Sarmaged/style-forge
