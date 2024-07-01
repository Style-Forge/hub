<script setup>
import { ref, computed } from 'vue';

const loading = ref(false);
const disabled = ref(false);

const isLoading = computed(() => loading.value ? 'sf-loading' : null);
const isDisabled = computed(() => disabled.value ? ' disabled' : null);

const sClasses = computed(() => {
  return ['sf-button', isLoading.value].filter(x => x).join(' ')
});
</script>

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
