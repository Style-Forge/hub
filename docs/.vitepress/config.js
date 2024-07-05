import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

export default defineConfig({
  title: "Style-Forge",
  description: "Style-Forge: CSS framework with themes, utilities, flexbox, and grid for creating responsive websites",

  head: [
    ['meta', { name: 'keywords', content: 'style-forge, CSS framework, modern design, responsive design, utilities, web development, frontend, UI components, CSS grid, CSS flexbox, themes, form validation, custom themes, grid, flex, input, select, switch, textarea, helpers, colors' }],
    ['meta', { name: 'robots', content: 'index, follow' }],

    ['link', { rel: 'apple-touch-icon', size: '180x180', href: '/icons/icon-180x180.png' }],
    ['link', { rel: 'icon', size: '32x32', href: '/icons/icon-32x32.png' }],
    ['link', { rel: 'icon', size: '16x16', href: '/icons/icon-16x16.png' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],

    ['meta', { property: 'og:title', content: 'Style-Forge' }],
    ['meta', { property: 'og:description', content: 'Style-Forge: CSS framework with themes, utilities, flexbox, and grid for creating responsive websites' }],
    ['meta', { property: 'og:url', content: 'https://style-forge.dev' }],
    ['meta', { property: 'og:image', content: '/images/main.png' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { name: 'twitter:title', content: 'Style-Forge' }],
    ['meta', { name: 'twitter:description', content: 'Style-Forge: CSS framework with themes, utilities, flexbox, and grid for creating responsive websites' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: '/images/main.png' }],

    ...(process.env.NODE_ENV === 'production' ? [
      // Google Analytics
      [
        'script',
        { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-YG8WG38YDF' }
      ],
      [
        'script',
        {},
        `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-YG8WG38YDF');
        `
      ],
      // Tarteaucitron.js
      [
        'script',
        { src: 'https://cdn.jsdelivr.net/npm/tarteaucitronjs@latest/tarteaucitron.min.js', type: 'text/javascript' }
      ],
      [
        'script',
        {},
        `
          tarteaucitron.init({
            "privacyUrl": "",
            "hashtag": "#tarteaucitron",
            "cookieName": "tarteaucitron",
            "orientation": "bottom",
            "showAlertSmall": true,
            "cookieslist": true,
            "adblocker": false,
            "AcceptAllCta": true,
            "highPrivacy": true,
            "handleBrowserDNTRequest": false,
            "removeCredit": false,
            "moreInfoLink": true,
            "useExternalCss": false,
            "cookieDomain": ""
          });
          tarteaucitron.user.gtagUa = 'G-YG8WG38YDF';
          (tarteaucitron.job = tarteaucitron.job || []).push('gtag');
        `
      ]
    ] : [])
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
                text: 'z-index',
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
                text: 'checkbox',
                link: '/form/checkbox',
              },
              {
                text: 'radio',
                link: '/form/radio',
              },
              {
                text: 'select',
                link: '/form/select',
              },
              {
                text: 'textarea',
                link: '/form/textarea',
              },
              {
                text: 'file',
                link: '/form/file',
              },
              {
                text: 'color',
                link: '/form/color',
              },
              {
                text: 'switch',
                link: '/form/switch',
              },
              {
                text: 'validate',
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
      { icon: 'github', link: 'https://github.com/sarmaged/style-forge' },
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

  markdown: {
    config: md => {
      md.use(tabsMarkdownPlugin)
    }
  },

  lastUpdated: true
})
