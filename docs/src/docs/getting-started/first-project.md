# First Project

Now that the application is running, let's create the first small landing page and gradually prepare the project for future routing.

In this step we will intentionally keep everything inside a single page to better understand how a basic Single Page Application works before introducing routing and page generation through the CLI.

The application will contain:

- Header
- Hero section
- About section
- Footer

The navigation links in the header will already exist, but the actual pages will be added later in the routing section.

## Understanding the current state

At this stage, the application has no routing system.

There is only a single page, and all UI sections are rendered inside it.

Navigation links in the header are purely visual for now and do not trigger page changes.

Everything exists inside one continuous layout:

- no route separation
- no page switching
- no URL-based navigation
- only component-based composition

The goal of this step is to focus on building the UI structure and modular architecture first, before introducing routing and page generation through the CLI.

## Recommended Structure

Inside the generated project, create the following structure:

```txt
src/
├── modules/
│   └── LandingModule/
│       ├── components/
│       │   ├── Header/
│       │   ├── Hero/
│       │   ├── About/
│       │   └── Footer/
│       │
│       └── LandingModule.tsx
│
└── root/
    └── App.tsx
```

This structure already follows the ArtCore philosophy:

- business logic is grouped inside modules
- UI is split into isolated parts
- the application remains scalable even at an early stage

## Creating the Landing Module

Create the main module component:

```tsx
// src/modules/LandingModule/LandingModule.tsx

import { About } from './components/About/About'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'

export const LandingModule = () => {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
      </main>

      <Footer />
    </>
  )
}
```

## Header Component

```tsx
// src/modules/LandingModule/components/Header/Header.tsx

export const Header = () => {
  return (
    <header>
      <div>
        <h2>ArtCore</h2>

        <nav>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </div>
    </header>
  )
}
```

Right now the links are placeholders.

Later, in the routing section, the CLI will generate real pages and automatically connect routes.

## Hero Section

```tsx
// src/modules/LandingModule/components/Hero/Hero.tsx

export const Hero = () => {
  return (
    <section>
      <h1>Build scalable React applications</h1>

      <p>
        ArtCore helps you create predictable and maintainable frontend
        architecture from the very beginning.
      </p>

      <button>Get Started</button>
    </section>
  )
}
```

## About Section

```tsx
// src/modules/LandingModule/components/About/About.tsx

export const About = () => {
  return (
    <section>
      <h2>About ArtCore</h2>

      <p>
        ArtCore combines scalable architecture principles with a developer
        friendly workflow focused on long-term maintainability.
      </p>
    </section>
  )
}
```

## Footer Component

```tsx
// src/modules/LandingModule/components/Footer/Footer.tsx

export const Footer = () => {
  return (
    <footer>
      <p>© 2026 ArtCore</p>
    </footer>
  )
}
```

## Connecting the Module

Now connect the module inside the root application component:

```tsx
// src/root/App.tsx

import { LandingModule } from '@/modules/LandingModule/LandingModule'

export const App = () => {
  return <LandingModule />
}
```

## Why This Structure Matters

Even though this example is very small, the architecture already prepares the project for scaling.

Instead of placing everything inside a single file:

- sections are isolated
- responsibilities are separated
- components remain predictable
- future routing becomes easier
- pages can later reuse modules and widgets

This is one of the key ideas behind ArtCore.

The architecture should remain understandable both for small projects and for large enterprise applications.

## What Comes Next

In the next step we will introduce routing and page generation.

You will learn how to:

- create pages through the CLI
- automatically generate routes
- organize navigation
- scale the application structure safely

Next page:

```txt
/docs/getting-started/routing
```
