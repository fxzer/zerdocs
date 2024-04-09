# Mac系统环境快速搭建

> 本文记录一下重装系统后，个人 Mac 环境快速搭建步骤。

## 一、安装 [HomeBrew](https://brew.sh/zh-cn/)，并[设置清华源](https://mirrors.tuna.tsinghua.edu.cn/help/homebrew/)

```zsh
# 先开代理
export https_proxy=http://127.0.0.1:7890 http_proxy=http://127.0.0.1:7890 all_proxy=socks5://127.0.0.1:7890

/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

## 二、安装软件

### 准备目录

```zsh
cd ~ && mkdir -p c d n m/Admin m/UI m/Vue3 m/ToolKits m/Nuxt m/Vitest
```

> c : 配置 （Config）
> d : 文档（Docs）
> m : 我的代码（My Code）
> n : 网络代码 （Net Code）

### 命令安装

```zsh
brew install --cask arc google-chrome microsoft-edge apifox dingtalk wechat qq  qqmusic wpsoffice adrive baidunetdisk neteasemusic videofusion orbstack obsidian figma
visual-studio-code raycast warp input-source-pro alt-tab termius stats  bob rectangle bartender keycastr snipaste manico docker orbstack
```

```zsh
brew install nvm
nvm install 20.0.0
npm i -g pnpm
# 安装全局 npm 包
pnpm i -g @antfu/ni yarn taze rimraf cz-git czg commitizen vitest rollup tsup esno 
```

### 手动安装

> Myzip 、clashx 、mos 、 typora、figplayer 、pixelmator 、 alivepro Omi录屏专家 、Giphy Capture 、permute3

## 三、配置软件
### 云盘导入 RayCast 配置，同步浏览器/VSCode配置...

### 安装[OhMyZsh](https://ohmyz.sh/)、[P10K](https://github.com/romkatv/powerlevel10k)，配置 ZSH

```zsh
#安装OMZ插件
cd ~/.oh-my-zsh/plugins
git clone https://github.com/zsh-users/zsh-autosuggestions
git clone https://github.com/zsh-users/zsh-completions 
git clone https://github.com/zdharma-continuum/fast-syntax-highlighting.git 
```
```zsh
# ~/.zshrc
if [[ -r "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh" ]]; then
  source "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh"
fi

# If you come from bash you might have to change your $PATH.
export PATH=$HOME/bin:/usr/local/bin:$PATH

export ZSH="$HOME/.oh-my-zsh"

# See https://github.com/ohmyzsh/ohmyzsh/wiki/Themes
plugins=(z vi-mode  copypath zsh-completions fast-syntax-highlighting zsh-autosuggestions zsh-history-substring-search)

VI_MODE_RESET_PROMPT_ON_MODE_CHANGE=true
VI_MODE_SET_CURSOR=true
# defaults
VI_MODE_CURSOR_NORMAL=0
VI_MODE_CURSOR_VISUAL=0
VI_MODE_CURSOR_INSERT=5
VI_MODE_CURSOR_OPPEND=0

source $ZSH/oh-my-zsh.sh

export MANPATH="/usr/local/man:$MANPATH"

# ====== 别名 ======
alias ll='ls -alhG'
alias vi='vim'
alias pn='pnpm'
alias g='git'
alias c='code'
alias o='open'
alias d='nr dev'
alias f='nr lintf'
alias b='nr build'
alias t='nr test'
alias l='nr lint'
alias cl='clear'
alias sz='source ~/.zshrc'

# cd
alias ..='cd ../'
alias ...='cd ../../'
alias ....='cd ../../../'
alias ..l.='cd ../../ && ll'
alias ~='cd ~'
alias cdtmp='cd `mktemp -d /tmp/fxzer-XXXXXX`'

alias vihost="vi /etc/hosts"
alias vissh="vim ~/.ssh/config"
alias vigit="vim ~/.gitconfig"

alias cip="curl cip.cc"
alias ip="ipconfig getifaddr en0 && ipconfig getifaddr en1"

alias dps='docker ps --format "table {{.ID}}\t{{.Image}}\t{{.Status}}\t{{.Ports}}\t{{.Names}}"'
alias dis='docker images'

