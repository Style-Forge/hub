<script setup>
import { ref, computed } from 'vue';

const loading = ref(false);
const disabled = ref(false);

const isLoading = computed(() => loading.value ? 'sf-loading' : null);
const isDisabled = computed(() => disabled.value ? ' disabled' : null);

const sClasses = computed(() => {
  return ['sf-input', isLoading.value].filter(x => x).join(' ')
});
</script>

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
