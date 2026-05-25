<template>
  <details class="artcore-details" :open="open">
    <summary class="artcore-summary">
      {{ title }}
    </summary>

    <div class="artcore-content">
      <slot />
    </div>
  </details>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  open?: boolean
}>()
</script>

<style scoped>
.artcore-details {
  margin-top: 16px;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid rgba(255, 179, 138, 0.35);
  background: linear-gradient(
    90deg,
    rgba(255, 179, 138, 0.25) 0%,
    rgba(255, 140, 207, 0.25) 45%,
    rgba(158, 197, 255, 0.25) 100%
  );
  backdrop-filter: blur(10px);

  transition: all 0.25s ease;
}

.artcore-details:hover {
  border-color: rgb(255, 140, 207);
}

/* SUMMARY HEADER */
.artcore-summary {
  display: list-item;
  align-items: center;
  gap: 10px;
  padding: 16px 16px 8px;
  margin: 0 0 8px;
  cursor: pointer;
  user-select: none;
  font-weight: 700;

  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
}

.artcore-content {
  padding: 0 14px 16px;
  color: var(--vp-c-text-1);
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  animation: fadeIn 0.2s ease;

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
