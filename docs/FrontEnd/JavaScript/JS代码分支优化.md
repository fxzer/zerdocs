# if else 多分支优化

## 简单分支
```js
//优化前
function speak(name){
  if(name==='老牛'){
    console.log('老牛哞哞叫')
  }else if(name==='老虎'){
    console.log('老牛嗷嗷叫')
  }else if(name==='老鸡'){
    console.log('老牛咯咯叫')
  }
}

//优化后
function speak(name){
   const map = {
    老牛:'老牛哞哞叫',
    老虎:'老虎嗷嗷叫',
    老鸡:'老鸡咯咯叫'
   }
  if(map[name]){
    console.log(map[name])
  }else {
    console.log('不知道怎么叫')
  }
}

speak('老牛')
```

## 条件单一,处理不同
```js
function speak(name){
   const map = {
    老牛:() =>  { ... },
    老虎:() =>  { ... },
    老鸡:() =>  { ... }
   }
  if(map[name]){
     map[name]()
  }else {
    console.log('xxx')
  }
}
```

## 条件复杂,处理也复杂

```js
function speak(name){
   const arr = [  //条件,处理映射
    [
      () =>  { ... },//条件1
      () =>  { ... } //处理函数1
    ],
    [
      () =>  { ... },//条件2
      () =>  { ... } //处理函数2
    ],
    [
      () =>  { ... },//条件3
      () =>  { ... } //处理函数4
    ],
   ]

  const target = arr.find(item => item[0]())
  if(target){
     target[1]()
  }else {
    console.log('xxx')
  }
}
```

