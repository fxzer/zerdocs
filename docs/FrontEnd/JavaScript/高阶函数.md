## 高阶函数之filter

### 定义

> - 通过提供函数实现的依次测试的所有元素，true 则表示通过，如果为 false 则失败。
> - 返回值是一个新数组，由通过测试为 true 的所有元素组成
> - 如果没有任何数组元素通过测试，则返回空数组。

::: tip

1. **原始数组不发生改变**
2. **不会对空数组进行检测**
3. **满足条件的留下，是对原数组的过滤。**

:::

### 语法

```js
array.filter(function(currentValue,index,arr), thisValue)
//currentValue  必须，遍历到的当前元素值
//index         可选，当前元素的索引值
//arr           可选，当前元素属于的数组对象
```

### 用法

##### 过滤小于 100

```javascript
const nums = [20,30,110,60,190,50]
let newNums =nums.filter(n =>{
  return n < 100
})
console.log(newNums)//[20,30,60,50]
```

##### 返回奇数元素

```js
var arr=[1,2,3,4,5,6];
let res = arr.filter(function(x){
    return x%2!==0;
})
console.log(res)//[1,3,5]
```

##### 数组去重

```js
var  arr= ['apple', 'strawberry', 'banana', 'pear', 'apple', 'orange', 'orange', 'strawberry'];

//去除重复元素依靠的是indexOf总是返回第一个元素的位置，
//后续的重复元素位置与indexOf返回的位置相等,表示是同一个元素
//后续的重复元素位置与indexOf返回的位置不相等，表示元素重复并且过滤。
var filterArr = arr.filter((value,index,arr) => arr.indexOf(value)===index;)
console.log(filterArr);//["apple", "strawberry", "banana", "pear", "orange"]

```

```js
const arr1 = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];
const arr2 = arr1.filter( (element, index, self) => {
    return self.indexOf( element ) === index;
});

console.log( arr2 );
// [1, 2, 3, 5, 4]
console.log( arr1 );
// [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4]
```



##### 找出素数

```js
//除了1和自身,不能被其他数整除的
var arr=[1,2,3,4,5,6,7,8,9,11,20,37];
const result = arr.filter(value => {
	if(value == 1) return false;
 	if(value == 2) return true; 
    for(var i = 2; i < Math.sqrt(value) + 1; i++){
      if(value % i == 0)  return false;
    }
     return true;
 });
```



##  高阶函数之map

### 定义



> 原数组中的每个元素依次调用一个指定方法后，
>
> 返回值组成的新数组



::: tip

1. **原始数组不发生改变**
2. **不会对空数组进行检测**
3. **对原数组的加工，返回加工后新数组**

:::

### 语法

```js
array.map(function(currentValue,index,arr), thisValue)
//currentValue  数组中正在处理的当前元素。
//index可选  数组中正在处理的当前元素的索引。
//array可选  map 方法被调用的数组。
//thisArg可选 执行 callback 函数时使用的this 值。
```



### 用法

##### 返回数组元素平方后的新数组

```js
function pow(x){  //定义一个平方函数
    return x*x;
}

var arr=[1,2,3,4,5,6,7,8,9];
var result = arr.map(pow);  //map()传入的是函数对象本身
console.log(result);       //结果：[1,4,9,16,25,36,49,64,81];
```



##### 用给定函数创建新字符串

```js
const mapString = (str, fn) =>
  str
    .split('')
    .map((c, i) => fn(c, i, str))
    .join('');
mapString('lorem ipsum', c => c.toUpperCase()); // 'LOREM IPSUM'
```



##### 把二维数组变字符串

```js
const arr = [[1, 2], [3, 4]];
const str = arr.map(row => row.join(',')).join(';');
console.log(str); // "1,2;3,4"

```



##### 数字序列转为数组，删除符号

```js
const digitize = n => [...`${Math.abs(n)}`].map(i => parseInt(i));
digitize(123); // [1, 2, 3]
digitize(-123); // [1, 2, 3]
```



##### 拿到所有图片的图片名称并以数组形式返回

```js
const getImages = (el, includeDuplicates = false) => {
  const images = [...el.getElementsByTagName('img')]
  const srcList = images.map(img =>
    img.getAttribute('src')
  );
  return includeDuplicates ? srcList : [...new Set(srcList)];
};

getImages(document, true); 
// ['image1.jpg', 'image2.png', 'image1.png', '...']
getImages(document, false);
// ['image1.jpg', 'image2.png', '...'] 名字去重
```



##### vue中循环注册组件

```js
Vue.component('ele',{
		render:function(createElement){
			return createElement('div',
			    Array.apply(null,{ length:5 }).map(() => createElement(Child))
			);
		}
	});
```

## 高阶函数之 reduce

### 定义

> **原始数组不发生改变**
>
> **对于空数组是不会执行回调函数的**



### 语法

```js
arr.reduce(callback , [initialValue])
//callback （执行数组中每个值的函数，包含四个参数）
//initialValue （作为第一次调用 callback 的第一个参数。）
//如果没有提供initialValue，从索引1的地方开始执行callback方法，跳过第一个索引。
//如果提供initialValue，从索引0开始
```

