[🇷🇺 Русская версия](README.ru.md)

# ArtCore CLI

ArtCore CLI is a command-line tool designed to simplify the creation, generation, and maintenance of applications built with the ArtCore architecture.

The CLI is not just a project generator.

Its primary goal is to provide a scalable, predictable, and architecture-aware development experience.

---

# Philosophy

ArtCore CLI helps developers:

- generate consistent project structures
- reduce architectural chaos
- automate repetitive tasks
- enforce ArtCore conventions
- speed up onboarding
- scale frontend applications more safely

The CLI acts as an architecture-aware scaffolding engine.

---

# Features

## Project Creation

Create new ArtCore applications with interactive templates.

### Example

```bash
npx create-art-app
```

or

```bash
npx create-art-app my-app
```

---

# Interactive Setup

If no project name is provided:

```bash
? Enter project name:
```

Then:

```bash
? Choose template:
❯ Pure React
```

---

# Available Templates

Planned templates:

- Pure React
- React + React Router
- React + RTK
- React + React Query
- Dashboard Starter
- SaaS Starter

---

# Pure React Template

The first available template.

Minimal structure:

```txt
src/
  main.tsx
  root/
    App.tsx
```

The generated application includes:

- ArtCore welcome screen
- ArtCore logo
- link to ArtCore website

Inspired by the Vite starter experience.

---

# Code Generation

The CLI will support automatic code generation.

Example:

```bash
cap g p Home -l
```

or

```bash
cap generate page Home --lazy
```

---

# Generated Structure Example

## Page Generator

```txt
src/
  pages/
    HomePage/
      HomePage.tsx
      index.ts
```

---

## Module Generator

```txt
src/
  modules/
    HomeModule/
      HomeModule.tsx
      index.ts
```

---

# Planned Generator Types

- pages
- modules
- widgets
- features
- entities
- layouts
- routes

---

# Planned CLI Structure

```txt
cli/
  src/
    commands/
    constants/
    prompts/
    generators/
    templates/
    utils/
```

---

# Constants Layer

All static definitions should be separated into constants.

Examples:

- template lists
- command aliases
- prompt messages
- generator definitions

---

# Prompt System

The CLI uses interactive prompts for:

- project name
- template selection
- architecture presets
- generator configuration

---

# Generator System

The generator system is responsible for:

- folder generation
- file generation
- template rendering
- route injection
- architecture validation

---

# Example CLI Commands

## Create Application

```bash
npx create-art-app my-app
```

---

## Generate Page

```bash
cap g p Home
```

---

## Generate Lazy Page

```bash
cap g p Home -l
```

---

## Generate Module

```bash
cap g m Home
```

---

# Future CLI Features

## Planned Features

- automatic routing injection
- dependency validation
- architecture linting
- import boundary checking
- monorepo support
- plugin system
- template marketplace
- interactive architecture visualizer
- smart generators
- route auto-registration
- ESLint integration
- TypeScript configuration presets

---

# Long-Term Vision

ArtCore CLI is intended to evolve into a complete frontend architecture platform.

The goal is to provide:

- scalable application foundations
- predictable project structure
- enterprise-ready architecture workflows
- architecture consistency across teams
- high development speed without sacrificing maintainability

---

# Main Goal

The goal of ArtCore CLI is not only to generate code.

Its purpose is to help developers maintain scalable, predictable, and maintainable frontend architecture.
