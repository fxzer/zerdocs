<template>
  <div>
    <div class="opt-wrap">
      URL 类型<select id="urltype" v-model="urlType">
        <option value="BLOB" >BLOB URL</option>
        <option value="DATA" >DATA URL</option>
      </select>
      <button @click="onFetch('image', './demo/url.png')">获取图片 URL</button>
      <button @click="onFetch('text', './demo/url.txt')">获取文本 URL</button>
    </div>
    <textarea v-model="url"></textarea>
    <div class="show-wrap" v-if="url">
      <a :href="url" target="_blank"> 链接 </a><font  color="urlType=='DATA' ? 'red' :'green'">DATA URL{{  urlType=='DATA' ? '不':'' }}可直接点击链接打开, 可复制链接打开</font>
      <img :src="url" alt="图片" v-if="fileType == 'image'" />
      <iframe :src="url"></iframe>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const urlType = ref<'BLOB' | 'DATA'>('BLOB')
type TYPE = 'text' | 'image' | ''
const fileType = ref<TYPE>('')
const url = ref<string>('')
const onFetch = async (type: TYPE, path: string) => {
  fileType.value = type
  const response = await fetch(path)
  if (urlType.value === 'BLOB') {
    //BLOB URL
    const data = await response.blob()
    url.value = URL.createObjectURL(data)
  } else {
    //Data URL
    const fr = new FileReader()
    fr.onload = (e) => {
      url.value = e.target?.result as string
    }
    fr.readAsDataURL(await response.blob())
  }
}

</script>

<style lang="scss" scoped>
button {
  color: #fff;
  border-radius: 4px;
  padding: 0px 6px;
  margin-right: 10px;
  border: 1px solid #ccc;
  background-color: #6fadef;
}

select {
  margin: 0 16px 0 6px;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 0 4px;
}

textarea,
iframe {
  width: 100%;
  height: 200px;
  margin-top: 10px;
}

img {
  width: 100%;
  height: 200px;
}
</style>