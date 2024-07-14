---
title: Text
titleTemplate: Style-Forge.Helpers
description: "Text | Style-Forge.Helpers: versatile component for easy management of text styles and properties in web apps."

head:
  - - meta
    - name: keywords
      content: style-forge, text, text styles, css text, styling, web development, frontend, text properties, responsive
  - - meta
    - property: og:title
      content: "Text | Style-Forge.Helpers"
  - - meta
    - property: og:description
      content: "Text | Style-Forge.Helpers: versatile component for easy management of text styles and properties in web apps."
  - - meta
    - property: og:url
      content: https://style-forge.dev/helpers/text.html
  - - meta
    - name: twitter:title
      content: "Text | Style-Forge.Helpers"
  - - meta
    - name: twitter:description
      content: "Text | Style-Forge.Helpers: versatile component for easy management of text styles and properties in web apps."
---

# Text

The text utility classes help manage the font properties and text alignment of an element. These classes allow you to control the text properties easily.

## Font Family

<table class="d:t w">
<thead>
<tr><th>Class</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><b>ff:sans</b></td><td>font-family: system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'</td></tr>
<tr><td><b>ff:serif</b></td><td>font-family: Times, 'Times New Roman', Georgia, serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'</td></tr>
<tr><td><b>ff:monospace</b></td><td>font-family: 'Lucida Console', Courier, monospace, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'</td></tr>
<tr><td><b>ff:cursive</b></td><td>font-family: cursive</td></tr>
<tr><td><b>ff:fantasy</b></td><td>font-family: fantasy</td></tr>
<tr><td><b>ff:emoji</b></td><td>font-family: 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', emoji</td></tr>
<tr><td><b>ff:math</b></td><td>font-family: math</td></tr>
<tr><td><b>ff:fangsong</b></td><td>font-family: fangsong</td></tr>
</tbody>
</table>

### ff:sans

The `.ff:sans` class sets the font family to a sans-serif typeface.

<div class="d:f:x y:i:c x:c:c auto wrap half">

<div class="example w">
  <div class="ff:sans fz:h4 fw">
    Sans-Serif Font
  </div>
</div>

```html
<div class="ff:sans">
  Sans-Serif Font
</div>
```

</div>

### ff:serif

The `.ff:serif` class sets the font family to a serif typeface.

<div class="d:f:x y:i:c x:c:c auto wrap half">

<div class="example w">
  <div class="ff:serif fz:h4 fw">
    Serif Font
  </div>
</div>

```html
<div class="ff:serif">
  Serif Font
</div>
```

</div>

### ff:monospace

The `.ff:monospace` class sets the font family to a monospace typeface.

<div class="d:f:x y:i:c x:c:c auto wrap half">

<div class="example w">
  <div class="ff:monospace fz:h4 fw">
    Monospace Font
  </div>
</div>

```html
<div class="ff:monospace">
  Monospace Font
</div>
```

</div>

### ff:cursive

The `.ff:cursive` class sets the font family to a cursive typeface.

<div class="d:f:x y:i:c x:c:c auto wrap half">

<div class="example w">
  <div class="ff:cursive fz:h4 fw">
    Cursive Font
  </div>
</div>

```html
<div class="ff:cursive">
  Cursive Font
</div>
```

</div>

### ff:fantasy

The `.ff:fantasy` class sets the font family to a fantasy typeface.

<div class="d:f:x y:i:c x:c:c auto wrap half">

<div class="example w">
  <div class="ff:fantasy fz:h4 fw">
    Fantasy Font
  </div>
</div>

```html
<div class="ff:fantasy">
  Fantasy Font
</div>
```

</div>

### ff:emoji

The `.ff:emoji` class sets the font family to an emoji typeface.

<div class="d:f:x y:i:c x:c:c auto wrap half">

<div class="example w">
  <div class="ff:emoji fz:h4 fw">
    Emoji Font
  </div>
</div>

```html
<div class="ff:emoji">
  Emoji Font
</div>
```

</div>

### ff:math

The `.ff:math` class sets the font family to a math typeface.

<div class="d:f:x y:i:c x:c:c auto wrap half">

<div class="example w">
  <div class="ff:math fz:h4 fw">
    Math Font
  </div>
</div>

```html
<div class="ff:math">
  Math Font
</div>
```

</div>

### ff:fangsong

The `.ff:fangsong` class sets the font family to a fangsong typeface.

