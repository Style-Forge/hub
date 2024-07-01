
# Overflow Utilities

The overflow utility classes help manage the behavior of content that overflows its container. These classes allow you to control how overflowing content is handled on both the x and y axes.

## Overflow Classes

### .ov

The `.ov` class sets the overflow property to `auto`, allowing the content to be scrolled if necessary.

```html
<div class="ov">
  <div>Content that overflows...</div>
</div>
```

<div class="example ov">
  <div style="width: 200px; height: 50px;">Content that overflows...</div>
</div>

### .ov:h

The `.ov:h` class sets the overflow property to `hidden`, clipping the overflowing content.

```html
<div class="ov:h">
  <div>Content that overflows...</div>
</div>
```

<div class="example ov:h">
  <div style="width: 200px; height: 50px;">Content that overflows...</div>
</div>

### .ov:s

The `.ov:s` class sets the overflow property to `scroll`, adding scrollbars regardless of whether the content overflows.

```html
<div class="ov:s">
  <div>Content that overflows...</div>
</div>
```

<div class="example ov:s">
  <div style="width: 200px; height: 50px;">Content that overflows...</div>
</div>

### .ov:v

The `.ov:v` class sets the overflow property to `visible`, allowing the content to overflow the container.

```html
<div class="ov:v">
  <div>Content that overflows...</div>
</div>
```

<div class="example ov:v">
  <div style="width: 200px; height: 50px;">Content that overflows...</div>
</div>

### Overflow-X Classes

#### .ov:x

The `.ov:x` class sets the overflow-x property to `auto`.

```html
<div class="ov:x">
  <div>Content that overflows horizontally...</div>
</div>
```

<div class="example ov:x">
  <div style="width: 200px; height: 50px;">Content that overflows horizontally...</div>
</div>

#### .ov:x:h

The `.ov:x:h` class sets the overflow-x property to `hidden`.

```html
<div class="ov:x:h">
  <div>Content that overflows horizontally...</div>
</div>
```

<div class="example ov:x:h">
  <div style="width: 200px; height: 50px;">Content that overflows horizontally...</div>
</div>

#### .ov:x:s

The `.ov:x:s` class sets the overflow-x property to `scroll`.

```html
<div class="ov:x:s">
  <div>Content that overflows horizontally...</div>
</div>
```

<div class="example ov:x:s">
  <div style="width: 200px; height: 50px;">Content that overflows horizontally...</div>
</div>

#### .ov:x:v

The `.ov:x:v` class sets the overflow-x property to `visible`.

```html
<div class="ov:x:v">
  <div>Content that overflows horizontally...</div>
</div>
```

<div class="example ov:x:v">
  <div style="width: 200px; height: 50px;">Content that overflows horizontally...</div>
</div>

### Overflow-Y Classes

#### .ov:y

The `.ov:y` class sets the overflow-y property to `auto`.

```html
<div class="ov:y">
  <div>Content that overflows vertically...</div>
</div>
```

<div class="example ov:y">
  <div style="width: 200px; height: 50px;">Content that overflows vertically...</div>
</div>

#### .ov:y:h

The `.ov:y:h` class sets the overflow-y property to `hidden`.

```html
<div class="ov:y:h">
  <div>Content that overflows vertically...</div>
</div>
```

<div class="example ov:y:h">
  <div style="width: 200px; height: 50px;">Content that overflows vertically...</div>
</div>

#### .ov:y:s

The `.ov:y:s` class sets the overflow-y property to `scroll`.

```html
<div class="ov:y:s">
  <div>Content that overflows vertically...</div>
</div>
```

<div class="example ov:y:s">
  <div style="width: 200px; height: 50px;">Content that overflows vertically...</div>
</div>

#### .ov:y:v

The `.ov:y:v` class sets the overflow-y property to `visible`.

```html
<div class="ov:y:v">
  <div>Content that overflows vertically...</div>
</div>
```

<div class="example ov:y:v">
  <div style="width: 200px; height: 50px;">Content that overflows vertically...</div>
</div>
