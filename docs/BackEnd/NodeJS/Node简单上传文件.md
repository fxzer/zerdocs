# Node 简单上传文件

## Vue 前端代码

```vue
<script setup>
import axios from 'axios'
const onUpload = (e) => {
  let formData = new FormData()
  formData.append('fileName', e.target.files[0]) //fileName:后端接收的参数名
  console.log('[ formData ]-6', formData)
  axios.post('http://localhost:3000/upload/postFile', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }).then(res => {
    console.log('[ res ]', res)
  }).catch(err => {
    console.log('[ err ]', err)
  })
}
</script>

<template>
  <input type="file" @change="onUpload">
</template>
```

## Express 后端代码

```js
const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const app = express();
const router = express.Router();
app.use("/upload", router);

const upload = multer({
  storage: multer.diskStorage({
    //设置文件存储位置
    destination: (req, file, cb) => {
      let date = new Date();
      let year = date.getFullYear();
      let month = (date.getMonth() + 1).toString().padStart(2, "0");
      let day = date.getDate();
      let dir = "./public/uploads/" + year + month + day;
      //判断目录是否存在，没有则创建
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
      //dir就是上传文件存放的目录
      cb(null, dir);
    }, //设置文件名称
    filename: (req, file, cb) => {
      // 获取原来的文件名
      let oldName = file.originalname;
      //获取文件前缀
      let prefix = oldName.startsWith(".") ? oldName : oldName.split(".")[0];
      let fileName =
        prefix + "-" + Date.now() + path.extname(file.originalname);
      //fileName就是上传文件的文件名
      cb(null, fileName);
    },
  }),
});
 //访问地址为:localhost:3000/upload/index,操作界面,使用 Vue 时可不需要这个接口
router.get("/index", (req, res) => {
  //接口地址为:localhost:3000/upload/postFile ,input的name属性值为imgFile和upload.single("imgFile")对应
  res.send(`
  <form action="http://localhost:3000/upload/postFile" method="post" enctype="multipart/form-data">
  <input id="postFile" type="file" name="fileName" multiple>
  <button type="submit">上传</button>
</form>`);
});
router.post("/postFile", upload.single("fileName"), (req, res, next) => {
  res.json({
    file: req.file,
  });
});

app.listen(3000, () => {
  console.log("server is running at http://localhost:3000");
});

```

**可以借助接口调试工具测试或直接访问：`http://localhost:3000/upload/index`**

![image-20230213141712478](https://zerdocs.oss-cn-shanghai.aliyuncs.com/febasis/202302131417657.png)

![image-20230213141820443](https://zerdocs.oss-cn-shanghai.aliyuncs.com/febasis/202302131418470.png)