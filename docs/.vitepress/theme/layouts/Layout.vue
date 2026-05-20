<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { useData, inBrowser } from 'vitepress'
import { watchEffect } from 'vue'
import useVersion from '../composables/useVersion'

const { lang } = useData()
const { version } = useVersion()

watchEffect(() => {
  if (inBrowser) {
    document.cookie = `nf_lang=${lang.value}; expires=Mon, 1 Jan 2030 00:00:00 UTC; path=/`
  }
})
</script>

<template>
  <DefaultTheme.Layout>
    <template #nav-bar-content-after>
      <span class="version-badge"> v{{ version }} </span>
    </template>
  </DefaultTheme.Layout>
</template>

<style scoped>
.version-badge {
  margin-left: 10px;
  padding: 4px 8px;
  font-size: 14px;
  border-radius: 999px;
  background: rgba(30, 41, 59, 0.9);
  color: white;
  opacity: 0.85;
  backdrop-filter: blur(6px);
  transition: 0.2s;
}
</style>
