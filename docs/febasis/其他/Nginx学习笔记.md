## 一、Nginx安装
### 1.安装命令
| Ubuntu | apt install nginx |
| --- | --- |
| CentOS(Red Hat系列) | yum install nginx |

### 2.Linux目录结构
![](https://zerdocs.oss-cn-shanghai.aliyuncs.com/febasis/202302032207741.png)
### 3.基础命令
| nginx -v/nginx -V | 查看nginx版本等信息 |
| --- | --- |
| systemctl start/stop nginx | 启动/停止nginx |
| systemctl status nginx | 查看nginx运行状态 |
| ps -ef &#124; grep nginx  | 查看nginx进程 |
| kill -QUIT 进程号     
kill -TERM 进程号     | 从容停止 |
| kill -TERM 进程号    
kill -INT 进程号   | 快速停止 |
| pkill -9 nginx | 强制停止 |

## 编写配置
```bash
nginx -t	#检查配置文件有没有问题
grep -Ei  "\{|\}"   nginx.conf #检查配置文件括号配对问题
nginx -s reload #重载配置
```

## 日志分析器

## [netstat命令](https://linux.cn/article-2434-1.html)

## [curl命令](https://blog.csdn.net/u013514928/article/details/102810250)
## CentOS7联网
```bash
ip a #查看网卡
cd /etc/sysconfig/network-scripts
vi ifcfg-ens160 #把ONBOOT=no ===> 改为yes
systemctl restart network #重启网络
```
