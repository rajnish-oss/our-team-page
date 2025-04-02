import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true,  // Allow external access
    port: 5173,  // Ensure it's the correct port
    cors: true,  // Enable CORS
    allowedHosts: ["assumptions-webster-northeast-rendered.trycloudflare.com"], // Allow Cloudflare Tunnel host
  },
  plugins: [react()],
});
