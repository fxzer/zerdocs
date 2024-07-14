<script setup lang='ts'>
const { tool } = defineProps({
  tool: {
    type: Object,
    required: true,
  },
})
const isLoaded = ref(false)

const src = computed(() => {
  const { icon, iconType, url } = tool
  return icon || (`${url}favicon.${iconType || 'ico'}`)
})

const backupSrc = 'https://zerdocs.oss-cn-shanghai.aliyuncs.com/202302062047848.svg'
function onError(e) {
  if (e.target.src !== backupSrc) {
    e.target.src = backupSrc
  }
  else {
    console.warn('备用图片也加载失败')
  }
}
function onLoad(e) {
  isLoaded.value = true
  e.target.onerror = null
  e.target.onload = null
}
</script>

<template>
  <a class="tool-item" :href="tool.url" target="blank">
    <Loading v-show="!isLoaded" class="tool-icon" />
    <img v-show="isLoaded" class="tool-icon" :alt="tool.name" :src="src" :onload="onLoad" :onerror="onError">
    <p class="tool-name">{{ tool.name }}</p>
  </a>
</template>

<style scoped lang='scss'>
$hover-color: linear-gradient(135deg, #5fe687 10%, #04d1e7 100%);
$gradient-color: linear-gradient(120deg, #bd34fe, var(--vp-c-brand-light));

.tool-item {
  width: 90px;
  height: 90px;
  border-radius: 10px;
  text-decoration: none;

  .tool-icon {
    width: 60px;
    height: 60px;
    margin: 0 15px 5px 15px;
    border: 1px solid #a8a8a875;
    border-radius: 8px;
    transition: all 0.2s ease-in-out;

    &:hover {
      border: 1px solid var(--vp-c-brand-light);
    }
  }

  .tool-name {
    width: 100%;
    height: 25px;
    line-height: 25px;
    text-align: center;
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 0;
    transition: all 0.2s ease-in-out;
    color: transparent;
    background: $gradient-color;
    background-clip: text;
    -webkit-background-clip: text; //与顺序有关
    -webkit-text-fill-color: $gradient-color;

    &:hover {
      background-clip: text;
      background: $hover-color;
      -webkit-background-clip: text; //与顺序有关
      -webkit-text-fill-color: $hover-color;
    }
  }
}
</style>
