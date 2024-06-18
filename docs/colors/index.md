
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

## Web (16 colors) - `default`

<div class="colors">
  <div class="aqua"></div>
  <div class="black"></div>
  <div class="blue"></div>
  <div class="fuchsia"></div>
  <div class="gray"></div>
  <div class="green"></div>
  <div class="lime"></div>
  <div class="maroon"></div>
  <div class="navy"></div>
  <div class="olive"></div>
  <div class="purple"></div>
  <div class="red"></div>
  <div class="silver"></div>
  <div class="teal"></div>
  <div class="white"></div>
  <div class="yellow"></div>
</div>

## 148 colors - (10/20) lightness gradient

<div class="colors">
  <div class="aliceblue"></div>
  <div class="antiquewhite"></div>
  <div class="aqua"></div>
  <div class="aquamarine"></div>
  <div class="azure"></div>
  <div class="beige"></div>
  <div class="bisque"></div>
  <div class="black"></div>
  <div class="blanchedalmond"></div>
  <div class="blue"></div>
  <div class="blueviolet"></div>
  <div class="brown"></div>
  <div class="burlywood"></div>
  <div class="cadetblue"></div>
  <div class="chartreuse"></div>
  <div class="chocolate"></div>
  <div class="coral"></div>
  <div class="cornflowerblue"></div>
  <div class="cornsilk"></div>
  <div class="crimson"></div>
  <div class="cyan"></div>
  <div class="darkblue"></div>
  <div class="darkcyan"></div>
  <div class="darkgoldenrod"></div>
  <div class="darkgray"></div>
  <div class="darkgrey"></div>
  <div class="darkgreen"></div>
  <div class="darkkhaki"></div>
  <div class="darkmagenta"></div>
  <div class="darkolivegreen"></div>
  <div class="darkorange"></div>
  <div class="darkorchid"></div>
  <div class="darkred"></div>
  <div class="darksalmon"></div>
  <div class="darkseagreen"></div>
  <div class="darkslateblue"></div>
  <div class="darkslategray"></div>
  <div class="darkslategrey"></div>
  <div class="darkturquoise"></div>
  <div class="darkviolet"></div>
  <div class="deeppink"></div>
  <div class="deepskyblue"></div>
  <div class="dimgray"></div>
  <div class="dimgrey"></div>
  <div class="dodgerblue"></div>
  <div class="firebrick"></div>
  <div class="floralwhite"></div>
  <div class="forestgreen"></div>
  <div class="fuchsia"></div>
  <div class="gainsboro"></div>
  <div class="ghostwhite"></div>
  <div class="gold"></div>
  <div class="goldenrod"></div>
  <div class="gray"></div>
  <div class="grey"></div>
  <div class="green"></div>
  <div class="greenyellow"></div>
  <div class="honeydew"></div>
  <div class="hotpink"></div>
  <div class="indianred"></div>
  <div class="indigo"></div>
  <div class="ivory"></div>
  <div class="khaki"></div>
  <div class="lavender"></div>
  <div class="lavenderblush"></div>
  <div class="lawngreen"></div>
  <div class="lemonchiffon"></div>
  <div class="lightblue"></div>
  <div class="lightcoral"></div>
  <div class="lightcyan"></div>
  <div class="lightgoldenrodyellow"></div>
  <div class="lightgray"></div>
  <div class="lightgrey"></div>
  <div class="lightgreen"></div>
  <div class="lightpink"></div>
  <div class="lightsalmon"></div>
  <div class="lightseagreen"></div>
  <div class="lightskyblue"></div>
  <div class="lightslategray"></div>
  <div class="lightslategrey"></div>
  <div class="lightsteelblue"></div>
  <div class="lightyellow"></div>
  <div class="lime"></div>
  <div class="limegreen"></div>
  <div class="linen"></div>
  <div class="magenta"></div>
  <div class="maroon"></div>
  <div class="mediumaquamarine"></div>
  <div class="mediumblue"></div>
  <div class="mediumorchid"></div>
  <div class="mediumpurple"></div>
  <div class="mediumseagreen"></div>
  <div class="mediumslateblue"></div>
  <div class="mediumspringgreen"></div>
  <div class="mediumturquoise"></div>
  <div class="mediumvioletred"></div>
  <div class="midnightblue"></div>
  <div class="mintcream"></div>
  <div class="mistyrose"></div>
  <div class="moccasin"></div>
  <div class="navajowhite"></div>
  <div class="navy"></div>
  <div class="oldlace"></div>
  <div class="olive"></div>
  <div class="olivedrab"></div>
  <div class="orange"></div>
  <div class="orangered"></div>
  <div class="orchid"></div>
  <div class="palegoldenrod"></div>
  <div class="palegreen"></div>
  <div class="paleturquoise"></div>
  <div class="palevioletred"></div>
  <div class="papayawhip"></div>
  <div class="peachpuff"></div>
  <div class="peru"></div>
  <div class="pink"></div>
  <div class="plum"></div>
  <div class="powderblue"></div>
  <div class="purple"></div>
  <div class="rebeccapurple"></div>
  <div class="red"></div>
  <div class="rosybrown"></div>
  <div class="royalblue"></div>
  <div class="saddlebrown"></div>
  <div class="salmon"></div>
  <div class="sandybrown"></div>
  <div class="seagreen"></div>
  <div class="seashell"></div>
  <div class="sienna"></div>
  <div class="silver"></div>
  <div class="skyblue"></div>
  <div class="slateblue"></div>
  <div class="slategray"></div>
  <div class="slategrey"></div>
  <div class="snow"></div>
  <div class="springgreen"></div>
  <div class="steelblue"></div>
  <div class="tan"></div>
  <div class="teal"></div>
  <div class="thistle"></div>
  <div class="tomato"></div>
  <div class="turquoise"></div>
  <div class="violet"></div>
  <div class="wheat"></div>
  <div class="white"></div>
  <div class="whitesmoke"></div>
  <div class="yellow"></div>
  <div class="yellowgreen"></div>
