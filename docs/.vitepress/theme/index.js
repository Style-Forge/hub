// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './var.css'
import './style.css'

/** @type {import('vitepress').Theme} */
export default {
  ...DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {})
  },
  enhanceApp({ app, router, siteData }) {}
}
