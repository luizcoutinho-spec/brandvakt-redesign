import { useEffect } from 'react';
import { asset } from './asset';

interface MetaInput {
  title: string;
  description: string;
  ogImage?: string;
}

const SITE_NAME = 'Brandvakt';
const DEFAULT_OG_IMAGE = asset('assets/logo-white.png');

function setMeta(selector: string, attr: 'name' | 'property', key: string, value: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = value;
}

export function useMeta({ title, description, ogImage }: MetaInput) {
  useEffect(() => {
    const fullTitle = `${title} | ${SITE_NAME}`;
    document.title = fullTitle;

    const image = new URL(ogImage ?? DEFAULT_OG_IMAGE, window.location.origin).href;
    const url = window.location.href;

    setMeta('meta[name="description"]',       'name',     'description',      description);
    setMeta('meta[property="og:title"]',      'property', 'og:title',         fullTitle);
    setMeta('meta[property="og:description"]','property', 'og:description',   description);
    setMeta('meta[property="og:image"]',      'property', 'og:image',         image);
    setMeta('meta[property="og:url"]',        'property', 'og:url',           url);
    setMeta('meta[property="og:type"]',       'property', 'og:type',          'website');
    setMeta('meta[property="og:site_name"]',  'property', 'og:site_name',     SITE_NAME);
    setMeta('meta[name="twitter:card"]',      'name',     'twitter:card',     'summary_large_image');
    setMeta('meta[name="twitter:title"]',     'name',     'twitter:title',    fullTitle);
    setMeta('meta[name="twitter:description"]','name',    'twitter:description', description);
    setMeta('meta[name="twitter:image"]',     'name',     'twitter:image',    image);
  }, [title, description, ogImage]);
}
