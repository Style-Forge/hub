# Display

This section provides a comprehensive guide to the display utility classes. These utilities allow for precise control over the display property of HTML elements, facilitating various layout and visibility adjustments essential for modern web development. Each utility class corresponds to a specific CSS display property, enabling developers to quickly apply the desired styles without writing custom CSS.

## CSS Classes

The display utilities are categorized based on the type of display behavior they control. Here’s a detailed breakdown of each category and the corresponding utility classes:

<div class="d:f x:c:c wrap">
<table>
<thead>
<tr><th>Class</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><b>d:b</b> / <b>show</b></td><td>block</td></tr>
<tr><td><b>d:n</b> / <b>hide</b></td><td>none</td></tr>
<tr><td><b>d:f</b></td><td>flex</td></tr>
<tr><td><b>d:g</b></td><td>grid</td></tr>
<tr><td><b>d:li</b></td><td>list-item</td></tr>
</tbody>
</table>

<table>
<thead>
<tr><th>Class</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><b>d:i</b></td><td>inline</td></tr>
<tr><td><b>d:ib</b></td><td>inline-block</td></tr>
<tr><td><b>d:if</b></td><td>inline-flex</td></tr>
<tr><td><b>d:ig</b></td><td>inline-grid</td></tr>
<tr><td><b>d:it</b></td><td>inline-table</td></tr>
<tr><td><b>d:ili</b></td><td>inline-list-item</td></tr>
</tbody>
</table>

<table>
<thead>
<tr><th>Class</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><b>d:t</b></td><td>table</td></tr>
<tr><td><b>d:tc</b></td><td>table-cell</td></tr>
<tr><td><b>d:tr</b></td><td>table-row</td></tr>
<tr><td><b>d:tcl</b></td><td>table-column</td></tr>
<tr><td><b>d:trg</b></td><td>table-row-group</td></tr>
<tr><td><b>d:tcg</b></td><td>table-column-group</td></tr>
<tr><td><b>d:tfg</b></td><td>table-footer-group</td></tr>
<tr><td><b>d:thg</b></td><td>table-header-group</td></tr>
<tr><td><b>d:tcp</b></td><td>table-caption</td></tr>
</tbody>
</table>
</div>

## Flexbox / Grid - Utilities

Flexbox utilities provide powerful alignment and distribution capabilities, while grid utilities enable complex grid layouts with ease. Below are the classes related to both flexbox and grid layout:

<div class="d:f:x auto wrap half">
<div class="d:f:y">

<div class="pos:s top">

### Flex

</div>

<table class="d:t">
<thead>
<tr><th>Class</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><b>d:f</b></td><td>flex with gap</td></tr>
<tr><td><b>gap:0</b></td><td>flex without gap</td></tr>
<tr><td><b>d:f:x</b></td><td>flex (row) with gap</td></tr>
<tr><td><b>d:f:y</b></td><td>flex (column) with gap</td></tr>
<tr><td><b>auto</b></td><td>flex: auto</td></tr>
<tr><td><b>wrap</b></td><td>flex-flow: wrap</td></tr>
<tr><td><b>none</b></td><td>flex: none</td></tr>
<tr><td><b>reverse</b></td><td>flex-flow: reverse</td></tr>
</tbody>
</table>

#### X

<div class="example d:f">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

```html
<div class="d:f">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

#### gap:0

<div class="example d:f gap:0">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

```html
<div class="d:f gap:0">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

#### X auto

<div class="example d:f auto">
  <div>Auto 1</div>
  <div>Auto 2</div>
</div>

```html
<div class="d:f auto">
  <div>Auto 1</div>
  <div>Auto 2</div>
</div>
```

#### Y

<div class="example d:f:y">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

```html
<div class="d:f:y">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

#### Y auto

<div class="d:f auto">
<div class="example d:f:y auto">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</div>

<div class="example d:f:y">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<div class="example d:f:y auto">
  <div>Auto 1</div>
  <div>Auto 2</div>
</div>
</div>

```html
<div class="d:f:y auto">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

#### wrap

<div class="example d:f wrap">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
</div>

```html
<div class="d:f wrap">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
</div>
```

#### none

<div class="example d:f auto">
  <div class="flex:none">None</div>
  <div>Auto 1</div>
  <div>Auto 2</div>
</div>

```html
<div class="d:f auto">
  <div class="flex:none">None</div>
  <div>Auto 1</div>
  <div>Auto 2</div>
</div>
```

#### reverse

<div class="example d:f reverse">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

```html
<div class="d:f reverse">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

#### grow

<div class="example d:f">
  <div class="grow:0">Grow 0</div>
  <div class="grow:1">Grow 1</div>
  <div class="grow:2">Grow 2</div>
</div>

```html
<div class="d:f">
  <div class="grow:0">Grow 0</div>
  <div class="grow:1">Grow 1</div>
  <div class="grow:2">Grow 2</div>
</div>
```

<table class="d:t">
<thead>
<tr><th>Class</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><b>grow:0</b></td><td>flex-grow: 0</td></tr>
<tr><td><b>grow:1</b></td><td>flex-grow: 1</td></tr>
<tr><td><b>grow:2</b></td><td>flex-grow: 2</td></tr>
<tr><td><b>grow:3</b></td><td>flex-grow: 3</td></tr>
<tr><td><b>grow:4</b></td><td>flex-grow: 4</td></tr>
<tr><td><b>grow:5</b></td><td>flex-grow: 5</td></tr>
</tbody>
</table>

#### shrink

<div class="example d:f">
  <div class="shrink:0">Shrink 0</div>
  <div class="shrink:1">Shrink 1</div>
  <div class="shrink:2">Shrink 2</div>
</div>

```html
<div class="d:f">
  <div class="shrink:0">Shrink 0</div>
  <div class="shrink:1">Shrink 1</div>
  <div class="shrink:2">Shrink 2</div>
