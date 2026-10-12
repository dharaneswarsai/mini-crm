import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // The frontend always runs on port 5173.
    port: 5173,
    // strictPort makes Vite fail with a clear error if 5173 is already in use
    // instead of silently switching to another port. This avoids the confusing
    // situation where the app runs somewhere you did not expect.
    strictPort: true,
  },
})
