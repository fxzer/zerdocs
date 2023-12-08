## PWA 优点

- 可以让网站像原生应用一样被添加到主屏幕上
- 可以离线访问
- 可以接收推送系统级通知

## 原理

通过 JS 主线程注册 Service Worker 线程，Service Worker 线程拦截网络请求，
从缓存中读取资源，如果没有缓存则从网络请求资源，然后将资源返回给主线程，主线程再将资源返回给浏览器渲染。

## 配置

在 Vite+Vue3 项目中，借助[`vite-plugin-pwa`](https://github.com/vite-pwa/vite-plugin-pwa#readme)插件，可以很方便的配置 PWA。

### 1.安装插件

```zsh
pnpm i vite-plugin-pwa -D
```

### 2.配置插件

```js
export default defineConfig(({ _, mode }) => {
  return {
  plugins: [
        // 其他插件 ...
      VitePWA({
        outDir: 'dist',
        manifest: {
          name: 'json-viewer', // pwa窗口标题
          short_name: 'json-viewer',
          theme_color: '#ffffff', // pwa窗口顶部颜色
          icons: [  // 至少需要这两个尺寸图标，并且 purpose 属性为 maskable,any (注意图片与 Logo 主体需要有一定 Padding, 否则会被裁剪)
            {
              src: '/json-viewer/logo_512.png', // 图标放在 public 目录下，若网站是部署在二级目录下（如：https://fxzer.gitee.io/json-viewer），则需要加上二级目录名
              types: 'img/png',
              sizes: '512x512',
              purpose: 'any',
            },
            {
              src: '/json-viewer/logo_192.png',
              types: 'img/png',
              sizes: '192x192',
              purpose: 'maskable',
            },
          ],
        },
      }),
    ]
  }   
})
 ```

 ### 3.调整图标，放在 public 目录下
:::tip
图标放在 public 目录下，若网站是部署在二级目录下，则需要加上二级目录名
如：
 - https://fxzer.gitee.io/json-viewer  ==> src:'/json-viewer/logo_512.png'
 - https://fxzer.gitee.io  ==> src:'/logo_512.png'
:::
