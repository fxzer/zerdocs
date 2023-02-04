

## 一、声名Promise并绑定this

```js
class Promise {
    // 1.定义三个状态
    static PENDING = 'pending'
    static FUFILLED = 'fulfilled'
    static REJECTED = 'rejected'
        // 2.构造函数
    constructor(executor) {
            //初始态
            this.status = Promise.PENDING
            this.value = null
                // 绑定this
            executor(this.resolve.bind(this), this.reject.bind(this))
        }
        // 3.成功状态
    resolve(value) {
            this.status = Promise.FUFILLED
            this.value = value
        }
        // 4.失败状态
    reject(reason) {
        this.status = Promise.REJECTED
        this.reason = reason
    }
}
```

问题一：能多次修改状态

```html
<!DOCTYPE html>

<head>
    <title>My-Promise</title>
    <script src="./Promise.js"></script>
</head>

<body>
    <script>
        var p1 = new Promise((resolve, reject) => {
            resolve('大功告成！')
            reject('一败涂地！')
        })
        console.log(p1);
    </script>
</body>

</html>
```



<img src="https://gitee.com/GiteeFXJ/picstore/raw/master/codepic/20210708162731.png"/>




## 二、状态保护与执行者异步捕获

> 改变状态前先判断，让初始状态只能修改一次

```js
class Promise {
    // 1.定义三个状态
    static PENDING = 'pending'
    static FUFILLED = 'fulfilled'
    static REJECTED = 'rejected'
        // 2.构造函数
    constructor(executor) {
            //初始态
            this.status = Promise.PENDING
            this.value = null
                // 绑定this
            try {
                executor(this.resolve.bind(this), this.reject.bind(this))
            } catch {

            }

        }
        // 3.成功状态
    resolve(value) {
            //判断是不是初始态
            if (this.status == Promise.PENDING) {
                this.status = Promise.FUFILLED
                this.value = value
            }

        }
        // 4.失败状态
    reject(reason) {
        //判断是不是初始态
        if (this.status == Promise.PENDING) {
            this.status = Promise.REJECTED
            this.reason = reason
        }
    }
}
```


## 三、then方法构建

```js
 then(onFulfilled, onRejected) {
        if (typeof onFulfilled !== 'function') {
            onFulfilled = () => {}
        }
        if (typeof onRejected !== 'function') {
            onRejected = () => {}
        }
        if (this.status == Promise.FUFILLED) {
            onFulfilled(this.value)
        }
        if (this.status == Promise.REJECTED) {
            onRejected(this.value)
        }
    }
```



## 四、实现then异步

```js
if (this.status == Promise.FUFILLED) {
    setTimeout(() => {
        try {
            onFulfilled(this.value)
        } catch (error) {
            onRejected(error)
        }
    });
}
if (this.status == Promise.REJECTED) {
    setTimeout(() => {
        try {
            onRejected(this.value)
        } catch (error) {
            onRejected(error)
        }
    });
        }
```



## 五、解决同步代码需要等待执行问题

```js
var p1 = new Promise((resolve, reject) => {
        // resolve('大功告成！')S
        setTimeout(() => {
            reject('一败涂地！')
            console.log('反败为胜！');
        }, 100)

    })
    p1.then((value) => {
        console.log(value);
    }, (reason) => {
        console.log(reason);
    })
    console.log('同步代码');

```

> 解决前输出：
> 同步代码
> 一败涂地！
> 反败为胜！

````js
    resolve(value) {
        if (this.status == Promise.PENDING) {
            this.status = Promise.FULFILLED;
            this.value = value;
            setTimeout(() => {
                this.callbacks.map(callback => {
                    callback.onFulfilled(value);
                });
            });
        }
    }
    reject(value) {
        if (this.status == Promise.PENDING) {
            this.status = Promise.REJECTED;
            this.value = value;
            setTimeout(() => {
                this.callbacks.map(callback => {
                    callback.onRejected(value);
                });
            });
        }
    }
