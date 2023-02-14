<script setup lang="ts">
import { ref } from 'vue'
const openFilePicker = async (e: any) => {
  const option = {
    title: 'Open File',
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg'],
    },
  }
  const [fileHandle] = await (window as any).showOpenFilePicker(option)
  const file = await fileHandle.getFile()
  const fileReader = new FileReader()
  fileReader.readAsArrayBuffer(file)
  fileReader.onload = (e) => {
    console.log('[ e ]-11', e.target?.result)
  }
}
const option = {
  //限制文件类型为文本文件
  title: 'Open File',
   types: [
      {
        description: 'Text Files',
        accept: {
          'text/plain': ['.txt'],
        },
      },
    ],
  }
  
const textarea = ref('Hello World')
const fh = ref(null)
//创建文件
const openCreate = async () => {
  const  fileHandle  =  await  (window as any).showSaveFilePicker()
  const fileSteam = await fileHandle.createWritable()
  await fileSteam.write(textarea.value)
  await fileSteam.close()
}
//打开文件
const openShow = async () => {
  const [ fileHandle ] =  await  (window as any).showOpenFilePicker(option)
  fh.value = fileHandle
  const file =  await  fileHandle.getFile()
  textarea.value = await file.text()
}
//保存文件
const openSave = async () => {
  if(fh.value){
    const fileSteam = await (fh.value as any).createWritable()  
    await fileSteam.write(textarea.value)
    await fileSteam.close()
  }
}
//保存为文件
const openSaveAs = () => {
  openCreate()
}
</script>

<template>
  <input type="file" @click="openFilePicker">
  <div class="opt-wrap">
    <textarea name="" id="" cols="30" rows="10" v-model="textarea"></textarea>
    <div class="opts">
      <button @click="openCreate"> 创建</button>
      <button @click="openShow"> 打开</button>
      <button @click="openSave">保存 </button>
      <button @click="openSaveAs"> 保存为</button>
    </div>
  </div>
</template>
<style scoped lang="scss">
.opt-wrap {
  display: flex;
  flex-direction: column;

  .opts {
    display: flex;
    margin-top: 10px;

    button {
      color: #fff;
      border-radius: 4px;
      padding: 0px 6px;
      margin-right: 10px;
      border: 1px solid #ccc;
      background-color: #4E9EF5;
    }
  }
}
</style>