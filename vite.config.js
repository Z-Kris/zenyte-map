import { defineConfig } from 'vite'

export default defineConfig({
  base: '/zenyte-map/',
  build: {
    outDir: 'docs',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  },
  publicDir: 'public',
  server: {
    open: true,
    port: 3000
  }
})