## 动态设置主题色，激活项样式延迟问题

![](https://zerdocs.oss-cn-shanghai.aliyuncs.com/problem/202406211509477.png){data-zoomable}

```ts
// uno.config.ts
export default defineConfig({
  theme: {
    colors: {
      primary: 'var(--el-color-primary)',
    },
  },
})
```

```vue
<!-- app.vue -->
<script lang="ts" setup>
function setHtmlProperty(key, value) {
  document?.documentElement.style.setProperty(key, value)
}

setHtmlProperty('--el-color-primary', '#44c089')
</script>
```

```vue
<script setup lang='ts'>
defineProps(['list'])
const value = defineModel()
</script>

<template>
  <div class="flex-center overflow-hidden border-1 rounded-1 bg-white text-gray-600 divide-x-1 dark:border-none">
    <div
      v-for="item in list" :key="item.value" class="h-full text-gray-600"
      :class="{ 'text-white bg-primary': value === item.value }"
    >
      <input :id="item.value" v-model="value" type="radio" :value="item.value" class="hidden">
      <label :for="item.value" class="h-full flex-center cursor-pointer px-4 py-1">{{ item.label }}</label>
    </div>
  </div>
</template>

<style scoped>
</style>
```
