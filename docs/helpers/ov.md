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
<tr><th>X/Y</th><th>X</th><th>Y</th><th></th></tr>
</thead>
<tbody>
<tr><td><b>ov</b></td><td><b>ov:x</b></td><td><b>ov:y</b></td><td>auto</td></tr>
<tr><td><b>ov:h</b></td><td><b>ov:x:h</b></td><td><b>ov:y:h</b></td><td>hidden</td></tr>
<tr><td><b>ov:s</b></td><td><b>ov:x:s</b></td><td><b>ov:y:s</b></td><td>scroll</td></tr>
<tr><td><b>ov:v</b></td><td><b>ov:x:v</b></td><td><b>ov:y:v</b></td><td>visible</td></tr>
</tbody>
</table>

## ov

The `ov` class sets the overflow property to `auto`, allowing the content to be scrolled if necessary.

```html
<div class="ov">
  <div>Content that overflows...</div>
</div>
```

<div class="example ov" style="height: 100px;">
  <div style="width: 200%; height: 200px;">Content that overflows...</div>
</div>

## ov:h

The `ov:h` class sets the overflow property to `hidden`, clipping the overflowing content.

```html
<div class="ov:h">
  <div>Content that overflows...</div>
</div>
```

<div class="example ov:h" style="height: 100px;">
  <div style="width: 200%; height: 200px;">Content that overflows...</div>
</div>

## ov:s

The `ov:s` class sets the overflow property to `scroll`, adding scrollbars regardless of whether the content overflows.

```html
<div class="ov:s">
  <div>Content that overflows...</div>
</div>
```

<div class="example ov:s" style="height: 100px;">
  <div style="width: 200%; height: 200px;">Content that overflows...</div>
</div>

### ov:v

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

#### ov:x

The `ov:x` class sets the overflow-x property to `auto`.

```html
<div class="ov:x">
  <div>Content that overflows horizontally...</div>
</div>
```

<div class="example ov:x" style="height: 100px;">
  <div style="width: 200%; height: 200px;">Content that overflows...</div>
</div>


#### ov\:x\:h

The `ov:x:h` class sets the overflow-x property to `hidden`.

```html
<div class="ov:x:h">
  <div>Content that overflows horizontally...</div>
</div>
```

<div class="example ov:x:h" style="height: 100px;">
  <div style="width: 200%; height: 200px;">Content that overflows...</div>
</div>

#### ov\:x\:s

The `ov:x:s` class sets the overflow-x property to `scroll`.

```html
<div class="ov:x:s">
  <div>Content that overflows horizontally...</div>
</div>
```

<div class="example ov:x:s" style="height: 100px;">
  <div style="width: 200%; height: 200px;">Content that overflows...</div>
</div>

#### ov\:x\:v

The `ov:x:v` class sets the overflow-x property to `visible`.

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

#### ov:y

The `ov:y` class sets the overflow-y property to `auto`.

```html
<div class="ov:y">
  <div>Content that overflows vertically...</div>
</div>
```

<div class="example ov:y" style="height: 100px;">
  <div style="width: 200%; height: 200px;">Content that overflows...</div>
</div>

#### ov:y:h

The `ov:y:h` class sets the overflow-y property to `hidden`.

```html
<div class="ov:y:h">
  <div>Content that overflows vertically...</div>
</div>
```

<div class="example ov:y:h" style="height: 100px;">
  <div style="width: 200%; height: 200px;">Content that overflows...</div>
</div>

#### ov:y:s

The `ov:y:s` class sets the overflow-y property to `scroll`.

```html
<div class="ov:y:s">
  <div>Content that overflows vertically...</div>
</div>
```

<div class="example ov:y:s" style="height: 100px;">
  <div style="width: 200%; height: 200px;">Content that overflows...</div>
</div>

#### ov:y:v

The `ov:y:v` class sets the overflow-y property to `visible`.

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