<div class="d:f:x y:i:c x:c:c auto wrap half">

<div class="example w">
  <div class="ff:fangsong fz:h4 fw">
    Fangsong Font
  </div>
</div>

```html
<div class="ff:fangsong">
  Fangsong Font
</div>
```

</div>

## Font Weight

<table class="d:t w">
<thead>
<tr><th>Class</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><b>fw</b></td><td>font-weight: <b>var(--sf-fw)</b> <code>400</code></td></tr>
<tr><td><b>fw:i</b></td><td>font-weight: inherit</td></tr>
<tr><td><b>fw:b</b></td><td>font-weight: <b>var(--sf-fw-bold)</b> <code>600</code></td></tr>
<tr><td><b>fw:s</b></td><td>font-weight: <b>var(--sf-fw-small)</b> <code>300</code></td></tr>
</tbody>
</table>

<div class="d:f:x y:i:c x:c:c auto wrap half">

<div class="example w">
  <div class="fw">
    Font Weight 400
  </div>
</div>

```html
<div class="fw">
  Font Weight 400
</div>
```

</div>

<div class="d:f:x y:i:c x:c:c auto wrap half">

<div class="example w">
  <div class="fw:i">
    Font Weight inherit
  </div>
</div>

```html
<div class="fw:i">
  Font Weight inherit
</div>
```

</div>

<div class="d:f:x y:i:c x:c:c auto wrap half">

<div class="example w">
  <div class="fw:b">
    Font Weight bold (600)
  </div>
</div>

```html
<div class="fw:b">
  Font Weight bold (600)
</div>
```

</div>

<div class="d:f:x y:i:c x:c:c auto wrap half">

<div class="example w">
  <div class="fw:s">
    Font Weight small (300)
  </div>
</div>

```html
<div class="fw:s">
  Font Weight small (300)
</div>
```

</div>

<table class="d:t w">
<thead>
<tr><th>Class</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><b>fw:1</b></td><td>font-weight: 100</td></tr>
<tr><td><b>fw:2</b></td><td>font-weight: 200</td></tr>
<tr><td><b>fw:3</b></td><td>font-weight: 300</td></tr>
<tr><td><b>fw:4</b></td><td>font-weight: 400</td></tr>
<tr><td><b>fw:5</b></td><td>font-weight: 500</td></tr>
<tr><td><b>fw:6</b></td><td>font-weight: 600</td></tr>
<tr><td><b>fw:7</b></td><td>font-weight: 700</td></tr>
<tr><td><b>fw:8</b></td><td>font-weight: 800</td></tr>
<tr><td><b>fw:9</b></td><td>font-weight: 900</td></tr>
</tbody>
</table>

### fw:1 to fw:9

These classes set the font weight from 100 to 900.

<div class="d:f:x y:i:c x:c:c auto wrap half">

<div class="example w">
  <div class="fw:1">
    Font Weight 100
  </div>
</div>

```html
<div class="fw:1">
  Font Weight 100
</div>
```

</div>
<div class="d:f:x y:i:c x:c:c auto wrap half">

<div class="example w">
  <div class="fw:2">
    Font Weight 200
  </div>
</div>

```html
<div class="fw:2">
  Font Weight 200
</div>
```

</div>
<div class="d:f:x y:i:c x:c:c auto wrap half">

<div class="example w">
  <div class="fw:3">
    Font Weight 300
  </div>
</div>

```html
<div class="fw:3">
  Font Weight 300
</div>
```

</div>
<div class="d:f:x y:i:c x:c:c auto wrap half">

<div class="example w">
  <div class="fw:4">
    Font Weight 400
  </div>
</div>

```html
<div class="fw:4">
  Font Weight 400
</div>
```

</div>
<div class="d:f:x y:i:c x:c:c auto wrap half">

<div class="example w">
  <div class="fw:5">
    Font Weight 500
  </div>
</div>

```html
<div class="fw:5">
  Font Weight 500
</div>
```

</div>
<div class="d:f:x y:i:c x:c:c auto wrap half">

<div class="example w">
  <div class="fw:6">
    Font Weight 600
  </div>
</div>

```html
<div class="fw:6">
  Font Weight 600
</div>
```

</div>
<div class="d:f:x y:i:c x:c:c auto wrap half">

<div class="example w">
  <div class="fw:7">
    Font Weight 700
  </div>
</div>

```html
<div class="fw:7">
  Font Weight 700
</div>
```

