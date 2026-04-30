'use client';

import React from 'react';

/** Replaces the root layout when an error bubbles from `layout.tsx`. */
export default function GlobalError({
  error,
  reset,
}: Readonly<{
  error: Error & { digest?: string };
  reset: () => void;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#F8F8F6] text-[#111111] antialiased">
        <div className="flex min-h-screen flex-col items-center justify-center px-4">
          <div className="max-w-md text-center">
            <p className="text-sm font-medium text-black/50">Something went wrong</p>
            <h1 className="mt-2 font-display text-2xl font-bold tracking-tight">
              Please refresh or try again shortly
            </h1>
            {process.env.NODE_ENV === 'development' && error.message ? (
              <pre className="mt-4 max-h-40 overflow-auto rounded-lg bg-black/5 p-3 text-left text-xs text-black/70">
                {error.message}
              </pre>
            ) : null}
            <button
              type="button"
              onClick={() => reset()}
              className="mt-8 rounded-xl bg-[#CC0000] px-6 py-3 font-display text-sm font-bold text-white transition-colors hover:bg-[#AA0000]"
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
