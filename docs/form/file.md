---
title: File
titleTemplate: Style-Forge.Form
description: "File | Style-Forge.Form: versatile component for easy creation, styling, and handling of file inputs in web apps."

head:
  - - meta
    - name: keywords
      content: style-forge, file, input, upload, styling, web development, frontend, file elements, file styles, responsive
  - - meta
    - property: og:title
      content: "File | Style-Forge.Form"
  - - meta
    - property: og:description
      content: "File | Style-Forge.Form: versatile component for easy creation, styling, and handling of file inputs in web apps."
  - - meta
    - property: og:url
      content: https://style-forge.dev/form/file.html
  - - meta
    - name: twitter:title
      content: "File | Style-Forge.Form"
  - - meta
    - name: twitter:description
      content: "File | Style-Forge.Form: versatile component for easy creation, styling, and handling of file inputs in web apps."
---

# File

This section presents the file input element that can be used in HTML forms. Each example includes the HTML code and styling using the `sf-input` class.

<actions @disabled="x => disabled = x" @loading="x => loading = x" />

<br />

---
<br />

<input :class="sClasses" type="file" :disabled="disabled" />

<highlight lang="html">
&lt;input class="{{ sClasses }}" type="file"{{ isDisabled }} /&gt;
</highlight>

## Conclusion

Using this example, you can create forms with file input elements. All elements are styled using the `sf-input` class for a consistent look and feel.

<script setup>
import { ref, computed } from 'vue';

import 'style-forge.form/src/var.css';
import 'style-forge.form/src/base.css';
import 'style-forge.form/src/global.css';
import 'style-forge.form/src/pseudo-classes.css';

import 'style-forge.form/src/loading.css';
import 'style-forge.form/src/checkbox-radio.css';

import 'style-forge.form/src/button.css';
import 'style-forge.form/src/file.css';

const loading = ref(false);
const disabled = ref(false);

const isLoading = computed(() => loading.value ? 'sf-loading' : null);
const isDisabled = computed(() => disabled.value ? ' disabled' : null);

const sClasses = computed(() => {
  return ['sf-input', isLoading.value].filter(x => x).join(' ')
});
</script>
