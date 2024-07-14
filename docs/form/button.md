---
title: Button
titleTemplate: Style-Forge.Form
description: "Button | Style-Forge.Form: versatile component for easy creation, styling, and interaction handling of buttons in web apps."

head:
  - - meta
    - name: keywords
      content: style-forge, button, input, styling, web development, frontend, button elements, button styles, responsive
  - - meta
    - property: og:title
      content: "Button | Style-Forge.Form"
  - - meta
    - property: og:description
      content: "Button | Style-Forge.Form: versatile component for easy creation, styling, and interaction handling of buttons in web apps."
  - - meta
    - property: og:url
      content: https://style-forge.dev/form/button.html
  - - meta
    - name: twitter:title
      content: "Button | Style-Forge.Form"
  - - meta
    - name: twitter:description
      content: "Button | Style-Forge.Form: versatile component for easy creation, styling, and interaction handling of buttons in web apps."
---

# Buttons

This section presents various types of button elements that can be used in HTML forms. Each example includes the HTML code and styling using the `sf-button` class.

<actions @disabled="x => disabled = x" @loading="x => loading = x" />

## button

<button :class="['sf-button', { 'sf-loading': loading }]" :disabled="disabled">Submit</button>

<highlight lang="html">
&lt;button class="{{ sClasses }}"{{ isDisabled }}&gt;Button&lt;/button&gt;
</highlight>

## submit

<button :class="['sf-button', { 'sf-loading': loading }]" :disabled="disabled" type="submit">Submit</button>

<highlight lang="html">
&lt;button class="{{ sClasses }}" type="submit"{{ isDisabled }}&gt;Button&lt;/button&gt;
</highlight>

## reset

<button :class="['sf-button', { 'sf-loading': loading }]" :disabled="disabled" type="reset">Reset</button>

<highlight lang="html">
&lt;button class="{{ sClasses }}" type="reset"{{ isDisabled }}&gt;Button&lt;/button&gt;
</highlight>

## anchor button

<a :href="disabled ? null : '#'" :class="['sf-button', { 'sf-loading': loading }]">Anchor Button</a>

<highlight lang="html">
&lt;a{{ disabled ? null : ' href="#"'}} class="{{ sClasses }}"&gt;Button&lt;/a&gt;
</highlight>

## Conclusion

Using these examples, you can create a variety of forms with different types of button elements to meet your requirements. All elements are styled using the `sf-button` class for a consistent look and feel.

<script setup>
import { ref, computed } from 'vue';

import 'style-forge.form/src/var.css';
import 'style-forge.form/src/base.css';
import 'style-forge.form/src/global.css';
import 'style-forge.form/src/pseudo-classes.css';

import 'style-forge.form/src/loading.css';
import 'style-forge.form/src/checkbox-radio.css';

import 'style-forge.form/src/button.css';

const loading = ref(false);
const disabled = ref(false);

const isLoading = computed(() => loading.value ? 'sf-loading' : null);
const isDisabled = computed(() => disabled.value ? ' disabled' : null);

const sClasses = computed(() => {
  return ['sf-button', isLoading.value].filter(x => x).join(' ')
});
</script>
