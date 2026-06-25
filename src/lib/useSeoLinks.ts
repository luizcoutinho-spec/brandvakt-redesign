import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Canonical + hreflang alternates for the current route, injected into <head>.
// Depends only on the active language + path (not page content), so this is
// called once in LocalizedApp rather than per page. Tags are marked data-seo
// and updated idempotently on every route/language change.

const SITE = 'https://brandvakt.com';
const LANGS = ['en', 'fr', 'pt'] as const;

// Strip a leading /en /fr /pt prefix → base path ('' for home, '/services', …).
function basePath(pathname: string): string {
  return pathname.replace(/^\/(en|fr|pt)(?=\/|$)/, '');
}

function upsertLink(rel: string, hreflang: string | null, href: string): void {
  const sel = hreflang
    ? `link[data-seo][rel="${rel}"][hreflang="${hreflang}"]`
    : `link[data-seo][rel="${rel}"]:not([hreflang])`;
  let el = document.head.querySelector<HTMLLinkElement>(sel);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    el.setAttribute('data-seo', '');
    if (hreflang) el.setAttribute('hreflang', hreflang);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export function useSeoLinks(lang: string): void {
  const { pathname } = useLocation();
  useEffect(() => {
    const path = basePath(pathname);
    for (const l of LANGS) upsertLink('alternate', l, `${SITE}/${l}${path}`);
    upsertLink('alternate', 'x-default', `${SITE}/en${path}`);
    upsertLink('canonical', null, `${SITE}/${lang}${path}`);
  }, [pathname, lang]);
}
