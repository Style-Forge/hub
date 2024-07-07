
# Border Radius

The border radius utility classes help manage the roundness of the corners of an element. These classes allow you to control the border-radius property easily.

## CSS Classes

<table class="d:t w">
<thead>
<tr><th>Class</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><b>radius</b></td><td>border-radius: <b>var(--sf-radius)</b> <code>0.5em</code></td></tr>
<tr><td><b>radius:i</b></td><td>border-radius: <code>inherit</code></td></tr>
<tr><td><b>radius:0</b></td><td>border-radius: <code>0</code></td></tr>
<tr><td><b>radius:v1</b></td><td>border-radius: <b>var(--sf-radius-v1)</b> <code>1em</code></td></tr>
<tr><td><b>radius:v2</b></td><td>border-radius: <b>var(--sf-radius-v2)</b> <code>1.25em</code></td></tr>
<tr><td><b>radius:v3</b></td><td>border-radius: <b>var(--sf-radius-v3)</b> <code>1.5em</code></td></tr>
<tr><td><b>radius:v4</b></td><td>border-radius: <b>var(--sf-radius-v4)</b> <code>2em</code></td></tr>
<tr><td><b>radius:v5</b></td><td>border-radius: <b>var(--sf-radius-v5)</b> <code>2.5em</code></td></tr>
<tr><td><b>radius:v6</b></td><td>border-radius: <b>var(--sf-radius-v6)</b> <code>3em</code></td></tr>
<tr><td><b>radius:50</b></td><td>border-radius: <code>50%</code></td></tr>
<tr><td><b>radius:75</b></td><td>border-radius: <code>75%</code></td></tr>
<tr><td><b>radius:100</b></td><td>border-radius: <code>100%</code></td></tr>
</tbody>
</table>

```html
<div class="radius">
  Content that radius...
</div>
```

<div class="example d:f wrap">
  <div class="ta:c y:c:c radius:0">Radius:0</div>
  <div class="ta:c y:c:c radius">Radius</div>
  <div class="ta:c y:c:c radius:v1">Radius:v1</div>
  <div class="ta:c y:c:c radius:v2">Radius:v2</div>
  <div class="ta:c y:c:c radius:v3">Radius:v3</div>
  <div class="ta:c y:c:c radius:v4">Radius:v4</div>
  <div class="ta:c y:c:c radius:v5">Radius:v5</div>
  <div class="ta:c y:c:c radius:v6">Radius:v6</div>
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
