# AGENTS.md

## Cursor Cloud specific instructions

**Product**: CikguRam — a Next.js 15 lead-generation landing page for a Malaysian driving instructor. Single-service app with no database or Docker dependencies.

### Services

| Service | Command | Port | Notes |
|---------|---------|------|-------|
| Next.js dev server | `pnpm dev` | 4028 | Only service needed for local dev |

### Quick reference

- **Lint**: `pnpm lint` (ESLint via `next lint`)
- **Type-check**: `pnpm type-check` (runs `tsc --noEmit`)
- **Format**: `pnpm format` (Prettier)
- **Build**: `pnpm build` (standard Next.js build)
- See `package.json` `scripts` for the full list, including Cloudflare deploy commands.

### Non-obvious caveats

- **Node.js 20+ required** — the project uses `@types/node: ^20`. There is no `.nvmrc`; the VM needs Node.js installed from NodeSource or similar.
- **pnpm is the package manager** — always use `pnpm install`, not `npm install`. The lockfile is `pnpm-lock.yaml`.
- **`.env.local` setup** — copy `.env.example` to `.env.local` before starting the dev server. The app runs without it, but WhatsApp links and site URL metadata will be placeholder values. The `MAKE_WEBHOOK_URL` is optional in dev (the `/api/lead` endpoint returns `{"ok":true}` without it).
- **Dev server port** — the dev server runs on port **4028** (not the default 3000).
- **`initOpenNextCloudflareForDev()`** — `next.config.mjs` calls this at module scope. It's a no-op in standard dev mode but may log warnings; this is expected.
- **`pnpm.onlyBuiltDependencies`** — configured in `package.json` to allow build scripts for `esbuild`, `sharp`, `unrs-resolver`, and `workerd` without interactive approval.
