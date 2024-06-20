import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Style-Forge",
  description: "Style-Forge: CSS framework with themes, utilities, flexbox, and grid for creating responsive websites",

  head: [
    ['meta', { name: 'keywords', content: 'style-forge, CSS framework, modern design, responsive design, utilities, web development, frontend, UI components, CSS grid, CSS flexbox, themes, form validation, custom themes, grid, flex, input, select, switch, textarea, helpers, colors' }],
    ['meta', { name: 'robots', content: 'index, follow' }],

    ['link', { rel: 'apple-touch-icon', size: '180x180', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'icon', size: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'icon', size: '16x16', href: '/favicon-16x16.png' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],

    ['meta', { property: 'og:title', content: 'Style-Forge' }],
    ['meta', { property: 'og:description', content: 'Style-Forge: CSS framework with themes, utilities, flexbox, and grid for creating responsive websites' }],
    ['meta', { property: 'og:url', content: 'https://style-forge.dev' }],
    ['meta', { property: 'og:image', content: '/images/main.jpg' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { name: 'twitter:title', content: 'Style-Forge' }],
    ['meta', { name: 'twitter:description', content: 'Style-Forge: CSS framework with themes, utilities, flexbox, and grid for creating responsive websites' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: '/images/main.jpg' }]
  ],

  themeConfig: {
    search: {
      provider: 'local'
    },

    nav: [
      { text: 'Guide', link: '/guide/' }
    ],

    footer: {
      message: 'Released under the <a href="https://github.com/sarmaged/style-forge/blob/main/LICENSE">MIT License</a>.',
      copyright: 'Copyright © 2024-present <a href="https://github.com/sarmaged">Dmitrii Sagalov</a>'
    },

    sidebar: [
      {
        text: 'Guide',
        items: [
          {
            text: 'Quick Start',
            link: '/guide/'
          }
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
          },
          {
            text: 'Form',
            link: '/form/',
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
      { icon: 'github', link: 'https://github.com/sarmaged/style-forge' },
      { icon: 'npm', link: 'https://npmjs.com/package/style-forge' }
    ]
  },

  lastUpdated: true
})
