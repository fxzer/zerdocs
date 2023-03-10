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

## 三、'确定'按钮点击失效问题

![image-20230219214203987](https://zerdocs.oss-cn-shanghai.aliyuncs.com/febasis/202302192142529.png)

```vue
<template>
	<div class="text-update-wrap">
		<p class="text-show" v-if="!isEditing">
			<span
				class="single-overflow text-val"
				:style="{ 'max-width': maxWidth }"
        :title="text"
				>{{ text }}</span
			>
			<span class="el-icon-edit" @click="switchToEdit"></span>
		</p>
		<p class="text-edit" v-else>
			<el-input
				v-model="inputVal"
				ref="inputRef"
				:placeholder="'请输入' + name"
				size="mini"
				clearable
			></el-input>
       <!-- @blur='cancelUpdate' 事件比confirmUpdate先执行，导致确定按钮事件没触发-->
			<span
				title="确定"
				:class="loading ? 'el-icon-loading' : 'el-icon-circle-check'"
				@click="confirmUpdate"
			></span>
			<span
				title="取消"
				class="el-icon-circle-close"
				@click="cancelEdit"
				v-if="!loading"
			></span>
		</p>
	</div>
</template>

<script>
export default {
	name: "UpdateText",
	props: {
		textVal: {
			type: String,
			default: "",
		},
		name: {
			type: String,
			default: "名称",
		},
		maxWidth: {
			type: String,
			default: "200px",
		},
    id: {
      type: String,
      default: "",
    },
	},
	data() {
		return {
			loading: false,
			isEditing: false,
			inputVal: "",
			text: this.textVal,
		}
	},
	computed: {},
	watch: {},
	components: {},
	methods: {
		//切换到输入框模式
		switchToEdit() {
			this.inputVal = this.textVal
			this.isEditing = true
			this.$nextTick(() => {
				this.$refs.inputRef.focus()
			})
		},
    cancelEdit(){
				this.isEditing = false	
    },
		//确定更新
	   confirmUpdate() {
			let { inputVal, name ,id} = this
      let value = inputVal.trim()
			if (value === "") {
				this.$message.error(`${name}不能为空`)
				return
			}else if(value === this.textVal){
				this.isEditing = false
				return
			}
			this.loading = true
      if(id){
        this.$emit("confirm", value, id)
      }else{
        this.$emit("confirm", value)
      }
		},
		successUpdate() {
      let { inputVal, name } = this
			this.loading = false
			this.text = inputVal
			this.isEditing = false
			this.$notify.success(`${name}修改成功`)
		},
    //失败
    failUpdate() {
      this.loading = false
      this.$notify.error(`${this.name}修改失败`)
    },
	},
	created() {},
	mounted() {
		//解决方案：不使用@blur, 监听焦点不在此组件时，才取消编辑
		document.addEventListener("click", (e) => {
			if (!this.$el.contains(e.target)) {
				this.cancelEdit()
			}
		})
	},
}
</script>
```

## 文本溢出隐藏处理后对不齐问题



![image-20230219214258711](https://zerdocs.oss-cn-shanghai.aliyuncs.com/febasis/202302192142738.png)

```css
.el-checkbox {
  width: 200px;
  ::v-deep .el-checkbox__label {
    width: 186px;
    vertical-align: middle; //需要重新设置对齐线
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
```

