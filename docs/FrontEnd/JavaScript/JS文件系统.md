## Blob与 File
```js
const blob = new Blob(['1,2,3'])
const file = new File(['1,2,3'], 'test.txt', { type: 'text/plain' })
```
## ArrayBuffer
```js


const blob = new Blob(['1,2,3'])
const file = new File(['1,2,3'], 'test.txt', { type: 'text/plain' })

//ArrayBuffer
const blobArrayBuffer = await blob.arrayBuffer()
const fileArrayBuffer = await file.arrayBuffer()

console.log('[ blobArrayBuffer ]-6', blobArrayBuffer)
console.log('[ fileArrayBuffer ]-8', fileArrayBuffer)
```


<DemoWrap pkg="FrontEnd/JavaScript/demo"   path='demo1.vue' >
    <Demo1/>
</DemoWrap>

## FileReader
```js
const fileReader = new FileReader()
fileReader.readAsArrayBuffer(file)
fileReader.onload = (e) => {
  console.log('[ e ]-13', e)
  console.log('[ e.target ]-14', e.target)
  console.log('[ e.target.result ]-15', e.target?.result  )
  console.log( e.target?.result === fileArrayBuffer) // false
}
```
![2023-02-11-18-18-03](https://zerdocs.oss-cn-shanghai.aliyuncs.com/febasis/2023-02-11-18-18-03.png)

## DataView
```js
const dataView = new DataView(blobArrayBuffer)
console.log('[ dataView ]-19', dataView)
console.log('[ dataView.getUint8(0) ]-20', dataView.getUint8(0))
dataView.setUint8(0, 4)
console.log('[ dataView.getUint8(0) ]-20', dataView.getUint8(0))
```
![2023-02-11-18-25-32](https://zerdocs.oss-cn-shanghai.aliyuncs.com/febasis/2023-02-11-18-25-32.png)

## FilePicker
```js
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
```
<script setup>
import Demo1 from './demo/demo1.vue';
import FilePicker from './demo/FilePicker.vue'; 
import DemoUrl from './demo/DemoUrl.vue'; 
</script>
## 文件操作
```ts

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
    const fileSteam = await fh.value.createWritable()
    await fileSteam.write(textarea.value)
    await fileSteam.close()
  }
}
//保存为文件
const openSaveAs = () => {
  openCreate()
}
```
**filepicker**
<DemoWrap pkg="FrontEnd/JavaScript/demo"   path='FilePicker.vue'>
    <FilePicker/>
</DemoWrap>

## URL

```js 
//Blob URL
URL.createObjectURL(blob) 

//Data  URL
FileReader.readAsDataURL(file)  
canvas.toDataURL() 
```

```vue
<a :href="url">   </a> 
<img :src="url" />
<iframe :src="url"></iframe>
```
```ts
type TYPE = 'text' | 'image' | ''
const url = ref<string>('')
const onFetch = async (type: TYPE, path: string) => {
  const response = await fetch(path)
  //BLOB URL
  // const data = await response.blob()
  // url.value = URL.createObjectURL(data)

  //Data URL
  const fr = new FileReader()
  fr.onload = (e) => {
    url.value = e.target?.result as string
  }
  fr.readAsDataURL(await response.blob())
}

```
<DemoWrap pkg="FrontEnd/JavaScript/demo"   path='DemoUrl.vue'>
    <DemoUrl/>
</DemoWrap>

## 参考资料
[MDN Blob API 参考](https://developer.mozilla.org/zh-CN/docs/Web/API/Blob)<br>
[MDN File API 参考](https://developer.mozilla.org/zh-CN/docs/Web/API/File)<br>
[谈谈JS二进制：File、Blob、FileReader、ArrayBuffer、Base64](https://zhuanlan.zhihu.com/p/568915443)
