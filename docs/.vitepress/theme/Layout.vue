<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { useData, inBrowser } from 'vitepress'
import { watchEffect, computed } from 'vue'

const { lang, site } = useData()

const base = computed(() => site.value.base)

watchEffect(() => {
  if (inBrowser) {
    document.cookie = `nf_lang=${lang.value}; expires=Mon, 1 Jan 2030 00:00:00 UTC; path=/`
  }
})
</script>

<template>
  <DefaultTheme.Layout>
    <template #home-hero-image>
      <video
        :src="base + 'video.webm'"
        style="background: black; object-fit: cover"
        autoplay
        muted
      />
    </template>
  </DefaultTheme.Layout>
</template>
