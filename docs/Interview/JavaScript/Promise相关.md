## 前端如何做到并发请求

1.	使用AJAX及其各种高级封装的异步技术，如jQuery的$.ajax()、axios等；
2.	使用Promise(ES6)异步编程，如使用axios.all()或者Promise.all()多个请求并发发出；
3.	使用Web Workers技术，将任务并发分发到多个Web Worker中执行；
4.	使用WebSocket技术，可单个持久链接上进行多次请求；
5.	使用Stream API技术，浏览器可以同时消费多个数据流，实现多个请求的并发；
6.	使用定时器setInterval()及setTimeout()，可定时发出多个需要并发请求；


### 方法一:封装队列
```js
 class taskQueue {
    constructor() {
      this.queue = [];
      this.result = [];
      this.error = [];
      this.max = 3;
      setTimeout(() => {
        this.run();
      }, 0);
    }
    addTask(task) {
      this.queue.push(task);
    }
    async run() {
      const length = this.queue.length;
      if (length === 0) return;
      const min = Math.min(length, this.max);
      for (let i = 0; i < min; i++) {
        this.max--; //开始占用任务空间
        const task = this.queue.shift();
        try {
          const res = await task();
          console.log("[ res ]-131", res);
          this.result.push(res);
        } catch (err) {
          this.error.push(err);
        } finally {
          this.max++; //释放占用空间
          this.run();
        }
      }
    }
  }

  //测试
  function createTask(delay) {
    return () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("✅" + delay);
          // delay % 3 ? resolve("✅" + delay) : reject("❌" + delay);
        }, delay);
      });
    };
  }
  const task = new taskQueue();
  const times = [100, 2600, 400, 300, 500, 600, 900, 800, 700, 1000];
  times.forEach((item) => {
    task.addTask(createTask(item));
  });
```

### 方法二:函数封装
```js
// 并发请求函数
const concurrencyRequest = (tasks, maxNum) => {
  return new Promise((resolve) => {
    if (tasks.length === 0) {
      resolve([]);
      return;
    }
    const results = [];
    let index = 0; // 下一个请求的下标
    let count = 0; // 当前请求完成的数量

    // 发送请求
    async function request() {
      if (index === tasks.length) return;
      const i = index; // 保存序号，使result和tasks相对应
      index++;
      try {
        const resp = await tasks[i]();
        console.log("[ resp ]-29", resp);
        results[i] = resp;
      } catch (err) {
        results[i] = err;
      } finally {
        count++;
        // 判断是否所有的请求都已完成
        if (count === tasks.length) {
          console.log("完成了");
          resolve(results);
        }
        request();
      }
    }
    const times = Math.min(maxNum, tasks.length);
    for (let i = 0; i < times; i++) {
      request();
    }
  });
};

//测试代码
function createTask(delay) {
    return () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("✅" + delay);
          // delay % 3 ? resolve("✅" + delay) : reject("❌" + delay);
        }, delay);
      });
    };
  }
  const times = [100, 2600, 400, 300, 500, 600, 900, 800, 700, 1000];
  const tasks = times.map((item) => createTask(item));
  console.log("[ tasks ]-141", tasks);
  concurrencyRequest(tasks, 3).then((res) => {
    console.log("[ res ]-143", res);
  });
```


## Web Worker

可以创建一个独立线程, 因为不会阻塞主线程运行,可以将比较耗费资源操作放在里面执行,比如耗时计算,可以通过 `postMessage` 进行线程间通信

```js
// 主线程
var worker = new Worker('worker.js')
worker.postMessage([10, 24])
worker.onmessage = function(e) {
    console.log(e.data)
}

// Worker 线程
onmessage = function (e) {
    if (e.data.length > 1) {
        postMessage(e.data[1] - e.data[0])
    }
}

// 主线程
worker.terminate()
```
在 Worker 线程中，self 和 this 都代表子线程的全局对象。对于监听 message 事件，以下的四种写法:

```js
// 写法 1
self.addEventListener('message', function (e) {
    // ...
})

// 写法 2
this.addEventListener('message', function (e) {
    // ...
})

// 写法 3
addEventListener('message', function (e) {
    // ...
})

// 写法 4
onmessage = function (e) {
    // ...
}
```
## Service Worker

服务器与浏览器之间的中间人，如果网站中注册了**Service Worker**那么它可以拦截当前网站所有的请求，进行判断（需要编写相应的判断程序），如果需要向服务器发起请求的就转给服务器，如果可以直接使用缓存的就直接返回缓存不再转给服务器,我们在**Service Worker** 中可以做拦截客户端的请求、向客户端发送消息、向服务器发起请求等先关操作，其中最重要且广泛的的作用就是离线资源缓存。

## 特性

1. 基于web worker（JavaScript主线程的独立线程，如果执行消耗大量资源的操作也不会堵塞主线程）
2. 在web worker的基础上增加了离线缓存的能力
3. 本质上充当Web应用程序（服务器）与浏览器之间的代理服务器
4. 创建有效的离线体验（将一些不常更新的内容缓存在浏览器，提高访问体验）
5. 由事件驱动的,具有生命周期
6. 可以访问cache和indexDB
7. 支持消息推送
8. 并且可以让开发者自己控制管理缓存的内容以及版本
9. 可以通过 postMessage 接口把数据传递给其他JS 文件
10. 更多无限可能

:::warning

不能访问 DOM、不能同步操作
:::