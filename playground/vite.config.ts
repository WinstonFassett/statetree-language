import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.wasm'],
  define: {
    'process.env.BABEL_TYPES_8_BREAKING': 'true'
  },
  optimizeDeps: {
    exclude: [
      'vscode-uri'
    ]
  }
})
