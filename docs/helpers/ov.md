---
title: Overflow
titleTemplate: Style-Forge.Helpers
description: "Versatile component for easy management of overflow properties in web apps."

head:
  - - meta
    - name: keywords
      content: style-forge, overflow, css overflow, styling, web development, frontend, overflow properties, responsive
  - - meta
    - property: og:title
      content: "Overflow | Style-Forge.Helpers"
  - - meta
    - property: og:description
      content: "Versatile component for easy management of overflow properties in web apps."
  - - meta
    - property: og:url
      content: https://style-forge.dev/helpers/overflow.html
  - - meta
    - name: twitter:title
      content: "Overflow | Style-Forge.Helpers"
  - - meta
    - name: twitter:description
      content: "Versatile component for easy management of overflow properties in web apps."
---

# Overflow

The overflow utility classes help manage the behavior of content that overflows its container. These classes allow you to control how overflowing content is handled on both the `x` and `y` axes.

## CSS Classes

<table class="d:t w">
<thead>
<tr><th colspan="3">Class</th><th>Description</th></tr>
<tr><th>*</th><th>X</th><th>Y</th><th></th></tr>
</thead>
<tbody>
<tr><td><code>ov</code></td><td><code>ov:x</code></td><td><code>ov:y</code></td><td>auto</td></tr>
<tr>
  <td><code>ov:h</code></td>
  <td><code>ov:x:h</code> / <code>ov:h:x</code></td>
  <td><code>ov:y:h</code> / <code>ov:h:y</code></td>
  <td>hidden</td>
</tr>
<tr>
  <td><code>ov:s</code></td>
  <td><code>ov:x:s</code> / <code>ov:s:x</code></td>
  <td><code>ov:y:s</code> / <code>ov:s:y</code></td>
  <td>scroll</td>
</tr>
<tr>
  <td><code>ov:v</code></td>
  <td><code>ov:x:v</code> / <code>ov:v:x</code></td>
  <td><code>ov:y:v</code> / <code>ov:v:y</code></td>
  <td>visible</td>
</tr>
</tbody>
</table>

## overflow: auto

The `ov` class sets the overflow property to `auto`, allowing the content to be scrolled if necessary.

```html
<div class="ov">
  <div>Content that overflows...</div>
</div>
```

<div class="example ov" style="height: 100px;">
  <div style="width: 200%; height: 200px;">Content that overflows...</div>
</div>

## overflow: hidden

The `ov:h` class sets the overflow property to `hidden`, clipping the overflowing content.

```html
<div class="ov:h">
  <div>Content that overflows...</div>
</div>
```

<div class="example ov:h" style="height: 100px;">
  <div style="width: 200%; height: 200px;">Content that overflows...</div>
</div>

## overflow: scroll

The `ov:s` class sets the overflow property to `scroll`, adding scrollbars regardless of whether the content overflows.

```html
<div class="ov:s">
  <div>Content that overflows...</div>
</div>
```

<div class="example ov:s" style="height: 100px;">
  <div style="width: 200%; height: 200px;">Content that overflows...</div>
</div>

### overflow: visible

The `ov:v` class sets the overflow property to `visible`, allowing the content to overflow the container.

```html
<div class="ov:v">
  <div>Content that overflows...</div>
</div>
```

<div class="ov">
  <div class="example ov:v" style="height: 100px;">
    <div style="width: 200%; height: 200px;">Content that overflows...</div>
  </div>
</div>

## X / Y Overflow

<div class="d:f:x auto wrap half">
<div class="d:f:y">

<div class="pos:s t">

### X

</div>

#### overflow-x: auto

The `ov:x` class sets the overflow-x property to `auto`.

```html
<div class="ov:x">
  <div>Content that overflows horizontally...</div>
</div>
```

<div class="example ov:x" style="height: 100px;">
  <div style="width: 200%; height: 200px;">Content that overflows...</div>
</div>


#### overflow-x: hidden

The `ov:x:h` / `ov:h:x` class sets the overflow-x property to `hidden`.

```html
<div class="ov:x:h">
  <div>Content that overflows horizontally...</div>
</div>
```

<div class="example ov:x:h" style="height: 100px;">
  <div style="width: 200%; height: 200px;">Content that overflows...</div>
</div>

#### overflow-x: scroll

The `ov:x:s` / `ov:s:x` class sets the overflow-x property to `scroll`.

```html
<div class="ov:x:s">
  <div>Content that overflows horizontally...</div>
</div>
```

<div class="example ov:x:s" style="height: 100px;">
  <div style="width: 200%; height: 200px;">Content that overflows...</div>
</div>

#### overflow-x: visible

The `ov:x:v` / `ov:v:x` class sets the overflow-x property to `visible`.

```html
<div class="ov:x:v">
  <div>Content that overflows horizontally...</div>
</div>
```

<div class="ov">
  <div class="example ov:x:v" style="height: 100px;">
    <div style="width: 200%; height: 200px;">Content that overflows...</div>
  </div>
</div>

</div>

<div class="d:f:y">
<div class="pos:s t">

### Y

</div>

#### overflow-y: auto

The `ov:y` class sets the overflow-y property to `auto`.

```html
<div class="ov:y">
  <div>Content that overflows vertically...</div>
</div>
```

<div class="example ov:y" style="height: 100px;">
  <div style="width: 200%; height: 200px;">Content that overflows...</div>
</div>

#### overflow-y: hidden

The `ov:y:h` / `ov:h:y` class sets the overflow-y property to `hidden`.

```html
<div class="ov:y:h">
  <div>Content that overflows vertically...</div>
</div>
```

<div class="example ov:y:h" style="height: 100px;">
  <div style="width: 200%; height: 200px;">Content that overflows...</div>
</div>

#### overflow-y: scroll

The `ov:y:s` / `ov:s:y` class sets the overflow-y property to `scroll`.

```html
<div class="ov:y:s">
  <div>Content that overflows vertically...</div>
</div>
```

<div class="example ov:y:s" style="height: 100px;">
  <div style="width: 200%; height: 200px;">Content that overflows...</div>
</div>

#### overflow-y: visible

The `ov:y:v` / `ov:v:y` class sets the overflow-y property to `visible`.

```html
<div class="ov:y:v">
  <div>Content that overflows vertically...</div>
</div>
```

<div class="ov">
  <div class="example ov:y:v" style="height: 100px;">
    <div style="width: 200%; height: 200px;">Content that overflows...</div>
  </div>
</div>

</div>
</div>