````

> 解决后输出：
> 同步代码
> 反败为胜！
> 一败涂地！

## 六、then的链式操作

>  **注意点：**
>
> 1. then返回的时Promise，Promise需要改变
> 2. 之前的Promise状态并不会影响之后的Promise状态

````js
let p = new Promise((resolve, reject) => {
        resolve("大功告成！");
        // reject("一败涂地！");
        console.log("状态绑定成功！");
    })
    p.then(
            value => {
                console.log(value);
                return "马到功成！";
            },
            reason => {
                console.log(reason);
                return '优胜劣败！'
            }
        )
        .then(
            value => {
                console.log(value);
            },
            reason => {
                console.log(reason);
            }
        );
    console.log("同步代码");
````

```js
then(onFulfilled, onRejected) {
    if (typeof onFulfilled != "function") {
        //then的穿透处理
        onFulfilled = value => value;
    }
    if (typeof onRejected != "function") {
         //then的穿透处理
        onRejected = value => value;
    }
    return new Promise((resolve, reject) => {
        if (this.status == Promise.PENDING) {
            this.callbacks.push({
                onFulfilled: value => {
                    try {
                        let result = onFulfilled(value);
                        resolve(result);
                    } catch (error) {
                        reject(error);
                    }
                },
                onRejected: value => {
                    try {
                        let result = onRejected(value);
                        resolve(result);
                    } catch (error) { 
                        reject(error);
                    }
                }
            });
        }
        if (this.status == Promise.FULFILLED) {
            setTimeout(() => {
                try {
                    let result = onFulfilled(this.value);
                    resolve(result);
                } catch (error) { //解决异常
                    reject(error);
                }
            });
        }
        if (this.status == Promise.REJECTED) {
            setTimeout(() => {
                try {
                    let result = onRejected(this.value);
                    resolve(result);
                } catch (error) { //解决异常
                    reject(error);
                }
            });
        }
    });
}
```

**执行结果：**

<img src="https://gitee.com/GiteeFXJ/picstore/raw/master/codepic/20210708174000.png"/>





## 七、返回值的判断与处理

> 判断并分别处理返回值为Promise、普通值的情况

```js
if (this.status == Promise.FULFILLED) {
    setTimeout(() => {
        try {
            let result = onFulfilled(this.value);
            // 判断并处理返回值 
            if (result instanceof Promise) {
                result.then(resolve, reject);
            } else {
                resolve(result);
            }
        } catch (error) {
            reject(error);
        }
    });
}
if (this.status == Promise.REJECTED) {
    setTimeout(() => {
        try {
            let result = onRejected(this.value);
            // 判断并处理返回值 
            if (result instanceof Promise) {
                result.then(resolve, reject);
            } else {
                resolve(result);
            }
        } catch (error) {
            reject(error);
        }
    });
}
```



## 八、代码优化及复用

```js
then(onFulfilled, onRejected) {
    if (typeof onFulfilled != "function") {
        onFulfilled = value => value;
    }
    if (typeof onRejected != "function") {
        onRejected = value => value;
    }
    return new Promise((resolve, reject) => {
        if (this.status == Promise.PENDING) {
            this.callbacks.push({
                onFulfilled: value => {
                    // try {
                    //     let result = onFulfilled(value);
                    //     resolve(result);
                    // } catch (error) {
                    //     reject(error);
                    // }
                    this.parse(onFulfilled(this.value), resolve, reject);
                },
                onRejected: value => {
                    // try {
                    //     let result = onRejected(value);
                    //     resolve(result);
                    // } catch (error) {
                    //     //解决异常
                    //     reject(error);
                    // }
                    this.parse(onRejected(this.value), resolve, reject);
                }
            });
        }
        if (this.status == Promise.FULFILLED) {
            setTimeout(() => {
                // try {
                //     let result = onFulfilled(this.value);
                //     // resolve(result)
                //     if (result instanceof Promise) {
                //         result.then(resolve, reject);
                //     } else {
                //         resolve(result);
                //     }
                // } catch (error) {
                //     reject(error);
                // }
                this.parse(onFulfilled(this.value), resolve, reject);
            });
        }
        if (this.status == Promise.REJECTED) {
            setTimeout(() => {
                // try {
                //     let result = onRejected(this.value);
                //     if (result instanceof Promise) {
                //         result.then(resolve, reject);
                //     } else {
                //         resolve(result);
                //     }
                // } catch (error) {
                //     reject(error);
                // }
                this.parse(onRejected(this.value), resolve, reject);
            });
        }
    });
}
//抽取方法
parse(result, resolve, reject) {
    try {
        if (result instanceof Promise) {
            result.then(resolve, reject);
        } else {
            resolve(result);
        }
    } catch (error) {
        reject(error);
    }
}
```