</div>

<style>
.colors {
  display: flex;
  flex-flow: wrap row;
}
.colors > div {
  --size: 20px;
  width: var(--size);
  height: var(--size);
}

.aliceblue { background: aliceblue }
.antiquewhite { background: antiquewhite }
.aqua { background: aqua }
.aquamarine { background: aquamarine }
.azure { background: azure }
.beige { background: beige }
.bisque { background: bisque }
.black { background: black }
.blanchedalmond { background: blanchedalmond }
.blue { background: blue }
.blueviolet { background: blueviolet }
.brown { background: brown }
.burlywood { background: burlywood }
.cadetblue { background: cadetblue }
.chartreuse { background: chartreuse }
.chocolate { background: chocolate }
.coral { background: coral }
.cornflowerblue { background: cornflowerblue }
.cornsilk { background: cornsilk }
.crimson { background: crimson }
.cyan { background: cyan }
.darkblue { background: darkblue }
.darkcyan { background: darkcyan }
.darkgoldenrod { background: darkgoldenrod }
.darkgray { background: darkgray }
.darkgrey { background: darkgrey }
.darkgreen { background: darkgreen }
.darkkhaki { background: darkkhaki }
.darkmagenta { background: darkmagenta }
.darkolivegreen { background: darkolivegreen }
.darkorange { background: darkorange }
.darkorchid { background: darkorchid }
.darkred { background: darkred }
.darksalmon { background: darksalmon }
.darkseagreen { background: darkseagreen }
.darkslateblue { background: darkslateblue }
.darkslategray { background: darkslategray }
.darkslategrey { background: darkslategrey }
.darkturquoise { background: darkturquoise }
.darkviolet { background: darkviolet }
.deeppink { background: deeppink }
.deepskyblue { background: deepskyblue }
.dimgray { background: dimgray }
.dimgrey { background: dimgrey }
.dodgerblue { background: dodgerblue }
.firebrick { background: firebrick }
.floralwhite { background: floralwhite }
.forestgreen { background: forestgreen }
.fuchsia { background: fuchsia }
.gainsboro { background: gainsboro }
.ghostwhite { background: ghostwhite }
.gold { background: gold }
.goldenrod { background: goldenrod }
.gray { background: gray }
.grey { background: grey }
.green { background: green }
.greenyellow { background: greenyellow }
.honeydew { background: honeydew }
.hotpink { background: hotpink }
.indianred { background: indianred }
.indigo { background: indigo }
.ivory { background: ivory }
.khaki { background: khaki }
.lavender { background: lavender }
.lavenderblush { background: lavenderblush }
.lawngreen { background: lawngreen }
.lemonchiffon { background: lemonchiffon }
.lightblue { background: lightblue }
.lightcoral { background: lightcoral }
.lightcyan { background: lightcyan }
.lightgoldenrodyellow { background: lightgoldenrodyellow }
.lightgray { background: lightgray }
.lightgrey { background: lightgrey }
.lightgreen { background: lightgreen }
.lightpink { background: lightpink }
.lightsalmon { background: lightsalmon }
.lightseagreen { background: lightseagreen }
.lightskyblue { background: lightskyblue }
.lightslategray { background: lightslategray }
.lightslategrey { background: lightslategrey }
.lightsteelblue { background: lightsteelblue }
.lightyellow { background: lightyellow }
.lime { background: lime }
.limegreen { background: limegreen }
.linen { background: linen }
.magenta { background: magenta }
.maroon { background: maroon }
.mediumaquamarine { background: mediumaquamarine }
.mediumblue { background: mediumblue }
.mediumorchid { background: mediumorchid }
.mediumpurple { background: mediumpurple }
.mediumseagreen { background: mediumseagreen }
.mediumslateblue { background: mediumslateblue }
.mediumspringgreen { background: mediumspringgreen }
.mediumturquoise { background: mediumturquoise }
.mediumvioletred { background: mediumvioletred }
.midnightblue { background: midnightblue }
.mintcream { background: mintcream }
.mistyrose { background: mistyrose }
.moccasin { background: moccasin }
.navajowhite { background: navajowhite }
.navy { background: navy }
.oldlace { background: oldlace }
.olive { background: olive }
.olivedrab { background: olivedrab }
.orange { background: orange }
.orangered { background: orangered }
.orchid { background: orchid }
.palegoldenrod { background: palegoldenrod }
.palegreen { background: palegreen }
.paleturquoise { background: paleturquoise }
.palevioletred { background: palevioletred }
.papayawhip { background: papayawhip }
.peachpuff { background: peachpuff }
.peru { background: peru }
.pink { background: pink }
.plum { background: plum }
.powderblue { background: powderblue }
.purple { background: purple }
.rebeccapurple { background: rebeccapurple }
.red { background: red }
.rosybrown { background: rosybrown }
.royalblue { background: royalblue }
.saddlebrown { background: saddlebrown }
.salmon { background: salmon }
.sandybrown { background: sandybrown }
.seagreen { background: seagreen }
.seashell { background: seashell }
.sienna { background: sienna }
.silver { background: silver }
.skyblue { background: skyblue }
.slateblue { background: slateblue }
.slategray { background: slategray }
.slategrey { background: slategrey }
.snow { background: snow }
.springgreen { background: springgreen }
.steelblue { background: steelblue }
.tan { background: tan }
.teal { background: teal }
.thistle { background: thistle }
.tomato { background: tomato }
.turquoise { background: turquoise }
.violet { background: violet }
.wheat { background: wheat }
.white { background: white }
.whitesmoke { background: whitesmoke }
.yellow { background: yellow }
.yellowgreen { background: yellowgreen }
</style>
