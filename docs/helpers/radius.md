# Border Radius

The border radius utility classes help manage the roundness of the corners of an element. These classes allow you to control the border-radius property easily.

## CSS Classes

<table class="d:t w">
<thead>
<tr><th>Class</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><b>radius</b></td><td>border-radius: var(--sf-radius) <code>0.5em</code></td></tr>
<tr><td><b>radius:0</b></td><td>border-radius: 0</td></tr>
<tr><td><b>radius:50</b></td><td>border-radius: 50%</td></tr>
<tr><td><b>radius:100</b></td><td>border-radius: 100%</td></tr>
</tbody>
</table>

```html
<div class="radius">Content that radius...</div>
```

<div class="example d:f">
  <div class="ta:c y:c:c radius:0">Radius:0</div>
  <div class="ta:c y:c:c radius">Radius</div>
  <div class="ta:c y:c:c radius:50">Radius:50</div>
  <div class="ta:c y:c:c radius:100">Radius:100</div>
</div>

<style scoped>
.example > div {
  --size: 100px;
  width: var(--size);
  height: var(--size);
}
</style>
