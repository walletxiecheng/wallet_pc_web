import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import reactRefresh from '@vitejs/plugin-react-refresh';
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript，如 antd 的样式中使用的 JavaScript 表达式
        javascriptEnabled: true,
      },
    },
    server: {
      host: true
    }  
  },
});
