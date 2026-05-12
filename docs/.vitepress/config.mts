import { defineConfig } from 'vitepress'
import generateSidebar from './utils/sidebar.js'

const isDev = process.env.NODE_ENV === 'development'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: isDev ? '/' : '/artcore-docs/',
  cleanUrls: true,
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      title: 'ArtCore',
      description: 'Layered Modular Design (LMD)',
      themeConfig: {
        logo: { dark: './dark.png', light: './light.png', alt: 'logo' },
        footer: {
          message: 'Released under the MIT License.',
          copyright: 'Copyright © 2026-present Artur Balayan',
        },
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Examples', link: '/docs/getting-started/installation' },
        ],
        sidebar: generateSidebar(),
        socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
      },
    },
    ru: {
      label: 'Русский',
      lang: 'ru',
      title: 'ArtCore',
      description: 'Слойная модульная архитектура (LMD)',
      themeConfig: {
        nav: [
          { text: 'Главная', link: '/ru/' },
          { text: 'Гайд', link: '/ru/docs/getting-started/installation' },
        ],
        sidebar: generateSidebar('ru'),
        socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
      },
    },
  },
})
