import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import pxtorem from 'postcss-pxtorem'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  css: {
    postcss: {
      plugins: [
        // 样式里的 px 都按设计稿（393pt 宽）书写，构建时统一转成 rem，
        // 再由 src/index.css 里 html 的 font-size 控制整体缩放比例。
        pxtorem({
          rootValue: 16,
          propList: ['*'],
          // 1px 细线 / 1.5px 描边不参与缩放
          minPixelValue: 2,
          // 桌面端预览用的手机壳保持真实像素尺寸
          selectorBlackList: ['.shell-outer', '.phone'],
        }),
      ],
    },
  },
  build: {
    rollupOptions: {
      output: {
        // node_modules（react/react-dom/react-router）单独拆成 vendor chunk：
        // 与业务代码各自 hash、互不拖累，浏览器可以长期缓存框架代码
        manualChunks(id) {
          if (id.includes('node_modules')) return 'vendor'
        },
      },
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: true,
  },
})
