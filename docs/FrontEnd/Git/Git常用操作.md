# Git常用操作

## 拉取最新提交
```zsh
  git fetch -p  #或 git fetch -p origin
```

`git fetch -p` （或者 `--prune`）命令用于从远程仓库中拉取最新的提交记录，同时也会删除 *本地不存在的远程分支*；不会更新本地分支和远程分支之间的关联关系，需要手动执行 `git merge` 或 `git rebase` 命令，或者使用 `git pull` 命令。例：删除远程 `dev`分支后，使用此命令，本地的远程分支也会被清理。

`git fetch` 命令用于将远程仓库中的最新提交记录拉取到本地仓库中，但是不会自动合并（merge）这些提交；不会删除本地不存在的远程分支，可能会导致本地分支列表过长，不便于管理。

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


## 提交完未推送前，需要再次提交
- 提交完未推送前，发现代码有的有点小问题，还需要修改再提交，但是不想新增垃圾提交信息，保持简洁。
- 只需要修改提交的内容而不需要改变提交信息， 可以使用 --no-edit 参数来跳过编辑提交信息的步骤。
```zsh
git commit --amend --no-edit # 做的修改合并到最近的提交中，相当于是在原有的提交上进行修改，而不是创建一个新的提交。

# 使用后在拉取代码会出现：位于分支 master
# 您的分支和 'origin/master' 出现了偏离，
# 并且分别有 1 和 1 处不同的提交。
#   （使用 "git pull" 来合并远程分支）
 git config pull.rebase true   # git pull前，需要执行此命令进行变基
```

## 修改第一次提交信息
```zsh
git rebase -i --root  #把第一次提交的 pick 改为 edit 后 e
git rebase --continue
git rebase pull.rebase true
git pull
git push 

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


## Git 提交规范化
- **husky**: Git 钩子工具,在 Git 提交过程的不同阶段自动运行脚本，以此来实现对代码的验证、格式化、测试等操作
- **@commitlint/cli**: 提交信息校验脚手架
- **@commitlint/config-conventional**: 定义了 commitlint 默认使用的规范。
- **commitizen**: 交互式提交工具
- **conventional-changelog**: 规范提交信息、并自动生成变更日志
- **cz-conventional-changelog**: git cz 提交规范和 changelog 生成工具

### [husky](https://typicode.github.io/husky) [文档](https://typicode.github.io/husky/getting-started.html)
``` zsh
# 安装
pnpm dlx husky-init && pnpm install
# 初始化husky配置，在根目录新增.husky配置文件。初始化配置pre-commit

# 新增一个提交git commit 执行前的钩子（commit-msg）
npx husky add .husky/commit-msg 

```

#### 注意：需要 `git init`后才能初始化，否则报错如下
![2023-06-27-20-25-35](https://zerdocs.oss-cn-shanghai.aliyuncs.com/interview/2023-06-27-20-25-35.png)
### @commitlint/cli与@commitlint/config-conventional
```zsh
#安装校验脚手架、校验规范
pnpm i @commitlint/cli @commitlint/config-conventional -D

#添加安装脚本呢
pnpm set-script '"prepare": "husky install"'
```

```js
//commitlint.config.js （若报错 type:'module'）可改：commitlint.config.js ==> commitlint.config.cjs
module.exports = {
  extends: ["@commitlint/config-conventional"],
};

```
### [commitizen](http://commitizen.github.io/cz-cli/)

```zsh
#全局安装
npm install -g commitizen
```


### cz-conventional-changelog

```zsh
#全局安装
npm install -g cz-conventional-changelog
```

配置 `~/.czrc`， 将其设置为 `commitizen` 的插件。
```zsh
{
  "path": "cz-conventional-changelog"
}
```

:::tip 作用：提交代码并生成变更日志
使用 `commitizen` 提交代码时，会自动启动 `cz-conventional-changelog` 插件，

并根据 `conventional-commit` 规范提示用户输入提交信息。

输入完毕后，会自动将提交信息转换成符合规范的格式，并将其写入到 `CHANGELOG.md` 文件中。
:::

