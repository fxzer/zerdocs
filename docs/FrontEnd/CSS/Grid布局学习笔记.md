# Grid布局学习笔记

## 基本概念

![image-20230216202917923](https://zerdocs.oss-cn-shanghai.aliyuncs.com/febasis/202302162029422.png)

![image-20230216203121127](https://zerdocs.oss-cn-shanghai.aliyuncs.com/febasis/202302162031156.png)

## 容器属性

### 开启 Grid布局

```css
.box{
  display:grid;
}
```

### 容器划分行列

1. 取值为数值 `grid-template-rows:100px 100px 100px`
2. 取值为百分比 `grid-template-rows:20% 30% 50%`
3. 重复函数 `grid-template-rows:repeat(3,20%)`  
4. 自动填充 `grid-template-rows:repeat(auto-fill, 30%)`
5. auto自动 `grid-template-rows:100px auto 100px`
6. fr片段划分 `grid-template-rows:1fr 2fr 1fr`
7. minmax() `grid-template-rows:200px 200px minmax(100px,200px)`

![image-20230216205607291](https://zerdocs.oss-cn-shanghai.aliyuncs.com/febasis/202302162056312.png)

![image-20230216205635684](https://zerdocs.oss-cn-shanghai.aliyuncs.com/febasis/202302162056725.png)

![image-20230216205710712](https://zerdocs.oss-cn-shanghai.aliyuncs.com/febasis/202302162057751.png)

![image-20230216205031540](https://zerdocs.oss-cn-shanghai.aliyuncs.com/febasis/202302162050568.png)

![image-20230216205043840](https://zerdocs.oss-cn-shanghai.aliyuncs.com/febasis/202302162050881.png)

![image-20230216205247964](https://zerdocs.oss-cn-shanghai.aliyuncs.com/febasis/202302162052005.png)

![](https://zerdocs.oss-cn-shanghai.aliyuncs.com/febasis/202302162055862.png)

![image-20230216205743766](https://zerdocs.oss-cn-shanghai.aliyuncs.com/febasis/202302162057797.png)

### 调整间距属性

```css
.box{
  /* 写法一：*/
  grid-row-gap:20px;
  grid-column-gap:30px;

   /* 写法二：*/
  grid-gap:20px 30px;

   /* 写法三：*/
  gap:20px 30px;

}
```

![image-20230216210259623](https://zerdocs.oss-cn-shanghai.aliyuncs.com/febasis/202302162102659.png)

### 容器内网格对齐方式

:::tip 解释

网格相对于容器的对齐方式

:::

```css
.box{
  /*justify-content:space-around;
  align-content:space-evenly;*/
  palce-content:space-around space-evenly;
}
```

![image-20230216212726986](https://zerdocs.oss-cn-shanghai.aliyuncs.com/febasis/202302162127014.png)

**案例**

```css
.box{
  justify-content:center; 
   align-content: center;
}
```

![image-20230216223101040](https://zerdocs.oss-cn-shanghai.aliyuncs.com/febasis/202302162231062.png)

### 网格内项目对其方式

:::tip 解释

项目相对于网格/区域的对齐方式

:::

```js
.box{
  justify-items:center;    //start, end
  align-items:center;    //start, end
  //place-items:center center //水平 垂直
}
```

![image-20230216211850992](https://zerdocs.oss-cn-shanghai.aliyuncs.com/febasis/202302162118033.png)

**案例：**

```html
 <div class="box">
      <div class="item a"></div>
      <div class="item b"></div>
      <div class="item c"></div>
    </div>
```

```css
     .box {
        width: 800px;
        height: 800px;
        display: grid;
        grid-template-columns: repeat(3, 100px);
        grid-template-rows: repeat(3, 100px);
        align-items: center;
        justify-items: center;
        grid-gap: 10px;
        grid-template-areas:
          "a a a"
          ". b b"
          "c c c";
      }
      .item{
        width: 50px ;
        height: 50px;
        border:1px dashed #000;

      }
      .a{
        grid-area: a;
      }
      .b{
        grid-area: b;
      }
      .c{
        grid-area: c;
      }
```

![image-20230216222635254](https://zerdocs.oss-cn-shanghai.aliyuncs.com/febasis/202302162226287.png)

### 项目排列顺序

![image-20230216210624604](https://zerdocs.oss-cn-shanghai.aliyuncs.com/febasis/202302162106652.png)

### 容器中区域定义

```html
<div class="box">
  <div class="item a"></div>
  <div class="item b"></div>
  <div class="item c"></div>
</div>
```

```css
.box {
    width: 800px;
    height: 800px;
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat(3, 100px);
    align-content: center;
    justify-content: center;
    grid-gap: 10px;
    grid-template-areas:
      "a a a"
      ". b b"
      "c c c";
  }
  .item{
    border:1px dashed #000;
  }
  .a{
    grid-area: a;
  }
  .b{
    grid-area: b;
  }
  .c{
    grid-area: c;
  }
```

![image-20230216220606952](https://zerdocs.oss-cn-shanghai.aliyuncs.com/febasis/202302162206984.png)

## 项目属性

### 合并单元格属性

```css
.header{
  /* 写法一：*/
  grid-column-start: 1;
  grid-column-end: 3;

  grid-row-start: 1;
  grid-row-end: 2;

  /* 写法二：*/
  grid-column: 1 / 3;
  grid-row: 1 / 2;

  /* 写法三：使用 span 关键字，表示跨越。表示项目的左边框距离右边框跨越 2 个网格。*/
  grid-column-start: span 2;

  /* 写法四：若跨度为 1，则可简写第二根网格线*/
  grid-row: 1 / 2; ==>  grid-row: 1;
  grid-row: 3 / 4; ==>  grid-row: 3;
}
```

![image-20230216213656308](https://zerdocs.oss-cn-shanghai.aliyuncs.com/febasis/202302162136332.png)

### 项目区域定义

```css
  .a{
    grid-area: a;
  }
  .b{
    grid-area: b;
  }
  .c{
    grid-area: c;
  }
```

:::tip grid-area

`grid-area` 属性还可用作 `grid-row-start`、`grid-column-start`、`grid-row-end`、`grid-column-end` 的合并简写形式，直接指定项目的位置。

:::

```css
.item {
  grid-area: <row-start> / <column-start> / <row-end> / <column-end>;
}
```

### 单个项目位置

:::tip  justify-self 和 align-self

`justify-self` 属性设置单元格内容的水平位置（左中右），跟 `justify-items` 属性的用法完全一致，但只作用于单个项目。

`align-self` 属性设置单元格内容的垂直位置（上中下），跟 `align-items` 属性的用法完全一致，也是只作用于单个项目。

::: 

```css
.item {
  justify-self: start | end | center | stretch;
  align-self: start | end | center | stretch;
  /* 简写 place-self: <align-self> <justify-self>; */
}
```
