

## 1.生成公钥和私钥

```bash
cd ~/.ssh # 进入.ssh目录
ssh-keygen  
# 第一步输入生成的公、私钥文件名，例如：aws-root
# 密码不用填 直接回车
```

## 2.将公钥拷贝到服务器

```bash
ssh-copy-id -i 公钥 服务器ip
# ssh-copy-id -i aws-root.pub 192.227.112.172
```

## 3.查看服务器是否配置成功

```bash
ssh root@192.227.112.172
cd ~/.ssh
cat authorized_keys # 查看是否有上传的公钥
```

## 4.配置 ssh config文件
 
```bash
vim /etc/ssh/sshd_config
PermitRootLogin yes # no改为yes  # 允许root用户登录：解决root用户登录报错 Permission denied 问题
PubkeyAuthentication yes # no改为yes

# 重启ssh服务
systemctl restart sshd.service
#或： service sshd restart
```

## 5.测试连接、配置本地ssh config文件，使用 VSCODE插件 ([Remote - SSH](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh)) 连接

```bash

```bash
# 测试连接
ssh -i ~/.ssh/aws-root root@192.227.112.172

#连接成功后，退出服务器，打开并配置本地ssh config文件
vim ~/.ssh/config

# 添加以下内容
Host 192.227.112.172
HostName 192.227.112.172
User root
IdentityFile ~/.ssh/aws-root

```
## 6.大功告成，可以每次轻松愉快一键连接远程服务器啦！
> 注意：若同时安装了 Remote Repositories 和 Remote - SSH 插件，需要在最顶部进行选择切换到 Remote - SSH 插件，并点击顶部刷新按钮，这样才能看到 ssh/config 文件配置的所有主机。