</div>
<div class="d:f:x y:i:c x:c:c auto wrap half">

<div class="example w">
  <div class="fw:8">
    Font Weight 800
  </div>
</div>

```html
<div class="fw:8">
  Font Weight 800
</div>
```

</div>
<div class="d:f:x y:i:c x:c:c auto wrap half">

<div class="example w">
  <div class="fw:9">
    Font Weight 900
  </div>
</div>

```html
<div class="fw:9">
  Font Weight 900
</div>
```

</div>

### Named Font Weight Classes

These classes set the font weight using named values.

::: info
These classes are static / not change
:::

<table class="d:t w">
<thead>
<tr><th>Class</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><b>fw:thin</b></td><td>font-weight: 100</td></tr>
<tr><td><b>fw:extra-light</b> / <b>fw:ultra-light</b></td><td>font-weight: 200</td></tr>
<tr><td><b>fw:light</b></td><td>font-weight: 300</td></tr>
<tr><td><b>fw:normal</b></td><td>font-weight: 400</td></tr>
<tr><td><b>fw:medium</b></td><td>font-weight: 500</td></tr>
<tr><td><b>fw:semi-bold</b> / <b>fw:demi-bold</b></td><td>font-weight: 600</td></tr>
<tr><td><b>fw:bold</b></td><td>font-weight: 700</td></tr>
<tr><td><b>fw:extra-bold</b> / <b>fw:ultra-bold</b></td><td>font-weight: 800</td></tr>
<tr><td><b>fw:black</b> / <b>fw:heavy</b></td><td>font-weight: 900</td></tr>
</tbody>
</table>

<div class="d:f:x y:i:c x:c:c auto wrap half">

<div class="example w">
  <div class="fw:thin">
    Thin
  </div>
</div>

```html
<div class="fw:thin">
  Thin
</div>
```

</div>
<div class="d:f:x y:i:c x:c:c auto wrap half">

<div class="example w">
  <div class="fw:extra-light">
    Extra-light
  </div>
</div>

```html
<div class="fw:extra-light">
  Extra-light
</div>
```

</div>
<div class="d:f:x y:i:c x:c:c auto wrap half">

<div class="example w">
  <div class="fw:light">
    Light
  </div>
</div>

```html
<div class="fw:light">
  Light
</div>
```

</div>
<div class="d:f:x y:i:c x:c:c auto wrap half">

<div class="example w">
  <div class="fw:normal">
    Normal
  </div>
</div>

```html
<div class="fw:normal">
  Normal
</div>
```

</div>
<div class="d:f:x y:i:c x:c:c auto wrap half">

<div class="example w">
  <div class="fw:medium">
    Medium
  </div>
</div>

```html
<div class="fw:medium">
  Medium
</div>
```

</div>
<div class="d:f:x y:i:c x:c:c auto wrap half">

<div class="example w">
  <div class="fw:semi-bold">
    Semi-Bold
  </div>
</div>

```html
<div class="fw:semi-bold">
  Semi-Bold
</div>
```

</div>
<div class="d:f:x y:i:c x:c:c auto wrap half">

<div class="example w">
  <div class="fw:bold">
    Bold
  </div>
</div>

```html
<div class="fw:bold">
  Bold
</div>
```

</div>
<div class="d:f:x y:i:c x:c:c auto wrap half">

<div class="example w">
  <div class="fw:extra-bold">
    Extra-Bold
  </div>
</div>

```html
<div class="fw:extra-bold">
  Extra-Bold
</div>
```

</div>
<div class="d:f:x y:i:c x:c:c auto wrap half">

<div class="example w">
  <div class="fw:black">
    Black
  </div>
</div>

```html
<div class="fw:black">
  Black
</div>
```

</div>

## Font Size

<table class="d:t w">
<thead>
<tr><th>Class</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><b>fz:h1</b></td><td>

font-size: <b>var(--sf-h1)</b>; <code>3rem</code><br />
font-weight: <b>700</b>;

</td></tr>
<tr><td><b>fz:h2</b></td><td>

font-size: <b>var(--sf-h2)</b>; <code>2.5rem</code><br />
font-weight: <b>700</b>;

</td></tr>
<tr><td><b>fz:h3</b></td><td>

font-size: <b>var(--sf-h3)</b>; <code>2rem</code><br />
font-weight: <b>600</b>;

</td></tr>
<tr><td><b>fz:h4</b></td><td>

