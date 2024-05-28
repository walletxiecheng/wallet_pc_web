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
  less: {
    javascriptEnabled: true, // 支持内联 JavaScript
    modifyVars: {
      // 更改主题
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
