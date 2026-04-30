# Deploying CikguRam on Cloudflare

This app uses **[OpenNext Cloudflare](https://opennext.js.org/cloudflare)** (`@opennextjs/cloudflare`): it builds a **Worker** plus static assets (`wrangler.jsonc`), not a plain static HTML export. API routes (e.g. `POST /api/lead`) require this stack.

## Build commands

| Where | Install | Build |
|--------|---------|--------|
| **Cloudflare Workers Builds** (Git-connected) | `pnpm install` | `pnpm run build:cf` |
| **Local release** | `pnpm install` | `pnpm run deploy` (build + `wrangler deploy`) |

Do **not** use “Framework: None” with only `pnpm build` and an empty output directory on classic Pages static hosting—that targets `.next` incorrectly.

## Cloudflare Pages (Git integration)

Pages validates a **Wrangler** file that includes **`pages_build_output_dir`**. Putting that field in the same file as OpenNext’s Workers **`assets` → `ASSETS`** binding makes Wrangler error (**`ASSETS` is reserved** on Pages).

This repo uses **two files**:

| File | Purpose |
|------|--------|
| **`wrangler.toml`** | **Pages only**: `pages_build_output_dir`, `name`, `compatibility_*`. No `main` / no Worker `assets` block. Cloudflare’s Git build reads this so you should **not** see “Skipping file and continuing.” |
| **`wrangler.jsonc`** | **OpenNext + `wrangler deploy`**: `main`, `assets` (`ASSETS`), `services`. All **`pnpm`** scripts that invoke OpenNext/Wrangler pass **`--config wrangler.jsonc`** so the Worker config wins locally and in Workers Builds. |

Use the **[V2 build system](https://developers.cloudflare.com/pages/configuration/build-image/#v2-build-system)** for Wrangler-based Pages config.

| Dashboard field | Suggested value |
|-----------------|-----------------|
| Framework preset | **None** (or **Next.js** if your UI offers the current full-stack preset) |
| Build command | `pnpm install && pnpm run build:cf` |
| Build output directory | `.open-next` |
| Root directory | `/` (unless the app lives in a monorepo subfolder) |

**pnpm on CI:** `package.json` lists **`esbuild`** and **`workerd`** under **`pnpm.onlyBuiltDependencies`** so install scripts are not skipped.

After each deploy, smoke-test **`/home`** and **`POST /api/lead`** on the live hostname.

## Environment variables (dashboard)

Add under **Variables and Secrets** for Production (and Preview if you test forms there):

| Name | Secret? | Notes |
|------|---------|--------|
| `NEXT_PUBLIC_SITE_URL` | No | `https://yourdomain.com` (no trailing slash). |
| `NEXT_PUBLIC_WHATSAPP_LINK` | No | Full `https://wa.me/...` link. |
| `MAKE_WEBHOOK_URL` | **Yes** | Webhook URL; never `NEXT_PUBLIC_*`. |

Optional: `NEXT_PUBLIC_GOOGLE_MAPS_URL`, `NEXT_PUBLIC_NEXT_INTAKE_DATE` (see `.env.example`).

**Lead API:** In production, if `MAKE_WEBHOOK_URL` is missing, `/api/lead` returns **503** so visitors are not told “success” when nothing was forwarded.

## Local development

- Daily dev: `pnpm dev` (Next.js on port 4028).
- Same runtime as production: `pnpm run preview` (OpenNext + Wrangler). Requires a successful OpenNext build.

### Windows note

`pnpm run build:cf` can fail on Windows with **symlink `EPERM`** during Next.js standalone tracing. Cloudflare’s Linux builders are unaffected. Use **WSL**, **CI**, or deploy from Git on Cloudflare.

## Domain (e.g. GB Network)

Point the domain’s **nameservers** to Cloudflare, attach the domain to your Worker/Pages project, and enable **Full (strict)** SSL once DNS is active.

## Worker name (`wrangler.jsonc` + `wrangler.toml`)

- **`name`** in **both** **`wrangler.toml`** and **`wrangler.jsonc`** should stay identical (e.g. `cikguram`).
- **`services[0].service`** in **`wrangler.jsonc`** must match that **`name`** (OpenNext self-reference binding).

For a **staging** Worker, duplicate the project or use Wrangler **[environments](https://developers.cloudflare.com/workers/wrangler/environments/)** and set both `name` (or env-specific name) and `services[].service` to the same value.

## Images on Cloudflare

By default this repo **does not** define the **`IMAGES`** binding so deploy works **without** [Cloudflare Images](https://developers.cloudflare.com/images/) on your account. `next.config.mjs` sets **`images.unoptimized: true`**, so `<Image>` still works (correct sizing/layout; no edge resizing).

To use **Cloudflare Images** optimization later:

1. Enable Images / transformations for your zone (see Cloudflare docs).
2. In **`wrangler.jsonc`**, add:

   ```jsonc
   "images": {
     "binding": "IMAGES"
   }
   ```

3. In **`next.config.mjs`**, set **`images.unoptimized`** to **`false`** (and tune loader per [OpenNext image how-to](https://opennext.js.org/cloudflare/howtos/image) if you use a custom loader).

## References

- [Next.js on Cloudflare Workers](https://developers.cloudflare.com/workers/framework-guides/web-apps/nextjs/)
- [OpenNext Cloudflare — Get started](https://opennext.js.org/cloudflare/get-started)
