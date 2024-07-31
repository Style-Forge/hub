import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

export default defineConfig({
  title: "Style-Forge",
  description: "CSS framework with themes, utilities, flexbox, and grid for creating responsive websites",

  head: [
    ['meta', { name: 'keywords', content: 'style-forge, CSS framework, modern design, responsive design, utilities, web development, frontend, UI components, CSS grid, CSS flexbox, themes, form validation, custom themes, grid, flex, input, select, switch, textarea, helpers, colors' }],
    ['meta', { name: 'robots', content: 'index, follow' }],

    ['link', { rel: 'apple-touch-icon', size: '180x180', href: '/icons/icon-180x180.png' }],
    ['link', { rel: 'icon', size: '32x32', href: '/icons/icon-32x32.png' }],
    ['link', { rel: 'icon', size: '16x16', href: '/icons/icon-16x16.png' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],

    ['meta', { property: 'og:title', content: 'Style-Forge' }],
    ['meta', { property: 'og:description', content: 'CSS framework with themes, utilities, flexbox, and grid for creating responsive websites' }],
    ['meta', { property: 'og:url', content: 'https://style-forge.dev' }],
    ['meta', { property: 'og:image', content: '/images/main.png' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { name: 'twitter:title', content: 'Style-Forge' }],
    ['meta', { name: 'twitter:description', content: 'CSS framework with themes, utilities, flexbox, and grid for creating responsive websites' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: '/images/main.png' }],
  ],

  themeConfig: {
    search: {
      provider: 'local'
    },

    nav: [
      { text: 'Guide', link: '/guide/' }
    ],

    footer: {
      message: 'Released under the <a href="https://opensource.org/license/MIT">MIT License</a><br /><a href="/privacy-policy">Privacy Policy</a>',
      copyright: 'Copyright © 2023-present Dmitrii Sagalov'
    },

    sidebar: [
      {
        text: 'Guide',
        items: [
          {
            text: 'Quick Start',
            link: '/guide/'
          },
        ]
      },
      {
        text: 'Modules',
        items: [
          {
            text: 'Base',
            link: '/base/'
          },
          {
            text: 'Helpers',
            link: '/helpers/',
            collapsed: true,
            items: [
              {
                text: 'Content position',
                link: '/helpers/content-position',
              },
              {
                text: 'Display',
                link: '/helpers/display',
              },
              {
                text: 'Opacity',
                link: '/helpers/op',
              },
              {
                text: 'Overflow',
                link: '/helpers/ov',
              },
              {
                text: 'Radius',
                link: '/helpers/radius',
              },
              {
                text: 'Shift',
                link: '/helpers/shift',
              },
              {
                text: 'Position',
                link: '/helpers/position',
              },
              {
                text: 'Size',
                link: '/helpers/size',
              },
              {
                text: 'Text',
                link: '/helpers/text',
              },
              {
                text: 'Z-Index',
                link: '/helpers/z',
              },
            ]
          },
          {
            text: 'Form',
            link: '/form/',
            collapsed: true,
            items: [
              {
                text: 'Buttons',
                link: '/form/button',
              },
              {
                text: 'Inputs',
                link: '/form/inputs',
              },
              {
                text: 'Checkbox',
                link: '/form/checkbox',
              },
              {
                text: 'Radio',
                link: '/form/radio',
              },
              {
                text: 'Select',
                link: '/form/select',
              },
              {
                text: 'Textarea',
                link: '/form/textarea',
              },
              {
                text: 'File',
                link: '/form/file',
              },
              {
                text: 'Color',
                link: '/form/color',
              },
              {
                text: 'Switch',
                link: '/form/switch',
              },
              {
                text: 'Validate',
                link: '/form/validate',
              },
            ]
          },
          {
            text: 'Colors',
            link: '/colors/',
          },
          {
            text: 'Patterns',
            link: '/patterns/',
          },
          {
            text: 'Themes',
            link: '/themes/'
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Style-Forge' },
      { icon: 'npm', link: 'https://npmjs.com/package/style-forge' }
    ]
  },

  vue: {
    template: {
      compilerOptions: {
        whitespace: 'preserve'
      }
    }
  },

  vite: {
    build: {
      chunkSizeWarningLimit: 1000,
    }
  },

  markdown: {
    config: md => {
      md.use(tabsMarkdownPlugin)
    }
  }
})
