---
title: Radio
titleTemplate: Style-Forge.Form
description: "Radio | Style-Forge.Form: versatile component for easy creation, styling, and management of radio buttons in web apps."

head:
  - - meta
    - name: keywords
      content: style-forge, radio, input, validate, styling, web development, frontend, radio elements, radio styles, responsive
  - - meta
    - property: og:title
      content: "Radio | Style-Forge.Form"
  - - meta
    - property: og:description
      content: "Radio | Style-Forge.Form: versatile component for easy creation, styling, and management of radio buttons in web apps."
  - - meta
    - property: og:url
      content: https://style-forge.dev/form/radio.html
  - - meta
    - name: twitter:title
      content: "Radio | Style-Forge.Form"
  - - meta
    - name: twitter:description
      content: "Radio | Style-Forge.Form: versatile component for easy creation, styling, and management of radio buttons in web apps."
---

# Radio

This section showcases different types of radio elements that can be used in HTML forms. Each example provides the HTML code and styling utilizing the `sf-radio` class.

<actions @disabled="x => disabled = x" :showLoading="false" />

<br />

---
<br />

<div class="d:f:x">
  <label class="sf-radio">
    <input type="radio" name="radio" value="radio" checked :disabled="disabled" /> <span>radio</span>
  </label>
  <label class="sf-radio">
    <input type="radio" name="radio" value="radio 1" :disabled="disabled" /> <span>radio 1</span>
  </label>
</div>

<highlight lang="html">
&lt;label class="sf-radio"&gt;
  &lt;input type="radio" name="radio" value="radio"{{ isDisabled }} /&gt; &lt;span&gt;radio&lt;/span&gt;
&lt;/label&gt;
</highlight>

## Conclusion

Using these examples, you can create forms with radio elements. All elements are styled using the `sf-radio` class for a consistent look and feel.

<script setup>
import { ref, computed } from 'vue';

import 'style-forge.form/src/var.css';
import 'style-forge.form/src/base.css';
import 'style-forge.form/src/global.css';
import 'style-forge.form/src/pseudo-classes.css';

import 'style-forge.form/src/loading.css';
import 'style-forge.form/src/checkbox-radio.css';

const disabled = ref(false);
const isDisabled = computed(() => disabled.value ? ' disabled' : null);
</script>
