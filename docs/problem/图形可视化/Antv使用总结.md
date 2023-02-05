
### 一、默认收缩二级节点

<!-- [控制收缩节点](https://antv-g6.gitee.io/zh/docs/manual/middle/states/defaultBehavior#collapse-expand) -->

```js
//树形图哪个需要收缩则把属性collapsed设置为true
data.children.forEach(item => item.collapsed = true)
```

### 二、改用iconfont文字不居中问题


```js
//注册节点添加label图形时动态计算label位置
 group.addShape("text", {
   attrs: {
     x: 0,
     y: -80,
   textAlign: "center",
   textBaseline: "middle",
    text: cfg.label,
   ...labelStyle.style,//这里需要重新处理x,y
 },
  name: "hubCombo-label",
});

```



### 三、初始化画图完成后出现这个锯齿

<!-- 官方解决思路: [https://github.com/antvis/G6/issues/3896](antv/G6-github-issues) -->
