<script setup>
import ArtCoreCallout from '../../../../.vitepress/theme/components/ArtCoreCallout.vue';
</script>

# Структура папок

После создания нового ArtCore приложения с использованием шаблона SPA будет сгенерирована следующая минимальная структура:

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

<ArtCoreCallout title="Минимальная SPA структура">
Это минимально возможная структура ArtCore приложения.

Даже в таком минимальном варианте архитектура уже разделяет ответственности и подготавливает проект к будущему масштабированию.
</ArtCoreCallout>

## main.tsx

Точка входа приложения.

Отвечает за:

* монтирование React приложения
* импорт глобальных стилей
* рендер корневого компонента

```tsx
import ReactDOM from 'react-dom/client';

import App from '@/root';

import '@/core/styles/main.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <App />
);
```

## main.css

Глобальные стили приложения.

Обычно содержит:

* CSS reset
* типографику
* theme variables
* базовые стили

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

<ArtCoreCallout title="Почему внутри core?">
Слой <a href="/ru/docs/architecture/core"><code>core</code></a> содержит фундаментальную конфигурацию и инфраструктуру приложения.

Глобальные стили являются частью основы приложения.
</ArtCoreCallout>

## App.tsx

Корневой компонент приложения.

Отвечает за:

* композицию приложения
* providers
* маршрутизацию
* layouts
* инициализацию приложения

```tsx
import HomePage from '@/pages/HomePage';

const App = () => <HomePage />;

export default App;
```

## HomePage.tsx

Представляет route-level страницу.

Pages отвечают за:

* композицию маршрутов
* orchestration страницы
* соединение модулей между собой

Структура:

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

<ArtCoreCallout title="Pages — это не бизнес-логика">
<a href="/ru/docs/architecture/pages"><code>Pages</code></a> должны оставаться относительно тонкими.

Бизнес-логика должна быть изолирована внутри modules.
</ArtCoreCallout>

## HomeModule.tsx

Представляет бизнес-модуль.

<a href="/ru/docs/architecture/modules"><code>Modules</code></a> изолируют бизнес-логику и UI, связанные с определённым доменом.

Структура:

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

## Почему нужен index.ts?

Файл для alias exports.

Позволяет делать более чистые импорты:

```tsx
import App from '@/root'
```

вместо:

```tsx
import App from '@/root/App'
```

```ts
export * from './App'
```

<ArtCoreCallout title="Почему стоит использовать index.ts?">
Barrel exports упрощают импорты и делают рефакторинг значительно удобнее по мере роста проекта.
</ArtCoreCallout>

## Зачем нужна такая структура?

Цель этой структуры:

* предсказуемое масштабирование
* чёткие границы ответственности
* изоляция бизнес-логики
* поддерживаемая архитектура
* более простой onboarding
* чистые импорты через aliases

ArtCore выстраивает архитектурные границы с самого начала — даже в минимальном SPA приложении.

# Следующий шаг

Теперь можно перейти к следующему разделу и изучить, как работает routing в ArtCore.

→ `/docs/getting-started/routing`
