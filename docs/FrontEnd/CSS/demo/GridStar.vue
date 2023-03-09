<template>
  <p><radio></radio></p>
  <svg
  @click="isDark = !isDark"
  :style="{ backgroundColor: isDark ? '#13121a' : '#fff' }"
  >
    <pattern
      id="pattern-1"
      x="0"
      y="0"
      width="24"
      height="24"
      patternUnits="userSpaceOnUse"
      patternTransform="translate(-0.5,-0.5)"
    >
      <circle cx="0.5" cy="0.5" r="0.5" fill="#60606F"></circle>
    </pattern>
    <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-1)"></rect>
  </svg>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const isDark = ref(true);
</script>

<style lang="scss" scoped>
svg {
  margin-top: 20px;
  width: 100%;
  height: 200px;
  cursor: pointer;
}
</style>
