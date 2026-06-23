import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Served from the domain root (Vercel is the sole deploy target).
  base: '/',
  plugins: [react()],
})
