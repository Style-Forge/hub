
# Flex

Flexbox, or Flexible Box Layout, is a layout model that allows elements within a container to be automatically arranged depending on the available space. The `flex` utilities in this documentation are designed to simplify the use of the flexbox model by providing easy-to-use classes for various flex properties.

## Flex Display Classes

### d:f

The `d:f` class sets the display property of an element to `flex`, enabling flexbox layout.

```html
<div class="d:f">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

<div class="example d:f">
  <div>Item 1</div>
  <div>Item 2</div>
</div>


### d:f:x

The `d:f:x` class sets the display property to `flex` and arranges items in a horizontal row.

```html
<div class="d:f:x">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

<div class="example d:f:x">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

### d:f:y

The `d:f:y` class sets the display property to `flex` and arranges items in a vertical column.

```html
<div class="d:f:y">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

<div class="example d:f:y">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

## Wrap Classes

### wrap.d:f:x, wrap.d:f

These classes enable wrapping of flex items in a row.

```html
<div class="wrap d:f:x">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

<div class="example wrap d:f:x">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

### wrap.d:f:y

This class enables wrapping of flex items in a column.

```html
<div class="wrap d:f:y">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

<div class="example wrap d:f:y">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

## Reverse Classes

### reverse.d:f

The `reverse.d:f` class reverses the order of flex items.

```html
<div class="reverse d:f">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

<div class="example reverse d:f">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

### reverse.d:f:x

This class reverses the order of flex items in a horizontal row.

```html
<div class="reverse d:f:x">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

<div class="example reverse d:f:x">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

### reverse.d:f:y

This class reverses the order of flex items in a vertical column.

```html
<div class="reverse d:f:y">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

<div class="example reverse d:f:y">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

### reverse.wrap.d:f, reverse.wrap.d:f:x, reverse.wrap.d:f:y

These classes combine the reverse and wrap properties for flex items in both row and column layouts.

```html
<div class="reverse wrap d:f:x">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

<div class="example reverse wrap d:f:x">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

## Flex Auto and None

### auto

The `auto` class makes the flex items flexible, allowing them to grow and shrink as necessary to fill the container.

```html
<div class="d:f auto">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

<div class="example d:f auto">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

### none

The `none` class makes the flex items inflexible, maintaining their original size regardless of the container's available space.

```html
<div class="d:f none">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

<div class="example d:f none">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

### flex:none

The `flex:none` class applies the `flex: none` property directly to an element.

```html
<div class="d:f">
  <div class="flex:none">Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

<div class="example d:f">
  <div class="flex:none">Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

## Flex Grow

### grow:0 to grow:5

These classes set the `flex-grow` property, determining how much the flex item will grow relative to others.

```html
<div class="d:f">
  <div class="grow:0">Item 1</div>
  <div class="grow:1">Item 2</div>
  <div class="grow:2">Item 3</div>
</div>
```

<div class="example d:f">
  <div class="grow:0">Item 1</div>
  <div class="grow:1">Item 2</div>
  <div class="grow:2">Item 3</div>
</div>

## Flex Shrink

### shrink:0 to shrink:5

These classes set the `flex-shrink` property, determining how much the flex item will shrink relative to others.

```html
<div class="d:f">
  <div class="shrink:0">Item 1</div>
  <div class="shrink:1">Item 2</div>
  <div class="shrink:2">Item 3</div>
</div>
```

<div class="example d:f">
  <div class="shrink:0">Item 1</div>
  <div class="shrink:1">Item 2</div>
  <div class="shrink:2">Item 3</div>
</div>

## Flex Basis

### basis:0, basis:100, basis:auto

These classes set the `flex-basis` property, defining the initial main size of a flex item.

```html
<div class="d:f">
  <div class="basis:0">Item 1</div>
  <div class="basis:100">Item 2</div>
  <div class="basis:auto">Item 3</div>
</div>
```

<div class="example d:f">
  <div class="basis:0">Item 1</div>
  <div class="basis:100">Item 2</div>
  <div class="basis:auto">Item 3</div>
</div>

<style>
.flex\:none {
  flex: none;
}
.example {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}
</style>
