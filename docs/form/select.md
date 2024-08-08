---
title: Select
titleTemplate: Style-Forge.Form
description: "Versatile component for easy creation, styling, and handling of dropdown selects in web apps."

head:
  - - meta
    - name: keywords
      content: style-forge, select, dropdown, input, styling, web development, frontend, select elements, select styles, responsive
  - - meta
    - property: og:title
      content: "Select | Style-Forge.Form"
  - - meta
    - property: og:description
      content: "Versatile component for easy creation, styling, and handling of dropdown selects in web apps."
  - - meta
    - property: og:url
      content: https://style-forge.dev/form/select.html
  - - meta
    - name: twitter:title
      content: "Select | Style-Forge.Form"
  - - meta
    - name: twitter:description
      content: "Versatile component for easy creation, styling, and handling of dropdown selects in web apps."
---

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
