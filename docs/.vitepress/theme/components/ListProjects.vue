<script setup lang="ts">
import IconCode from '~icons/material-symbols-light/code-blocks-outline'
import IconPreview from '~icons/material-symbols-light/preview-outline-sharp'
defineProps<{ projects: Record<string, any> }>()

function slug(name: string) {
  return name.toLowerCase().replace(/[\s\\/]+/g, '-')
}
function onClick(item){
  window.open(item.link)
}
</script>

<template>
  <div class="max-w-288  mx-auto  mt-2">
    <div  v-if="projects"
      v-for="key, cidx in Object.keys(projects)" :key="key" slide-enter
      :style="{ '--enter-stage': cidx + 1 }"
    >
    <!-- 标题 -->
      <div
        :id="slug(key)"
        select-none relative h-3em md:h-5em pointer-events-none slide-enter mt-4
        :style="{
          '--enter-stage': cidx - 2,
          '--enter-step': '60ms',
        }"
      >
        <span text-3em md:text-5em color-transparent absolute top-0 text-stroke-brand font-bold leading-1em text-stroke-1.5  op35 dark:op20 
        >{{ key }}</span>
      </div>

      <!-- 项目列表 -->
      <div
        class="py-2 w-full"
        grid="~ cols-1 md:cols-2 gap-4 lg:cols-3"
      >
        <div
          v-for="item, idx in projects[key]"
          :key="idx"
          class="p6 rounded-lg relative flex items-center bg-soft"
          border="~  solid transparent hover:brand group"
          :title="item.name"
          @click="onClick(item)"
        >
          <div class="flex-auto">
            <div class="font-semibold mb1 flex items-center ">
              {{ item.name }}
            </div>
            <div class="desc text-sm opacity-50 font-normal" v-html="item.desc" />
          </div>
          <div flex-col text-lg>
            <a :href="item.link" target="_blank"  title="源码" @click.native.stop >
                <IconCode class='text-gray hover:text-brand' />
            </a>
            <a v-if="item?.site?.trim()" :href="item.site" target="_blank" title="预览" @click.native.stop>
              <IconPreview class='!text-gray hover:!text-brand' mt1/>
            </a>    
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
