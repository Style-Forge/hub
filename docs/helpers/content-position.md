---
title: Content-position
titleTemplate: Style-Forge.Helpers
description: "Versatile component for easy management of content positioning in web apps."

head:
  - - meta
    - name: keywords
      content: style-forge, content position, element positioning, css positioning, styling, web development, frontend, responsive
  - - meta
    - property: og:title
      content: "Content-position | Style-Forge.Helpers"
  - - meta
    - property: og:description
      content: "Versatile component for easy management of content positioning in web apps."
  - - meta
    - property: og:url
      content: https://style-forge.dev/helpers/content-position.html
  - - meta
    - name: twitter:title
      content: "Content-position | Style-Forge.Helpers"
  - - meta
    - name: twitter:description
      content: "Versatile component for easy management of content positioning in web apps."
---

# Content-position

The file `content-position.css` contains a set of CSS classes for aligning elements within a container. These classes manage the alignment of content, items, and individual elements along both the main axis (horizontal) and the cross axis (vertical) in a flexbox or grid layout.

<table class="table">
  <tbody>
    <tr><td rowspan="4">default - stretch</td><td></td><td><strong>X</strong> - justify</td><td><strong>Y</strong> - align</td></tr>
    <tr><td>content</td><td><code>x:c</code> or <code>c:x</code></td><td><code>y:c</code> or <code>c:y</code></td></tr>
    <tr><td>items</td><td><code>x:i</code> or <code>i:x</code></td><td><code>y:i</code> or <code>i:y</code></td></tr>
    <tr><td>self</td><td><code>x:s</code> or <code>s:x</code></td><td><code>y:s</code> or <code>s:y</code></td></tr>
  </tbody>
</table>

## Order and Explanation

<div class="tables d:f wrap">
  <table class="table">
    <thead>
      <tr>
        <th colspan="2">1 - axis</th>
        <th colspan="2">2 - target</th>
        <th colspan="2">3 - position</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>x</td><td>axis X</td><td>c</td><td>content</td><td>b</td><td>baseline</td></tr>
      <tr><td>y</td><td>axis Y</td><td>i</td><td>items</td><td>n</td><td>normal</td></tr>
      <tr><td></td><td></td><td>s</td><td>self</td><td>c</td><td>center</td></tr>
      <tr><td></td><td></td><td></td><td></td><td>e</td><td>end</td></tr>
      <tr><td></td><td></td><td></td><td></td><td>s</td><td>start</td></tr>
      <tr><td></td><td></td><td></td><td></td><td>fe</td><td>flex-end</td></tr>
      <tr><td></td><td></td><td></td><td></td><td>fs</td><td>flex-start</td></tr>
      <tr><td></td><td></td><td></td><td></td><td>sa</td><td>space-around</td></tr>
      <tr><td></td><td></td><td></td><td></td><td>sb</td><td>space-between</td></tr>
      <tr><td></td><td></td><td></td><td></td><td>se</td><td>space-evenly</td></tr>
    </tbody>
  </table>

  <table class="table">
    <thead>
      <tr>
        <th colspan="2">Example</th>
      </tr>
    </thead>
    <tbody>
      <tr><td><code>&lt;div class="x:c:b"&gt;&lt;/div&gt;</code></td></tr>
      <tr><td><code>&lt;div class="y:i:n"&gt;&lt;/div&gt;</code></td></tr>
    </tbody>
  </table>
</div>

---

