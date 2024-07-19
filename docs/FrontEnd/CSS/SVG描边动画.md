```html
<svg width="100" height="100">
  <line class="p" x1="0" y1="50" x2="100" y2="50"></line>
  <circle class="p" cx="50" cy="50" r="40"></circle>
  <polygon class="p" points="50,1 95,50 50,99 15,50"></polygon>
</svg>
```

```css
.p {
  stroke: green;
  stroke-width: 4px;
  stroke-dasharray: var(--l);
  stroke-dashoffset: var(--l);
  animation: dash 1s linear forwards;
}

@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}
```

```js
const list = document.querySelectorAll('.p')
list.forEach((item, index) => {
  item.style.setProperty('--l', item.getTotalLength())
})
```
