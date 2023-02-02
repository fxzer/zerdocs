# Vue项目踩坑一

## 一、[webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer)插件

 安装后使用完把`--report`参数去掉，还是会给你生成打包文件，并会提示8888端口被占用，

 需要在`vue.config.js`注释插件的使用，才能不被影响



## 二、点击弹窗父子传值成功，但是数据没有展示

> 恰巧性能优化，后端改动了大量的关联关系，刚开始以为后端改动数据层级嵌套太深vue丢失了响应式的原因，
>
> 最后才发现是前端element-ui**全局引入**改为**按需引入**, `DescriptionsItem `组件漏写了(没有警告、报错提示，巨坑)

```html
  <el-dialog
  :title="title"
  :visible="visible"
   :before-close="close"  :close-on-click-modal="false">    
   <el-descriptions   border>
        <!--在main.js漏了导入并使用DescriptionsItem-->
        <el-descriptions-item label="ID"> {{accountInfo.id}} </el-descriptions-item>
        <el-descriptions-item label="name"> {{accountInfo.name}} </el-descriptions-item>
    </el-descriptions>
</el-dialog>
```

