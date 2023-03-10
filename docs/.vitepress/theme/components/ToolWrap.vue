<template>

  <div class="tool-wrap">
    <template v-for="(group, key) in toolGroup" :key="key">
      <div class="tool-group-title">{{ key }}</div>
      <div class="tool-group">
        <ToolItem v-for="(tool, index) in group" :key="index" :tool="tool" />
      </div>
    </template>
  </div>
</template>
<script setup lang='ts'>
import ToolItem from './ToolItem.vue'
import  toolGroup   from './toolGroup'

</script>
<style scoped lang='scss'>
.tool-wrap {
  .tool-group-title {
    font-size: 20px;
    font-weight: 600;
    padding: 20px 15px 10px;
    background-clip: text;
    background: var(--vp-home-hero-name-background);
    -webkit-background-clip: text; //与顺序有关
    -webkit-text-fill-color: var(--vp-home-hero-name-color);
  }

  .tool-group {
    //grid布局适配移动端
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    grid-gap: 10px;
  }
}
</style>