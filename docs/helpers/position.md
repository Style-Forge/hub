
# Position Utilities

The position utility classes help manage the positioning of an element. These classes allow you to control the position properties easily.

## Position Classes

### .pos:a

The `.pos:a` class sets the position property to `absolute`.

```html
<div class="pos:a" style="top: 10px; left: 10px;">
  Absolutely Positioned
</div>
```

<div class="example pos:a" style="top: 10px; left: 10px;">
  Absolutely Positioned
</div>

### .pos:f

The `.pos:f` class sets the position property to `fixed`.

```html
<div class="pos:f" style="top: 10px; left: 10px;">
  Fixed Position
</div>
```

<div class="example pos:f" style="top: 10px; left: 10px;">
  Fixed Position
</div>

### .pos:r

The `.pos:r` class sets the position property to `relative`.

```html
<div class="pos:r">
  Relatively Positioned
</div>
```

<div class="example pos:r">
  Relatively Positioned
</div>

### .pos:static

The `.pos:static` class sets the position property to `static`.

```html
<div class="pos:static">
  Statically Positioned
</div>
```

<div class="example pos:static">
  Statically Positioned
</div>

### .pos:s

The `.pos:s` class sets the position property to `sticky`.

```html
<div class="pos:s" style="top: 0;">
  Sticky Position
</div>
```

<div class="example pos:s" style="top: 0;">
  Sticky Position
</div>

## Full Positioning

### .full

The `.full` class sets the position to cover the entire container for absolutely or fixed positioned elements.

```html
<div class="full pos:a">
  Full Position Absolute
</div>
```

<div class="example full pos:a">
  Full Position Absolute
</div>