<div class="tables d:f wrap">
  <table class="table">
    <thead>
      <tr>
        <th colspan="2">1 - target</th>
        <th colspan="2">2 - position</th>
        <th colspan="2">3 - axis</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>c</td><td>content</td><td>b</td><td>baseline</td><td>x</td><td>axis X</td></tr>
      <tr><td>i</td><td>items</td><td>n</td><td>normal</td><td>y</td><td>axis Y</td></tr>
      <tr><td>s</td><td>self</td><td>c</td><td>center</td><td></td><td></td></tr>
      <tr><td></td><td></td><td>e</td><td>end</td><td></td><td></td></tr>
      <tr><td></td><td></td><td>s</td><td>start</td><td></td><td></td></tr>
      <tr><td></td><td></td><td>fe</td><td>flex-end</td><td></td><td></td></tr>
      <tr><td></td><td></td><td>fs</td><td>flex-start</td><td></td><td></td></tr>
      <tr><td></td><td></td><td>sa</td><td>space-around</td><td></td><td></td></tr>
      <tr><td></td><td></td><td>sb</td><td>space-between</td><td></td><td></td></tr>
      <tr><td></td><td></td><td>se</td><td>space-evenly</td><td></td><td></td></tr>
    </tbody>
  </table>


  <table class="table">
    <thead>
      <tr>
        <th colspan="2">Example</th>
      </tr>
    </thead>
    <tbody>
      <tr><td><code>&lt;div class="c:b:x"&gt;&lt;/div&gt;</code></td></tr>
      <tr><td><code>&lt;div class="i:n:y"&gt;&lt;/div&gt;</code></td></tr>
    </tbody>
  </table>

</div>

## Example

<div class="d:f:y">
  <label class="sf-switch">
    <input v-model="hasWrap" type="checkbox" /> <span>Wrap</span>
  </label>
  <div class="d:f y:i:c">
    <div>
      Display
    </div>
    <select class="sf-select" v-model="hasDisplay">
      <option v-for="item in displays" :value="item" :key="item">{{ getDisplayText(item) }}</option>
    </select>
  </div>
  <div class="d:f y:i:c">
    <div>
      Align
    </div>
    <select class="sf-select" v-model="key" @change="onChange(key, option)">
      <option v-for="item in positions.slice(0, 3)" :value="item.key" :key="item.key">{{ item.key }}</option>
    </select>
    <select class="sf-select" v-model="option">
      <option v-for="item in options" :value="item.value" :key="item.value">{{ item.value }}</option>
    </select>
  </div>
  <div class="d:f y:i:c">
    <div>
      Justify
    </div>
    <select class="sf-select" v-model="elmKey" @change="onChange(elmKey, elmOption)">
      <option v-for="item in positions.slice(3)" :value="item.key" :key="item.key">{{ item.key }}</option>
    </select>
    <select class="sf-select" v-model="elmOption">
      <option v-for="item in elmOptions" :value="item.value" :key="item.value">{{ item.value }}</option>
    </select>
  </div>
  
  <div class="wrapper pos:r">
    <div class="pos:a t l axisX">{{ objOption.class }}</div>
    <div class="pos:a b r axisY">{{ elmObjOption.class }}</div>
    <div :class="['d:' + hasDisplay, 'box', objOption.class, elmObjOption.class, { wrap: hasWrap }]">
      <div :class="['sf-c-black:95']" />
      <div :class="['sf-c-black:95']" />
      <div :class="['sf-c-black:95']" />
    </div>
  </div>
</div>

<highlight lang="html">
&lt;div class="{{ result }}"&gt;&lt;/div&gt;
</highlight>

## CSS classes

<div class="d:f x:c:c wrap">

<table>
<thead>
<tr><th>:c: - content</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><code>x:c</code> / <code>c:x</code></td><td>stretch</td></tr>
<tr><td>&nbsp;</td><td></td></tr>
<tr><td><code>x:c:n</code> / <code>c:n:x</code></td><td>normal</td></tr>
<tr><td><code>x:c:c</code> / <code>c:c:x</code></td><td>center</td></tr>
<tr><td><code>x:c:e</code> / <code>c:e:x</code></td><td>end</td></tr>
<tr><td><code>x:c:s</code> / <code>c:s:x</code></td><td>start</td></tr>
<tr><td><code>x:c:fe</code> / <code>c:fe:x</code></td><td>flex-end</td></tr>
<tr><td><code>x:c:fs</code> / <code>c:fs:x</code></td><td>flex-start</td></tr>
<tr><td><code>x:c:sa</code> / <code>c:sa:x</code></td><td>space-around</td></tr>
<tr><td><code>x:c:sb</code> / <code>c:sb:x</code></td><td>space-between</td></tr>
<tr><td><code>x:c:se</code> / <code>c:se:x</code></td><td>space-evenly</td></tr>
</tbody>
</table>