font-size: <b>var(--sf-h4)</b>; <code>1.5rem</code><br />
font-weight: <b>600</b>;

</td></tr>
<tr><td><b>fz:h5</b></td><td>

font-size: <b>var(--sf-h5)</b>; <code>1.25rem</code><br />
font-weight: <b>500</b>;

</td></tr>
<tr><td><b>fz:h6</b></td><td>

font-size: <b>var(--sf-h6)</b>; <code>1rem</code><br />
font-weight: <b>500</b>;

</td></tr>
<tr><td><b>fz:i</b></td><td>

font-size: <b>inherit</b>;

</td></tr>
<tr><td><b>fz</b></td><td>

font-size: <b>var(--sf-fz)</b>; <code>1rem</code><br />
font-weight: <b>400</b>;

</td></tr>
<tr><td><b>fz:s</b></td><td>

font-size: var(--sf-fz-small); <code>0.75rem</code><br />
font-weight: <b>300</b>;

</td></tr>
</tbody>
</table>

<div class="d:f:x y:i:c x:c:c auto wrap half">

<div class="example w">
  <div class="fz:h1">
    H1
  </div>
</div>

```html
<div class="fz:h1">
  H1
</div>
```

</div>
<div class="d:f:x y:i:c x:c:c auto wrap half">

<div class="example w">
  <div class="fz:h2">
    H2
  </div>
</div>

```html
<div class="fz:h2">
  H2
</div>
```

</div>
<div class="d:f:x y:i:c x:c:c auto wrap half">

<div class="example w">
  <div class="fz:h3">
    H3
  </div>
</div>

```html
<div class="fz:h3">
  H3
</div>
```

</div>
<div class="d:f:x y:i:c x:c:c auto wrap half">

<div class="example w">
  <div class="fz:h4">
    H4
  </div>
</div>

```html
<div class="fz:h4">
  H4
</div>
```

</div>
<div class="d:f:x y:i:c x:c:c auto wrap half">

<div class="example w">
  <div class="fz:h5">
    H5
  </div>
</div>

```html
<div class="fz:h5">
  H5
</div>
```

</div>
<div class="d:f:x y:i:c x:c:c auto wrap half">

<div class="example w">
  <div class="fz:h6">
    H6
  </div>
</div>

```html
<div class="fz:h6">
  H6
</div>
```

</div>
<div class="d:f:x y:i:c x:c:c auto wrap half">

<div class="example w">
  <div class="fz:i">
    Inherit
  </div>
</div>

```html
<div class="fz:i">
  Inherit
</div>
```

</div>
<div class="d:f:x y:i:c x:c:c auto wrap half">

<div class="example w">
  <div class="fz">
    Normal
  </div>
</div>

```html
<div class="fz">
  Normal
</div>
```

</div>
<div class="d:f:x y:i:c x:c:c auto wrap half">

<div class="example w">
  <div class="fz:s">
    Small
  </div>
</div>

```html
<div class="fz:s">
  Small
</div>
```

</div>

## Text Align

<table class="d:t w">
<thead>
<tr><th>Class</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><b>ta:c</b></td><td>text-align: center</td></tr>
<tr><td><b>ta:e</b></td><td>text-align: end</td></tr>
<tr><td><b>ta:j</b></td><td>text-align: justify</td></tr>
<tr><td><b>ta:l</b></td><td>text-align: left</td></tr>
<tr><td><b>ta:r</b></td><td>text-align: right</td></tr>
<tr><td><b>ta:s</b></td><td>text-align: start</td></tr>
</tbody>
</table>

<div class="d:f:x y:i:c x:c:c auto wrap half">

<div class="example w">
  <div class="ta:c">
    center
  </div>
</div>

```html
<div class="ta:c">
  center
</div>
```

</div>
<div class="d:f:x y:i:c x:c:c auto wrap half">

<div class="example w">
  <div class="ta:e">
    end
  </div>
</div>

```html
<div class="ta:e">
  end
</div>
```

</div>
<div class="d:f:x y:i:c x:c:c auto wrap half">

<div class="example w">
  <div class="ta:j">
    justify
  </div>
</div>

```html
<div class="ta:j">
  justify
</div>
```

</div>
<div class="d:f:x y:i:c x:c:c auto wrap half">

<div class="example w">
  <div class="ta:l">
    left
  </div>
</div>

```html
<div class="ta:l">
  left
</div>
```

</div>
<div class="d:f:x y:i:c x:c:c auto wrap half">

