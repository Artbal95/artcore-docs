import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/artcore-docs/',
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      title: 'ArtCore',
      description: 'Layered Modular Design (LMD)',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Examples', link: '/markdown-examples' },
        ],
        sidebar: [
          {
            text: 'Examples',
            items: [
              { text: 'Markdown Examples', link: '/markdown-examples' },
              { text: 'Runtime API Examples', link: '/api-examples' },
            ],
          },
        ],
        socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
        localeLinks: {
          text: 'Language',
          items: [
            { text: 'English', link: '/' },
            { text: 'Русский', link: '/ru/' },
          ],
        },
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
          { text: 'Гайд', link: '/ru/markdown-examples' },
        ],
        sidebar: [
          {
            text: 'Examples',
            items: [
              { text: 'Markdown Examples', link: '/ru/markdown-examples' },
              { text: 'Runtime API Examples', link: '/ru/api-examples' },
            ],
          },
        ],
        socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
        localeLinks: {
          text: 'Language',
          items: [
            { text: 'English', link: '/' },
            { text: 'Русский', link: '/ru/' },
          ],
        },
      },
    },
  },
})