<table>
<thead>
<tr><th>:c: - content</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><code>y:c</code> / <code>c:y</code></td><td>stretch</td></tr>
<tr><td><code>y:c:b</code> / <code>c:b:y</code></td><td>baseline</td></tr>
<tr><td><code>y:c:n</code> / <code>c:n:y</code></td><td>normal</td></tr>
<tr><td><code>y:c:c</code> / <code>c:c:y</code></td><td>center</td></tr>
<tr><td><code>y:c:e</code> / <code>c:e:y</code></td><td>end</td></tr>
<tr><td><code>y:c:s</code> / <code>c:s:y</code></td><td>start</td></tr>
<tr><td><code>y:c:fe</code> / <code>c:fe:y</code></td><td>flex-end</td></tr>
<tr><td><code>y:c:fs</code> / <code>c:fs:y</code></td><td>flex-start</td></tr>
<tr><td><code>y:c:sa</code> / <code>c:sa:y</code></td><td>space-around</td></tr>
<tr><td><code>y:c:sb</code> / <code>c:sb:y</code></td><td>space-between</td></tr>
<tr><td><code>y:c:se</code> / <code>c:se:y</code></td><td>space-evenly</td></tr>
</tbody>
</table>

</div>
<div class="d:f x:c:c wrap">

<table>
<thead>
<tr><th>:i: - items</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><code>x:i</code> / <code>i:x</code></td><td>stretch</td></tr>
<tr><td><code>x:i:b</code> / <code>i:b:x</code></td><td>baseline</td></tr>
<tr><td><code>x:i:c</code> / <code>i:c:x</code></td><td>center</td></tr>
<tr><td><code>x:i:e</code> / <code>i:e:x</code></td><td>end</td></tr>
<tr><td><code>x:i:s</code> / <code>i:s:x</code></td><td>start</td></tr>
<tr><td><code>x:i:fe</code> / <code>i:fe:x</code></td><td>flex-end</td></tr>
<tr><td><code>x:i:fs</code> / <code>i:fs:x</code></td><td>flex-start</td></tr>
</tbody>
</table>

<table>
<thead>
<tr><th>:i: - items</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><code>y:i</code> / <code>i:y</code></td><td>stretch</td></tr>
<tr><td><code>y:i:b</code> / <code>i:b:y</code></td><td>baseline</td></tr>
<tr><td><code>y:i:c</code> / <code>i:c:y</code></td><td>center</td></tr>
<tr><td><code>y:i:e</code> / <code>i:e:y</code></td><td>end</td></tr>
<tr><td><code>y:i:s</code> / <code>i:s:y</code></td><td>start</td></tr>
<tr><td><code>y:i:fe</code> / <code>i:fe:y</code></td><td>flex-end</td></tr>
<tr><td><code>y:i:fs</code> / <code>i:fs:y</code></td><td>flex-start</td></tr>
</tbody>
</table>

</div>
<div class="d:f x:c:c wrap">

<table>
<thead>
<tr><th>:s: - self</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><code>x:s</code> / <code>s:x</code></td><td>stretch</td></tr>
<tr><td><code>x:s:a</code> / <code>s:a:x</code></td><td>auto</td></tr>
<tr><td><code>x:s:n</code> / <code>s:n:x</code></td><td>normal</td></tr>
<tr><td><code>x:s:b</code> / <code>s:b:x</code></td><td>baseline</td></tr>
<tr><td><code>x:s:c</code> / <code>s:c:x</code></td><td>center</td></tr>
<tr><td><code>x:s:e</code> / <code>s:e:x</code></td><td>end</td></tr>
<tr><td><code>x:s:s</code> / <code>s:s:x</code></td><td>start</td></tr>
<tr><td><code>x:s:fe</code> / <code>s:fe:x</code></td><td>flex-end</td></tr>
<tr><td><code>x:s:fs</code> / <code>s:fs:x</code></td><td>flex-start</td></tr>
</tbody>
</table>

