# Git常用操作





## 分支操作

### 删除远程分支

```zsh
git branch / git branch -r 				#列出所有本地/远程分支
git branch -D 分支名								#删除本地库分支
git push origin --delete 分支名		#删除远程库分支
```



## 文件操作



### 删除远程文件

```zsh
git rm -r -n --cached 文件/文件夹名称		#预览要删除的文件列表
git rm -r --cached 文件/文件夹名称				#确定无误后删除文件
```



### 改错分支但为未提交

```zsh
git stash 					#暂存更改到stash
git checkout 分支名	#切换分支
git stash pop				#从stash中取出暂存的代码修改
```



### 合并多次提交

```zsh
git rebase -i HEAD~3 						#合并最近的 3 次提交，并开启交互模式
git rebase -i <commit_sha>			#开启交互模式
```



```zsh
git rebase -i 8fc6389			#填第2 次提交的 hash，则表示合并 2 之后（3和 4）的提交
```

![image-20230227104519217](/Users/fanxj/Library/Application Support/typora-user-images/image-20230227105756284.png)



把需要压缩的提交 `pick ` 改为  `s`，必须保留一个 `pick`，下一步填写合并提交信息，保存退出(`:wq`)完成合并

![image-20230227105523929](https://zerdocs.oss-cn-shanghai.aliyuncs.com/febasis/202302271055952.png)

![image-20230227105519379](https://zerdocs.oss-cn-shanghai.aliyuncs.com/febasis/202302271055402.png)