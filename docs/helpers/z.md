---
title: Z-Index
titleTemplate: Style-Forge.Helpers
description: "Versatile component for easy management of z-index properties in web apps."

head:
  - - meta
    - name: keywords
      content: style-forge, z-index, css z-index, styling, web development, frontend, z-index properties, responsive
  - - meta
    - property: og:title
      content: "Z-Index | Style-Forge.Helpers"
  - - meta
    - property: og:description
      content: "Versatile component for easy management of z-index properties in web apps."
  - - meta
    - property: og:url
      content: https://style-forge.dev/helpers/z-index.html
  - - meta
    - name: twitter:title
      content: "Z-Index | Style-Forge.Helpers"
  - - meta
    - name: twitter:description
      content: "Versatile component for easy management of z-index properties in web apps."
---

# Z-Index

The z-index utility classes help manage the stacking order of elements. These classes allow you to control the z-index property easily.

## CSS Classes

<table class="d:t w">
<thead>
<tr><th>Class</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><b>z</b></td><td>z-index: auto</td></tr>
<tr><td><b>z:-1</b></td><td>z-index: -10</td></tr>
<tr><td><b>z:0</b></td><td>z-index: 0</td></tr>
<tr><td><b>z:1</b></td><td>z-index: 10</td></tr>
<tr><td><b>z:2</b></td><td>z-index: 20</td></tr>
<tr><td>...</td><td>...</td></tr>
<tr><td><b>z:10</b></td><td>z-index: 100</td></tr>
</tbody>
</table>

<div class="d:f y:i:c">
  <span class="whs:nw">Z-index:</span>
  <input class="sf-input" v-model.number="Z" min="-1" max="10" maxlength="2" type="number" placeholder="Z" />
</div>


<highlight lang="html">
&lt;div class="{{ posZ }}"&gt;
  Z-Index {{ posZ }}
&lt;/div&gt;
</highlight>

<div class="example__z">
  <div class="pos:r list">
    <div v-for="i in arr" :class="['pos:a', 'sf-c-black:95', 'z:' + i]" key="i" :style="offset(i)" 
@mouseenter="Z = i" @click="Z = i">{{ i }}</div>
    <div :class="['pos:a', 'sf-c-blue:20:dark', 'sf-c-blue:90', posZ]" :style="offset(Z)">{{ posZ }}</div>
  </div>
</div>

<script setup>
import { ref, computed } from 'vue';

import 'style-forge.form/src/var.css';

import 'style-forge.form/src/input.css';

import 'style-forge.colors/src/colors/20/black.css';
import 'style-forge.colors/src/colors/20/blue.css';

const arr = ref(['-1', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']);
const Z = ref('');

const posZ = computed(() => {
  if (Z.value === '' || Z.value === null) return 'z:auto';
  return 'z:' + Z.value;
});

function offset(i) {
  if (!Number.isNaN(+i) || typeof i === 'number') {
    return {
      top: i * 30 + 'px',
      left: i * 10 + 'px'
    };
  }
}
</script>

<style scoped>
.example__z {
  border: 1px solid var(--vp-c-divider);

  padding: 60px 0 40px 40px;
}

.list {
  height: 400px;
}

.list > div {
  --size: 100px;
  width: var(--size);
  height: var(--size);

  font-size: var(--vp-code-font-size);
  border: 1px solid var(--vp-c-divider);
  padding: 0.1em 0.3em;
}
</style>
