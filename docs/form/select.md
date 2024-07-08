
# Select

This section presents the select element that can be used in HTML forms. Each example includes the HTML code and styling using the `sf-select` class.

<actions @disabled="x => disabled = x" @loading="x => loading = x" />

<br />

---
<br />

<select :class="sClasses" :disabled="disabled">
  <option>Option 1</option>
  <option>Option 2</option>
  <option>Option 3</option>
</select>

<highlight lang="html">
&lt;select class="{{ sClasses }}"{{ isDisabled }}&gt;
  &lt;option&gt;Option 1&lt;/option&gt;
  &lt;option&gt;Option 2&lt;/option&gt;
  &lt;option&gt;Option 3&lt;/option&gt;
&lt;/select&gt;
</highlight>

## Multiple

<select multiple :class="sClasses" :disabled="disabled">
  <option>Option 1</option>
  <option>Option 2</option>
  <option>Option 3</option>
  <option>Option 4</option>
</select>

<highlight lang="html">
&lt;select multiple class="{{ sClasses }}"{{ isDisabled }}&gt;
  &lt;option&gt;Option 1&lt;/option&gt;
  &lt;option&gt;Option 2&lt;/option&gt;
  &lt;option&gt;Option 3&lt;/option&gt;
  &lt;option&gt;Option 4&lt;/option&gt;
&lt;/select&gt;
</highlight>

## Conclusion

Using this example, you can create forms with select elements. All elements are styled using the `sf-select` class for a consistent look and feel.

<script setup>
import { ref, computed } from 'vue';

import 'style-forge.form/src/var.css';
import 'style-forge.form/src/base.css';
import 'style-forge.form/src/global.css';
import 'style-forge.form/src/pseudo-classes.css';

import 'style-forge.form/src/loading.css';
import 'style-forge.form/src/checkbox-radio.css';

import 'style-forge.form/src/select.css';

const loading = ref(false);
const disabled = ref(false);

const isLoading = computed(() => loading.value ? 'sf-loading' : null);
const isDisabled = computed(() => disabled.value ? ' disabled' : null);

const sClasses = computed(() => {
  return ['sf-select', isLoading.value].filter(x => x).join(' ')
});
</script>
