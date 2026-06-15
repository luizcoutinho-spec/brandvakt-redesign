import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Allows building under a sub-path (e.g. GitHub Pages /brandvakt-redesign/)
  // while defaulting to root '/' for Vercel and local dev.
  base: process.env.VITE_BASE ?? '/',
  plugins: [react()],
})
