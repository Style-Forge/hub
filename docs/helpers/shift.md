<script setup>
import { reactive, computed } from 'vue';

const pos = reactive({
  top: false,
  left: false,
  right: false,
  bottom: false,
});

const classes = computed(() => {
  const arr = ['shift'];
  if (pos.top) arr.push('top');
  if (pos.left) arr.push('left');
  if (pos.right) arr.push('right');
  if (pos.bottom) arr.push('bottom');
  return arr
})

const text = computed(() => {
  const arr = ['Aligned Element'];
  if (pos.top) arr.unshift('top');
  if (pos.left) arr.unshift('left');
  if (pos.right) arr.unshift('right');
  if (pos.bottom) arr.unshift('bottom');
  return arr
})

</script>

# Shift

The shift utility classes help manage the alignment of an element within a flex container. These classes allow you to control the alignment properties easily.

<div class="d:f:y">

<div class="pos:s top">
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
  
## Flex

  <div class="example d:f wrap">
    <div :class="classes">
      Aligned Element (flex)
    </div>
  </div>

<highlight lang="html">
&lt;div class="example d:f"&gt;
  &lt;div class="{{ classes.join(' ') }}"&gt;
    Aligned Element (flex)
  &lt;/div&gt;
&lt;/div&gt;
</highlight>

## Grid

  <div class="example d:g wrap">
    <div :class="classes">
      Aligned Element (grid)
    </div>
  </div>

<highlight lang="html">
&lt;div class="example d:g"&gt;
  &lt;div class="{{ classes.join(' ') }}"&gt;
    Aligned Element (grid)
  &lt;/div&gt;
&lt;/div&gt;
</highlight>

</div>
