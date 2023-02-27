

## 1.生成公钥和私钥

```bash
ssh-keygen -t rsa -C '8888888@qq.com'  #换成自己邮箱,可以随便填,相当于一个标识
#密码不用填 直接回车
```

![image-20220416211353115](https://vnote-bucket.oss-cn-shanghai.aliyuncs.com/image-20220416211353115.png)

> `ls` 查看生成的文件



![image-20220416211808297](https://vnote-bucket.oss-cn-shanghai.aliyuncs.com/image-20220416211808297.png)



## 2.在代码托管平台设置添加公钥

+ **查看生成的公钥`.pub`文件  例如: `cat  id_rsa_github_gmail.pub`**
+ **复制公钥所有内容 ，在github/gitee/gitlab添加**

![image-20220416212417100](https://vnote-bucket.oss-cn-shanghai.aliyuncs.com/image-20220416212417100.png)

## 3.添加私钥到ssh-agent中

**添加私钥到ssh-agent中 ，出现`Identity added`表示成功**

```bash
ssh-add ~/.ssh/id_rsa_github_qq
```

1. 若提示 `Could not open a connection to your authentication agent`

​	先执行`ssh-agent bash` 再执行上面代码

2. 报错: `Error connecting to agent: No such file or directory`

​	解决方法：检查文件是否存在，并【**以管理员身份运行**】在 `PowerShell` 执行

```bash
Set-Service ssh-agent -StartupType Manual
Start-Service ssh-agent
```

3. 报错 `unable to start ssh-agent service, error :1058`

​	以【**管理员身份**】打开终端，执行`Set-Service -Name ssh-agent -StartupType automatic`



+ **查看私钥列表**

 ```bash
 ssh-add -l
 ```

**出现此提示表示未配置成功，重新检查步骤配置**

```bash
git@github.com: Permission denied (publickey).
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
                                                                                             
```

## 4.创建`config`件，打开编辑 

> 注意：文件名就是`config`，没有文件后缀，编辑完保存前记得去掉注释

```bash
Host github.com #github主机地址
HostName github.com #github主机名
PreferredAuthentications publickey
IdentityFile ~/.ssh/id_rsa_github #私钥地址

Host gitlab.xxx.cn  #公司gitlab主机地址
HostName gitlab.xxx.cn	#gitlab主机名
PreferredAuthentications publickey
IdentityFile ~/.ssh/id_rsa_gitlab	#私钥地址
```

+ 测试连接是否成功，显示出这句话表示成功啦，可以看到自己账户名

  `Hi CoderFXJ! You've successfully authenticated, but GitHub does not provide shell access.`
  
  ```bash
  ssh -T git@gitee.com
  #或
  ssh -T git@github.com
  
  ssh -T git@gitlab.xxx.cn
  ```

  
  
  

## SSH公钥私钥加密解密原理

 