<table>
<thead>
<tr><th>:s: - self</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><code>y:s</code> / <code>s:y</code></td><td>stretch</td></tr>
<tr><td><code>y:s:a</code> / <code>s:a:y</code></td><td>auto</td></tr>
<tr><td><code>y:s:n</code> / <code>s:n:y</code></td><td>normal</td></tr>
<tr><td><code>y:s:b</code> / <code>s:b:y</code></td><td>baseline</td></tr>
<tr><td><code>y:s:c</code> / <code>s:c:y</code></td><td>center</td></tr>
<tr><td><code>y:s:e</code> / <code>s:e:y</code></td><td>end</td></tr>
<tr><td><code>y:s:s</code> / <code>s:s:y</code></td><td>start</td></tr>
<tr><td><code>y:s:fe</code> / <code>s:fe:y</code></td><td>flex-end</td></tr>
<tr><td><code>y:s:fs</code> / <code>s:fs:y</code></td><td>flex-start</td></tr>
</tbody>
</table>

</div>

<script setup>
import { ref, computed } from 'vue'; 

import 'style-forge.form/src/var.css';

import 'style-forge.form/src/switch.css';
import 'style-forge.form/src/select.css';

import 'style-forge.colors/src/colors/20/black.css';

const $class = ref(null);

const positions = 
[
  { 
    key: "align-content",
    options: [
      { axis: "y", target: "c", suffix: "", class: "c:y", value: "stretch" },
      { axis: "y", target: "c", suffix: "b", class: "c:b:y", value: "baseline" },
      { axis: "y", target: "c", suffix: "n", class: "c:n:y", value: "normal" },
      { axis: "y", target: "c", suffix: "c", class: "c:c:y", value: "center" },
      { axis: "y", target: "c", suffix: "e", class: "c:e:y", value: "end" },
      { axis: "y", target: "c", suffix: "s", class: "c:s:y", value: "start" },
      { axis: "y", target: "c", suffix: "fe", class: "c:fe:y", value: "flex-end" },
      { axis: "y", target: "c", suffix: "fs", class: "c:fs:y", value: "flex-start" },
      { axis: "y", target: "c", suffix: "sa", class: "c:sa:y", value: "space-around" },
      { axis: "y", target: "c", suffix: "sb", class: "c:sb:y", value: "space-between" },
      { axis: "y", target: "c", suffix: "se", class: "c:se:y", value: "space-evenly" },
    ],
  },
  {
    key: "align-items",
    options: [
      { axis: "y", target: "i", suffix: "", class: "i:y", value: "stretch" },
      { axis: "y", target: "i", suffix: "b", class: "i:b:y", value: "baseline" },
      { axis: "y", target: "i", suffix: "c", class: "i:c:y", value: "center" },
      { axis: "y", target: "i", suffix: "e", class: "i:e:y", value: "end" },
      { axis: "y", target: "i", suffix: "s", class: "i:s:y", value: "start" },
      { axis: "y", target: "i", suffix: "fe", class: "i:fe:y", value: "flex-end" },
      { axis: "y", target: "i", suffix: "fs", class: "i:fs:y", value: "flex-start" },
    ],
  },
  {
    key: "align-self",
    options: [
      { axis: "y", target: "s", suffix: "", class: "s:y", value: "stretch" },
      { axis: "y", target: "s", suffix: "a", class: "s:a:y", value: "auto" },
      { axis: "y", target: "s", suffix: "n", class: "s:n:y", value: "normal" },
      { axis: "y", target: "s", suffix: "b", class: "s:b:y", value: "baseline" },
      { axis: "y", target: "s", suffix: "c", class: "s:c:y", value: "center" },
      { axis: "y", target: "s", suffix: "e", class: "s:e:y", value: "end" },
      { axis: "y", target: "s", suffix: "s", class: "s:s:y", value: "start" },
      { axis: "y", target: "s", suffix: "fe", class: "s:e:y", value: "flex-end" },
      { axis: "y", target: "s", suffix: "fs", class: "s:s:y", value: "flex-start" },
    ],
  },
  {
    key: "justify-content",
    options: [
      { axis: "x", target: "c", suffix: "", class: "c:x", value: "stretch" },
      { axis: "x", target: "c", suffix: "n", class: "c:n:x", value: "normal" },
      { axis: "x", target: "c", suffix: "c", class: "c:c:x", value: "center" },
      { axis: "x", target: "c", suffix: "e", class: "c:e:x", value: "end" },
      { axis: "x", target: "c", suffix: "s", class: "c:s:x", value: "start" },
      { axis: "x", target: "c", suffix: "fe", class: "c:e:x", value: "flex-end" },
      { axis: "x", target: "c", suffix: "fs", class: "c:s:x", value: "flex-start" },
      { axis: "x", target: "c", suffix: "sa", class: "c:sa:x", value: "space-around" },
      { axis: "x", target: "c", suffix: "sb", class: "c:sb:x", value: "space-between" },
      { axis: "x", target: "c", suffix: "se", class: "c:se:x", value: "space-evenly" },
    ],
  },
  {
    key: "justify-items",
    options: [
      { axis: "x", target: "i", suffix: "", class: "i:x", value: "stretch" },
      { axis: "x", target: "i", suffix: "b", class: "i:b:x", value: "baseline" },
      { axis: "x", target: "i", suffix: "c", class: "i:c:x", value: "center" },
      { axis: "x", target: "i", suffix: "e", class: "i:e:x", value: "end" },
      { axis: "x", target: "i", suffix: "s", class: "i:s:x", value: "start" },
      { axis: "x", target: "i", suffix: "fe", class: "i:e:x", value: "flex-end" },
      { axis: "x", target: "i", suffix: "fs", class: "i:s:x", value: "flex-start" },
    ],
  },
  {
    key: "justify-self",
    options: [
      { axis: "x", target: "s", suffix: "", class: "s:x", value: "stretch" },
      { axis: "x", target: "s", suffix: "a", class: "s:a:x", value: "auto" },
      { axis: "x", target: "s", suffix: "n", class: "s:n:x", value: "normal" },
      { axis: "x", target: "s", suffix: "b", class: "s:b:x", value: "baseline" },
      { axis: "x", target: "s", suffix: "c", class: "s:c:x", value: "center" },
      { axis: "x", target: "s", suffix: "e", class: "s:e:x", value: "end" },
      { axis: "x", target: "s", suffix: "s", class: "s:s:x", value: "start" },
      { axis: "x", target: "s", suffix: "fe", class: "s:e:x", value: "flex-end" },
      { axis: "x", target: "s", suffix: "fs", class: "s:s:x", value: "flex-start" },
    ],
  },
];