## 九、返回类型约束

> 当前Promise不能返回自己
>
>  ````js
> let p = promise.then(value => return p) //原生的会报错:TypeError
>  ````

```js
then(onFulfilled, onRejected) {
    if (typeof onFulfilled != "function") {
        onFulfilled = value => value;
    }
    if (typeof onRejected != "function") {
        onRejected = value => value;
    }
    let promise = new Promise((resolve, reject) => {
        if (this.status == Promise.PENDING) {
            this.callbacks.push({
                onFulfilled: value => {
                    this.parse(promise, onFulfilled(this.value), resolve, reject);
                },
                onRejected: value => {
                    this.parse(promise, onRejected(this.value), resolve, reject);
                }
            });
        }
        if (this.status == Promise.FULFILLED) {
            setTimeout(() => {
                this.parse(promise, onFulfilled(this.value), resolve, reject);
            });
        }
        if (this.status == Promise.REJECTED) {
            setTimeout(() => {
                this.parse(promise, onRejected(this.value), resolve, reject);
            });
        }
    });
    return promise;
}
parse(promise, result, resolve, reject) {
    if (promise == result) {
        throw new TypeError("Chaining cycle detected for promise");
    }
    try {
        if (result instanceof Promise) {
            result.then(resolve, reject);
        } else {
            resolve(result);
        }
    } catch (error) {
        reject(error);
    }
}
```



## 十、实现resolve和reject

```js
 static resolve(value) {
        return new Promise((resolve, reject) => {
            if (value instanceof Promise) {
                value.then(resolve, reject);
            } else {
                resolve(value);
            }
        });
    }
    static reject(reason) {
        return new Promise((_, reject) => {
            reject(reason);
        });
    }
```



## 十一、Promise.all()实现

```js
static all(promises) {
    let resolves = [];
    return new Promise((resolve, reject) => {
        promises.forEach((promise, index) => {
            promise.then(
                value => {
                    resolves.push(value);
                    //判断数组长度，来看是否全部成功
                    if (resolves.length == promises.length) {
                        resolve(resolves);
                    }
                },
                reason => {
                    reject(reason);
                }
            );
        });
    });
}
```

**测试**

```js
let p1 = new Promise((resolve, reject) => {
        resolve("成功");
    });
let p2 = new Promise((resolve, reject) => {
    reject("失败");
});
//所有成功才会执行成功的回调函数
let promises = Promise.all([p1, p2]).then(
    promises => {
        console.log('resolve:', promises);
    },
    reason => {
        console.log('reject:', reason);
    }
);
```



## 十二、实现Promise.race()

````js
const p = Promise.race([p1, p2, p3]);
````

>只要`p1`、`p2`、`p3`之中有一个实例率先改变状态，`p`的状态就跟着改变；率先改变的 Promise 实例的返回值，就传递给`p`的回调函数。 **(谁快用谁)**

```js
 static race(promises) {
        return new Promise((resolve, reject) => {
            promises.map(promise => {
                promise.then(value => {
                    resolve(value);
                });
            });
        });
    }
```



