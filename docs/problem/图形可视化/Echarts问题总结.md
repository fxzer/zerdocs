# Echarts问题总结


## 一、屏幕适配问题

>  方案一: 使用`scss`函数计算比例

```scss
//默认设计稿的宽度
$designWidth:1920;
//默认设计稿的高度
$designHeight:1080;

//px转为vw的函数
@function vw($px) {
  @return math.div($px , $designWidth) * 100vw;
}

//px转为vh的函数
@function vh($px) {
  @return math.div($px , $designHeight) * 100vh;
}
```



## 二、左侧菜单折叠响应式

```js
 mounted() {
// 监听窗口大小,所有echart实例尺寸尺寸改变
    window.addEventListener("resize", () => {
      this.chartsInstance.forEach(chart => {
        chart.resize()
      });
    });
  //监听div容器的无效
   /*this.$refs.onlineIspRef.addEventListener("resize",() => {
      this.chartsInstance.forEach(chart => {
        chart.resize()
      });
    })*/
}
```

> 方案: 侧边栏按钮点击展开/折叠时, 手动触发`window.resize`

```js
 toggleLeftMenu() {
      Cookies.set('sidebar', this.leftMenuOpen ? 'close' : 'open', {path: '/'});
      this.$store.commit('toggleLeftMenu', !this.leftMenuOpen);
      this.doResize()
  },
doResize(){ 
    setTimeout(function(){
          var ev = new Event("resize", {"bubbles":true, "cancelable":false});
          window.dispatchEvent(ev);
      },120);//不使用定时器没反应
    
    //有效, 而且提示event.initEvent方法已经过时(deprecated)
    //但是折线图左侧收缩/延伸会有抖动问题,需要调节定时器时间使比较不突兀
  /*setTimeout(function(){
      if(document.createEvent) {
          var event = document.createEvent("HTMLEvents");
          event.initEvent("resize", true, true);
          window.dispatchEvent(event);
      } else if(document.createEventObject) {
          window.fireEvent("onresize");
      }
  },120);*/
    
},
```

