---
title: Checkbox
titleTemplate: Style-Forge.Form
description: "Versatile component for easy creation, styling, and state management of checkboxes in web apps."

head:
  - - meta
    - name: keywords
      content: style-forge, checkbox, input, validate, styling, web development, frontend, checkbox elements, checkbox styles, responsive
  - - meta
    - property: og:title
      content: "Checkbox | Style-Forge.Form"
  - - meta
    - property: og:description
      content: "Versatile component for easy creation, styling, and state management of checkboxes in web apps."
  - - meta
    - property: og:url
      content: https://style-forge.dev/form/checkbox.html
  - - meta
    - name: twitter:title
      content: "Checkbox | Style-Forge.Form"
  - - meta
    - name: twitter:description
      content: "Versatile component for easy creation, styling, and state management of checkboxes in web apps."
---

# Checkbox

his section showcases different types of checkbox elements that can be incorporated into HTML forms. Each example provides the HTML code and styling utilizing the `sf-checkbox` class.

<actions @disabled="x => disabled = x" :showLoading="false" />

<br />

---
<br />

<label class="sf-checkbox">
  <input v-model="checked" type="checkbox" :disabled="disabled" /> <span>Checkbox</span>
</label>

<highlight lang="html">
&lt;label class="sf-checkbox"&gt;
  &lt;input type="checkbox"{{ checked ? ' checked' : null }}{{ isDisabled }} /&gt; &lt;span&gt;Checkbox&lt;/span&gt;
&lt;/label&gt;
</highlight>

## Conclusion

Using these examples, you can create forms with checkbox elements. All elements are styled using the `sf-checkbox` class for a consistent look and feel.

<script setup>
import { ref, computed } from 'vue';

import 'style-forge.form/src/var.css';

import 'style-forge.form/src/loading.css';
import 'style-forge.form/src/checkbox-radio.css';

const checked = ref(true);
const disabled = ref(false);
const isDisabled = computed(() => disabled.value ? ' disabled' : null);
</script>
