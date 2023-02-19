## inheritAttrs
> 唯一一个需要用额外的   `script` 块书写的选项

 ::: tip $attrs
透传 Attributes 是指由父组件传入，且没有被子组件声明为 props 或是 组件自定义事件的 attributes 和 事件处理函数。
 :::

```html
<template> 
  <Home :attr="12345" :val="false"/>
</template>
```

###  场景一： 
```html
<template>
  <div class="home">
    Home work!
  </div>
</template>
<script setup lang='ts'>

</script>
<script>
  export default {
    inheritAttrs: true,//默认继承父组件属性
    mounted() {
      console.log('this.$attrs', this.$attrs)
	  }
  }
</script>
```
![image-20230219215449385](https://zerdocs.oss-cn-shanghai.aliyuncs.com/febasis/202302192154427.png) 
###  场景二： 

```html
<template>
  <div class="home">
    Home work!
  </div>
</template>
<script setup lang='ts'>

</script>
<script>
  export default {
    inheritAttrs: fasle,//取消继承
    mounted() {
      console.log('this.$attrs', this.$attrs)
	  }
  }
</script>
```
![image-20230219215459359](https://zerdocs.oss-cn-shanghai.aliyuncs.com/febasis/202302192154391.png) 
### 场景三： 
```html
<template>
  <div class="home">
    Home work!
  </div>
</template>
<script setup lang='ts'>

</script>
<script>
  export default {
    inheritAttrs: fasle,//取消继承
    mounted() {
      console.log('this.$attrs', this.$attrs)//输出被props接收以外的属性
	  }
    props: ['val']
  }
</script>
```
![image-20230219215510922](https://zerdocs.oss-cn-shanghai.aliyuncs.com/febasis/202302192155953.png) 
