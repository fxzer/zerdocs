import Unocss from 'unocss/vite'
import { presetAttributify, presetUno,transformerVariantGroup } from 'unocss'

/**
 * The instant on-demand Atomic CSS engine.
 * @see https://uno.antfu.me/
 */
export const UnocssPlugin = Unocss({
      theme: {
       colors: {
        'brand': 'var(--vp-c-brand-light)',
        'soft': 'var(--vp-c-bg-soft)',
       } 
      },
      shortcuts: [
      ],
      presets: [
        presetUno({
          dark: 'class',
          preflight: false,
        }),
        presetAttributify(),
        // presetIcons({
        //   scale: 1.2,
        //   extraProperties: {
        //     'display': 'inline-block',
        //     'vertical-align': 'text-bottom',
        //   },
        // }),
      ],
      transformers: [
        transformerVariantGroup(), // 样式分组
      ],
    }) 

