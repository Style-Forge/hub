<script setup>
import { ref, computed } from 'vue';
const disabled = ref(false);
const isDisabled = computed(() => disabled.value ? ' disabled' : null);
</script>

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
