## Vue声明周期
```js
//自带 8 个
beforeCreate
created
beforeMount
mounted
beforeUpdate
updated
beforeDestory
destoryed
```

### 嵌套组件组件执行顺序
```js
//父组件
beforeCreate
created
beforeMount
  //子组件
  beforeCreate
  created
  beforeMount
  mounted
    //孙子组件
      beforeCreate
      created
      beforeMount
      mounted
```

## beforeCreate 与 created 区别



## created 与 mounted 区别

> 请求问题：当需要子组件的请求需要比父组件**先**完成时，可以把父组件请求卸载`mounted`中，子组件写在`created`中。

## keep-alive内置缓存组件
额外增加两个声明周期:activated, deactivated
```js
//第一次执行顺序
  beforeCreate
  created
  beforeMount
  mounted
  activated

  //第二次：多次进入详情页，在activated钩子中，判断 id 相同则不需要发请求
  activated
```
## 虚拟 DOM(VNode) 和 DOM
1. VNode是一个纯 JavaScript 对象，用来描述真实 DOM 中的一个节点，属性比真实 dom 精简许多。

虚拟 DOM 的优点包括：

性能优化：由于真实 DOM 操作非常耗费性能，而虚拟 DOM 可以在内存中进行操作，然后再一次性渲染到真实 DOM 上，从而减少了不必要的 DOM 操作，提高了性能。

跨平台：虚拟 DOM 可以轻松地支持多种平台，比如浏览器、移动端、服务器端等。

组件化开发：Vue 的组件是以 VNode 为基础的，通过对 VNode 的操作，可以方便地实现组件的开发。


## Vue3.0性能提升
1. 响应式系统不需要深度遍历就可以对整个对象监听
2. 在diff算法中增加了静态标记
3. 源码体积减小，所有 API 都可以按需引入