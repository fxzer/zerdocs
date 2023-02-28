
# Javascript实现异步
:::info
  Javascript是单线程执行语言
:::



### 方式一：回调函数

```js
let timer = setTimeout(()=>{
    console.log("3秒后打印的")
},3000)
console.log("比setTimeout回调函数先执行")
//本身会立刻返回，然后执行后面同步代码，回调函数则等预定时间才执行
```

缺点：容易形成回调地狱

```js
setTimeout(()=>{
    console.log("3秒后打印的")
    
   setTimeout(()=>{    
       console.log("6秒后打印的")
       
         setTimeout(
            ()=>{    
               console.log("9秒后打印的")
         },3000)
   },3000)
},3000)
```



### 方式二：Promise

声名Promise

> new Promise(function(resolve, reject){ })

```js
new Promise(function(resolve, reject) { 
    resolve('success')  // 成功执行
}).then(result => {
    alert(result)  //走then
}).finally(()=>{
	//无论成功失败，都会执行的回调
    //做一些清理工作，如关闭加载动画
})

new Promise(function(resolve, reject) { 
    reject('fail')  // 失败执行
}).then(result => {
    alert(result)
}).catch(error => {
     alert(error)  //走catch
})
```

如果想终止在某个执行链的位置，可以用**Promise.reject(new Error())**

```js
new Promise(function(resolve, reject) {
    resolve(1)
}).then(result => {
    return result + 1
}).then(result => {
    return result + 1
}).then(result => {
    
  return  Promise.reject(new Error(result + '失败'))
   // return result + 1
}).then(result => {
    return result + 1
}).catch(error => {	
    alert(error)
})
```

### 语法糖：async /await

> **await** 表示强制等待的意思，**await**关键字的后面要跟一个promise对象，它总是等到该promise对象resolve成功之后执行，并且会返回resolve的结果

> async标记该函数就是一个异步函数，不会阻塞其他执行逻辑的执行，被async标记的函数返回也是promise对象

> （**async 和 await必须成对出现，不能用在普通函数上**）

```js
async fn1() {
 const result = await new Promise(function(resolve){  
    setTimeout(function(){
      resolve('fn1执行结果')
    },5000)
 })
 console.log(result)
},
    
fn2(){
  this.fn1() //async的函数并不会阻塞后续同步代码执行
  console.log('fn2执行') //先执行
}
```

#### 实现fn1先执行

```js
 async fn2(){
     await this.fn1()
     console.log('fn2执行')
   }
```

#### 捕获异常

```js
   async  getCatch () {
      try { // 通过 try/catch捕获异常
        await new Promise(function (resolve, reject) {
          reject(new Error('失败'))
        })
         console.log('log1')
      } catch (error) {
         console.log('log2')
      }
   }
```

#### 使用陷阱

> 1.会打破异步操作并行

```js
async  fn1(){
    const a = await fetch("http://.../post/1")
    const b = await fetch("http://.../post/2")
    //a任务需要等到b任务执行完后才执行
}
```

**高效做法**

```js
async  fn1(){
    const promistA =  fetch("http://.../post/1")
    const promistB =  fetch("http://.../post/2")
    //利用 Promise.all组合
    const [a,b] = await Promise.all([promiseA,pormiseB])
    
}

```



> 2.循环中执行异步操作，不能直接使用forEach,map等方法

```js
async  fn(){
    [1,2,3].forEach(await (item)=>{
        await someAsyncOpt()
    })//会立刻返回，并不会等待所有异步操作执行完
    console.log('done')
}
```

**解决方法**

```js
async  fn(){
   for(let i of  [1,2,3]){
		await someAsyncOpt()
   } //等待所有异步操作执行完毕在执行后面代码
    console.log('done')
}
```

**高效做法**

```js
async  fn(){
    const promises = [
        someAsyncOpt(),
        someAsyncOpt(),
        someAsyncOpt(),
    ]
   for await (let res of promises ){
		//...
   } //等待所有异步操作执行完毕在执行后面代码
    console.log('done')
}
```

