<script setup>
import { ref, computed } from 'vue';

const loading = ref(false);
const disabled = ref(false);

const isLoading = computed(() => loading.value ? 'sf-loading' : null);
const isDisabled = computed(() => disabled.value ? ' disabled' : null);

const ldgInput = computed(() => ['sf-input', 'validates', isLoading.value].filter(x => x).join(' '));
const ldgInputError = computed(() => ['sf-input', 'error', isLoading.value].filter(x => x).join(' '));
const ldgSelect = computed(() => ['sf-select', 'validates', isLoading.value].filter(x => x).join(' '));
const ldgTextarea = computed(() => ['sf-textarea', 'validates', isLoading.value].filter(x => x).join(' '));
const ldgButton = computed(() => ['sf-button', isLoading.value].filter(x => x).join(' '));
</script>

# Validate

This section provides examples of input elements with validation that can be used in HTML forms. Each example includes the HTML code and styling using various classes such as `sf-input`, `sf-checkbox`, `sf-select`, `sf-textarea`, and `sf-switch`.

There are three additional classes: `sf-description`, `sf-invalid`, and `sf-valid`. These classes are effective when the element is given the `validates` class.

## Block description
```html
<div class="sf-description">Text description</div>
```

## Block invalid
```html
<div class="sf-invalid">❌ Text error</div>
```

## Block valid
```html
<div class="sf-valid">✅ Text success</div>
```

## Required Input

<actions @disabled="x => disabled = x" @loading="x => loading = x" />

<br />

---
<br />

<input :class="ldgInput" placeholder="Required Input" required :disabled="disabled" />

<highlight lang="html">
&lt;input class="{{ ldgInput }}" placeholder="Required Input" required{{ isDisabled }} /&gt;
</highlight>

## Input with Pattern

<input :class="ldgInput" placeholder="Pattern Input /\w{3,16}/" pattern="\w{3,16}" :disabled="disabled" />
<div class="sf-description">Text description</div>
<div class="sf-invalid">❌ Text error</div>

<highlight lang="html">
&lt;input class="{{ ldgInput }}" placeholder="Pattern Input" pattern="\w{3,16}"{{ isDisabled }} /&gt;
&lt;div class="sf-description"&gt;Text description&lt;/div&gt;
&lt;div class="sf-invalid"&gt;❌ Text error&lt;/div&gt;
</highlight>

## Always show error

<input :class="ldgInputError" placeholder="text" :disabled="disabled" />
<div class="sf-invalid">❌ Text error</div>

<highlight lang="html">
&lt;input class="{{ ldgInputError }}" placeholder="text"{{ isDisabled }} /&gt;
&lt;div class="sf-invalid"&gt;❌ Text error&lt;/div&gt;
</highlight>

## Checkbox

<label class="sf-checkbox validates">
  <input type="checkbox" required :disabled="disabled" /> <span>Checkbox</span>
  <div class="sf-invalid">❌ Text error</div>
  <div class="sf-valid">✅ Text success</div>
</label>

<highlight lang="html">
&lt;label class="sf-checkbox validates"&gt;
  &lt;input type="checkbox" required{{ isDisabled }} /&gt; &lt;span&gt;Checkbox&lt;/span&gt;
  &lt;div class="sf-invalid"&gt;❌ Text error&lt;/div&gt;
  &lt;div class="sf-valid"&gt;✅ Text success&lt;/div&gt;
&lt;/label&gt;
</highlight>

::: info
<div> - <code>sf-description</code> not work</div>
:::

## Select

<select :class="ldgSelect" multiple required :disabled="disabled">
  <option value="option 1">option 1</option>
  <option value="option 2">option 2</option>
  <option value="option 3">option 3</option>
  <option value="option 4">option 4</option>
</select>
<div class="sf-invalid">❌ Text error</div>
<div class="sf-valid">✅ Text success</div>

<highlight lang="html">
&lt;select :class="ldgSelect" multiple required{{ isDisabled }}"&gt;
  &lt;option value="option 1"&gt;option 1&lt;/option&gt;
  &lt;option value="option 2"&gt;option 2&lt;/option&gt;
  &lt;option value="option 3"&gt;option 3&lt;/option&gt;
  &lt;option value="option 4"&gt;option 4&lt;/option&gt;
