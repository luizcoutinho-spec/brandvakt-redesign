// Prefix a public asset path with Vite's base URL so it resolves correctly
// when the app is served from a sub-path (e.g. GitHub Pages /brandvakt-redesign/).
// BASE_URL is '/' on Vercel and local dev, so paths stay unchanged there.
export const asset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;
