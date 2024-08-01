## 1.生成公钥和私钥

```zsh
ssh-keygen -t rsa -C '88888@qq.com'  #换成自己邮箱,可以随便填,相当于一个标识
#密码不用填 直接回车
```

![image-20220416211353115](https://zerdocs.oss-cn-shanghai.aliyuncs.com/interview/48.png){data-zoomable}

> `ls` 查看生成的文件

![image-20220416212417100](https://zerdocs.oss-cn-shanghai.aliyuncs.com/interview/lssh.png){data-zoomable}

## 2.在代码托管平台设置公钥 （一般在：设置 ---> SSH）

- **查看生成的公钥`.pub`文件 例如: `cat  github.pub`**
- **复制对应公钥所有内容 ，在 github/gitee/gitlab 分别添加**

## 3. 配置 SSH，创建 `config` 文件，打开编辑

> 注意：文件名就是 `config`，没有文件后缀，编辑完保存前记得去掉注释

> 定义一系列 SSH 连接的配置信息，当你使用 SSH 连接到这些平台时，SSH 客户端会根据这个配置文件选择正确的私钥进行身份验证。

```zsh
Host github.com   #Github主机地址
HostName github.com   #Github主机名
PreferredAuthentications publickey
IdentityFile ~/.ssh/github   #私钥地址

# 关联两个 Github 账号，可以修改地址进行 clone/push
# git clone git@github.com-sub:fxzer/zerdocs.git

Host github.com-sub   # 定义第二个 Github 账号主机地址
HostName github.com   # Github主机名
PreferredAuthentications publickey
IdentityFile ~/.ssh/github-sub   #  私钥

Host gitee.com   #Gitee主机地址
HostName gitee.com   #Gitee主机名
PreferredAuthentications publickey
IdentityFile ~/.ssh/gitee   #私钥地址

Host gitlab.xxx.cn    #公司 Gitlab 主机地址
HostName gitlab.xxx.cn      #Gitlab主机名
PreferredAuthentications publickey
IdentityFile ~/.ssh/gitlab     #私钥地址
```

- 测试连接是否成功，显示出这句话表示成功啦，可以看到自己账户名

  `Hi CoderFXJ! You've successfully authenticated, but GitHub does not provide shell access.`

  ```zsh
  ssh -T git@gitee.com

  ssh -T git@github.com

  ssh -T git@gitlab.xxx.cn
  ```

## SSH公钥私钥加密解密原理
