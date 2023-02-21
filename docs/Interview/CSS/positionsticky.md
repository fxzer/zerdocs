## position:sticky





## `cookie`、`sessionStorage`和`localStorage`的区别





## SSH公钥私钥加密解密原理





## 定宽高水平垂直居中

### 一行代码

```css
 transform: translate(225px,225px); /*或 margin*/
```

### 两行代码

```css
.parent{
  display: flex;
}
.children{
  margin:auto;
}
```

### 三行代码

```css
.parent{
  display: flex;
  justify-content: center;
  align-items:center;
}
/* */
.parent{
  position: relative;
}
.children{
  position: absolute;
  transform: translate(（父元素宽-子元素宽）/2,（父元素高-子元素高）/2);  /*或 margin*/
}
```

### 五行代码

```css
.parent{
  position: relative;
}
.children{
  position: absolute;
  top: 50%;
  left:50%;
  transform: translate(-50%,-50%);   
}
```

## 用css3实现饼图

```css
.pie{
  width: 500px;
  height: 500px;
  border-radius: 50%;
  /* 画饼图 */
  background: conic-gradient(
    red 6deg,
    orange 6deg 18deg,
    yellow 18deg 45deg,
    green 45deg 110deg,
    blue 110deg 200deg,
    purple 200deg
  );
}
```

## 新项目css架构设计入手方向

1. 公共变量（主题色/主要空隙/主要字号字体等）
2. 编译器（scss/less/postcss/stylus）
3. 自适应方案（栅格/rem/vw/pt）
4. 目录约定（mixin/common/theme/module/response）
5. 私有化方案（scoped/css module/css in js）



## 优雅降级和渐进增强 

优雅降级：在编写项目时，直接针对最高级、最稳定的版本进行开发。然后在后续对低版本进行兼容。
渐进增强：在编写项目时，针对自己想个兼容的最低版本进行开发。然后在后续对高版本的新特性开发，或者更好的体验

## 介绍下 *[BFC](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flow_Layout/Intro_to_formatting_contexts)* 及其应用

所谓 *BFC*，指的是一个独立的布局环境，*BFC* 内部的元素布局与外部互不影响。

- 使用[`float`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/float) 使其浮动的元素
- 绝对定位的元素 (包含 [`position: fixed`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/position#fixed) 或[`position: sticky`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/position#sticky)
- 使用以下属性的元素 [`display: inline-block`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display#inline-block)
- 表格单元格或使用 `display: table-cell`, 包括使用 `display: table-*` 属性的所有表格单元格
- 表格标题或使用 `display: table-caption` 的元素
- 块级元素的 overflow 属性不为 `visible`
- 元素属性为 `display: flow-root` 或 `display: flow-root list-item`
- 元素属性为 [`contain: layout`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/contain#layout), `content`, 或 `strict`
- [flex items](https://developer.mozilla.org/zh-CN/docs/Glossary/Flex_Item)
- 网格布局元素
- [multicol containers](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Columns/Basic_Concepts_of_Multicol)
- 元素属性 [`column-span`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/column-span) 设置为 `all`

## 隐藏元素的方式

![image-20230221172950214](https://zerdocs.oss-cn-shanghai.aliyuncs.com/febasis/202302211729743.png)

