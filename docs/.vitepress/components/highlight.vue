<template>
  <pre ref="vNodePre" class="pre-hide pos:a top left ov:h w:0 h:0"><slot /></pre>
  <div :class="['s-shiki', `language-${lang}`, 'vp-adaptive-theme']">
    <button title="Copy Code" class="copy" />
    <span class="lang">{{ lang }}</span>

    <div v-html="highlightedCode" />
  </div>
</template>

<script setup>
import { ref, useSlots, watch, onMounted, nextTick } from 'vue'

import { createHighlighter } from 'shiki/bundle/web'

const props = defineProps({
  lang: {
    type: String,
    default: 'css'
  }
})

const langs = ['html', 'css', 'js']
const themes = ['github-dark', 'github-light']

let highlighter = null
const vNodePre = ref(null)
const highlightedCode = ref('')

const updateTheme = () => {
  const theme = document.documentElement.classList.contains('dark') ? themes[0] : themes[1]
  highlightCode(theme)
}

const slots = useSlots()

watch(() => slots.default(), async () => {
  await nextTick()
  updateTheme()
})

onMounted(updateTheme)

async function highlightCode(theme) {
  if (!vNodePre.value) return

  if (!highlighter) {
    highlighter = await createHighlighter({
      langs,
      themes,
    })
  }

  highlightedCode.value = highlighter.codeToHtml(vNodePre.value.innerText.trim(), {
    lang: props.lang,
    theme,
  })
}

const observer = new MutationObserver(updateTheme)
observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
</script>

<style>
.pre-hide {
  opacity: 0;
}
</style>
