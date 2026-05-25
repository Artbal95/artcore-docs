import { defineConfig } from 'vitepress'
import generateSidebar from './utils/sidebar.js'
import { transformerMetaHighlight } from '@shikijs/transformers'

const isDev = process.env.NODE_ENV === 'development'
const basePath = isDev ? '/' : '/artcore-docs/'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: basePath,
  sitemap: {
    hostname: `https://artbal95.github.io${basePath}`,
  },
  vite: {
    server: {
      host: true,
    },
  },
  srcDir: './src',
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: `${basePath}favicon.svg` }],
    // SEO basics
    [
      'meta',
      {
        name: 'description',
        content: 'ArtCore — архитектура для масштабируемых frontend приложений',
      },
    ],
    [
      'meta',
      {
        name: 'keywords',
        content: 'ArtCore, frontend architecture, React architecture, DDD, FSD alternative',
      },
    ],
    ['meta', { name: 'author', content: 'ArtCore Team' }],

    // Open Graph (важно для шаринга в соцсетях)
    ['meta', { property: 'og:title', content: 'ArtCore Documentation' }],
    [
      'meta',
      {
        property: 'og:description',
        content: 'Scalable frontend architecture for modern applications',
      },
    ],
    ['meta', { property: 'og:image', content: `${basePath}og-image.png` }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: 'https://artbal95.github.io/artcore-docs' }],

    // Twitter Card
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'ArtCore Documentation' }],
    [
      'meta',
      { name: 'twitter:description', content: 'Scalable frontend architecture for React projects' },
    ],
    ['meta', { name: 'twitter:image', content: `${basePath}og-image.png` }],

    // viewport (если вдруг нет глобально)
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],

    // theme color (иконка/браузерная тема)
    ['meta', { name: 'theme-color', content: '#0f172a' }],
  ],
  transformHtml(code, id, context) {
    if (!code.includes('no-copy')) return code

    return code.replace(
      /<div class="([^"]*language-[^"]*)[^"]*no-copy[^"]*">([\s\S]*?)<\/div>/g,
      (match, cls, inner) => {
        const cleaned = inner.replace(/<button class="copy".*?<\/button>/, '')

        return `<div class="${cls} no-copy">${cleaned}</div>`
      },
    )
  },
  markdown: {
    anchor: {
      permalink: false,
    },
    codeTransformers: [
      transformerMetaHighlight(),
      {
        name: 'no-copy',
        pre(node) {
          const meta = this.options.meta?.__raw || ''
          if (!meta.includes('no-copy')) return
          node.properties ||= {}
          node.properties.class ||= []
          node.properties.class.push('no-copy')
        },
      },
    ],
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
        outline: {
          level: [2, 3],
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
          level: [2, 3],
        },
        sidebar: generateSidebar('ru'),
        docFooter: {
          prev: 'Предыдущая страница',
          next: 'Следующая страница',
        },
      },
    },
  },
})
