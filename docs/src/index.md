---
layout: home

hero:
    name: 'ArtCore'
    text: 'Layered Modular Design'
    tagline: 'Scalable architecture for complex React applications.'
    image:
        src: /hero.png
        alt: ArtCore
    actions:
        - theme: brand
          text: What is ArtCore?
          link: /docs/introduction/what-is-artcore
        - theme: alt
          text: Getting Started
          link: /docs/getting-started/installation
        - theme: alt
          text: Architecture
          link: /docs/architecture/overview

features:
    - icon: 🧱
      title: Layered Architecture
      details: Clear boundaries between business logic, UI, and infrastructure.
    - icon: 🧩
      title: Modular by Default
      details: Independent features designed for long-term scalability.
    - icon: ⚡
      title: Built for Large Teams
      details: Predictable structure for fast-growing React applications.
---

## ArtCore

ArtCore is a frontend architecture system designed for scalable React applications.

It combines layered architecture, modular boundaries, and strict dependency rules to help teams build predictable and maintainable codebases.

## Ecosystem

- CLI tools
- ESLint config
- TypeScript config
- Architecture templates
- Scaffolding utilities

## Start Building

<script setup>
import { useData } from 'vitepress';

const { lang, site } = useData();

const withBase = (url) => site.value.base + url
</script>

<div style="display:flex;gap:16px;flex-wrap:wrap;">

<a :href="withBase('docs/introduction/what-is-artcore')">
  What is ArtCore →
</a>

<a :href="withBase('docs/getting-started/installation')">
  Getting Started →
</a>

<a :href="withBase('docs/architecture/overview')">
  Explore Architecture →
</a>

</div>
