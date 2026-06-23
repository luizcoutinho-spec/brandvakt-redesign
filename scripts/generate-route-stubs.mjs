// Copy dist/index.html to dist/<route>.html for each SPA route.
// Vercel serves /<route> -> /<route>.html when cleanUrls is on (default),
// so every deep link returns HTTP 200 without needing a rewrite rule.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';

const ROUTES = [
  'services',
  'soc',
  'bygrc',
  'about',
  'contact',
  'academy',
  'partners',
  'homodeus-partnership',
  'enterprise/phisher',
  'enterprise/conscientizacao',
  'enterprise/compliance',
  'enterprise/maturity-assessment',
  'careers',
  'privacy',
  'cookies',
];

const distDir = join(process.cwd(), 'dist');
const indexHtml = readFileSync(join(distDir, 'index.html'), 'utf8');

for (const route of ROUTES) {
  const target = join(distDir, `${route}.html`);
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, indexHtml);
}

// Also keep the 404 fallback for paths not in the list above.
writeFileSync(join(distDir, '404.html'), indexHtml);

console.log(`Generated ${ROUTES.length} route stubs + 404.html`);
