<template>
  <div class="callout" :class="variant">
    <div class="header">
      <span class="icon">{{ icon }}</span>

      <div class="title">
        <slot name="title">{{ title }}</slot>
      </div>
    </div>

    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    title?: string
    variant?: 'info' | 'warning' | 'danger' | 'success' | 'brand'
  }>(),
  {
    title: 'Useful information',
    variant: 'info',
  },
)

const icon = computed(() => {
  switch (props.variant) {
    case 'info':
      return '💡'
    case 'warning':
      return '⚠️'
    case 'danger':
      return '⛔'
    case 'success':
      return '✅'
    case 'brand':
      return '✨'
    default:
      return '💡'
  }
})
</script>

<style scoped>
.callout {
  margin-top: 16px;
  border-radius: 14px;
  padding: 12px 14px;
  border: 1px solid transparent;
  backdrop-filter: blur(10px);
  transition: all 0.2s ease;
}

.header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
}

.icon {
  font-size: 16px;
  line-height: 1;

  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
}

.info {
  background: linear-gradient(90deg, rgba(59, 130, 246, 0.12), rgba(96, 165, 250, 0.12));
  border-color: rgba(59, 130, 246, 0.35);
}

.warning {
  background: linear-gradient(90deg, rgba(255, 200, 120, 0.25), rgba(255, 160, 90, 0.25));
  border-color: rgba(255, 160, 90, 0.4);
}

.danger {
  background: linear-gradient(90deg, rgba(255, 120, 120, 0.25), rgba(255, 80, 120, 0.25));
  border-color: rgba(255, 80, 120, 0.45);
}

.success {
  background: linear-gradient(90deg, rgba(120, 255, 180, 0.25), rgba(90, 220, 255, 0.25));
  border-color: rgba(90, 220, 255, 0.4);
}

.brand {
  background: linear-gradient(
    90deg,
    rgba(255, 179, 138, 0.25) 0%,
    rgba(255, 140, 207, 0.25) 45%,
    rgba(158, 197, 255, 0.25) 100%
  );

  border-color: rgba(255, 140, 207, 0.35);
}

.title {
  font-weight: 700;
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
}

.content {
  font-size: 14px;
  color: var(--vp-c-text-1);

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
}
</style>