```js
//执行数组中每个值的callback 函数，包含四个参数
const sum = arr.reduce(function(previousValue, currentValue, index, array) {
   return previousValue + currentValue;
}，0)
```

::: tip

1、**previousValue** ：上一次调用回调返回的值，或者是提供的初始值（initialValue）

2、**currentValue** ：数组中当前被处理的元素

3、**index** ：当前元素在数组中的索引

4、**array** ：调用 reduce 函数 的数组

:::

### 用法

##### 数组求和

```js
const sum = (...arr) => [...arr].reduce((acc, val) => acc + val, 0);
sum(1, 2, 3, 4); // 10
sum(...[1, 2, 3, 4]); // 10
```



##### 数组去重

```js
let arr = [1,2,3,4,4,1]
let newArr = arr.reduce((pre,cur)=> pre.includes(cur) ? pre : [...pre,cur],[])
console.log(newArr);// [1, 2, 3, 4]
```



##### 计算两个或多个数字的平均值

```js
const average = (...nums) =>
  nums.reduce((acc, val) => acc + val, 0) / nums.length;
average(...[1, 2, 3]); // 2
average(1, 2, 3); // 2
```



##### 将多维数组转化为一维

```js
let arr = [[0, 1], [2, 3], [4,[5,6,7]]]
const convertArr = (arr) => arr.reduce((pre,cur) => Array.isArray(cur) ? [...pre,...convertArr(cur)] : [...pre,cur],[])
console.log(convertArr(arr)); //[0, 1, 2, 3, 4, 5, 6, 7]
```



##### 对象里的属性求和

```js
var result = [
    {
        subject: 'math',
        score: 10
    },
    {
        subject: 'chinese',
        score: 20
    },
    {
        subject: 'english',
        score: 30
    }
];

var sum = result.reduce((prev, cur) => cur.score + prev, 0);
console.log(sum) //60
```

##### 统计数组中每个元素出现的次数

```js
arr11 = [111, 22, 111, 234, 999, 999, 111]
let arr1 = arr11.reduce((pre, item) => {
    pre[item] = pre[item] ? pre[item] + 1 : 1
    return pre
}, {})
//{ '22': 1, '111': 3, '234': 1, '999': 2 }
```

```js
let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

let nameNum = names.reduce((pre,cur)=>{
  if(cur in pre){
    pre[cur]++
  }else{
    pre[cur] = 1 
  }
  return pre
},{})
console.log(nameNum); //{Alice: 2, Bob: 1, Tiff: 1, Bruce: 1}
```



## 高阶函数之 sort

### 定义

> `sort() `方法用原地算法对数组的元素进行排序，并返回数组，
>
> 该排序方法会在原数组上直接进行排序，并**不会生成一个排好序的新数组**。
>
> 排序算法现在是稳定的。默认排序顺序是根据字符串 Unicode 码点。



### 语法

```js
arr.sort(sortby)
//sort() 在没有参数时，返回的结果是按升序来排列的

//sortby	可选。规定排序顺序。必须是函数。
```



::: tip

**function(a, b)(return a- b)**

- 如果指明了参数：compare (a, b) ，（a, b 是两个要比较的元素，a 在 b 前面）那么数组会按照该函数的返回值排序
- 如果 compare (a, b) 返回值 < 0 ，a 会被排列到 b 之前，即参数 a, b 的顺序保存原样；
- 如果 compare (a, b) 返回值 = 0 ，a 和 b 的相对位置不变。（ECMAScript 标准并不保证这一行为，而且也不是所有浏览器都会遵守）
- 如果 compare (a, b) 返回值 > 0 ，b 会被排列到 a 之前。即交换参数 a, b 的顺序

:::

### 用法

```js
let sortby= function (a, b) {
    return a - b;
}
let koala=[10, 20, 1, 2].sort(sortby)

console.log(koala);
// [1 , 2 , 10 , 20]
```

```js
var arr = [10, 20, 1, 2];
    arr.sort(function (x, y) {
        if (x < y) {
            return -1;
        }
        if (x > y) {
            return 1;
        }
        return 0;
    });
console.log(arr); // [1, 2, 10, 20]
```



## 自定义高阶函数

#### 字符串数组每项长度、并转换为整数数组

### 语法

> - 创建了一个高阶函数 mapForEach ，它接受一个数组和一个回调函数 fn。
> - 它循环遍历传入的数组，并在每次迭代时在 newArray.push 方法调用回调函数 fn 。
> - 回调函数 fn 接收数组的当前元素并返回该元素的长度，该元素存储在 newArray 中。
> - for 循环完成后，newArray 被返回并赋值给 lenArray。

### 用法

```js
const strArray=['JavaScript','PHP','JAVA','C','Python'];
function mapForEach(arr,fn){
    const newArray = [];
    for(let i = 0; i < arr.length;i++){
        newArray.push(fn(arr[i]));
    }
    return newArray;
}
const lenArray = mapForEach(strArray,(str) =>  str.length);

console.log(lenArray);//[10,3,4,1,6]
```

