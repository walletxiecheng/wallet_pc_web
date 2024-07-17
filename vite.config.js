import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {} // 这个将被动态修改
      }
    }
  },
  server: {
    proxy: {
      // 选项写法
      '/back': {
        target: 'http://18.143.170.163:9996/',
        changeOrigin: true
      }
    }
  }
})
