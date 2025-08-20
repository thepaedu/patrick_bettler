import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: '/patrick_bettler/', // <--- hier Repository-Namen eintragen
  plugins: [vue()],
})
