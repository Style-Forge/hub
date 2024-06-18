import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Style-Forge",
  description: "Style-Forge is a comprehensive CSS framework designed for modern web development. It offers customizable themes, utility classes, and support for flexbox and grid, enabling developers to create responsive and aesthetically pleasing websites efficiently",

  head: [
    ['meta', { name: 'description', content: 'Style-Forge is a comprehensive CSS framework designed for modern web development.' }],
    ['meta', { property: 'og:title', content: 'Style-Forge' }],
    ['meta', { property: 'og:description', content: 'Style-Forge is a comprehensive CSS framework designed for modern web development.' }],
    ['meta', { property: 'og:url', content: 'https://style-forge.dev' }],
    ['meta', { property: 'og:type', content: 'website' }]
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
  }
})
