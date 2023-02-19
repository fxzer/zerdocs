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
