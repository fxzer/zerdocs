import fg from 'fast-glob'
import { resolve } from 'path'
import type { VitePWAOptions } from 'vite-plugin-pwa'

/**
 * Vite Plugin PWA uses Workbox  library to build the service worker
 * can find more information on Workbox section.
 * @see https://vite-plugin-pwa.netlify.app/
 */
export const pwa: Partial<VitePWAOptions> = {
outDir: '../dist/',
  registerType: 'autoUpdate',
  // include all static assets under public/
  includeAssets: fg.sync('**/*.{png,webp,svg,gif,ico,txt}', { cwd: resolve(__dirname, '../../../public') }),
  manifest: {
    id: '/',
    name:'zerdocs',
    short_name: 'zerdocs',
    description: 'VitePress 个人博客',
    theme_color: '#fff',
    icons: [
      {
        src: 'pwa-512x512.png',
        type: 'img/png',
        sizes: '512x512',
        purpose: 'any',
      },
      {
        src: 'pwa-192x192.png',
        type: 'img/png',
        sizes: '192x192',
        purpose: 'maskable',
      },
      {
        src: 'pwa-144x144.png',
        type: 'img/png',
        sizes: '144x144',
        purpose: 'any',
      },
      {
        src: 'pwa-120x120.png',
        type: 'img/png',
        sizes: '120x120',
        purpose: 'any',
      },
      {
        src: 'pwa-72x72.png',
        type: 'img/png',
        sizes: '72x72',
        purpose: 'maskable',
      },
    ],
    screenshots: [
    {
      "src": "sc.png",
      "sizes": "1920x1280",
      "type": "image/png",
      "form_factor": "wide"
    },
  ]
  },
  workbox: {
    clientsClaim: true, //PWA注册后马上接管网站
    skipWaiting: true//跳过 atvative生命周期等待上一次 service-worker取消注册
  }
}
