---
layout: home

hero:
  name: 'ArtCore'
  text: 'Layered Modular Design (LMD)'
  tagline: 'A scalable frontend architecture for complex React applications'
  image:
      dark: /dark.png
      light: /light.png
      alt: VitePress
  actions:
    - theme: brand
      text: Why ArtCore?
      link: /docs/introduction
    - theme: alt
      text: Getting Started
      link: /docs/getting-started/installation
    - theme: alt
      text: View Templates
      link: /docs/architecture/overview

features:
  - icon: 🧱
    title: Layered Structure
    details: Strict separation of UI, domain, and infrastructure layers.
  - icon: 🧩
    title: Modular Features
    details: Each feature is isolated and reusable.
  - icon: ⚡
    title: Scalable by Design
    details: Built for large React applications and teams.
---

## Why ArtCore?

Modern frontend architecture breaks at scale.

- Feature-based structures become chaotic in large teams
- Shared folders grow uncontrollably
- Ownership becomes unclear
- Refactoring becomes expensive
- Teams start stepping on each other’s code

> Most architectures work for small apps — but fail when teams scale beyond 5–10 developers.

## A Structured Alternative

ArtCore introduces a modular ecosystem approach where every part of the system has:

- explicit ownership
- strict boundaries
- predictable responsibilities
- scalable composition model

## Core Principles

::: info Ownership over structure
Each module owns its domain completely.
:::
::: info Predictability
You always know where code belongs.
:::
::: info Isolation by default
No accidental coupling between features.
:::
::: info Scale is a first-class requirement
Designed for real-world enterprise growth.
:::
::: info Business logic first
UI is just a projection of domain logic.
:::

## Architecture Overview

```txt
src/
  core/        → infrastructure (api, config, env)
  common/      → shared logic (services, providers)
  modules/     → business domains (isolated units)
  app/         → composition layer (routing, bootstrap)
```

> Everything is either infrastructure, shared logic, or an isolated business module.

## When to use ArtCore

- SaaS applications
- Admin dashboards
- Enterprise systems
- Multi-team frontend projects
- Long-living products with scaling needs

## What you get

- scalable architecture model
- CLI scaffolding tools
- reusable module patterns
- strict architectural boundaries
- production-ready templates
- ecosystem packages

## Ecosystem

- ESLint config
- TypeScript config
- CLI generator
- architecture templates
- module scaffolding tools

## Templates

Ready-to-use project starters:

- dashboard
- CRM
- SaaS starter
- admin panel
- ecommerce
- chat system

## Get Started

Start building structured applications instead of chaotic ones.

<div style="width: 100%; display: flex; column-gap: 20px; align-items: center; flex-wrap: wrap;">
    <p style="margin-block: 5px"><span>👉</span> <a href="/" style="cursor: pointer">Read the Docs</a></p>
    <p style="margin-block: 5px"><span>👉</span> <a href="/" style="cursor: pointer">Explore Architecture</a></p>
    <p style="margin-block: 5px"><span>👉</span> <a href="/" style="cursor: pointer">View Templates</a></p>
</div>
