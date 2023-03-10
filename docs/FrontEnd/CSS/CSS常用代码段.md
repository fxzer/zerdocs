# CSS常用代码段

## 自定义滚动条
```css
html,
body {
  /* 隐藏滚动条 */
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */
  &::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
}

 /* 自定义滚动条 */
body{
  overflow: auto;
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  &::-webkit-scrollbar-track-piece {
    background-color: rgba($color: #000000, $alpha: .3);
  }
  &::-webkit-scrollbar-thumb:vertical {
    height: 5px;
    background-color: #0085F9;
    border-radius: 6px;
  }
}

```
## 画布网状满天星背景
```html
<svg >
  <pattern
    id="pattern-1"
    x="0"
    y="0"
    width="24"
    height="24"
    patternUnits="userSpaceOnUse"
    patternTransform="translate(-0.5,-0.5)"
  >
    <circle cx="0.5" cy="0.5" r="0.5" fill="#60606F"></circle>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-1)"></rect>
</svg>
```

```css
svg {
  margin-top: 20px;
  width: 100%;
  height: 200px;
  background-color:#13121a;
}
```
<!-- ![2023-03-09-15-45-20](https://zerdocs.oss-cn-shanghai.aliyuncs.com/interview/2023-03-09-15-45-20.png) -->
<script setup>
import GridStar from './demo/GridStar.vue'
</script>
<DemoWrap pkg="FrontEnd/CSS/demo"   path='GridStar.vue'>
    <GridStar/>
</DemoWrap>
