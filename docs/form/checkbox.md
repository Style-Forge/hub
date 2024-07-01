<script setup>
import { ref, computed } from 'vue';
const checked = ref(true);
const disabled = ref(false);
const isDisabled = computed(() => disabled.value ? ' disabled' : null);
</script>

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
