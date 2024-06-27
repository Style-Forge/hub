<script setup>
import { ref, computed } from 'vue'; 
const $class = ref(null);

const positions = 
[
  { 
    key: "align-content",
    options: [
      { axis: "y", target: "c", suffix: "", class: "y\:c", value: "stretch" },
      { axis: "y", target: "c", suffix: "b", class: "y\:c\:b", value: "baseline" },
      { axis: "y", target: "c", suffix: "n", class: "y\:c\:n", value: "normal" },
      { axis: "y", target: "c", suffix: "c", class: "y\:c\:c", value: "center" },
      { axis: "y", target: "c", suffix: "e", class: "y\:c\:e", value: "end" },
      { axis: "y", target: "c", suffix: "s", class: "y\:c\:s", value: "start" },
      { axis: "y", target: "c", suffix: "sa", class: "y\:c\:sa", value: "space-around" },
      { axis: "y", target: "c", suffix: "sb", class: "y\:c\:sb", value: "space-between" },
      { axis: "y", target: "c", suffix: "se", class: "y\:c\:se", value: "space-evenly" },
    ],
  },
  {
    key: "align-items",
    options: [
      { axis: "y", target: "i", suffix: "", class: "y\:i", value: "stretch" },
      { axis: "y", target: "i", suffix: "b", class: "y\:i\:b", value: "baseline" },
      { axis: "y", target: "i", suffix: "c", class: "y\:i\:c", value: "center" },
      { axis: "y", target: "i", suffix: "e", class: "y\:i\:e", value: "end" },
      { axis: "y", target: "i", suffix: "s", class: "y\:i\:s", value: "start" },
    ],
  },
  {
    key: "align-self",
    options: [
      { axis: "y", target: "s", suffix: "", class: "y\:s", value: "stretch" },
      { axis: "y", target: "s", suffix: "a", class: "y\:s\:a", value: "auto" },
      { axis: "y", target: "s", suffix: "n", class: "y\:s\:n", value: "normal" },
      { axis: "y", target: "s", suffix: "b", class: "y\:s\:b", value: "baseline" },
      { axis: "y", target: "s", suffix: "c", class: "y\:s\:c", value: "center" },
      { axis: "y", target: "s", suffix: "e", class: "y\:s\:e", value: "end" },
      { axis: "y", target: "s", suffix: "s", class: "y\:s\:s", value: "start" },
    ],
  },
  {
    key: "justify-content",
    options: [
      { axis: "x", target: "c", suffix: "", class: "x\:c", value: "stretch" },
      { axis: "x", target: "c", suffix: "n", class: "x\:c\:n", value: "normal" },
      { axis: "x", target: "c", suffix: "c", class: "x\:c\:c", value: "center" },
      { axis: "x", target: "c", suffix: "e", class: "x\:c\:e", value: "end" },
      { axis: "x", target: "c", suffix: "s", class: "x\:c\:s", value: "start" },
      { axis: "x", target: "c", suffix: "sa", class: "x\:c\:sa", value: "space-around" },
      { axis: "x", target: "c", suffix: "sb", class: "x\:c\:sb", value: "space-between" },
      { axis: "x", target: "c", suffix: "se", class: "x\:c\:se", value: "space-evenly" },
    ],
  },
  {
    key: "justify-items",
    options: [
      { axis: "x", target: "i", suffix: "", class: "x\:i", value: "stretch" },
      { axis: "x", target: "i", suffix: "b", class: "x\:i\:b", value: "baseline" },
      { axis: "x", target: "i", suffix: "c", class: "x\:i\:c", value: "center" },
      { axis: "x", target: "i", suffix: "e", class: "x\:i\:e", value: "end" },
      { axis: "x", target: "i", suffix: "s", class: "x\:i\:s", value: "start" },
    ],
  },
  {
    key: "justify-self",
    options: [
      { axis: "x", target: "s", suffix: "", class: "x\:s", value: "stretch" },
      { axis: "x", target: "s", suffix: "a", class: "x\:s\:a", value: "auto" },
      { axis: "x", target: "s", suffix: "n", class: "x\:s\:n", value: "normal" },
      { axis: "x", target: "s", suffix: "b", class: "x\:s\:b", value: "baseline" },
      { axis: "x", target: "s", suffix: "c", class: "x\:s\:c", value: "center" },
      { axis: "x", target: "s", suffix: "e", class: "x\:s\:e", value: "end" },
      { axis: "x", target: "s", suffix: "s", class: "x\:s\:s", value: "start" },
    ],
  },
];

const displays = ['b', 'f', 'g'];
const hasDisplay = ref('f');

const hasWrap = ref(false);

const key = ref(positions[1].key);
const option = ref(positions[1].options[2].value);
const options = computed(() => positions.find(x => x.key === key.value).options);
const objOption = computed(() => options.value.find(x => x.value === option.value));

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

# Content-position

The file `constent-position.css` contains a set of CSS classes for aligning elements within a container. These classes manage the alignment of content, items, and individual elements along both the main axis (horizontal) and the cross axis (vertical) in a flexbox or grid layout.

<table class="table">
  <tbody>
    <tr><td rowspan="4">default - stretch</td><td></td><td><strong>X</strong> - justify</td><td><strong>Y</strong> - align</td></tr>
    <tr><td>content</td><td>x:c</td><td>y:c</td></tr>
    <tr><td>items</td><td>x:i</td><td>y:i</td></tr>
    <tr><td>self</td><td>x:s</td><td>y:s</td></tr>
  </tbody>
</table>

## Order and Explanation

<div class="tables d:f wrap">
  <table class="table">
    <thead>
      <tr>
        <th colspan="2">1</th>
        <th colspan="2">2</th>
        <th colspan="2">3</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>x</td><td>axis X</td><td>c</td><td>content</td><td>b</td><td>baseline</td></tr>
      <tr><td>y</td><td>axis Y</td><td>i</td><td>items</td><td>n</td><td>normal</td></tr>
      <tr><td></td><td></td><td>s</td><td>self</td><td>c</td><td>center</td></tr>
      <tr><td></td><td></td><td></td><td></td><td>e</td><td>end</td></tr>
      <tr><td></td><td></td><td></td><td></td><td>s</td><td>start</td></tr>
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
    <div class="pos:a top left axisX">{{ objOption.class }}</div>
    <div class="pos:a bottom right axisY">{{ elmObjOption.class }}</div>
    <div :class="['d:' + hasDisplay, 'box', objOption.class, elmObjOption.class, { wrap: hasWrap }]">
      <div :class="['sf-c-black:85']" />
      <div :class="['sf-c-black:85']" />
      <div :class="['sf-c-black:85']" />
    </div>
  </div>
</div>

<highlight lang="html">
&lt;div class="{{ result }}"&gt;&lt;/div&gt;
</highlight>

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