const displays = ['b', 'f', 'g'];
const hasDisplay = ref('f');

const hasWrap = ref(false);

const key = ref(positions[1].key);
const option = ref(positions[1].options[2].value);
const options = computed(() => positions.find(x => x.key === key.value).options);
const objOption = computed(() => options.value.find(x => x.value === option.value) || options.value[0].value);

const elmKey = ref(positions[3].key);
const elmOption = ref(positions[3].options[2].value);
const elmOptions = computed(() => positions.find(x => x.key === elmKey.value).options);
const elmObjOption = computed(() => elmOptions.value.find(x => x.value === elmOption.value) || elmOptions.value[0].value);

const result = computed(() => {
  const wrap = hasWrap.value ? 'wrap' : null;
  return ['d:' + hasDisplay.value, wrap, objOption.value.class, elmObjOption.value.class].filter(x => x).join(' ');
});

function getDisplayText(payload) {
  if (payload === 'b') return 'block';
  if (payload === 'f') return 'flex';
  if (payload === 'g') return 'grid';
}

function onChange(k, o) {
  const i = positions.findIndex(x => x.key === k);
  const opts = positions[i].options;
  if (opts.map(x => x.value).includes(o)) return;
  const mod = i < 3 ? option : elmOption;
  mod.value = opts[0].value;
}
</script>

<style scoped>
.box {
  border: 1px solid var(--vp-c-divider);

  height: 200px;
}

.box > div {
  width: 50px;
  height: 50px;

  box-shadow: inset 0 0 1px;
}

.axisX,
.axisY {
  padding: 0.25em 0.5em;
}

.tables table {
  table-layout: fixed;
}
.table td {
  white-space: nowrap;
}
</style>