&lt;/select&gt;
&lt;div class="sf-invalid"&gt;❌ Text error&lt;/div&gt;
&lt;div class="sf-valid"&gt;✅ Text success&lt;/div&gt;
</highlight>

::: info
<div> - Only <code>multiple</code></div>
<div> - <code>sf-description</code> not work</div>
:::

## Textarea

<textarea :class="ldgTextarea" placeholder="textarea" required :disabled="disabled" />
<div class="sf-description">Text description</div>
<div class="sf-invalid">❌ Text error</div>
<div class="sf-valid">✅ Text success</div>

<highlight lang="html">
&lt;textarea class="{{ ldgTextarea }}" placeholder="textarea" required{{ isDisabled }}&gt;&lt;/textarea&gt;
&lt;div class="sf-description"&gt;Text description&lt;/div&gt;
&lt;div class="sf-invalid"&gt;❌ Text error&lt;/div&gt;
&lt;div class="sf-valid"&gt;✅ Text success&lt;/div&gt;
</highlight>

## Switch

<label class="sf-switch validates">
  <input type="checkbox" required :disabled="disabled" /> <span>Some text</span>
  <div class="sf-invalid">❌ Text error</div>
  <div class="sf-valid">✅ Text success</div>
</label>

<highlight lang="html">
&lt;label class="sf-switch validates"&gt;
  &lt;input type="checkbox" required{{ isDisabled }} /&gt; &lt;span&gt;Some text&lt;/span&gt;
  &lt;div class="sf-invalid"&gt;❌ Text error&lt;/div&gt;
  &lt;div class="sf-valid"&gt;✅ Text success&lt;/div&gt;
&lt;/label&gt;
</highlight>

::: info
<div> - <code>sf-description</code> not work</div>
:::

## Auth form validate

Здесь показан пример, что `form` можно задать класс `validates` и кнопка `type="submit"` будет не активна до тех пор, пока все условия не будут удовлетворены

<form class="d:f validates" @submit.prevent>
  <fieldset class="d:f:y shift">
    <div class="d:f:x auto wrap">
      <div>
        <input :class="ldgInput" type="email" placeholder="email" pattern="\w+@\w+\.\w{2,}" required :disabled="disabled" />
        <div class="sf-description">Text description</div>
        <div class="sf-invalid">❌ Text error</div>
        <div class="sf-valid">✅ Text success</div>
      </div>
      <div>
        <input :class="ldgInput" type="password" placeholder="password" pattern="\w{3,16}" required autocomplete="off" :disabled="disabled" />
        <div class="sf-description">Text description</div>
        <div class="sf-invalid">❌ Text error</div>
        <div class="sf-valid">✅ Text success</div>
      </div>
    </div>
    <div class="shift right">
      <button :class="ldgButton" type="submit" :disabled="disabled">Login</button>
    </div>
  </fieldset>
</form>

<highlight lang="html">
&lt;form class="d:f validates" action="#"&gt;
  &lt;fieldset class="d:f:y shift"&gt;
    &lt;div class="d:f:x auto wrap"&gt;
      &lt;div&gt;
        &lt;input class="{{ ldgInput }}" type="email" placeholder="email" pattern="\w+@\w+\.\w{2,}" required{{ isDisabled }} /&gt;
        &lt;div class="sf-description"&gt;Text description&lt;/div&gt;
        &lt;div class="sf-invalid"&gt;❌ Text error&lt;/div&gt;
        &lt;div class="sf-valid"&gt;✅ Text success&lt;/div&gt;
      &lt;/div&gt;
      &lt;div&gt;
        &lt;input class="{{ ldgInput }}" type="password" placeholder="password" pattern="\w{3,16}" required autocomplete="off"{{ isDisabled }} /&gt;
        &lt;div class="sf-description"&gt;Text description&lt;/div&gt;
        &lt;div class="sf-invalid"&gt;❌ Text error&lt;/div&gt;
        &lt;div class="sf-valid"&gt;✅ Text success&lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="shift right"&gt;
      &lt;button class="{{ ldgButton }}" type="submit"{{ isDisabled }}&gt;Login&lt;/button&gt;
    &lt;/div&gt;
  &lt;/fieldset&gt;
&lt;/form&gt;
</highlight>

## Conclusion

Using these examples, you can create forms with input elements that have validation. All elements are styled using the `sf-input` class for a consistent look and feel.
