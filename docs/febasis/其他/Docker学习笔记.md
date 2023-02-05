## 一、解决痛点
1. 环境不一致
2. 版本不一样
3. 配置不一致，配置费力费时
> 把源码+配置+环境+版本打包成镜像，装载在Dokcer容器引擎上，达到跨平台无缝接轨运作。
> 一次镜像，处处运行，从搬家到搬楼。

## 二、优点和应用

1. 便捷升级和快速扩容
2. 更简单的系统运维
3. 镜像小、更高效的计算资源
4. 更快的应用交付和平缓迁移
5. 利用宿主机内核，不需要加载操作系统OS内核

## 三、基本组成

1. 镜像：一个只读的模板，用于创建容器，一个镜像可以创建多个容器。
2. 容器：镜像创建出来的虚拟化运行环境容器实例（简易的Linux环境）。
3. 仓库：集中存放镜像的场所，分为公开库和私有库。
## 四、工作原理
![](https://zerdocs.oss-cn-shanghai.aliyuncs.com/febasis/202302032203456.png)
![](https://zerdocs.oss-cn-shanghai.aliyuncs.com/febasis/202302032204209.png)
## 五、CentOS安装Docker
```bash
sudo yum install -y yum-utils
yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
sudo yum install docker-ce docker-ce-cli containerd.io docker-compose-plugin
docker version
systemctl start docker #启动
ps -ef | grep docker
docker run hello-world #测试
```
## 六、阿里云镜像加速
[参考教程](https://blog.csdn.net/weixin_45764765/article/details/128367219)

## 七、常用命令
### 1. Docker
```bash
systemctl enable docker #开机启动
docker system df #负载查看

```
### 2. 镜像
```bash
docker images #展示本地镜像 -a 所有，-q只显示ID
docker search mongo #搜索镜像
docker search redis --limit 5 #展示Stars排名前五条
docker pull 镜像名[:TAG]  #下载镜像，没有版本号默认最新
docker rmi -f hello-world #强制删除镜像

```
> 虚悬镜像：构建或删除过程中产生的仓库名和标签都为none的镜像，没啥用建议删除
> `docker image ls -f dangling=true` 删除：`docker image prune`

**生成新镜像**
```bash
agt-get update
apt-get -y install vim
docker commit -m="vim is ok" -a="fxj" 容器id myubt:1.1
```
**本地镜像推送到阿里云**
```bash
#发布和拉取
docker login --username=yunzhishangfxj registry.cn-hangzhou.aliyuncs.com
docker tag [ImageId] registry.cn-hangzhou.aliyuncs.com/fanxj/mubt:[镜像版本号]
docker push registry.cn-hangzhou.aliyuncs.com/fanxj/mubt:[镜像版本号]
docker run -it registry.cn-hangzhou.aliyuncs.com/fanxj/mubt:1.1  /bin/bash #记得带版本
```
![](https://zerdocs.oss-cn-shanghai.aliyuncs.com/febasis/202302032206243.png)
### 3. 容器
```bash
docker ps #列出正在运行容器 -a -s
docker run -it --name="ub01"  ubuntu /bin/bash 
#-p: 外部主机端口:docker容器端口 -P:随机分配主机端口映射到内部容器端口
#-i:交互式 -t:输出伪终端 -d:后台运行 --name="容器名" /bin/bash:指定命令解释器

exit #退出，ctrl+q+p:退出但不停止
docker exec -it 容器id /bin/bash #重新进容器，exit退出不会停止容器

docker start 容器id或容器名
docker restart 
docker stop
docker kill #强制停止

docker rm 容器id或容器名 #删除已停止容器 、未停止 -f 强制删除
docker rm 
docker rm -f $(docker ps -a -q) 
docker ps -a -q | xargs docker rm #一次性删除多个再运行的
```
#### 启动守护式
```bash
docker run -it #前台交互启动
docker run -d  #后台守护启动
```
#### 查看容器日志
```bash
docker logs 容器id #查看容器日志
docker inspect  容器id #查看容器内部细节
```
#### 容器备份到主机
```bash
docker cp 容器id:容器文件路径 目的主机路径  #备份文件
docker export 容器id > xxx.tar	 #备份整个容器
cat ub.tar | docker import - 恢复后的镜像名  #从tar包中恢复成镜像
docker run -it  镜像id /bin/bash #重新恢复容器

```
#### 容器卷
## 八、[Dockerfile](https://docs.docker.com/engine/reference/builder/#from)编写
```dockerfile
#基础镜像，基于什么镜像什么版本作为模版 
From xxx:1.1 

#构建参数，运行时无效，可以构建时候临时修改变量（docker build --build-arg B=10）
ARG

#定义运行时环境变量，运行时一直生效后续可以引用， ARG变量可以传递给ENV
ENV NGINX_HOME /usr/local/nginx

#指定进入容器后的默认工作目录（落脚点）
WORKDIR $NGINX_HOME

#将宿主机的文件拷贝到镜像
COPY <src>  <dest>

#将主机目录下的文件拷贝到镜像，且会自动处理URL和解压tar压缩包
ADD 

#Dockerfile构建时运行(docker build)， 
RUN 

#容器启动后(docker run)执行的脚本，多个命令时只会生效最后一个???
#会被docker run之后的参数替换(/bin/bash)
CMD  ["/etc/nginx/nginx.conf"]

#类似CMD,但是不会(docker run)后面命令覆盖，而且可以接收CMD传的参数
ENTRYPOINT ["nginx","-c"] ==> nginx -c /etc/nginx/nginx.conf
#docker run nginx:test -c /etc/nginx/new.conf ==> nginx -c /etc/nginx/new.conf
一般语句为：
FROM WORKDIR COPY-ADD RUN CMD-ENTRYPOINT



#暴露镜像的指定端口
EXPOSE 9999

#指定容器卷
VOLUME ["/var/www", "/var/log/apache2", "/etc/apache2"]

#指定元数据，标识容器便于查找
LABEL 

#当前镜像构建的时候不会执行，基于当前镜像的镜像去构建的时候才会在FROM后执行
ONBUILD 

#指定容器使用什么信号，一般指定信号名
STOPSIGNAL

#检查容易的健康状态
HEALTHCHECK 

#指定命令解释器 linux为/bin/sh，windows为cmd
SHELL 

#用于指定RUN CMD等指令运行时的用户身份，不指定是root(用户名:用户组 或 USER 用户id:组id)
USER  
```
## 九、Docker网络
```bash
docker network ls #查看网络
docker network inspect 网络名 #查看网络源数据
docker network rm 网络名 #删除网络
docker network create 网络名 #新建网络
docker network inspect bridge | grep docker0 #查看网卡信息

# --network 不指定默认就是网桥模式
#host主机模式(不能指定端口，共享宿主机的ip，没有自己的ip，http://宿主机ip:端口)
docker run -d --network host --name 容器名 镜像名

docker run -d --network none --name 容器名 镜像名 #只有lo网卡
```
#### 共用网卡
```bash
docker run -d --network container:另一个容器名 --name 容器名 /bin/bash 镜像名  
#共用的容器关闭，这个容器网卡也没有啦
```
#### 自定义网络
```bash
#启动两个网桥模式容器
docker run -d -p 8081:8080 --name tomcat81 tomcat
docker run -d -p 8082:8080 --name tomcat82 tomcat

#两个ip可以相互ping通，痛点：按域名ping不通
```

```bash
docker run -d -p 8081:8080 --network my_network --name tomcat81 tomcat
docker run -d -p 8082:8080 --network my_network --name tomcat82 tomcat
#ip、域名互ping都能通（维护好主机和ip的关系）
```
## 十、[容器编排](https://docs.docker.com/compose/compose-file/)
> 意义：集中快速管理多个容器

#### 1. [安装Compose](https://docs.docker.com/compose/install/)
```bash
curl -SL https://github.com/docker/compose/releases/download/v2.14.2/docker-compose-linux-x86_64 -o /usr/local/bin/docker-compose
```
#### 2. [常用命令](https://cloud.tencent.com/developer/article/1499032)
![](https://zerdocs.oss-cn-shanghai.aliyuncs.com/febasis/202302032205681.png)
#### 3. [安装 Portainer](https://cloud.tencent.com/developer/article/2047779)
