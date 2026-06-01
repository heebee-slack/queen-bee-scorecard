import { defineConfig } from 'vite'

export default defineConfig({
  base: '/queen-bee-scorecard/',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    sourcemap: true
  },
  server: {
    port: 3000,
    open: true
  }
})
