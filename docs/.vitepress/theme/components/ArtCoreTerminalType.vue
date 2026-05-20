<template>
  <pre
    class="terminal"
  ><span class="prompt">{{ text }}</span> <span class="value">{{ displayed }}</span><span class="cursor" /></pre>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps<{
  text: string
  value: string
  rewriteValue?: string
  speed?: number
  eraseSpeed?: number
  pause?: number
}>()

const displayed = ref('')

const speed = props.speed ?? 200
const eraseSpeed = props.eraseSpeed ?? 100
const pause = props.pause ?? 1000

const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms))

const type = async (str: string, speed: number) => {
  for (let i = 0; i < str.length; i++) {
    displayed.value += str[i]
    await sleep(speed)
  }
}

const erase = async () => {
  while (displayed.value.length > 0) {
    displayed.value = displayed.value.slice(0, -1)
    await sleep(eraseSpeed)
  }
}

onMounted(async () => {
  while (true) {
    // 1. печатаем initial value
    await type(props.value, speed)

    // 2. пауза
    await sleep(pause)

    // 3. стираем
    await erase()

    if (props.rewriteValue) {
      await type(props.rewriteValue, speed)
    }

    await sleep(pause)

    await erase()
  }
})
</script>

<style scoped>
.terminal {
  background: var(--vp-code-block-bg);
  color: #e6edf3;
  padding: 20px 24px;
  border-radius: 10px;
  line-height: 1.6;
}

.prompt {
  font-size: 14px;
  color: var(--cli-prompt);

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
}

.value {
  user-select: none;
  color: var(--cli-value);

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
}

.cursor {
  display: inline-block;
  width: 4px;
  height: 14px;
  background: var(--cli-value);
  margin-left: 4px;
  animation: blink 1s infinite;
  vertical-align: middle;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>
