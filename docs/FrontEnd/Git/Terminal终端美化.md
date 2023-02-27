
## 安装[Oh My Posh](https://ohmyposh.dev/docs/installation/windows)

> 可以先去Microsofe Store 安装winget，会比较方便

```bash
winget install JanDeDobbeleer.OhMyPosh
```

安装完:

会在`C:\Users\自己用户名\AppData\Local\Programs\oh-my-posh\themes>`有很多主题



## 预览所有主题命令

```bash
Get-PoshThemes
```

![image-20220426123111651](https://vnote-bucket.oss-cn-shanghai.aliyuncs.com/image-20220426123111651.png)





## 初始化并应用主题

```bash
oh-my-posh --init --shell pwsh --config "自己的安装目录\oh-my-posh\themes\schema.json" | Invoke-Expression
#schema.json ---- 选择themes目录下的一款主题文件
```



## 分隔符乱码问题

> 但会发现分隔符会有乱码的问题

**[乱码问题解决方式](https://ohmyposh.dev/docs/configuration/fonts)**: 

安装[**Nerd Fonts**](https://www.nerdfonts.com/font-downloads)字体，在`Terminal>Power Shell`选择自己安装的字体，保存重启就生效啦。

PS：刚开始以为没有我常用的`JetBrain Mono`字体,就没在意这种解决方案,没想到里面字体挺丰富. 



## 配置PowerShell

因为应用的主题只在当前窗口有效果，所以需要配置每次PowerShell启动时都会执行应用主题的脚本

### 1.打开配置文件方式一

+ 获取到PowerShell配置文件绝对路径

```bash
$PROFILE
```

![image-20220426124525580](https://vnote-bucket.oss-cn-shanghai.aliyuncs.com/image-20220426124525580.png)

+ 找到这个文件位置，打开并添加需要Power Shell启动时执行的脚本，保存文件重新打开Terminal看效果

```bash
oh-my-posh --init --shell pwsh --config "自己的安装目录\oh-my-posh\themes\schema.json" | Invoke-Expression
```



### 2.打开配置文件方式二

> 如果安装了VS Code，如下命令可以直接打开Power Shell配置文件

```bash
code $PROFILE
```



## 自定义主题

可借鉴的up主题文件：https://gitee.com/NilTor/public/blob/master/oh-my-posh-config.json

更多配置可查看[官网配置文档](https://ohmyposh.dev/docs/configuration/overview)



## VS Code终端配置

没有配置打开VS Code终端报错:

```bash
The term 'oh-my-posh' is not recognized as a name of a cmdlet, function, script file, or executable program. Check the spelling of the name, or if a path was included, verify
     | that the path is correct and try again.
```



+ 在环境变量新增Oh My Posh路径下bin目录

![image-20220426141214178](https://vnote-bucket.oss-cn-shanghai.aliyuncs.com/image-20220426141214178.png)

+ 在设置中配置配置自己安装的**Nerd Font**终端字体，（这里我填上我安装的是`JetBrainsMono Nerd Font Mono`)

![image-20220426141358102](https://vnote-bucket.oss-cn-shanghai.aliyuncs.com/image-20220426141358102.png)

 

## 隐藏提示语

每次打开都会有这四句提示语，想要打开是干干净净的界面。

![image-20220426233405476](https://vnote-bucket.oss-cn-shanghai.aliyuncs.com/image-20220426233405476.png)

在PowerShell配置项中添加一个配置 ，配置参数` -NoLogo`为隐藏提示语

```json
 "commandline": "自己的pwsh.exe的路径 -NoLogo",
```

**完整配置参考**

```json
{
    "colorScheme": "Campbell",
    "font": 
    {
        "face": "JetBrainsMono Nerd Font Mono"
    },
    "guid": "{574e775e-4f2a-5b96-ac1e-a2962a402336}",
    "hidden": false,
    "name": "PowerShell",
    "source": "Windows.Terminal.PowershellCore",
    "commandline": "C:\\Program Files\\WindowsApps\\Microsoft.PowerShell_7.2.2.0_x64__8wekyb3d8bbwe\\pwsh.exe -NoLogo",
    "startingDirectory": null
}
```





![image-20220426233614912](https://vnote-bucket.oss-cn-shanghai.aliyuncs.com/image-20220426233614912.png)
