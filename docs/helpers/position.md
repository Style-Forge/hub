---
title: Position
titleTemplate: Style-Forge.Helpers
description: "Versatile component for easy management of element positioning in web apps."

head:
  - - meta
    - name: keywords
      content: style-forge, position, element positioning, css positioning, styling, web development, frontend, responsive
  - - meta
    - property: og:title
      content: "Position | Style-Forge.Helpers"
  - - meta
    - property: og:description
      content: "Versatile component for easy management of element positioning in web apps."
  - - meta
    - property: og:url
      content: https://style-forge.dev/helpers/position.html
  - - meta
    - name: twitter:title
      content: "Position | Style-Forge.Helpers"
  - - meta
    - name: twitter:description
      content: "Versatile component for easy management of element positioning in web apps."
---

# Position

The position utility classes help manage the positioning of an element. These classes allow you to control the position properties easily.

## CSS Classes

<table class="d:t w">
<thead>
<tr><th colspan="2"></th><th colspan="2">Support</th></tr>
<tr><th>Class</th><th>Description</th><th>Position class (1)</th><th>Full class (2)</th></tr>
</thead>
<tbody>
<tr><td><b>pos:r</b></td><td>relative</td><td>✅</td><td>❌</td></tr>
<tr><td><b>pos:a</b></td><td>absolute</td><td>✅</td><td>✅</td></tr>
<tr><td><b>pos:s</b></td><td>sticky</td><td>✅</td><td>❌</td></tr>
<tr><td><b>pos:f</b></td><td>fixed</td><td>✅</td><td>✅</td></tr>
<tr><td><b>pos:static</b></td><td>static</td><td>❌</td><td>❌</td></tr>
</tbody>
</table>

<div class="d:f:x auto wrap half">

<table class="d:t w">
<thead>
<tr><th colspan="2">Position class (1)</th></tr>
<tr><th>Class</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><b>t</b></td><td>top: 0</td></tr>
<tr><td><b>l</b></td><td>left: 0</td></tr>
<tr><td><b>r</b></td><td>right: 0</td></tr>
<tr><td><b>b</b></td><td>bottom: 0</td></tr>
</tbody>
</table>

<table class="d:t w">
<thead>
<tr><th colspan="2">Position class (auto)</th></tr>
<tr><th>Class</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><b>t:a</b></td><td>top: auto</td></tr>
<tr><td><b>l:a</b></td><td>left: auto</td></tr>
<tr><td><b>r:a</b></td><td>right: auto</td></tr>
<tr><td><b>b:a</b></td><td>bottom: auto</td></tr>
</tbody>
</table>

<table class="d:t w">
<thead>
<tr><th colspan="2">Position class (inherit)</th></tr>
<tr><th>Class</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><b>t:i</b></td><td>top: inherit</td></tr>
<tr><td><b>l:i</b></td><td>left: inherit</td></tr>
<tr><td><b>r:i</b></td><td>right: inherit</td></tr>
<tr><td><b>b:i</b></td><td>bottom: inherit</td></tr>
</tbody>
</table>

<table class="d:t w">
<thead>
<tr><th colspan="2">Full class (2)</th></tr>
<tr><th>Class</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><b>full</b></td><td>
top: 0;<br />
left: 0;<br />
right: 0;<br />
bottom: 0;
</td></tr>
</tbody>
</table>

</div>

## relative

The `pos:r` class sets the position property to `relative`.

<div class="example">
  <div class="pos:r">
    Relatively Positioned
  </div>
</div>

```html
<div class="pos:r">
  Relatively Positioned
</div>
```

## absolute

The `pos:a` class sets the position property to `absolute`.

<div class="example">
  <div class="pos:a">
    Absolutely Positioned
  </div>
</div>

```html
<div class="pos:a">
  Absolutely Positioned
</div>
```

## sticky

The `pos:s` class sets the position property to `sticky`.

<div class="ov" style="height: 100px">
  <div class="example" style="width: 1000px; height: 1000px">
    <div class="pos:s t" style="width: 150px">
      Sticky Position
    </div>
  </div>
</div>

```html
<div class="pos:s">
  Sticky Position
</div>
```

## fixed

The `pos:f` class sets the position property to `fixed`.

```html
<div class="pos:f">
  Fixed Position
</div>
```

## static

The `pos:static` class sets the position property to `static`.

<div class="example">
  <div class="pos:static">
    Statically Positioned
  </div>
</div>

```html
<div class="pos:static">
  Statically Positioned
</div>
```

## full

The `full` class sets the position to cover the entire container for absolutely or fixed positioned elements.

<div class="example">
  <div class="pos:a full">
    Full Position Absolute
  </div>
</div>

```html
<div class="pos:a full">
  Full Position Absolute
</div>
```