# Git
alias grbtrue='g config pull.rebase true'
alias gs='g status'
alias gss='g status -sb' # 简洁状态 显示分支
alias ga='g add .'
alias gcm='g commit -m'
alias gst='g stash' # 暂存
alias gstp='g stash pop' # 恢复暂存
alias gps='g push'
alias gpl='g pull'
alias gc='g clone'
alias gc1='g clone --depth=1'
alias gcr='g clone --recursive '
alias gco='g checkout'
alias gbr='g branch'
alias gbra='g branch -a'
alias gbrr='g branch -r'
alias gdb='g branch -D' # 删除本地分支
alias gconf='g config --global -e'
alias gdrb='g push origin --delete' # 删除远程分支
alias grv='g remote -v' # 查看所关联的远程仓库
alias gra='g remote add'  # 关联远程仓库 例如：upstream 需要写远程源
alias grs='g remote set-url --add origin'  # 给 origin 添加新的远程仓库地址 比如 gitee
alias gcam='g commit --amend' # --message='new commit' 修改最后一次提交信息
alias gcan='g commit --amend --no-edit' # 当前提交合并到上次提交
alias grbc='g rebase --continue' # 当前提交合并到上次提交
alias grba='g rebase --abort ' # 当前提交合并到上次提交
alias gls="g log -3 HEAD --pretty=format:'hash: %C(yellow)%h %n主题: %C(bold Magenta)%s %n日期: %C(black)%cd%Cgreen(%cr) %n作者: %C(bold blue)%an %n' --date=format:'%Y-%m-%d %H:%M:%S'" # 查看最后3次提交
alias	glp="g log -n 10 --graph --pretty=format:'hash: %C(yellow)%h %n主题: %C(bold Magenta)%s %n日期: %C(black)%cd%Cgreen(%cr) %n作者: %C(bold blue)%an %n' --date=format:'%Y-%m-%d %H:%M:%S'"  # 查看最近10次提交
alias	gll="g log --color --graph --pretty=format:'%C(yellow)%h%Creset %C(black)[%cd]%Cgreen(%cr)%C(bold blue)<%an>%Creset -%C(cyan)%d%Creset %s' --date=format:'%Y-%m-%d %H:%M:%S'"  # 查看所有提交历史

# ====== 自定义环境变量 ======
export GITEE_NAME="fxzer"
export GITEE_PSWD="Fxj68569"

export QQ_EMAIL="xxx@qq.com"
export WY_EMAIL="xxx@163.com"
export QQ_EMAIL_AUTH="xxx"

export ACCESS_TOKEN=xxx

# 启用命令纠错功能
ENABLE_CORRECTION="true"

# 关闭 oh-my-zsh 的魔法函数(解决粘贴长文本卡顿的问题)
DISABLE_MAGIC_FUNCTIONS="true"

# 关闭 Zsh 的自动更新
DISABLE_AUTO_UPDATE="true"

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
# pnpm
export PNPM_HOME="/Users/fxzer/Library/pnpm"
case ":$PATH:" in
  *":$PNPM_HOME:"*) ;;
  *) export PATH="$PNPM_HOME:$PATH" ;;
esac
# pnpm end

# ====== P10K ======
source ~/c/powerlevel10k/powerlevel10k.zsh-theme
[[ ! -f ~/.p10k.zsh ]] || source ~/.p10k.zsh

```

```zsh

# P10K 主题 : ~/c/powerlevel10k/powerlevel10k.zsh-theme
# vim:ft=zsh ts=2 sw=2 sts=2 et fenc=utf-8
################################################################
# Powerlevel10k Theme
# https://github.com/romkatv/powerlevel10k
#
# Forked from Powerlevel9k Theme
# https://github.com/bhilburn/powerlevel9k
#
# Which in turn was forked from Agnoster Theme
# https://github.com/robbyrussell/oh-my-zsh/blob/74177c5320b2a1b2f8c4c695c05984b57fd7c6ea/themes/agnoster.zsh-theme
################################################################

# Temporarily change options.
'builtin' 'local' '-a' '__p9k_src_opts'
[[ ! -o 'aliases'         ]] || __p9k_src_opts+=('aliases')
[[ ! -o 'sh_glob'         ]] || __p9k_src_opts+=('sh_glob')
[[ ! -o 'no_brace_expand' ]] || __p9k_src_opts+=('no_brace_expand')
'builtin' 'setopt' 'no_aliases' 'no_sh_glob' 'brace_expand'

