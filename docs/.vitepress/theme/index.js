// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'
import highlight from '../components/highlight.vue'
import actions from '../components/actions.vue'
import simpleAnalytics from '../simpleAnalytics.js'

import './var.css'
import './style.css'

/** @type {import('vitepress').Theme} */
export default {
  ...DefaultTheme,
  Layout: () => h(DefaultTheme.Layout, null, {}),
  enhanceApp({ app }) {
    app.component('highlight', highlight)
    app.component('actions', actions)
    enhanceAppWithTabs(app)

    if (process.env.NODE_ENV === 'production') {
      simpleAnalytics()
    }
  }
}
