import DefaultTheme from 'vitepress/theme'
import Layout from './layouts/Layout.vue'
import { onMounted, watch } from 'vue'
import { useRoute } from 'vitepress'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout,
  setup() {
    const route = useRoute()

    const removeCopyButtons = () => {
      document.querySelectorAll('pre.no-copy').forEach((pre) => {
        const wrapper = pre.parentElement
        const btn = wrapper?.querySelector('button.copy')
        if (btn) btn.remove()
      })
    }

    // 👇 первый рендер
    onMounted(() => {
      removeCopyButtons()
    })

    // 👇 при смене страниц (VitePress SPA)
    watch(
      () => route.path,
      () => {
        setTimeout(removeCopyButtons, 50)
      },
    )
  },
}
