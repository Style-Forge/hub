
# Shift

The shift utility classes help manage the alignment of an element within a flex and grid container. These classes 
allow you to control the alignment properties easily.

## CSS Classes

<table class="d:t w">
<thead>
<tr><th>Class</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><b>shift</b></td><td>margin: auto</td></tr>
<tr><td><b>shift:t</b></td><td>top</td></tr>
<tr><td><b>shift:l</b></td><td>left</td></tr>
<tr><td><b>shift:r</b></td><td>right</td></tr>
<tr><td><b>shift:b</b></td><td>bottom</td></tr>
<tr><td><b>shift:t:l:r:b</b></td><td>margin: 0</td></tr>
</tbody>
</table>

::: info
All combinations of `:t, :l, :r,` and `:b` are **possible**, and the order (e.g., `:t:l` or `:l:t`) does not matter.
:::

<div class="d:f:y">

<div class="pos:s t">
  <div class="d:f wrap">
    <label class="sf-switch">
      <input v-model="pos.top" type="checkbox" /> <span>Top</span>
    </label>
    <label class="sf-switch">
      <input v-model="pos.left" type="checkbox" /> <span>Left</span>
    </label>
    <label class="sf-switch">
      <input v-model="pos.right" type="checkbox" /> <span>Right</span>
    </label>
    <label class="sf-switch">
      <input v-model="pos.bottom" type="checkbox" /> <span>Bottom</span>
    </label>
  </div>
</div>

<div class="d:f:x auto wrap half">
<div class="d:f:y">

## Flex

  <div class="example d:f wrap">
    <div :class="classes">
      Aligned Element (flex)
    </div>
  </div>

</div>
<div class="d:f:y">

## Grid

  <div class="example d:g wrap">
    <div :class="classes">
      Aligned Element (grid)
    </div>
  </div>
</div>
</div>

<highlight lang="html">
&lt;div class="{{ classes }}"&gt;
  Aligned Element
&lt;/div&gt;
</highlight>

</div>

<script setup>
import { reactive, computed } from 'vue';

import 'style-forge.form/src/var.css';
import 'style-forge.form/src/base.css';
import 'style-forge.form/src/global.css';
import 'style-forge.form/src/pseudo-classes.css';

import 'style-forge.form/src/switch.css';

const pos = reactive({
  top: false,
  left: false,
  right: false,
  bottom: false,
});

const classes = computed(() => {
  const arr = ['shift'];
  if (pos.top) arr.push('t');
  if (pos.left) arr.push('l');
  if (pos.right) arr.push('r');
  if (pos.bottom) arr.push('b');
  return arr.join(':')
});
</script>
