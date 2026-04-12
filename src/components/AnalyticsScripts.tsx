'use client';

import Script from 'next/script';

export default function AnalyticsScripts() {
  return (
    <>
      <Script src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fcikguram3493back.builtwithrocket.new&_be=https%3A%2F%2Fappanalytics.rocket.new&_v=0.1.18" strategy="lazyOnload" onError={() => {}} />
      <Script src="https://static.rocket.new/rocket-shot.js?v=0.0.2" strategy="lazyOnload" onError={() => {}} />
    </>
  );
}
