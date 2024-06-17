# Mac系统环境快速搭建

> 本文记录一下重装系统后，个人 Mac 环境快速搭建步骤。

## 一、安装 [HomeBrew](https://brew.sh/zh-cn/)，并[设置清华源](https://mirrors.tuna.tsinghua.edu.cn/help/homebrew/)

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
brew install --cask apifox dingtalk wechat qq qqmusic wpsoffice adrive baidunetdisk neteasemusic obsidian
visual-studio-code  warp alt-tab termius  rectangle snipaste

```

```zsh
# 选装
stats bartender keycastr docker  input-source-pro videofusion
```

```zsh
brew install lsd fastfetch
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

> clashx 、 iRightMenu、mos 、微信输入法 、腾讯柠檬 、typora
> Myzip 、pixelmator 、alivepro 、Giphy Capture 、permute3
> AppStore:figplayer 、 bOmi录屏专家 、ob

## 三、[配置软件](https://github.com/fxzer/config)

### 云盘导入 RayCast 配置，同步浏览器/VSCode配置...

### Git配置

```zsh
git config --list  # 查看全局配置
git config --global user.name "xxx"(输入你的用户名)   # 设置全局用户名
git config --global user.email "xxx"(输入你的邮箱)   # 设置全局邮箱
git config --global core.ignorecase false   # 区分大小写
```

### 增强 ZSH 功能： 安装 [ZIMFW](https://github.com/zimfw/zimfw) 或 [OhMyZsh](https://ohmyz.sh/)

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
