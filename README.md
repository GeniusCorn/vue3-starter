<p align='center'>
  <img src='./public/vue.png' alt='vue3' height='200'/>
</p>
# Vue 3 Starter

Vue 3 development template for building web applications quickly, integrating Vue 3, Vite, and popular libraries or development plugins.

## Features

- [Vue 3](https://vuejs.org/), [Vite 3](https://vitejs.dev/), [pnpm](https://pnpm.io/)
- Automatic import of APIs with [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import)
- Automatic import of components with [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)
- File-based routing using [vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages)
- Flexible layout system with [vite-plugin-vue-layouts](https://github.com/JohnCampionJr/vite-plugin-vue-layouts)
- Integration of [UnoCSS](https://unocss.dev/)
- State management through [Pinia](https://pinia.vuejs.org/)
- Unit Testing with [Vitest](https://vitest.dev/)
- End-to-End testing with [Playwright](https://playwright.dev/)
- Support of [TypeScript](https://www.typescriptlang.org/)
- Easy deployment on [Netlify](https://www.netlify.com/) with zero-config
- Continuous updates to ensure the latest features and improvements

## Pre-packed

### Plugins

- [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import)
- [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)
- [Vue Router](https://router.vuejs.org/)
  - [vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages)
  - [vite-plugin-vue-layouts](https://github.com/JohnCampionJr/vite-plugin-vue-layouts)
- [Pinia](https://pinia.vuejs.org/)

### UI Framework

- [UnoCSS](https://github.com/unocss/unocss)

### Icons

- [Tabler](https://tabler-icons.io/) icons via UnoCSS

### Coding Style

- [Prettier](https://prettier.io/), no semi, single quotes
- [ESLint](https://eslint.org/) with [standard JS](https://standardjs.com/)

### Dev Tools

- [pnpm](https://pnpm.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vitest](https://vitest.dev/)
- [Playwright](https://playwright.dev/)
- [Netlify](https://www.netlify.com/)

## Usage

### Clone to local

```sh
npx degit GeniusCorn/vue3-starter my-app
cd my-app
pnpm i
```

### Development

Just run and visit <http://localhost:5173>

```sh
pnpm dev
```

### Build

To build the app, run

```sh
pnpm build
```

## Deploy on Netlify

Go to Netlify, add new site and import an existing project from your git repository, just click deploy site and the app will be live soon.