**测试**

```js
 let p1 = new Promise(resolve => {
        setInterval(() => {
            resolve("成功1");
        }, 1000);
    });
let p2 = new Promise(resolve => {
    setInterval(() => {
        resolve("成功2");
    }, 500);
});
let promises = Promise.race([p1, p2]).then(
    promises => {
        console.log(promises);
    },
    reason => {
        console.log(reason);
    }
);
```

## 十三、完整代码

```js
class Promise {
    // 1.定义三个状态
    static PENDING = 'pending'
    static FUFILLED = 'fulfilled'
    static REJECTED = 'rejected'

    // 2.构造函数
    constructor(executor) {
        //初始态
        this.status = Promise.PENDING
        this.value = null
        this.callbacks = []
        // 绑定this    
        try {
            executor(this.resolve.bind(this), this.reject.bind(this))
        } catch (error) {

        }

    }
    //3.resolve改变状态并执行回调函数
    resolve(value) {
        if (this.status == Promise.PENDING) {
            this.status = Promise.FULFILLED;
            this.value = value;
            setTimeout(() => {
                //遍历回调函数数组，传值并执行onFulfilled函数
                this.callbacks.map(callback => {
                    callback.onFulfilled(value);
                });
            });
        }
    }
  //3. reject改变状态并执行回调函数
    reject(value) {
        if (this.status == Promise.PENDING) {
            this.status = Promise.REJECTED;
            this.value = value;
             setTimeout(() => {
                 //遍历回调函数数组，传值并执行onRejected函数
            this.callbacks.map(callback => {
                callback.onRejected(value);
          	  });
            });
        }
    }


//then方法
    then(onFulfilled, onRejected) {
        //判断参数是否为函数
        if (typeof onFulfilled != "function") {
            onFulfilled = value => value;
        }
        if (typeof onRejected != "function") {
            onRejected = value => value;
        }
        let promise = new Promise((resolve, reject) => {
            //初始态把回调函数存入数组
            if (this.status == Promise.PENDING) {
                this.callbacks.push({
                    onFulfilled: value => {
                        this.parse(promise, onFulfilled(this.value), resolve, reject);
                    },
                    onRejected: value => {
                        this.parse(promise, onRejected(this.value), resolve, reject);
                    }
                });
            }
            //成功
            if (this.status == Promise.FULFILLED) {
                setTimeout(() => {
                    this.parse(promise, onFulfilled(this.value), resolve, reject);
                });
            }
            //失败
            if (this.status == Promise.REJECTED) {
                setTimeout(() => {
                    this.parse(promise, onRejected(this.value), resolve, reject);
                });
            }
        });
        //解决链式调用
        return promise;
    }
    parse(promise, result, resolve, reject) {
        //不能返回自身promise
        if (promise == result) {
            throw new TypeError("Chaining cycle detected for promise");
        }
        try {
            if (result instanceof Promise) {
                result.then(resolve, reject);
            } else {
                resolve(result);
            }
        } catch (error) {
            reject(error);
        }
    }
    static resolve(value) {
        return new Promise((resolve, reject) => {
            if (value instanceof Promise) {
                value.then(resolve, reject);
            } else {
                resolve(value);
            }
        });
    }
    static reject(reason) {
        return new Promise((_, reject) => {
            reject(reason);
        });
    }

    static all(promises) {
        let resolves = [];
        return new Promise((resolve, reject) => {
            //遍历每一个promise并执行
            promises.forEach((promise, index) => {
                promise.then(
                    value => {
                        resolves.push(value);//保存
                        if (resolves.length == promises.length) {
                            resolve(resolves);
                        }
                    },
                    reason => {
                        reject(reason);
                    }
                );
            });
        });
    }
    static race(promises) {
        return new Promise((resolve, reject) => {
            promises.map(promise => {
                promise.then(value => {
                    resolve(value);
                });
            });
        });
    }
}
```

