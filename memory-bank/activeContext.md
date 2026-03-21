# Active Context

## What is happening now?

- Completed migration from Biome to oxlint + oxfmt for linting and formatting.

## Recent changes

- Migrated from Biome to oxlint (linter) and oxfmt (formatter).
  - Removed `@biomejs/biome` and `biome.json`.
  - Added `oxlint` and `oxfmt` as devDependencies.
  - Created `oxlint.json` with React plugin and rules (self-closing-comp, no-unescaped-entities, no-unused-vars, prefer-template, no-else-return).
  - Created `.oxfmtrc.json` with formatting config (tabs, 4-width, double quotes, trailing commas, semicolons).
  - Updated `package.json` scripts: `lint` → `oxlint`, `format` → `oxfmt --write`, `check` → `pnpm lint && pnpm format`.
  - Updated `simple-git-hooks` pre-commit to `pnpm lint && pnpm format`.
  - Regenerated `.git/hooks/pre-commit` to use the new commands.
- Simplified TypeScript configuration by merging `tsconfig.node.json` into `tsconfig.json`.
- Upgraded TypeScript to `6.0.0-beta`.
- Migrated project from JavaScript/JSX to TypeScript/TSX.
- Migrated from `husky` to `simple-git-hooks` for Git hooks management.
- Migrated Vite from version 7 to 8.0.0 stable and updated `@vitejs/plugin-react` to 6.0.1.

## Next steps

- Build out specific content for `Game` and `Knowledge` pages.
- Enhance portfolio projects showcase.
