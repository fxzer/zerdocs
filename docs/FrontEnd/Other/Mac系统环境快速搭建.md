# Mac系统环境快速搭建

> 本文记录一下重装系统后，个人 Mac 环境快速搭建步骤。

## 一、安装 [HomeBrew](https://brew.sh/zh-cn/)，并[设置清华源](https://mirrors.tuna.tsinghua.edu.cn/help/homebrew/)

**解决下载失败问题：`curl: (7) Failed to connect to raw.githubusercontent.com port 443: Connection refused `**

```zsh
#  从国内源安装 Homebrew

/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"
```

## 二、安装软件

### 准备目录

```zsh
cd ~ && mkdir -p c d n w m/Admin m/UI m/Vue3 m/ToolKits m/Nuxt m/Vitest
```

> c : 配置 （Config）
> d : 文档（Docs）
> m : 我的代码（My Code）
> n : 网络代码 （Net Code）

### 命令安装

```zsh
brew install --cask arc google-chrome microsoft-edge orbstack figma raycast # 安装较慢
brew install --cask dingtalk wechat qq qqmusic wpsoffice adrive baidunetdisk neteasemusic
visual-studio-code  apifox warp termius  rectangle snipaste obsidian easydict
```

```zsh
# 选装
stats  keycastr docker  input-source-pro videofusion
```

```zsh
brew install lsd fastfetch lihaoyun6/tap/quickrecorder
```

装 `fnm` 或 `nvm`

```zsh
# brew install nvm
brew install fnm
fnm install 20

# 设置镜像
npm config set registry https://registry.npmmirror.com

# nvm install 20.0.0

npm i -g pnpm
# 安装全局 npm 包
pnpm i -g @antfu/ni yarn taze rimraf cz-git czg commitizen vitest rollup tsup esno
```

### 手动安装

> clash-verge、 iRightMenu、mos 、typora、SwitchHosts、Xmind
> 微信输入法 、ChatGPT客户端
> figplayer 、 alivepro 、permute3、Navicat

## 三、[配置软件](https://github.com/fxzer/config)

### 云盘导入 RayCast 配置，同步浏览器/VSCode配置...

### Git配置

```zsh
git config --list  # 查看全局配置
git config --global user.name "xxx"   # 设置全局用户名 (输入你的用户名)
git config --global user.email "xxx"   # 设置全局邮箱 (输入你的邮箱，需要和 github/gitee设置的邮箱对应)
git config --global core.ignorecase false   # 区分大小写
git config --global init.defaultBranch main   #  初始分支：main
git config --global pull.rebase true   # 设置 pull 代码合并策略为 rebase
```

### Github踩坑

```
正克隆到 'json-viewer'...
Connection closed by 20.205.243.166 port 22
致命错误：无法读取远程仓库。

请确认您有正确的访问权限并且仓库存在。
```

**解决办法**

```
ssh -vT git@github.com

output:
OpenSSH_8.6p1, LibreSSL 3.3.6
...
Connection closed by 20.205.243.166 port 22
```

1.  删除 `~/.ssh/github`相关公/私钥对，重新生成
2.  重新生成密钥对，并配置公钥到 [github](https://github.com/settings/ssh/new)

```zsh
git config --global user.name "Your Name"
git config --global user.email "email@example.com"
ssh-keygen -t rsa -C "youremail@example.com"
```

3. 修改`~/.ssh/config`

   ```zsh
   Host github.com
   HostName ssh.github.com
   User git
   Port 443
   IdentityFile ~/.ssh/github
   ```

### 增强 ZSH 功能： 安装 [ZIMFW](https://github.com/zimfw/zimfw) **或** [OhMyZsh](https://ohmyz.sh/)

#### zimfw

```zsh
  curl -fsSL https://raw.githubusercontent.com/zimfw/install/master/install.zsh | zsh
```

#### omz

```zsh
#安装OMZ插件
cd ~/.oh-my-zsh/plugins
git clone https://github.com/zsh-users/zsh-autosuggestions
git clone https://github.com/zsh-users/zsh-completions
git clone https://github.com/zdharma-continuum/fast-syntax-highlighting.git
```

### 配置 ZSH 主题： 安装[P10K](https://github.com/romkatv/powerlevel10k)，或 [starship](https://starship.rs/)

## 删除 ABC 输入法

1.  进入 App Store， 安装 `PlistEdit Pro`

2.  M1 芯片电脑开机时长按电源，直至进入 '启动项 -> 选项 -> 点头像-> 下一步 -> 点顶部使用工具 -> 终端'

```zsh
csrutil disable # 选 yes ，输入密码
csrutil status  # 查看是否禁用成功
```

3. 重启后终端输入 `sudo open ~/Library/Preferences/com.apple.HIToolbox.plist`，输入开机密码，打开的文件全部展开，删除所有 Value 是 ABC 的项，保存配置（顶部菜单栏点 File -> Save 或 CMD + S），重启电脑
