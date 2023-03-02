# CSS基础面试题



## [伪类与伪元素](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)的区别

::: tip 解释

**伪类**：开头为单冒号`:`，伪类是选择器的一种，用于给元素某种状态（滑动、点击等）添加对应的样式

**伪元素**：开头为双冒号`::`，用于创建一些不在DOM树中的元素，并为其添加样式。

:::

![image-20230227112239445](https://zerdocs.oss-cn-shanghai.aliyuncs.com/febasis/202302271122474.png)

![image-20230227112221284](https://zerdocs.oss-cn-shanghai.aliyuncs.com/febasis/202302271122320.png)

::: tip [`:nth-child()`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:nth-child) 与[`:nth-of-type()`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:nth-of-type)

`:nth-child(n) `：匹配到第 n 个兄弟

`:nth-of-type(n)`：匹配到同类型的第 n 个兄弟元素

:::



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



##  *[BFC](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flow_Layout/Intro_to_formatting_contexts)* 及其应用

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



## 定位position

**静态定位**`static`：默认值，此时 `top`, `right`, `bottom`, `left` 和 `z-index` 属性无效

**相对定位**`relative`：保留原来位置进行定位，定位时相对于原来位置进行定位

**绝对定位**`absolute`：元素会被移出正常文档流，并不为元素预留空间，相对于*最近的非 static 定位祖先元素*的偏移，直到 body

**固定定位**`fixed`：相对于浏览器视口进行定位，当元素祖先的 `transform`、`perspective`、`filter` 或 `backdrop-filter` 属性非 `none` 时，容器由视口改为该祖先。

**黏性定位**`sticky`：相对于*最近滚动祖先*定位，滚动到元素top小于设定值(top:20px;)则转为固定定位。（relative+fixed）

## 隐藏元素的方式

![image-20230221172950214](https://zerdocs.oss-cn-shanghai.aliyuncs.com/febasis/202302211729743.png)





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


## 优雅降级和渐进增强 

优雅降级：在编写项目时，直接针对最高级、最稳定的版本进行开发。然后在后续对低版本进行兼容。
渐进增强：在编写项目时，针对自己想个兼容的最低版本进行开发。然后在后续对高版本的新特性开发，或者更好的体验



## 新项目css架构设计入手方向

1. 公共变量（主题色/主要空隙/主要字号字体等）
2. 编译器（scss/less/postcss/stylus）
3. 自适应方案（栅格/rem/vw/pt）
4. 目录约定（mixin/common/theme/module/response）
5. 私有化方案（scoped/css module/css in js）

