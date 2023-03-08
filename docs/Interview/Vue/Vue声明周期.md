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

   