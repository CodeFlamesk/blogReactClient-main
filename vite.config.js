import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dotenv from 'dotenv'

dotenv.config()

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: "/src/components",
      assets: "/src/assets",
      pages: "/src/pages",
      hooks: "/src/hooks",
      action: "/src/action",
      store: "/src/store"
    }
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
  define: {
    'process.env': process.env
  }
})
