---
title: Color
titleTemplate: Style-Forge.Form
description: "Versatile tool for easy color selection, styling, and application in web apps."

head:
  - - meta
    - name: keywords
      content: style-forge, color, input, styling, web development, frontend, color selection, color styles, responsive
  - - meta
    - property: og:title
      content: "Color | Style-Forge.Form"
  - - meta
    - property: og:description
      content: "Versatile tool for easy color selection, styling, and application in web apps."
  - - meta
    - property: og:url
      content: https://style-forge.dev/form/color.html
  - - meta
    - name: twitter:title
      content: "Color | Style-Forge.Form"
  - - meta
    - name: twitter:description
      content: "Versatile tool for easy color selection, styling, and application in web apps."
---

# Color

This section presents the color input element that can be used in HTML forms. Each example includes the HTML code and styling using the `sf-input` class.

<actions @disabled="x => disabled = x" @loading="x => loading = x" />

<br />

---
<br />

<input :class="sClasses" type="color" value="#ff0000" :disabled="disabled" />

<highlight lang="html">
&lt;input class="{{ sClasses }}" type="color" value="#ff0000"{{ isDisabled }} /&gt;
</highlight>

## Conclusion

Using this example, you can create forms with color input elements. All elements are styled using the `sf-input` class for a consistent look and feel.

<script setup>
import { ref, computed } from 'vue';

import 'style-forge.form/src/var.css';
import 'style-forge.form/src/base.css';
import 'style-forge.form/src/global.css';
import 'style-forge.form/src/pseudo-classes.css';

import 'style-forge.form/src/loading.css';
import 'style-forge.form/src/checkbox-radio.css';

import 'style-forge.form/src/color.css';

const loading = ref(false);
const disabled = ref(false);

const isLoading = computed(() => loading.value ? 'sf-loading' : null);
const isDisabled = computed(() => disabled.value ? ' disabled' : null);

const sClasses = computed(() => {
  return ['sf-input', isLoading.value].filter(x => x).join(' ')
});
</script>
