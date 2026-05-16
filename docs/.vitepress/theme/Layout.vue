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
        autoplay
        muted
        playsinline
        webkit-playsinline
        preload="auto"
        disablepictureinpicture
        style="width: 100%; height: 100%; object-fit: cover; background: transparent"
      >
        <!-- Chrome / Edge / Firefox -->
        <source :src="base + 'video.webm'" type="video/webm" />

        <!-- Safari / iPhone -->
        <source :src="base + 'video.mov'" type="video/quicktime" />
      </video>
    </template>
  </DefaultTheme.Layout>
</template>
