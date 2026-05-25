<script setup>
import ArtCoreCallout from '../../../.vitepress/theme/components/ArtCoreCallout.vue';
</script>

# Folder Structure

After creating a new ArtCore application using the SPA template, the following minimal structure will be generated:

```txt
src/
├── core/
│   └── styles/
│       └── main.css
│
├── modules/
│   └── HomeModule/
│       ├── HomeModule.tsx
│       └── index.ts
│
├── pages/
│   └── HomePage/
│       ├── HomePage.tsx
│       └── index.ts
│
├── root/
│   ├── App.tsx
│   └── index.ts
│
└── main.tsx
````

<ArtCoreCallout title="Minimal SPA Structure">
This is the smallest possible ArtCore application structure.

Even in this minimal setup, the architecture already separates responsibilities and prepares the project for future scaling.
</ArtCoreCallout>

## main.tsx

The application entry point.

Responsible for:

* mounting the React application
* importing global styles
* rendering the root component

```tsx
import ReactDOM from 'react-dom/client';

import App from '@/root';

import '@/core/styles/main.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <App />
);
```

## main.css

Global application styles.

Usually contains:

* CSS reset
* typography
* theme variables
* base styles

```css
:root {
  font-family: Inter, sans-serif;
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

<ArtCoreCallout title="Why inside core?">
The <a href="/docs/architecture/core"><code>core</code></a> layer contains foundational application configuration and infrastructure.

Global styles are part of the application's foundation.
</ArtCoreCallout>

## App.tsx

The root application component.

Responsible for:

* application composition
* providers
* routing
* layouts
* application initialization

```tsx
import HomePage from '@/pages/HomePage';

const App = () => <HomePage />;

export default App;
```

## HomePage.tsx

Represents a route-level page.

Pages are responsible for:

* route composition
* page orchestration
* connecting modules together

Structure:

```txt
pages/
└── HomePage/
    ├── HomePage.tsx
    └── index.ts
```

```tsx
import HomeModule from '@/modules/HomeModule';

const HomePage = () => <HomeModule />;

export default HomePage;
```

<ArtCoreCallout title="Pages are not business logic">
<a href="/docs/architecture/pages"><code>Pages</code></a> should stay relatively thin.

Business logic should be isolated inside modules.
</ArtCoreCallout>

## HomeModule.tsx

Represents a business module.

<a href="/docs/architecture/modules"><code>Modules</code></a> isolate business logic and UI related to a specific domain.

Structure:

```txt
modules/
└── HomeModule/
    ├── HomeModule.tsx
    └── index.ts
```

```tsx
const HomeModule = () => (
    <section>
      <h1>Welcome to ArtCore</h1>
    </section>
);

export default HomeModule;
```

## Why index.ts?

Alias export file.

Allows cleaner imports:

```tsx
import { App } from '@/root'
```

instead of:

```tsx
import App from '@/root/App'
```

```ts
export * from './App'
```

<ArtCoreCallout title="Why use index.ts?">
Barrel exports simplify imports and make refactoring easier as the project grows.
</ArtCoreCallout>

## Why This Structure?

The goal of this structure is to provide:

* predictable scalability
* clear responsibility boundaries
* isolated business logic
* maintainable architecture
* easier onboarding
* cleaner imports through aliases

ArtCore establishes architectural boundaries from the very beginning — even in a minimal SPA application.

# Next Step

Now you can continue to the next section and learn how routing works in ArtCore.

→ `/docs/getting-started/routing`

