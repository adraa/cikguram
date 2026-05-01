import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'API documentation | Cikgu Ram',
  description: 'Machine-readable API catalog and OpenAPI description for the public lead endpoint.',
  robots: { index: false, follow: false },
};

export default function ApiDocsPage() {
  return (
    <main className="min-h-screen bg-[#F8F8F6] px-4 py-10 sm:px-6">
      <article className="mx-auto max-w-2xl rounded-2xl border border-black/[0.08] bg-white px-5 py-8 shadow-card sm:px-8">
        <h1 className="font-display text-2xl font-700 tracking-tight text-[#111111] sm:text-3xl">
          Public API
        </h1>
        <p className="mt-4 text-base leading-relaxed text-black/65 font-body">
          This site exposes a small JSON API for registration interest. Agents should start from the{' '}
          <Link
            href="/.well-known/api-catalog"
            className="text-[#CC0000] underline underline-offset-2"
          >
            API catalog
          </Link>{' '}
          (
          <code className="rounded bg-black/[0.06] px-1.5 py-0.5 text-[0.9em]">
            /.well-known/api-catalog
          </code>
          ), which lists endpoints in{' '}
          <code className="rounded bg-black/[0.06] px-1.5 py-0.5 text-[0.9em]">
            application/linkset+json
          </code>{' '}
          per RFC&nbsp;9727.
        </p>
        <h2 className="mt-8 font-display text-lg font-700 text-[#111111]">Endpoints</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-base text-black/75 font-body">
          <li>
            <strong className="font-600 text-[#111111]">POST /api/lead</strong> — submit lead
            payload (
            <code className="rounded bg-black/[0.06] px-1 text-[0.85em]">application/json</code>
            ).
          </li>
        </ul>
        <p className="mt-6 text-base leading-relaxed text-black/65 font-body">
          OpenAPI definition:{' '}
          <Link
            href="/docs/api/spec"
            className="min-h-[44px] inline-flex items-center text-[#CC0000] underline underline-offset-2"
          >
            /docs/api/spec
          </Link>
        </p>
        <p className="mt-8 text-sm text-black/45 font-body">
          Homepage responses advertise these resources via{' '}
          <code className="rounded bg-black/[0.06] px-1.5 py-0.5 text-[0.85em]">Link</code> headers
          (RFC&nbsp;8288).
        </p>
      </article>
    </main>
  );
}