(( $+__p9k_root_dir )) || typeset -gr __p9k_root_dir=${POWERLEVEL9K_INSTALLATION_DIR:-${${(%):-%x}:A:h}}
(( $+__p9k_intro )) || {
  # Leading spaces before `local` are important. Otherwise Antigen will remove `local` (!!!).
  # __p9k_trapint is to work around bugs in zsh: https://www.zsh.org/mla/workers/2020/msg00612.html.
  # Likewise for `trap ":"` instead of the plain `trap ""`.
  typeset -gr __p9k_intro_base='emulate -L zsh -o no_hist_expand -o extended_glob -o no_prompt_bang -o prompt_percent -o no_prompt_subst -o no_aliases -o no_bg_nice -o typeset_silent -o no_rematch_pcre
  (( $+__p9k_trapped )) || { local -i __p9k_trapped; trap : INT; trap "trap ${(q)__p9k_trapint:--} INT" EXIT }
  local -a match mbegin mend
  local -i MBEGIN MEND OPTIND
  local MATCH OPTARG IFS=$'\'' \t\n\0'\'
  typeset -gr __p9k_intro_locale='[[ $langinfo[CODESET] != (utf|UTF)(-|)8 ]] && _p9k_init_locale && { [[ -n $LC_ALL ]] && local LC_ALL=$__p9k_locale || local LC_CTYPE=$__p9k_locale }'
  typeset -gr __p9k_intro_no_locale="${${__p9k_intro_base/ match / match reply }/ MATCH / MATCH REPLY }"
  typeset -gr __p9k_intro_no_reply="$__p9k_intro_base; $__p9k_intro_locale"
  typeset -gr __p9k_intro="$__p9k_intro_no_locale; $__p9k_intro_locale"
}

zmodload zsh/langinfo

function _p9k_init_locale() {
  if (( ! $+__p9k_locale )); then
    typeset -g __p9k_locale=
    (( $+commands[locale] )) || return
    local -a loc
    loc=(${(@M)$(locale -a 2>/dev/null):#*.(utf|UTF)(-|)8}) || return
    (( $#loc )) || return
    typeset -g __p9k_locale=${loc[(r)(#i)C.UTF(-|)8]:-${loc[(r)(#i)en_US.UTF(-|)8]:-$loc[1]}}
  fi
  [[ -n $__p9k_locale ]]
}

() {
  eval "$__p9k_intro"
  if (( $+__p9k_sourced )); then
    (( $+functions[_p9k_setup] )) && _p9k_setup
    return 0
  fi
  typeset -gr __p9k_dump_file=${XDG_CACHE_HOME:-~/.cache}/p10k-dump-${(%):-%n}.zsh
  if [[ $__p9k_dump_file != $__p9k_instant_prompt_dump_file ]] && (( ! $+functions[_p9k_preinit] )) && source $__p9k_dump_file 2>/dev/null && (( $+functions[_p9k_preinit] )); then
    _p9k_preinit
  fi
  typeset -gr __p9k_sourced=13
  if [[ $ZSH_VERSION == (5.<1->*|<6->.*) ]]; then
    if [[ -w $__p9k_root_dir && -w $__p9k_root_dir/internal && -w $__p9k_root_dir/gitstatus ]]; then
      local f
      for f in $__p9k_root_dir/{powerlevel9k.zsh-theme,powerlevel10k.zsh-theme,internal/p10k.zsh,internal/icons.zsh,internal/configure.zsh,internal/worker.zsh,internal/parser.zsh,gitstatus/gitstatus.plugin.zsh,gitstatus/install}; do
        [[ $f.zwc -nt $f ]] && continue
        zmodload -F zsh/files b:zf_mv b:zf_rm
        local tmp=$f.tmp.$$.zwc
        {
          # `zf_mv -f src dst` fails on NTFS if `dst` is not writable, hence `zf_rm`.
          zf_rm -f -- $f.zwc && zcompile -R -- $tmp $f && zf_mv -f -- $tmp $f.zwc
        } always {
          (( $? )) && zf_rm -f -- $tmp
        }
      done
    fi
  fi
  builtin source $__p9k_root_dir/internal/p10k.zsh || true
}

(( $+__p9k_instant_prompt_active )) && unsetopt prompt_cr prompt_sp || setopt prompt_cr prompt_sp

(( ${#__p9k_src_opts} )) && setopt ${__p9k_src_opts[@]}
'builtin' 'unset' '__p9k_src_opts'

```
