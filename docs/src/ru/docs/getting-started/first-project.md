<script setup>
import ArtCoreCallout from '../../../../.vitepress/theme/components/ArtCoreCallout.vue';
import ArtCoreDetails from '../../../../.vitepress/theme/components/ArtCoreDetails.vue';
</script>

# Первый проект

Теперь, когда приложение запущено, давай создадим первую небольшую лендинг-страницу и постепенно подготовим проект к будущему роутингу.

На этом этапе мы намеренно оставляем всё в пределах одной страницы, чтобы лучше понять, как работает базовое Single Page Application (SPA), прежде чем добавлять роутинг и генерацию страниц через CLI.

Приложение будет содержать:

- Header
- Hero секцию
- About секцию
- Footer

Навигационные ссылки в шапке уже будут существовать, но реальные страницы появятся позже, в разделе роутинга.

## Понимание текущего состояния

На данном этапе в приложении отсутствует система маршрутизации.

Существует только одна страница, и все UI-секции отображаются внутри неё.

Навигационные ссылки в шапке пока являются чисто визуальными и не вызывают переключения страниц.

Всё находится в одном непрерывном layout:

- отсутствует разделение на маршруты
- нет переключения между страницами
- нет навигации на основе URL
- используется только компонентная композиция

<ArtCoreCallout title="Цель этого этапа">
Сосредоточиться на построении UI-структуры и модульной архитектуры, прежде чем внедрять маршрутизацию и генерацию страниц через CLI.
</ArtCoreCallout>

## Рекомендуемая структура

```txt
src/
├── modules/
│   └── HomeModule/
│       ├── components/
│       ├── containers/
│       ├── layouts/
│       ├── entities/
│       ├── features/
│       ├── {...}/
│       ├── HomeModule.tsx
│       └── index.ts
│
└── root/
    ├── App.tsx
    └── index.ts
```

## Создания первого проекта

В ArtCore мы всегда начинаем с самых маленьких строительных блоков.

Вместо того чтобы сразу переходить к страницам и роутингу, мы сначала разбираемся, как устроена система UI на базовом уровне.

Этот подход позволяет строить предсказуемые и масштабируемые приложения.

### Шаг 1 — Маленькие компоненты (components)

На самом первом этапе мы создаём базовые UI-примитивы, которые не зависят от бизнес-логики и могут использоваться в любом месте приложения.

В экосистеме React это фундаментальный слой, на котором строится вся дальнейшая архитектура.

**Что мы создаём**
- Button
<ArtCoreDetails title="Button компонент:">

```txt no-copy
/src/modules/HomeModule/components/Button/Button.tsx
```

```tsx
import { type FC, type ButtonHTMLAttributes } from 'react';

import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'danger';
}

const Button: FC<ButtonProps> = ({ variant = 'primary', className = "", ...rest}) => (
    <button className={`${styles.button} ${styles[variant]} ${className}`} {...rest} />
);

export default Button;
```

---

```txt no-copy
/src/modules/HomeModule/components/Button/Button.module.css
```

```css
.button {
    padding: 10px 18px;
    border-radius: 10px;
    font-size: 14px;
    cursor: pointer;
    border: none;
    transition: 0.2s ease;
}

.primary {
    background: #111;
    color: #fff;
}

.primary:hover {
    background: #333;
}

.secondary {
    background: transparent;
    border: 1px solid #ddd;
    color: #111;
}

.secondary:hover {
    border-color: #999;
}
```
---

```txt no-copy
/src/modules/HomeModule/components/Button/index.ts
```

```tsx
import Button from "./Button";

export default Button;
```

</ArtCoreDetails>

- Link
<ArtCoreDetails title="Link компонент:">

```txt no-copy
/src/modules/HomeModule/components/Link/Link.tsx
```

```tsx
import { type FC, type AnchorHTMLAttributes } from "react";

const Link: FC<AnchorHTMLAttributes<HTMLAnchorElement>> = ({ className = "", ...rest }) => (
    <a className={`${styles.link} ${className}`} {...rest} />
);

export default Link;
```

---

```txt no-copy
/src/modules/HomeModule/components/Link/Link.module.css
```

```css
.link {
    color: #111;
    text-decoration: none;
    font-size: 14px;
    opacity: 0.8;
    transition: 0.2s ease;
}

.link:hover {
    opacity: 1;
}
```
---

```txt no-copy
/src/modules/HomeModule/components/Link/index.ts
```

```tsx
import Link from "./Link";

export default Link;
```

</ArtCoreDetails>



### Шаг 2 — Слой композиции

Далее мы переходим к **контейнерам**.

Контейнеры отвечают за:

- объединение нескольких компонентов
- преобразование данных в UI
- отделение логики от представления

Пример:

- HeaderLinkContainer

На этом уровне интерфейс начинает приобретать структуру.

### Шаг 3 — Слой layout

После этого мы вводим **layout-слой**.

Layout отвечает за:

- ограничение ширины страницы
- отступы и сетку
- глобальную структуру приложения

Пример:

- PageLayout

На этом уровне мы обеспечиваем единообразие всех страниц.

### Шаг 4 — Слой features

Далее мы создаём **фичи**.

Фичи — это законченные UI-блоки, которые представляют реальные части приложения:

- Header
- Hero
- About
- Footer

Фичи собираются из:

- компонентов
- контейнеров
- правил layout’а

Именно здесь приложение начинает “оживать”.

### Поток архитектуры

Правильный порядок построения в ArtCore:

```txt
Components → Containers → Layouts → Features → Pages
```


Each layer depends only on the previous one.

This ensures:

- scalability
- maintainability
- predictable structure
- clear responsibility separation

---

## 🎯 Goal of this approach

The goal is not just to write UI.

The goal is to build a system where:

- every piece has a clear role
- complexity grows gradually
- features are easy to extend
- architecture stays stable over time

---

## ➡️ Next Step

Now that we understand the structure of a simple page, we can move forward and introduce:

- routing system
- multi-page architecture
- navigation logic
- CLI-based generation of structure

## Создание Home Module

```tsx
import About from './components/About'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'

export const HomeModule = () => (
    <div>
      <Header />

      <main>
        <Hero />
        <About />
      </main>

      <Footer />
    </div>
);
```

## Header

```tsx
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

## Hero

```tsx
export const Hero = () => {
  return (
    <section>
      <h1>Build scalable React applications</h1>

      <p>
        ArtCore helps you create predictable and maintainable frontend architecture from the very beginning.
      </p>

      <button>Get Started</button>
    </section>
  )
}
```

## About

```tsx
export const About = () => {
  return (
    <section>
      <h2>About ArtCore</h2>

      <p>
        ArtCore combines scalable architecture principles with a developer friendly workflow focused on long-term maintainability.
      </p>
    </section>
  )
}
```

## Footer

```tsx
export const Footer = () => {
  return (
    <footer>
      <p>© 2026 ArtCore</p>
    </footer>
  )
}
```

## Подключение в App

```tsx
import { LandingModule } from '@/modules/LandingModule/LandingModule'

export const App = () => {
  return <LandingModule />
}
```

## Что дальше

Дальше мы добавим роутинг и генерацию страниц через CLI:

- создание страниц через CLI
- автоматическое подключение роутов
- масштабирование структуры

→ /docs/getting-started/routing
