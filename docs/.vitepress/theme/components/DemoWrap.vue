<script setup lang="ts">
import { computed, ref, onErrorCaptured } from 'vue';
const props = defineProps<{ pkg: string; path: string }>()

const demoPath = computed(() => (props.pkg && props.path) ? `/${props.pkg}/${props.path}` : '')
const error = ref<Error | null>(null)

onErrorCaptured((err) => {
  error.value = err
})

const GITHUB_BLOB_URL = 'https://github.com/fxzer/zerdocs/blob/master/docs'
const URL = `${GITHUB_BLOB_URL}${demoPath.value}`
</script>

<template>
  <div :key="demoPath" class="demo wide">
    <p v-if="demoPath" class="demo-source-link">
      <a :href="URL" target="_blank">源码地址</a>
    </p>
    <ClientOnly>
      <Suspense>
        <slot />
        <template #fallback>
          Loading demo...
        </template>
      </Suspense>
    </ClientOnly>
    <div v-if="error" class="error">
      {{ error }}
    </div>
  </div>
</template>
<style scoped lang="scss">
.demo {
  font-size: 14px;
  background: rgba(125, 125, 125, .04);
  padding: 1em;
  position: relative;
  margin-bottom: 10px;
  border-radius: 8px;
  position: relative;

  .demo-source-link {
    position: absolute;
    top: 3px;
    right: 6px;
    font-size: 12px !important;
    margin: 0;
  }
}
</style>
