
# VuePress踩坑记录
## 坑点一、自定义目录不能根据视口固定

::: danger  巨坑
找了好多博客参考，没发现有相关的问题，挠破头皮都没想明白啥原因，还好碰到一篇博客解决了疑惑
:::
::: tip
 参考博客：[position: fixed; 不相对于屏幕视口定位](https://www.jianshu.com/p/238ccd35fa6d?utm_campaign=maleskine&utm_content=note&utm_medium=seo_notes&utm_source=recommendation)
:::

::: warning

**产生原因**：当一个元素position特性值设置为fixed时，如果该元素的先祖容器中存在transform特性值为非none的元素，则

`position: fixed; `将相对于该先祖容器定位！！！ 最后发现祖先元素有`transform: translateY(0px);`这行代码在作怪!!

:::




**解决方法**：自定义样式覆盖就好啦

```css
.page>section {
    transform: none!important;
}
```





## 坑点二、引用的Gitee图床图片没显示


> 有人说是图床的问题、防盗链的问题，最后才发现自己把图床项目设为私有的项目了，重新设为开源成功解决





## 坑点三、Hexo博客源码没有备份，误点VsCode`放弃所有更改并且回退版本`

::: danger  天坑
因学习配置博客用git action来自动化部署，配置完后发现打包报错，搞了好久没办法解决。
本来想执行`git checkout .`，看到VsCode有个快捷按钮，由于之前没有备份博客源码，点了一下直接回到解放前！
:::

::: tip 领悟
来到了新的阵地VuePress折腾，学到了码农必备技能------备份
:::

