import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Netflix_2025/',
   optimizeDeps: {
    include: [
      '@mui/icons-material',
      '@mui/icons-material/Search', // optional, specific icon
    ],
  },

})
