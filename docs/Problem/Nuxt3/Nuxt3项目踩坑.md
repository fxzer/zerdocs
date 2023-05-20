## Uncaught TypeError: Cannot read properties of undefined (reading 'prototype')

![2023-05-19-14-49-43](https://zerdocs.oss-cn-shanghai.aliyuncs.com/interview/2023-05-19-14-49-43.png)







```js

//uno.config.ts
shortcuts: [
    ['f-s-c', 'flex justify-start items-center'],
  ]
```
1. 写在类名上不生效
```html
 <!--f-s-c 直接写在类名上不生效-->
 <div class="hidden lg:f-c-c"> 
 Test
</div>
 
```
 2. 写在CSS上报错
```html
<div class="nav"> 
 Test
</div>
```

```css
 // f-s-c 报错；The `xl:f-c-c` class does not exist. If `xl:f-c-c` is a custom class, make sure it is defined within a `@layer` directive.

.nav{
  @apply hidden lg:f-c-c  
}
```

解决方法：断点后不写自定义的
```html
 <div class="hidden lg:flex justify-center items-center"> 
 Test
</div>
 
```

总结：自定义的类名快捷键不能写在变体后面


### hidden与自定义变体不能一起用
```ts
//uno.config.ts
 shortcuts: [
   ['f-s-c', 'flex justify-start items-center'],
   ['f-c-c', 'flex justify-center items-center'],
 ]
 ```

```html
<div class="hidden xl:f-c-c">TEST</div>
```
可以这样用
```html
<div class="f-s-c xl:f-c-c">TEST</div>
```