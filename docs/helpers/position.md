
# Position Utilities

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
<tr><td><b>top</b></td><td>top: 0</td></tr>
<tr><td><b>left</b></td><td>left: 0</td></tr>
<tr><td><b>right</b></td><td>right: 0</td></tr>
<tr><td><b>bottom</b></td><td>bottom: 0</td></tr>
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
    <div class="pos:s top" style="width: 150px">
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
