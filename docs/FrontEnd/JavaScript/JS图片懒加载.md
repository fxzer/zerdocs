
# JS 图片懒加载



## 方案一：监听滚动

::: tip
监听图片顶部到达视口底部，把自定义属性 data-src赋值给src
:::

```js
const images = document.querySelectorAll('img')
window.addEventListener('scroll', (e) => {
    images.forEach(
        image => {
            const imageTop = image.getBoundingClientRect().top
            if (imageTop < window.innerHeight) {
                const data_src = image.getAttribute('data-src')
                image.setAttribute('src', data_src)
            }
        }
    )
})
```

## 方案二：观察者 

```js
const images = document.querySelectorAll('img')
const callback = enteries => {
    enteries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target
            const data_src = img.getAttribute('data-src')
            img.setAttribute('src', data_src)
            observer.unobserve(img)
        }
    });
}
const observer = new IntersectionObserver(callback)
images.forEach(image => {
    observer.observe(image)
})
```

 