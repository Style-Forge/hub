// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'
import highlight from '../components/highlight.vue'

import './var.css'
import './style.css'

/** @type {import('vitepress').Theme} */
export default {
  ...DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {})
  },
  enhanceApp({ app, router, siteData }) {
    app.component('highlight', highlight)
    enhanceAppWithTabs(app);
  }
}
