<script setup>
import { ref } from 'vue';

const selected = ref('aliceblue');

const webColors = [
  'aqua', 'black', 'blue', 'fuchsia', 'gray', 'green', 'lime', 'maroon', 'navy',
  'olive', 'purple', 'red', 'silver', 'teal', 'white', 'yellow'
];

const colors = [
  'aliceblue', 'antiquewhite', 'aqua', 'aquamarine', 'azure',
  'beige', 'bisque', 'black', 'blanchedalmond', 'blue',
  'blueviolet', 'brown', 'burlywood', 'cadetblue', 'chartreuse',
  'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson',
  'cyan', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray',
  'darkgrey', 'darkgreen', 'darkkhaki', 'darkmagenta', 'darkolivegreen',
  'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen',
  'darkslateblue', 'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet',
  'deeppink', 'deepskyblue', 'dimgray', 'dimgrey', 'dodgerblue',
  'firebrick', 'floralwhite', 'forestgreen', 'fuchsia', 'gainsboro',
  'ghostwhite', 'gold', 'goldenrod', 'gray', 'grey',
  'green', 'greenyellow', 'honeydew', 'hotpink', 'indianred',
  'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush',
  'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan',
  'lightgoldenrodyellow', 'lightgray', 'lightgrey', 'lightgreen', 'lightpink',
  'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightslategray', 'lightslategrey',
  'lightsteelblue', 'lightyellow', 'lime', 'limegreen', 'linen',
  'magenta', 'maroon', 'mediumaquamarine', 'mediumblue', 'mediumorchid',
  'mediumpurple', 'mediumseagreen', 'mediumslateblue', 'mediumspringgreen', 'mediumturquoise',
  'mediumvioletred', 'midnightblue', 'mintcream', 'mistyrose', 'moccasin',
  'navajowhite', 'navy', 'oldlace', 'olive', 'olivedrab',
  'orange', 'orangered', 'orchid', 'palegoldenrod', 'palegreen',
  'paleturquoise', 'palevioletred', 'papayawhip', 'peachpuff', 'peru',
  'pink', 'plum', 'powderblue', 'purple', 'rebeccapurple',
  'red', 'rosybrown', 'royalblue', 'saddlebrown', 'salmon',
  'sandybrown', 'seagreen', 'seashell', 'sienna', 'silver',
  'skyblue', 'slateblue', 'slategray', 'slategrey', 'snow',
  'springgreen', 'steelblue', 'tan', 'teal', 'thistle',
  'tomato', 'turquoise', 'violet', 'wheat', 'white',
  'whitesmoke', 'yellow', 'yellowgreen'
];

const onClick = color => selected.value = color;
const step = (x, i = 9) => x * 100 / (i + 1);
</script>

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

## Usage

After installation, you can import the CSS file into your project:

### Web (16 colors) - `default`

<div class="colors hover">
  <div
    v-for="color in webColors"
    :key="color"
    :title="color"
    :class="'sf-c-' + color"
  ></div>
</div>

```css
/*
Web - `default`
- 16 - colors
- 10 lightness gradient
*/
@import "style-forge.colors";
```
Or, if you are using Webpack or another module bundler:

```js
// Web - `default`
// - 16 - colors
// - 10 lightness gradient
import 'style-forge.colors';
```


### 148 colors - (10/20) lightness gradient

<div class="colors hover">
  <div
    v-for="color in colors"
    :key="color"
    :title="color"
    :class="'sf-c-' + color"
  ></div>
</div>

::: info It is recommended to use the package by default.
If you decide to use another option (10/20) **lightness gradient**, you should choose the color and upload it separately.<br />
Example: <a href="#choose-your-color">Choose your color</a>
:::

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
// - 148 - colors
// - 10 lightness gradient
import 'style-forge.colors/10.css';
```

```js
// - 148 - colors
// - 20 lightness gradient
import 'style-forge.colors/20.css';
```

## Choose your color
You can select a single color with (10/20) lightness gradient

<div class="d:f:y">
  <div class="colors select hover">
    <div
      v-for="color in colors"
      :key="color"
      :class="'sf-c-' + color"
      :title="color"
      @click="onClick(color)"
    ></div>
  </div>
  
  <div class="d:f auto">
    <div class="d:f:y">
      <div class="title">10 lightness gradient</div>
      <div>
        <div :class="['item', 'sf-c-' + selected]">sf-c-{{ selected }}</div>
        <div v-for="i in 9" :class="['item', 'sf-c-' + selected + ':' + step(i)]">sf-c-{{ selected }}:{{ step(i) }}</div>
      </div>
    </div>
    <div class="d:f:y">
      <div class="title">20 lightness gradient</div>
      <div>
        <div :class="['item', 'sf-c-' + selected]">sf-c-{{ selected }}</div>
        <div v-for="i in 19" :class="['item', 'sf-c-' + selected + ':' + step(i, 19)]">sf-c-{{ selected }}:{{ step(i, 19) }}</div>
      </div>
    </div>
  </div>
</div>

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

<style scoped>
.colors {
  display: flex;
  flex-flow: wrap row;
}
.colors > div {
  position:relative;

  --size: 20px;
  width: var(--size);
  height: var(--size);
}

.select > div {
  cursor:pointer;
}

.hover > div::after {
  position: absolute;
  z-index: 1;

  content: '';

  background: inherit;

  box-shadow: 0 0 5px black;
}
.hover > div:hover::after {
  --offset: -5px;

  top: var(--offset);
  left: var(--offset);
  right: var(--offset);
  bottom: var(--offset);
}

.item {
  font-size: 12px;
  padding: 0 0.5em;
}
</style>
