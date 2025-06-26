import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  preview: {
    host: true,
    port: process.env.PORT,
    allowedHosts: ['front-apiautor.onrender.com']
  }
})
