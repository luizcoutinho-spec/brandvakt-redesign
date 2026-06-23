// Prefix a public asset path with Vite's base URL (currently '/'), normalizing
// any leading slash so the result stays a single, correct absolute path.
export const asset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;
