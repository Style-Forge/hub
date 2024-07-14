---
title: Inputs
titleTemplate: Style-Forge.Form
description: "Inputs | Style-Forge.Form: versatile components for easy creation, styling, and validation of various input elements in web apps."

head:
  - - meta
    - name: keywords
      content: style-forge, inputs, input elements, validate, styling, web development, frontend, input styles, responsive
  - - meta
    - property: og:title
      content: "Inputs | Style-Forge.Form"
  - - meta
    - property: og:description
      content: "Inputs | Style-Forge.Form: versatile components for easy creation, styling, and validation of various input elements in web apps."
  - - meta
    - property: og:url
      content: https://style-forge.dev/form/inputs.html
  - - meta
    - name: twitter:title
      content: "Inputs | Style-Forge.Form"
  - - meta
    - name: twitter:description
      content: "Inputs | Style-Forge.Form: versatile components for easy creation, styling, and validation of various input elements in web apps."
---

# Inputs

This section presents various types of input elements that can be used in HTML forms. Each example includes the HTML code and styling using the `sf-input` class.

<actions @disabled="x => disabled = x" @loading="x => loading = x" />

## text

<input :class="sClasses" placeholder="text" pattern=".*\S+.*" :disabled="disabled" />

<highlight lang="html">
&lt;input class="{{ sClasses }}" placeholder="text" pattern=".*\S+.*"{{ isDisabled }} /&gt;
</highlight>

## search

<input :class="sClasses" type="search" placeholder="search" :disabled="disabled" />

<highlight lang="html">
&lt;input class="{{ sClasses }}" type="search" placeholder="search"{{ isDisabled }} /&gt;
</highlight>

## email

<input :class="sClasses" type="email" placeholder="email" pattern="\w+@\w+\.\w{2,}" required :disabled="disabled" />

<highlight lang="html">
&lt;input class="{{ sClasses }}" type="email" placeholder="email" pattern="\w+@\w+\.\w{2,}" required{{ isDisabled }} /&gt;
</highlight>

## password

<input :class="sClasses" type="password" placeholder="password" pattern="\w{16,}" autocomplete="off" required :disabled="disabled" />

<highlight lang="html">
&lt;input class="{{ sClasses }}" type="password" placeholder="password" pattern="\w{16,}" autocomplete="off" required{{ isDisabled }} /&gt;
</highlight>

## tel

<input :class="sClasses" type="tel" placeholder="tel" required :disabled="disabled" />

<highlight lang="html">
&lt;input class="{{ sClasses }}" type="tel" placeholder="tel" required{{ isDisabled }} /&gt;
</highlight>

## number

<input :class="sClasses" type="number" placeholder="number" :disabled="disabled" />

<highlight lang="html">
&lt;input class="{{ sClasses }}" type="number" placeholder="number"{{ isDisabled }} /&gt;
</highlight>

## url

<input :class="sClasses" type="url" placeholder="url" :disabled="disabled" />

<highlight lang="html">
&lt;input class="{{ sClasses }}" type="url" placeholder="url"{{ isDisabled }} /&gt;
</highlight>

## datetime

<input :class="sClasses" type="datetime-local" :disabled="disabled" />

<highlight lang="html">
&lt;input class="{{ sClasses }}" type="datetime-local"{{ isDisabled }} /&gt;
</highlight>

## date

<input :class="sClasses" type="date" :disabled="disabled" />

<highlight lang="html">
&lt;input class="{{ sClasses }}" type="date"{{ isDisabled }} /&gt;
</highlight>

## time

<input :class="sClasses" type="time" :disabled="disabled" />

<highlight lang="html">
&lt;input class="{{ sClasses }}" type="time"{{ isDisabled }} /&gt;
</highlight>

## month

<input :class="sClasses" type="month" :disabled="disabled" />

<highlight lang="html">
&lt;input class="{{ sClasses }}" type="month"{{ isDisabled }} /&gt;
</highlight>

## week

<input :class="sClasses" type="week" :disabled="disabled" />

<highlight lang="html">
&lt;input class="{{ sClasses }}" type="week"{{ isDisabled }} /&gt;
</highlight>

## Conclusion

Using these examples, you can create a variety of forms with different types of input elements to meet your requirements. All elements are styled using the `sf-input` class for a consistent look and feel.

<script setup>
import { ref, computed } from 'vue';

import 'style-forge.form/src/var.css';
import 'style-forge.form/src/base.css';
import 'style-forge.form/src/global.css';
import 'style-forge.form/src/pseudo-classes.css';

import 'style-forge.form/src/loading.css';
import 'style-forge.form/src/checkbox-radio.css';

import 'style-forge.form/src/input.css';

const loading = ref(false);
const disabled = ref(false);

const isLoading = computed(() => loading.value ? 'sf-loading' : null);
const isDisabled = computed(() => disabled.value ? ' disabled' : null);

const sClasses = computed(() => {
  return ['sf-input', isLoading.value].filter(x => x).join(' ')
});
</script>
