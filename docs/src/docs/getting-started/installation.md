<script setup>
import ArtCoreDetails from '../../../.vitepress/theme/components/ArtCoreDetails.vue';
import ArtCoreCallout from '../../../.vitepress/theme/components/ArtCoreCallout.vue';
import ArtCoreTerminalType from '../../../.vitepress/theme/components/ArtCoreTerminalType.vue';
</script>

# Installation

The fastest way to get started is to use the [ArtCore CLI](/docs/cli/intro).

ArtCore allows you to start building scalable applications without spending a long time on manual project setup.

<ArtCoreCallout variant="warning" title="Requirements">
Before you begin, make sure you have installed:

* Node.js >= 20
* npm, yarn или pnpm
</ArtCoreCallout>

## Create a Project

::: code-group
```bash [npm]
npx create-art-app my-art-app
```

```bash [yarn]
yarn create art-app my-art-app
```

```bash [pnpm]
pnpm create art-app my-art-app
```
:::

<ArtCoreDetails title="Can be used without a project name">

::: code-group
```bash [npm]
npx create-art-app
```
```bash [yarn]
yarn create art-app
```
```bash [pnpm]
pnpm create art-app
```
:::
If the project name is not specified, the CLI will enter interactive mode:

<ArtCoreTerminalType
  text="? Enter project name:"
  value="my-art-app"
  rewriteValue="my-awesome-app"
/>

After that, you will be able to enter the name directly in the terminal.
</ArtCoreDetails>

## Choosing a Project Type

After specifying the project name, the CLI will prompt you to choose a project type:

```bash
? Choose project type:
❯ Pure React
```

Each type defines the basic architecture and a set of predefined dependencies.
A detailed description of all project types and architectural presets is available [here](/docs/templates/intro)

<ArtCoreCallout variant="info" title="Pure React">
Minimal starter template without extra libraries and architectural overlays.

Perfect if you want to:

* start with pure React
* build the architecture yourself
* gradually adopt ArtCore
* avoid unnecessary dependencies
</ArtCoreCallout>

## Installing dependencies

During the project creation, the CLI will ask if you want to install dependencies automatically:

```bash
? Install dependencies now? (Y/n)
```

If you choose <b><i>Yes</i></b>, the CLI will automatically install the dependencies using the selected package manager.

If you choose <b><i>No</i></b>, you can manually install the dependencies later:

::: code-group
```bash [npm]
npm install
```
```bash [yarn]
yarn install
```
```bash [pnpm]
pnpm install
```
:::

<br/>

<ArtCoreCallout title="Useful Information">
This is useful if you want to first review the project structure or install dependencies manually later.
</ArtCoreCallout>

## Running the Project

After successfully completing all the steps, navigate to the project directory:

```bash
cd my-art-app
```

And run the project in development mode:

::: code-group
```bash [npm]
npm run dev
```
```bash [yarn]
yarn dev
```
```bash [pnpm]
pnpm dev
```
:::

After starting, the application will be available at localhost:5173

[//]: # (## Что генерирует CLI)

[//]: # ()
[//]: # (CLI автоматически настраивает:)

[//]: # ()
[//]: # (* Vite)

[//]: # (* TypeScript)

[//]: # (* ESLint)

[//]: # (* алиасы путей &#40;path aliases&#41;)

[//]: # (* маршрутизацию)

[//]: # (* структуру проекта)

[//]: # (* архитектурные слои)

[//]: # (* базовые провайдеры)

[//]: # (* окружение разработки)

[//]: # ()
[//]: # (## Структура проекта)

[//]: # ()
[//]: # (```)

[//]: # (src/)

[//]: # (├── core/)

[//]: # (├── common/)

[//]: # (├── modules/)

[//]: # (├── widgets/)

[//]: # (├── pages/)

[//]: # (├── shared/)

[//]: # (└── root/)

[//]: # (```)

[//]: # ()
[//]: # ()
[//]: # ()
[//]: # (## TypeScript)

[//]: # ()
[//]: # (ArtCore использует строгую конфигурацию TypeScript по умолчанию.)

[//]: # ()
[//]: # (Это помогает:)

[//]: # ()
[//]: # (* находить ошибки раньше)

[//]: # (* улучшать DX &#40;developer experience&#41;)

[//]: # (* упрощать рефакторинг)

[//]: # (* поддерживать масштабируемость приложений)

[//]: # ()
[//]: # (## ESLint)

[//]: # ()
[//]: # (Сгенерированный проект включает преднастроенный ESLint с:)

[//]: # ()
[//]: # (* правилами TypeScript)

[//]: # (* правилами React)

[//]: # (* сортировкой импортов)

[//]: # (* архитектурными ограничениями)

[//]: # (* правилами стиля кода)

[//]: # ()
[//]: # (## Алиасы путей)

[//]: # ()
[//]: # (Пример:)

[//]: # ()
[//]: # (```ts)

[//]: # (import { UserCard } from '@/modules/UserModule')

[//]: # (```)

[//]: # ()
[//]: # (Вместо:)

[//]: # ()
[//]: # (```ts)

[//]: # (import { UserCard } from '../../../../modules/UserModule')

[//]: # (```)

[//]: # ()
[//]: # (## Рекомендуемые расширения VS Code)

[//]: # ()
[//]: # (* ESLint)

[//]: # (* Prettier)

[//]: # (* Error Lens)

[//]: # (* Path Intellisense)

[//]: # ()
[//]: # (## Следующий шаг)

[//]: # ()
[//]: # (Перейдите к настройке первого проекта:)

[//]: # ()
[//]: # (→ /docs/getting-started/first-project)

[//]: # ()
[//]: # (::: tip Быстрый старт)

[//]: # (Создайте проект через CLI и изучайте архитектуру прямо в редакторе.)

[//]: # ()
[//]: # (ArtCore спроектирован так, чтобы структура папок уже объясняла архитектуру проекта.)

[//]: # (:::)
