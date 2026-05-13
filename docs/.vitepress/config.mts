import { defineConfig } from 'vitepress'
import generateSidebar from './utils/sidebar.js'

const isDev = process.env.NODE_ENV === 'development'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: isDev ? '/' : '/artcore-docs/',
  srcDir: './src',
  cleanUrls: true,
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }]],
  markdown: {
    anchor: {
      permalink: false,
    },
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      title: 'ArtCore',
      description: 'Layered Modular Design (LMD)',
      themeConfig: {
        logo: { dark: '/dark.png', light: '/light.png', alt: 'logo' },
        footer: {
          message: 'Released under the MIT License.',
          copyright: 'Copyright © 2026-present Artur Balayan',
        },
        sidebar: generateSidebar(),
      },
    },
    ru: {
      label: 'Русский',
      lang: 'ru',
      title: 'ArtCore',
      description: 'Layered Modular Design (LMD)',
      themeConfig: {
        logo: { dark: '/dark.png', light: '/light.png', alt: 'logo' },
        footer: {
          message: 'Выпущено под лицензией MIT.',
          copyright: 'Авторские права © 2026–настоящее время Артур Балаян',
        },
        outline: {
          label: 'На этой странице',
        },
        sidebar: generateSidebar('ru'),
      },
    },
  },
})
