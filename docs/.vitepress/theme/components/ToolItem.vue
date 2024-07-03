<template>
  <a class="tool-item" :href="tool.url" target="blank">
    <Loading class="tool-icon" v-show="!isLoaded" />
    <img class="tool-icon" v-show="isLoaded" :alt="tool.name" :src="src" :onload="onLoad" :onError="onError">
    <p class="tool-name">{{ tool.name }}</p>
  </a>
</template>
<script setup lang='ts'>
const { tool } = defineProps({
  tool: {
    type: Object,
    required: true,
  }
})
const isLoaded = ref(false)

const src = computed(() => {
  let { icon, iconType, url } = tool
  return icon ? icon : (url + 'favicon.' + (iconType ? iconType : 'ico'))
})

const onError = (e: any) => {
  e.target.src = 'https://zerdocs.oss-cn-shanghai.aliyuncs.com/202302062047848.svg'
}
const onLoad = (e: any) => {
  isLoaded.value = true
  e.target.onerror = null
  e.target.onload = null
}
</script>
<style scoped lang='scss'>
$hover-color: linear-gradient(135deg, #5fe687 10%, #04d1e7 100%);
$gradient-color: linear-gradient(120deg, #bd34fe, var(--vp-c-brand-light));

.dark {
  .tool-item {
    .tool-icon {
      border: 1px solid #555;
    }
  }
}

.tool-item {
  width: 90px;
  height: 90px;
  border-radius: 10px;
  text-decoration: none;

  .tool-icon {
    width: 60px;
    height: 60px;
    margin: 0 15px 5px 15px;
    border: 1px solid #eee;
    border-radius: 8px;
    transition: all 0.2s ease-in-out;

    &:hover {
      border: 1px solid var(--vp-c-green);
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
