<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  showLoading: {
    type: Boolean,
    default: true,
  },
  showDisabled: {
    type: Boolean,
    default: true,
  }
})


const loading = ref(false)
const disabled = ref(false)

const emit = defineEmits(['loading', 'disabled'])

watch(loading, x => {
  disabled.value = x
  emit('loading', x)
  emit('disabled', x)
})
watch(disabled, x => {
  emit('disabled', x)
  if (!x) loading.value = false
})
</script>

<template>
  <div class="actions d:f wrap pos:s t z:1">
    <label v-if="showLoading" class="sf-checkbox">
      <input type="checkbox" v-model="loading"> <span>Loading</span>
    </label>
    <label v-if="showDisabled" class="sf-checkbox">
      <input type="checkbox" v-model="disabled"> <span>Disabled</span>
    </label>
  </div>
</template>

<style scoped>
.pos\:s {
  top: 64px;
  background: var(--vp-c-bg);
  padding: 1em;
  border: 1px solid var(--vp-c-divider);
}
</style>
