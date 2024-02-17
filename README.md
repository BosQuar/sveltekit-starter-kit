# Fullstack starter kit

A starterkit with a multitude of functionality already setup. Repo is powered by:

- Sveltekit
- Tailwind
- Prettier/eslint
- i18n with paraglidejs
- mode toggle(dark/light)
- Shadcn-svelte for components and theme(customisable)
- Prisma
- Postgres (docker)
- pgAdmin (via docker)

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`),

copy env.example and rename to .env

Setup docker with db

```bash
npm run docker
```

Setup Prisma

```bash
npm run setup-dev
```

Start a development server:

```bash
npm run start
```
