---
title: Textarea
titleTemplate: Style-Forge.Form
description: "Versatile component for easy creation, styling, and handling of text areas in web apps."

head:
  - - meta
    - name: keywords
      content: style-forge, textarea, input, text area, styling, web development, frontend, textarea elements, textarea styles, responsive
  - - meta
    - property: og:title
      content: "Textarea | Style-Forge.Form"
  - - meta
    - property: og:description
      content: "Versatile component for easy creation, styling, and handling of text areas in web apps."
  - - meta
    - property: og:url
      content: https://style-forge.dev/form/textarea.html
  - - meta
    - name: twitter:title
      content: "Textarea | Style-Forge.Form"
  - - meta
    - name: twitter:description
      content: "Versatile component for easy creation, styling, and handling of text areas in web apps."
---

# Textarea

This section presents the textarea element that can be used in HTML forms. Each example includes the HTML code and styling using the `sf-textarea` class.

<actions @disabled="x => disabled = x" @loading="x => loading = x" />

<br />

---
<br />

<textarea :class="sClasses" placeholder="textarea" :disabled="disabled"></textarea>

<highlight lang="html">
&lt;textarea class="{{ sClasses }}" placeholder="textarea"{{ isDisabled }}&gt;&lt;/textarea&gt;
</highlight>

## Conclusion

Using this example, you can create forms with textarea elements. All elements are styled using the `sf-textarea` class for a consistent look and feel.

<script setup>
import { ref, computed } from 'vue';

import 'style-forge.form/src/var.css';
import 'style-forge.form/src/base.css';
import 'style-forge.form/src/global.css';
import 'style-forge.form/src/pseudo-classes.css';

import 'style-forge.form/src/loading.css';
import 'style-forge.form/src/checkbox-radio.css';

import 'style-forge.form/src/textarea.css';

const loading = ref(false);
const disabled = ref(false);

const isLoading = computed(() => loading.value ? 'sf-loading' : null);
const isDisabled = computed(() => disabled.value ? ' disabled' : null);

const sClasses = computed(() => {
  return ['sf-textarea', isLoading.value].filter(x => x).join(' ')
});
</script>