</div>
```

<table class="d:t">
<thead>
<tr><th>Class</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><b>shrink:0</b></td><td>flex-shrink: 0</td></tr>
<tr><td><b>shrink:1</b></td><td>flex-shrink: 1</td></tr>
<tr><td><b>shrink:2</b></td><td>flex-shrink: 2</td></tr>
<tr><td><b>shrink:3</b></td><td>flex-shrink: 3</td></tr>
<tr><td><b>shrink:4</b></td><td>flex-shrink: 4</td></tr>
<tr><td><b>shrink:5</b></td><td>flex-shrink: 5</td></tr>
</tbody>
</table>

#### basis

<div class="example d:f">
  <div class="basis:0">0</div>
  <div class="basis:100">100%</div>
  <div class="basis:auto">Auto</div>
</div>

<div class="example d:f">
  <div class="basis:0">0</div>
  <div class="basis:auto">Auto</div>
</div>

<div class="example d:f">
  <div class="basis:100">100%</div>
  <div class="basis:auto">Auto</div>
</div>

```html
<div class="d:f">
  <div class="basis:0">Basis 0</div>
  <div class="basis:100">Basis 100%</div>
  <div class="basis:auto">Basis auto</div>
</div>
```

<table class="d:t">
<thead>
<tr><th>Class</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><b>basis:0</b></td><td>flex-basis: 0</td></tr>
<tr><td><b>basis:100</b></td><td>flex-basis: 100%</td></tr>
<tr><td><b>basis:auto</b></td><td>flex-basis: auto</td></tr>
</tbody>
</table>

</div>
<div class="d:f:y">

<div class="pos:s top">

### Grid

</div>

<table class="d:t">
<thead>
<tr><th>Class</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><b>d:g</b></td><td>grid with gap</td></tr>
<tr><td><b>gap:0</b></td><td>grid without gap</td></tr>
<tr><td><b>d:g:x</b></td><td>grid (column flow) with gap</td></tr>
<tr><td><b>d:g:y</b></td><td>grid (row flow) with gap</td></tr>
<tr><td><b>auto</b></td><td>grid-auto: 1fr</td></tr>
<tr><td><b>wrap</b></td><td>grid-auto-flow: dense</td></tr>
<tr><td>&nbsp;</td><td></td></tr>
<tr><td>&nbsp;</td><td></td></tr>
</tbody>
</table>

<br />

<div class="example d:g">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

```html
<div class="d:g">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

<br />

<div class="example d:g gap:0">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

```html
<div class="d:g gap:0">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

<br />

<div class="example d:g auto">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

```html
<div class="d:g auto">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

<br />

<div class="example d:g:y">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

```html
<div class="d:f:y">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

<br />

<div class="d:g auto">
<div class="example d:g:y">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</div>

<div class="example d:g:y">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<div class="example d:g:y auto">
  <div>Auto 1</div>
  <div>Auto 2</div>
</div>
</div>

```html
<div class="d:g:y auto">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

<br />

<div class="example d:g wrap">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
</div>

```html
<div class="d:g wrap">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
</div>
```

</div>
</div>

## Order

<div class="d:f">
<table class="d:t w">
<thead>
<tr><th>Class</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><b>order:-5</b></td><td>order: -5</td></tr>
<tr><td><b>order:-4</b></td><td>order: -4</td></tr>
<tr><td><b>order:-3</b></td><td>order: -3</td></tr>
<tr><td><b>order:-2</b></td><td>order: -2</td></tr>
<tr><td><b>order:-1</b></td><td>order: -1</td></tr>
<tr><td><b>order:0</b></td><td>order: 0</td></tr>
<tr><td><b>order:1</b></td><td>order: 1</td></tr>
<tr><td><b>order:2</b></td><td>order: 2</td></tr>
<tr><td><b>order:3</b></td><td>order: 3</td></tr>
<tr><td><b>order:4</b></td><td>order: 4</td></tr>
<tr><td><b>order:5</b></td><td>order: 5</td></tr>
</tbody>
</table>
</div>

<div class="d:f:x auto wrap half">
<div class="d:f:y">

<div class="example d:f">
  <div class="order:3">Item 3</div>
  <div class="order:1">Item 1</div>
  <div class="order:-2">Item -2</div>
</div>

```html
<div class="d:f">
  <div class="order:3">Item 3</div>
  <div class="order:1">Item 1</div>
  <div class="order:-2">Item -2</div>
</div>
```

</div>

<div class="d:f:y">

<div class="example d:g">
  <div class="order:3">Item 3</div>
  <div class="order:1">Item 1</div>
  <div class="order:-2">Item -2</div>
</div>

```html
<div class="d:g">
  <div class="order:3">Item 3</div>
  <div class="order:1">Item 1</div>
  <div class="order:-2">Item -2</div>
</div>
```

</div>
</div>


<style>
.half > * {
  max-width: 340px;
}
</style>
