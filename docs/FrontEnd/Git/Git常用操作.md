# Git常用操作

## 删除远程分支

```zsh
git branch / git branch -r 	     #列出所有本地/远程分支
git branch -D 分支名              #删除本地库分支
git push origin --delete 分支名   #删除远程库分支
```

## 删除远程文件

```zsh
git rm -r -n --cached 文件/文件夹名称   #预览要删除的文件列表
git rm -r --cached 文件/文件夹名称      #确定无误后删除文件
```

## fork后的仓库，拉取合并原仓库的更新 
```zsh
git remote add upstream [原仓库URL] #添加上游分支路径
git pull upstream [分支名]  				#拉取上游分支更新并合并
```

## 合并多次提交

```zsh
git rebase -i HEAD~3        #合并最近的 3 次提交，并开启交互模式
git rebase -i <commit_sha>  #开启交互模式
```

```zsh
git rebase -i 8fc6389   #填第2 次提交的 hash，则表示合并 2 之后（3和 4）的提交
```

![image-20230227205854474](https://zerdocs.oss-cn-shanghai.aliyuncs.com/febasis/202302272058564.png)

把需要压缩的提交 `pick ` 改为  `s`，必须保留一个 `pick`，下一步填写合并提交信息，保存退出(`:wq`)完成合并

![image-20230227105523929](https://zerdocs.oss-cn-shanghai.aliyuncs.com/febasis/202302271055952.png)

![image-20230227205916425](https://zerdocs.oss-cn-shanghai.aliyuncs.com/febasis/202302272059457.png)



## 关联多个代码托管平台
> 当本地仓库项同时关联 github 和 gitee，同步更新两边代码

1. **方法一**  ` git remote add gitee [gitee_repo_url]`，需要多次推送

效果：
```zsh
[branch "master"]
	remote = origin
	merge = refs/heads/master
[remote "origin"]
	url = git@github.com:fxzer/juejin-server-mysql.git
	fetch = +refs/heads/*:refs/remotes/origin/*
[remote "gitee"]
	url = git@gitee.com:fxzer/juejin-server-mysql.git
	fetch = +refs/heads/*:refs/remotes/gitee/*
```

```zsh
#git remote -v                                                   
gitee   git@gitee.com:fxzer/juejin-server-mysql.git (fetch)
gitee   git@gitee.com:fxzer/juejin-server-mysql.git (push)
origin  git@github.com:fxzer/juejin-server-mysql.git (fetch)
origin  git@github.com:fxzer/juejin-server-mysql.git (push)
```


2. **方法二** `git remote set-url --add origin [gitee_repo_url]` , 只需一次推送

效果：~
```zsh
[remote "origin"]
	url = git@github.com:fxzer/json-viewer.git
	fetch = +refs/heads/*:refs/remotes/origin/*
	url = git@gitee.com:fxzer/json-viewer.git
[branch "master"]
	remote = origin
	merge = refs/heads/master
```

```zsh
#git remote -v
origin  git@github.com:fxzer/json-viewer.git (fetch)
origin  git@github.com:fxzer/json-viewer.git (push)
origin  git@gitee.com:fxzer/json-viewer.git (push)
```

::: tip `git remote add` 和 `git remote set-url --add`区别
- git remote add 用于添加一个新的远程仓库。该本地仓库已关联远程库，希望添加新的远程库。**运用：**fork后的仓库，需要拉取合并原仓库的更新。
- git remote set-url --add 用于向已经存在的远程仓库中添加一个新的 URL。**运用：**同一个仓库关联 github 和 gitee 方便同时更新。
- git remote set-url 命令会替换掉原有的链接，git remote set-url --add 命令，则是添加一个标识对应的远程库链接。

:::
## 改错分支但为未提交

```zsh
git stash            #暂存更改到stash
git checkout 分支名   #切换分支
git stash pop        #从stash中取出暂存的代码修改
```
## 代码提交到了错误的分支

### 方法一
切换到正确的分支并使用， 将指定的提交复制到当前分支，并将其添加到暂存区

```zsh
git cherry-pick [commit] 	
```
### 方法二

使用 `git rebase` 命令将提交移动到正确的分支上：

1. 切换到错误分支上：`git checkout [error-branch]`
2. 将错误分支上的提交移动到正确分支上：`git rebase [correct-branch]`
3. 解决冲突（如果有）
4. 将更改提交到正确的分支上：`git checkout [correct-branch]`，然后 `git merge [error-branch]`
5. 在错误分支`git push -f`更新远程代码
