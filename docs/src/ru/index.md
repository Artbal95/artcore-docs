---
layout: home

hero:
    name: 'ArtCore'
    text: 'Layered Modular Design'
    tagline: 'Масштабируемая архитектура для сложных React-приложений.'
    image:
        src: /hero.png
        alt: ArtCore
    actions:
        - theme: brand
          text: Что такое ArtCore?
          link: /ru/docs/introduction/what-is-artcore
        - theme: alt
          text: Начало работы
          link: /ru/docs/getting-started/installation
        - theme: alt
          text: Архитектура
          link: /ru/docs/architecture/overview

features:
    - icon: 🧱
      title: Слоистая архитектура
      details: Чёткие границы между бизнес-логикой, UI и инфраструктурой.
    - icon: 🧩
      title: Модульность по умолчанию
      details: Независимые фичи, рассчитанные на долгосрочное масштабирование.
    - icon: ⚡
      title: Подходит для больших команд
      details: Предсказуемая структура для быстро растущих React-приложений.
---

## ArtCore

ArtCore — это система frontend-архитектуры, созданная для масштабируемых React-приложений.

Она объединяет слоистую архитектуру, модульные границы и строгие правила зависимостей, чтобы помочь командам строить предсказуемые и поддерживаемые кодовые базы.

## Экосистема

- CLI-инструменты
- ESLint конфигурация
- TypeScript конфигурация
- Архитектурные шаблоны
- Утилиты для генерации структуры

## Начать разработку

<script setup>
import { useData } from 'vitepress';

const { lang, site } = useData();

const withBase = (url) => site.value.base + url
</script>

<div style="display:flex;gap:16px;flex-wrap:wrap;">

<a :href="withBase('ru/docs/introduction/what-is-artcore')">
  Что такое ArtCore →
</a>

<a :href="withBase('ru/docs/getting-started/installation')">
  Начало работы →
</a>

<a :href="withBase('ru/docs/architecture/overview')">
  Изучить архитектуру →
</a>

</div>
