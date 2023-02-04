##  TypeError [ERR_INVALID_FILE_URL_HOST]: File URL host must be "localhost" or empty on darwin



::: danger

执行打包命令时，出现此错误

:::

 

![](https://zerdocs.oss-cn-shanghai.aliyuncs.com/febasis/202302041941600.png)

## 形成原因：全局替换时粗心大意造成img src属性多了个'/'



##  解决
::: tip
刚开始我只能猜到某个文件路径有问题 ，又不知道那个文件有问题，最后用上了 **排除法** 逐个移除文章文件夹最终才定位到出问题的文档。
虽然问题解决的的过程有点费劲，不得不说当问题搞得人想撞墙的时候，无疑也是一个不错的思路和方法！！！
:::

删除多余的'/'就好了，自己解决自己的 **[issues](https://github.com/vuejs/vitepress/issues/1895)** ！！！



