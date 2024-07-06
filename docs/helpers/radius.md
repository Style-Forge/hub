# Border Radius

The border radius utility classes help manage the roundness of the corners of an element. These classes allow you to control the border-radius property easily.

## CSS Classes

<table class="d:t w">
<thead>
<tr><th>Class</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><b>radius</b></td><td>border-radius: <b>var(--sf-radius)</b> <code>0.5em</code></td></tr>
<tr><td><b>radius:0</b></td><td>border-radius: <code>0</code></td></tr>
<tr><td><b>radius:1</b></td><td>border-radius: <b>var(--sf-radius-1)</b> <code>1em</code></td></tr>
<tr><td><b>radius:2</b></td><td>border-radius: <b>var(--sf-radius-2)</b> <code>1.25em</code></td></tr>
<tr><td><b>radius:3</b></td><td>border-radius: <b>var(--sf-radius-3)</b> <code>1.5em</code></td></tr>
<tr><td><b>radius:4</b></td><td>border-radius: <b>var(--sf-radius-4)</b> <code>2em</code></td></tr>
<tr><td><b>radius:5</b></td><td>border-radius: <b>var(--sf-radius-5)</b> <code>2.5em</code></td></tr>
<tr><td><b>radius:6</b></td><td>border-radius: <b>var(--sf-radius-6)</b> <code>3em</code></td></tr>
<tr><td><b>radius:50</b></td><td>border-radius: <code>50%</code></td></tr>
<tr><td><b>radius:75</b></td><td>border-radius: <code>75%</code></td></tr>
<tr><td><b>radius:100</b></td><td>border-radius: <code>100%</code></td></tr>
</tbody>
</table>

```html
<div class="radius">Content that radius...</div>
```

<div class="example d:f wrap">
  <div class="ta:c y:c:c radius:0">Radius:0</div>
  <div class="ta:c y:c:c radius">Radius</div>
  <div class="ta:c y:c:c radius:1">Radius:1</div>
  <div class="ta:c y:c:c radius:2">Radius:2</div>
  <div class="ta:c y:c:c radius:3">Radius:3</div>
  <div class="ta:c y:c:c radius:4">Radius:4</div>
  <div class="ta:c y:c:c radius:5">Radius:5</div>
  <div class="ta:c y:c:c radius:6">Radius:6</div>
  <div class="ta:c y:c:c radius:50">Radius:50</div>
  <div class="rectangle ta:c y:c:c radius:75">Radius:75</div>
  <div class="rectangle ta:c y:c:c radius:100">Radius:100</div>
</div>

<style scoped>
.example > div {
  --size: 100px;
  width: var(--size);
  height: var(--size);
}
.example > .rectangle {
  width: 200px;
}
</style>
