import { defineConfig } from 'vitepress'
import generateSidebar from './utils/sidebar.js'

const isDev = process.env.NODE_ENV === 'development'

console.log(generateSidebar())

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: isDev ? '/' : '/artcore-docs/',
  srcDir: './src',
  cleanUrls: true,
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
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
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Examples', link: '/docs/getting-started/installation' },
        ],
        sidebar: generateSidebar(),
      },
    },
  },
})