<div class="example w">
  <div class="ta:r">
    right
  </div>
</div>

```html
<div class="ta:r">
  right
</div>
```

</div>
<div class="d:f:x y:i:c x:c:c auto wrap half">

<div class="example w">
  <div class="ta:s">
    start
  </div>
</div>

```html
<div class="ta:s">
  start
</div>
```

</div>

## White-space

<table class="d:t w">
<thead>
<tr><th>Class</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><b>whs:n</b></td><td>white-space: normal</td></tr>
<tr><td><b>whs:nw</b></td><td>white-space: nowrap</td></tr>
<tr><td><b>whs:p</b></td><td>white-space: pre</td></tr>
<tr><td><b>whs:pl</b></td><td>white-space: pre-line</td></tr>
<tr><td><b>whs:pw</b></td><td>white-space: pre-wrap</td></tr>
</tbody>
</table>

<div class="d:f:x y:i:c x:c:c auto wrap half">

<div class="example w">
  <div class="whs:n">
    normal
  </div>
</div>

```html
<div class="whs:n">
  normal
</div>
```

</div>
<div class="d:f:x y:i:c x:c:c auto wrap half">

<div class="example w">
  <div class="whs:nw">
    nowrap
  </div>
</div>

```html
<div class="whs:nw">
  nowrap
</div>
```

</div>
<div class="d:f:x y:i:c x:c:c auto wrap half">

<div class="example w">
  <div class="whs:p">
    pre
  </div>
</div>

```html
<div class="whs:p">
  pre
</div>
```

</div>
<div class="d:f:x y:i:c x:c:c auto wrap half">

<div class="example w">
  <div class="whs:pl">
    pre-line
  </div>
</div>

```html
<div class="whs:pl">
  pre-line
</div>
```

</div>
<div class="d:f:x y:i:c x:c:c auto wrap half">

<div class="example w">
  <div class="whs:pw">
    pre-wrap
  </div>
</div>

```html
<div class="whs:pw">
  pre-wrap
</div>
```

</div>

## Line-height

<table class="d:t w">
<thead>
<tr><th>Class</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><b>lh</b></td><td>
line-height: <b>var(--sf-lh)</b> <code>0.8</code><br />
<div class="op:70 fz:s lh:i">tags: <code>All</code></div>
</td></tr>
<tr><td><b>lh:1</b></td><td>
line-height: 1<br />
<div class="op:70 fz:s lh:i">tags: <code>None</code></div>
</td></tr>
<tr><td><b>lh:i</b></td><td>
line-height: inherit<br />
<div class="op:70 fz:s lh:i">tags: <code>None</code></div>
</td></tr>
<tr><td><b>lh:n</b></td><td>
line-height: normal<br />
<div class="op:70 fz:s lh:i">tags: <code>None</code></div>
</td></tr>
<tr><td><b>lh:t</b></td><td>
line-height: <b>var(--sf-lh-txt)</b> <code>1.5</code><br />
<div class="op:70 fz:s lh:i">
  tags: <code>address</code>, <code>blockquote</code>, <code>dd</code>, 
  <code>dt</code>, 
  <code>li</code>, 
  <code>p</code>
</div>
</td></tr>
</tbody>
</table>

<div class="d:f:x y:i:c x:c:c auto wrap half">

<div class="example w">
  <div class="lh">
    line-height
  </div>
</div>

```html
<div class="lh">
  line-height
</div>
```

</div>

<div class="d:f:x y:i:c x:c:c auto wrap half">

<div class="example w">
  <div class="lh:1">
    line-height: 1
  </div>
</div>

```html
<div class="lh:1">
  line-height: 1
</div>
```

</div>

<div class="d:f:x y:i:c x:c:c auto wrap half">

<div class="example w">
  <div class="lh:i">
    line-height (inherit)
  </div>
</div>

```html
<div class="lh:i">
  line-height (inherit)
</div>
```

</div>

<div class="d:f:x y:i:c x:c:c auto wrap half">

<div class="example w">
  <div class="lh:n">
    line-height (normal)
  </div>
</div>

```html
<div class="lh:n">
  line-height (normal)
</div>
```

</div>

<div class="d:f:x y:i:c x:c:c auto wrap half">

<div class="example w">
  <div class="lh:t">
    line-height (text)
  </div>
</div>

```html
<div class="lh:t">
  line-height (text)
</div>
```

</div>
