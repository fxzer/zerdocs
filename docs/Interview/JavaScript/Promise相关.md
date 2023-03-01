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

## 介绍 service worker