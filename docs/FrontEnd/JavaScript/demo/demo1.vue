<script setup lang="ts">
import { ref } from 'vue'
const blob = new Blob(['1,2,3'])
const file = new File(['1,2,3'], 'test.txt', { type: 'text/plain' })
const blobArrayBuffer = await blob.arrayBuffer()
const fileArrayBuffer = await file.arrayBuffer()

const fileReader = new FileReader()
fileReader.readAsArrayBuffer(file)
fileReader.onload = (e) => {
  console.log('[ e ]-11', e.target?.result)
}

const dataView = new DataView(blobArrayBuffer)
dataView.setUint8(0, 4)

const fileObj = ref(null)
const fileChange = (e: any) => {
  fileObj.value =   e.target.files 
}
</script>

<template>
  <input type="file" @change="fileChange"  >
</template>
