
# Grid

CSS Grid Layout is a powerful layout system available in CSS. It allows for the creation of complex, responsive web designs with ease. The `grid` utilities in this documentation are designed to simplify the use of the grid model by providing easy-to-use classes for various grid properties.

## Grid Display Classes

### d:g

The `d:g` class sets the display property of an element to `grid`, enabling grid layout.

```html
<div class="d:g">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

<div class="example d:g">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

### d:g:x

The `d:g:x` class sets the display property to `grid` and arranges items in a horizontal grid.

```html
<div class="d:g:x">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

<div class="example d:g:x">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

### d:g:y

The `d:g:y` class sets the display property to `grid` and arranges items in a vertical grid.

```html
<div class="d:g:y">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

<div class="example d:g:y">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

## Auto Classes

### auto.d:g

The `auto` class makes the grid items flexible, allowing them to grow and shrink as necessary to fill the container.

```html
<div class="auto d:g">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

<div class="example auto d:g">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

### auto.d:g:x

The `auto` class for horizontal grids.

```html
<div class="auto d:g:x">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

<div class="example auto d:g:x">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

### auto.d:g:y

The `auto` class for vertical grids.

```html
<div class="auto d:g:y">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

<div class="example auto d:g:y">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

## Wrap Classes

### wrap.d:g:x, wrap.d:g

These classes enable dense wrapping of grid items in a row.

```html
<div class="wrap d:g:x">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

<div class="example wrap d:g:x">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

### wrap.d:g:y

This class enables dense wrapping of grid items in a column.

```html
<div class="wrap d:g:y">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

<div class="example wrap d:g:y">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

## Order Classes

### order:0 to order:5

These classes set the `order` property, determining the order of the grid items.

```html
<div class="d:g">
  <div class="order:0">Item 1</div>
  <div class="order:1">Item 2</div>
  <div class="order:2">Item 3</div>
</div>
```

<div class="example d:g">
  <div class="order:0">Item 1</div>
  <div class="order:1">Item 2</div>
  <div class="order:2">Item 3</div>
</div>
