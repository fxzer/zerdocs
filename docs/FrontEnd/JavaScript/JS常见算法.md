

## 括号匹配

```js
let str1 = '{[]}'	//true
let str2 = '{[[]}'	//false
let str3 = '{[]}['	//false
let str4 = '{[()]}'	//true
```
**解决方案：**

```js {11-19}
//方案一：
const isValid = function(str) {
  	if (str.length == 0) return false
  	let arr = []
    let map = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    for (let i = 0; i < str.length; i++) {
        if (str[i] == '(' || str[i] == '{' || str[i] == '[') {
            arr.push(str[i])
        } else {
            //栈顶出栈的左括号 !== map取出右括号匹配的括号类型
            if (map[str[i]] != arr.pop()) {
                return false
            }
        }
    }
    // arr数组已全部匹配，出完栈
    if (arr.length !== 0) {
        return false
    }
    return true
}

//方案二：
function isMatched(str) {
  let stack = [];
  let top = -1;

  for (let i = 0; i < str.length; i++) {
    let ch = str.charAt(i);

    if (ch === '{' || ch === '[' || ch === '(') {
      stack.push(ch);
      top++;
    } else if (ch === '}' && stack[top] === '{') {
      stack.pop();
      top--;
    } else if (ch === ']' && stack[top] === '[') {
      stack.pop();
      top--;
    } else if (ch === ')' && stack[top] === '(') {
      stack.pop();
      top--;
    } else {
      return false;
    }
  }

  return stack.length === 0;
}
```
解析：

- 利用栈来实现括号匹配，用 `top` 标识栈顶元素的下标，初始值为 `-1`。
- 遍历字符串中的每个字符 `ch`。
- 如果是左括号 `{`、`[` 或 `(`，则入栈。
- 如果是右括号 `}`、`]` 或 `)`，则判断栈顶元素是否匹配，如果匹配则出栈，否则不匹配。
- 如果字符不是括号，则返回 `false`。
- 最后，如果栈为空说明所有括号都匹配，返回 `true`，否则不匹配返回 `false`。



## 简单递归

### 计算阶乘

```js
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
```

2. 计算斐波那契数列（Fibonacci）

```js
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
```

### 扁平化数组

```js
//ES6的flat方法实现：
function flatten(array) {
  return array.flat(Infinity)
}
//仅限二维数组
function flat(arr){
  return Array.prototype.concat.apply([],arr)
}
let array1 = [2,3,4,[4,6,5,8]]
flat(array1)	[2, 3, 4, 4, 6, 5, 8]
 
//多维数组
function flatplus(arr){
  while(arr.some(item => item instanceof Array)){
    arr = Array.prototype.concat.apply([],arr)
  }
  return arr
}
let arr = [2,3,4,[5,[6,[7]]]]
flatplus(arr)	//[2, 3, 4, 5, 6, 7]

//可控制扁平化深度：Array.prototype.concat.apply
function flatplus(arr,depth){
  let deep = 0	
  let flag = arr.some(item => item instanceof Array) && deep < depth
  while(flag){
    arr = Array.prototype.concat.apply([],arr)
    ++deep
  }
  return arr
}
//递归+concat
function flatten(arr) {
  var result = [];
 for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}
```

### 反转字符串

```js
//解法一：使用数组的reverse()方法
function reverseString(str) {
  return str.split('').reverse().join('');
}

//解法二：使用for循环遍历字符串
function reverseString(str) {
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

//解法三：使用递归函数
function reverseString(str) {
  if (str === "")	return "";
  return reverseString(str.slice(1)) + str[0];
}
```

### 求最大公约数

```js
function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}
```



### 斐波那契数列

```js
//递归实现
function fibonacci(n){
  if(n<=1) return n;
  return fibonacci(n-1) + fibonacci(n-2);
}

//动态规划实现
function fibonacci(n){
  let f = [0,1];
  for(let i=2;i<=n;i++){
    f[i] = f[i-1] + f[i-2];
  }
  return f[n];
}

//测试
for(let i=0;i<=10;i++){
  console.log(`fibonacci(${i}): ${fibonacci(i)}`);
  //输出：0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
}
```



## 排序算法
### 冒泡排序
```js
function bubbleSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
      for (let j = 0; j < len - 1 - i; j++) {
          if (arr[j] > arr[j+1]) {
            let temp = arr[j+1];
            arr[j+1] = arr[j];
            arr[j] = temp;
            /*
            不使用额外变量交换
            方法一：
            [arr[j+1],arr[j]] = [arr[j],arr[j+1]]

            方法二：
            a = a + b;
            b = a - b;
            a = a - b;

            方法三：
            a = a ^ b;
            b = a ^ b;
            a = a ^ b;
            */
          }
      }
  }
  return arr;
}

```
### 选择排序

[**排序动画图解**   ](https://visualgo.net/en)

**随机生成测试数组**

```js {3}
var testArr = []
for (var i = 0; i < 10000; i++) {
     testArr.push(Math.floor(Math.random() * 100000))
}
```



```js {9-13}
arr = [3,7,6,9,4,5,2,8]
const selectSort = (arr) => {
if (!Array.isArray(arr)) {
    throw new Error(arr + "is not Array")
}
for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    //找到arr[i]后的最小值得索引
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
            minIndex = j
        }
    }
    //交换
    let tem = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = tem
}
return arr
}
```

### 快速排序

```js {6,9-13}
function quickSort(arr) {
    if (arr.length <= 1) return arr;
 
    const pivotIndex = Math.floor(arr.length / 2);
	//选中心轴索引，并选取中心轴的值
    const pivot = arr.splice(pivotIndex, 1)[0];　　
    const left = [];　　
    const right = [];　
    for (let i = 0; i < arr.length; i++) {　　　　
        //与中心轴比较，小的放在左数组，大的放在右数组　
     	arr[i] <= pivot ? left.push(arr[i]) : right.push(arr[i])
    }　　
    return quickSort(left).concat([pivot], quickSort(right));
};
```

### 插入排序

以第一个数为有序数组，让后面每一个数比较找位置并插入有序数组里。

 若后面待插入的数大于有序数组的最后一个数，就放在原位；

若第小于有序数组的最后一个数，则进入while循环，在有序数组中找位置：

`arr[preIndex]`后移索引变为`preIndex+1`，`current`插入到`arr[preIndex]`前一位，也就是`arr[preindex-1+1]`

```js {8-12}
function insertSort(arr) {
    let len = arr.length;
    let preIndex, current;
    for (let i = 1; i < len; i++) {
        preIndex = i - 1;
        current = arr[i];
      //  while (preIndex >= 0 && current < arr[preIndex]) {//从大到小
        while (preIndex >= 0 && current < arr[preIndex]) {//从小到大
            arr[preIndex + 1] = arr[preIndex];//后移
            preIndex--;
        }//退出while循环时，说明插入位置找到
        arr[preIndex + 1] = current;
    }
    return arr;
}
```
### 希尔排序

```js {10-14,6}
function shellSort(array) {
    let gap = Math.floor(array.length / 2);

    while (1 <= gap) {
        // 把距离为 gap 的元素编为一个组，扫描所有组
        for (let i = gap; i < array.length; i++) {
            let j = 0;
            let temp = array[i];

            // 对距离为 gap 的元素组进行排序
            for (j = i - gap; j >= 0 && temp < array[j]; j -= gap) {
                array[j + gap] = array[j];
            }
            array[j + gap] = temp;
        }
        gap = Math.floor(gap / 2); // 减小增量
    }
    return array;
}
```

## 求两个有序数组的中位数
```js
//出这两个有序数组的中位数,时间复杂度为 O(m+n)
function findMedianSortedArrays(nums1, nums2) {
    const mergeArr = merge(nums1, nums2); // 合并两个有序数组
    const len = mergeArr.length;
    // 判断合并后的数组长度，分奇偶情况求中位数
    if(len % 2 === 0) {
        return (mergeArr[len/2-1] + mergeArr[len/2])/2;
    } else {
        return mergeArr[Math.floor(len/2)];
    }
}

// 归并排序合并两个有序数组
function merge(nums1, nums2) {
    const result = [];
    let i = 0, j = 0;
    while(i < nums1.length && j < nums2.length) {
        if(nums1[i] < nums2[j]) {
            result.push(nums1[i]);
            i++;
        } else {
            result.push(nums2[j]);
            j++;
        }
    }
    while(i < nums1.length) {
        result.push(nums1[i]);
        i++;
    }
    while(j < nums2.length) {
        result.push(nums2[j]);
        j++;
    }
    return result;
}
```
```js
function findMedianSortedArrays(nums1, nums2) {
  const merge = (arr1, arr2) => {
    const merged = [];
    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) merged.push(arr1[i++]);
      else merged.push(arr2[j++]);
    }

    return [...merged, ...arr1.slice(i), ...arr2.slice(j)];
  }

  const merged = merge(nums1, nums2);
  const mid = Math.floor(merged.length / 2);

  return merged.length % 2 === 0 ? (merged[mid - 1] + merged[mid]) / 2 : merged[mid];
}

```



## 实现EventEmitter

```js
//可以添加事件侦听器，触发事件，并处理异步事件
class EventEmitter {
  constructor() {
    this.registry = {};
  }

  on(eventName, listener) {
    if (!this.registry[eventName]) {
      this.registry[eventName] = [];
    }
    this.registry[eventName].push(listener);
  }

  emit(eventName, ...args) {
    if (this.registry[eventName]) {
      this.registry[eventName].forEach((listener) => {
        setTimeout(() => {
          listener(...args);
        }, 0);
      });
    }
  }
}
```

:::details 测试
```js
const eventEmitter = new EventEmitter();

eventEmitter.on('eventA', () => { console.log('eventA triggered'); });
eventEmitter.on('eventB', () => { console.log('eventB triggered'); });

eventEmitter.emit('eventA');
eventEmitter.emit('eventB');
```
:::



## [生成随机十六进制颜色](https://css-tricks.com/snippets/javascript/random-hex-color/)

方案一：

```js
function randomHexColor() {
  var red = Math.floor(Math.random() * 256).toString(16);
  var green = Math.floor(Math.random() * 256).toString(16);
  var blue = Math.floor(Math.random() * 256).toString(16);
  return "#" + red + green + blue;
}
```

方案二：

```js
function randomHexColor() {
  var color = Math.floor(Math.random() * 16777215).toString(16);
  return `#${color}`;
}
```

方案三：

```js
function randomHexColor() {
  var hexColor = Array.from({length: 3}, () => Math.floor(Math.random() * 256).toString(16));
  return "#" + hexColor.join("");
}
```

方案四：

```js
function randomHexColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
     color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
```

方案五：

```js
function randomHexColor() {
  let color = Math.floor(Math.random() * 0xFFFFFF).toString(16);
  return "#" + ("000000" + color).slice(-6);
}
```

方案六：

```js
let color = '#' + parseInt(Math.random() * 0x1000000).toString(16).padStart(6, '0')
```

方案七：

```js
function randomColor() {
    const r = (Math.floor(Math.random() * 255)).toString(16);
    const g = (Math.floor(Math.random() * 255)).toString(16);
    const b = (Math.floor(Math.random() * 255)).toString(16);
    const a = (Math.random()).toString(16).slice(2, 4);
    return `#` + r + g + b + a;
  }
```

## 返回给定起止字符串月份中间所有月份

```js
function getMonths(start, end) {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const months = [];

  while (startDate <= endDate) {
    const year = startDate.getFullYear();
    const month = startDate.getMonth() + 1;
    const monthStr = `${year}-${month.toString().padStart(2, '0')}`;

  	months.push(monthStr)
    startDate.setMonth(month);
  }
  return months
}
```



## 实现Promise的all方法

```js
function promiseAll(promiseArr) {
  return new Promise((resolve, reject) => {
     if (!Array.isArray(promiseArr)) {
      return reject(new TypeError('arguments should be an array'));
    }
    const resArr = [];
    // let count = 0;
    // for (let i = 0; i < promiseArr.length; i++) {
    //   promiseArr[i]
    //     .then((res) => {
    //       count++;
    //       resArr[i] = res;
    //       if (count === promiseArr.length) {
    //         resolve(resArr);
    //       }
    //     })
    //     .catch((err) => {
    //       reject(err);
    //     });
    // }
    promiseArr.forEach((p,i) =>{
      if(p instanceof Promise){
          p.then(res => {
          resArr[i] = res;
          if(resArr.length == i +1) resolve(resArr)
        }).catch(err => reject(err))
      }else{
        resArr[resArr.length] = p;
      }
    })
     
  });
}

// 使用示例
let p1 = Promise.resolve(1);
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(2)
    }, 2000);
});
let p3 = Promise.resolve("error");

let p = promiseAll([p1, p2, p3])
  .then((res) => {
    resolve(res); // [1, 2, "error"]
  })
  .catch((err) => {
    reject(err); // error
  });
  p.then(res => console.log(res)).catch(err => console.log(err))
```

## LRU缓存算法
```js
//LRU缓存算法: 缓存固定大小，当缓存超出容量时，删除最久未被使用的元素
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity; // 缓存最大容量
    this.cache = new Map(); // 使用Map来存储key-value
  }
  //获取缓存中对应key的值，如果不存在则返回-1
  get(key) {
    const cache = this.cache;
    if (!cache.has(key)) {
      return -1;
    }
    const value = cache.get(key);
    // 将访问的元素删除并重新添加到最前面
    cache.delete(key);
    cache.set(key, value);
    return value;
  }

  //添加一个元素到缓存中，并在超出容量时删除最久未被使用的元素
  put(key, value) {
    const cache = this.cache;
    // 如果key已经存在，则先删除这个节点
    if (cache.has(key)) {
      cache.delete(key);
    } else if (cache.size >= this.capacity) {
      // 如果缓存超出容量，则删除最久未被使用的元素，即链表尾部元素
      const keys = cache.keys();
      const oldestKey = keys.next().value; // 链表头部是最久未使用的元素
      cache.delete(oldestKey);
    }
    // 将新节点添加到链表头部
    cache.set(key, value);
  }
}
```

使用示例：

```js
const cache = new LRUCache(2);

console.log(cache.put(1, 1)); // 缓存是 {1=1}
console.log(cache.put(2, 2)); // 缓存是 {1=1, 2=2}
console.log(cache.get(1)); // 返回 1
console.log(cache.put(3, 3)); // 删除 key 2，缓存是 {1=1, 3=3}
console.log(cache.get(2)); // 返回 -1
console.log(cache.put(4, 4)); // 删除 key 1，缓存是 {3=3, 4=4}
console.log(cache.get(1)); // 返回 -1
console.log(cache.get(3)); // 返回 3
console.log(cache.get(4)); // 返回 4
```
## 不使用乘法符号乘法函数
```js
//递归
function multiply(x, y) {
  if (y === 0) {
    return 0;
  }
  if (y > 0) {
    return x + multiply(x, y - 1);
  }
  if (y < 0) {
    return -multiply(x, -y);
  }
}
//for循环
function multiply(a, b) {
  let result = 0;
  for(let i = 0; i < Math.abs(b); i++) {
    result += Math.abs(a);
  }
  if(a < 0 && b > 0 || a > 0 && b < 0) {
    result = -result;
  }
  return result;
}

console.log(multiply(5, 3)); // 15
console.log(multiply(-5, 3)); // -15
console.log(multiply(5, -3)); // -15
console.log(multiply(-5, -3)); // 15
```


## 链表反转

```js
function reverseLinkedList(head) {
  let prev = null;
  let current = head;
  while (current !== null) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}

//测试
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

let n1 = new Node(1);
let n2 = new Node(2);
let n3 = new Node(3);
let n4 = new Node(4);
let n5 = new Node(5);

n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;

let head = n1;
console.log("Original LinkedList: ");
printLinkedList(head);

head = reverseLinkedList(head);
console.log("\nReversed LinkedList: ");
printLinkedList(head);

function printLinkedList(head) {
  let current = head;
  while (current !== null) {
    process.stdout.write(current.value + " ");
    current = current.next;
  }
}
```

## 二叉树的遍历

**二叉树三种遍历方式**：

- 前序遍历：先访问节点，然后再访问左子树和右子树。
- 中序遍历：先访问左子树，然后访问节点，最后访问右子树。
- 后序遍历：先访问左子树，然后访问右子树，最后访问节点。

```javascript
// 定义二叉树节点类
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// 前序遍历
function preOrderTraversal(root, res = []) {
  if (!root) return res;
  res.push(root.val);
  preOrderTraversal(root.left, res);
  preOrderTraversal(root.right, res);
  return res;
}

// 中序遍历
function inOrderTraversal(root, res = []) {
  if (!root) return res;
  inOrderTraversal(root.left, res);
  res.push(root.val);
  inOrderTraversal(root.right, res);
  return res;
}

// 后序遍历
function postOrderTraversal(root, res = []) {
  if (!root) return res;
  postOrderTraversal(root.left, res);
  postOrderTraversal(root.right, res);
  res.push(root.val);
  return res;
}
```

:::details 测试
```js
/* ------------- 测试 -------------- */

//     1
//   /   \
//  2     3
// / \   / \
//4   5 6   7
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right = new TreeNode(3);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

console.log(preOrderTraversal(root));   // [1, 2, 4, 5, 3, 6, 7]
console.log(inOrderTraversal(root));    // [4, 2, 5, 1, 6, 3, 7]
console.log(postOrderTraversal(root));  // [4, 5, 2, 6, 7, 3, 1]
```
:::

## 二叉搜索树的插入和查找
```js
递归实现：

function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BST() {
  this.root = null;
}

BST.prototype.insert = function(value) {
  var newNode = new Node(value);
  if (this.root === null) {
    this.root = newNode;
  } else {
    this.insertNode(this.root, newNode);
  }
};

BST.prototype.insertNode = function(node, newNode) {
  if (newNode.value < node.value) {
    if (node.left === null) {
      node.left = newNode;
    } else {
      this.insertNode(node.left, newNode);
    }
  } else {
    if (node.right === null) {
      node.right = newNode;
    } else {
      this.insertNode(node.right, newNode);
    }
  }
};

BST.prototype.search = function(value) { 
  return this.searchNode(this.root, value); 
};

BST.prototype.searchNode = function(node, value) { 
  if (node === null) {
    return false;
  } else if (value < node.value) {
    return this.searchNode(node.left, value);
  } else if (value > node.value) {
    return this.searchNode(node.right, value);
  } else {
    return true;
  }
};

循环实现：

function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BST() {
  this.root = null;
}

BST.prototype.insert = function(value) {
  var newNode = new Node(value);
  if (this.root === null) {
    this.root = newNode;
    return;
  }
  var current = this.root;
  while (current !== null) {
    if (value < current.value) {
      if (current.left === null) {
        current.left = newNode;
        return;
      }
      current = current.left;
    } else {
      if (current.right === null) {
        current.right = newNode;
        return;
      }
      current = current.right;
    }
  }
};

BST.prototype.search = function(value) {
  var current = this.root;
  while (current !== null) {
    if (value < current.value) {
      current = current.left;
    } else if (value > current.value) {
      current = current.right;
    } else {
      return true;
    }
  }
  return false;
};
```



## 字符串搜索算法

```javascript
//KMP算法是一种高效的字符串搜索算法，在对文本串和模式串进行匹配时，通过利用前缀表来避免不必要的比较，从而实现快速匹配。
function kmp(text, pattern) {
  let n = text.length;
  let m = pattern.length;

  // 构建前缀表
  let prefix = Array(m).fill(0);
  let j = 0;
  for (let i = 1; i < m; i++) {
    while (j > 0 && pattern[j] !== pattern[i]) {
      j = prefix[j - 1];
    }
    if (pattern[j] === pattern[i]) {
      j++;
    }
    prefix[i] = j;
  }

  // 匹配文本串和模式串
  j = 0;
  for (let i = 0; i < n; i++) {
    while (j > 0 && pattern[j] !== text[i]) {
      j = prefix[j - 1];
    }
    if (pattern[j] === text[i]) {
      j++;
    }
    if (j === m) {
      return i - m + 1;
    }
  }

  return -1;
}
```

在这个函数中，我们首先计算出模式串的前缀表，然后逐个字符地扫描文本串和模式串，利用前缀表来确定匹配的位置。

接下来，我们可以使用这个函数来测试一下：

```javascript
let text = "hello world";
let pattern = "world";
let index = kmp(text, pattern);
console.log(index); // 输出5
```

在这个例子中，我们将文本串设置为“hello world”，将模式串设置为“world”，然后调用kmp函数来查找匹配位置。由于模式串出现在文本串的位置是5，所以kmp函数返回的结果也是5。

这里还可以尝试一些其他的测试用例，例如：

```javascript
let text = "abababaababacb";
let pattern = "ababacb";
let index = kmp(text, pattern);
console.log(index); // 输出7
```

这个例子中，我们将文本串设置为“abababaababacb”，将模式串设置为“ababacb”，然后调用kmp函数来查找匹配位置。由于模式串出现在文本串的位置是7，所以kmp函数返回的结果也是7。

总之，KMP算法是一种高效的字符串搜索算法，通过利用前缀表来避免不必要的比较，能够快速地查找匹配位置。


## 数字转中文

**方法一：**
```js
function numberToChinese(num, upper = false) {
  if (!/^(\-|\+)?\d*(\.\d*)?$/.test(num)) {
    return "不是一个合法的数字！";
  }
  let digitMap = {
    plain:["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"],
    upper:["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"]
  }
  let unitMap = {
    plain: [
      ["元", "万", "亿"],
      ["", "十", "百", "千"],
    ],
    upper: [
      ["元", "萬", "億"],
      ["", "拾", "佰", "仟"],
    ],
  };
  let ustr = upper ? "upper" : "plain"
  let head = num < 0 ? "负" : "";
  let unit = unitMap[ustr];
  num = Math.abs(num);
  let result = "";
  for (let i = 0; i < unit[0].length && num > 0; i++) {
    let currUnit = "";
    for (let j = 0; j < unit[1].length && num > 0; j++) {
      let index = num % 10;
      let d =digitMap[ustr];
      currUnit = d + unit[1][j] + currUnit;
      num = Math.floor(num / 10);
    }
    result =
      currUnit.replace(/(零.)*零$/, "").replace(/^$/, "零") +
      unit[0][i] +
      result;
  }
  let reg = upper ? /億零{0,3}萬/ : /亿零{0,3}万/;
  let lastres =
    head +
    result
      .replace(/(零.)*零元/, "元")
      .replace(/(零.)+/g, "零")
      .replace(reg, upper ? "億" : "亿")
      .replace(/^零+/, "");
  return lastres;
}
```

**方法二：**
```js
function numberToChinese(num) {
  if (num === 0) return "零";
  //数字超过999999999999则报错
  if (num.toString().length > 12) {
    throw new Error("数字过大，无法转换");
  }
  let cstr = "";
  let bunits = ["", "万", "亿"];
  //把数字转换成字符串，四位一组，从后往前分割
  let numStr = num
    .toString()
    .split("")
    .reverse()
    .join("")
    .match(/(\d{1,4})/g)
    .join(",")
    .split("")
    .reverse()
    .join("")
    .split(",");
  let len = numStr.length;

  function transform(str) {
    let res = "";
    let carr = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
    let units = ["", "十", "百", "千"];
    for (let i = 0; i < str.length; i++) {
      let digit = +str[i];
      let char = carr[digit];
      let unit = units[str.length - i - 1];
      if (digit === 0) {
        //如果是0，且不是最后一位不是零，则加零，并且不加单位
        if (res[res.length - 1] !== "零") {
          res += char;
        }
      } else {
        res += char + unit;
      }
    }
    if (res[res.length - 1] === "零") {
      res = res.slice(0, res.length - 1);
    }
    return res;
  }
  for (let i = 0; i < len; i++) {
    let part = numStr[i];
    let str = transform(part);
    let unit = str ? bunits[len - i - 1] : "";
    cstr += str + unit;
  }
  cstr.startsWith("一十") && (cstr = cstr.slice(1));
  return cstr;
}

//大写中文
function bigChinese(str){
  let  map ={
    '零':'零',
    '一':'壹',
    '二':'贰',
    '三':'叁',
    '四':'肆',
    '五':'伍',
    '六':'陆',
    '七':'柒',
    '八':'捌',
    '九':'玖',
    '十':'拾',
    '百':'佰',
    '千':'仟',
    '万':'萬',
    '亿':'億',
  }
  let s = numberToChinese(str)
  return s.split('').map( item => map[item]).join('')

}
let n = bigChinese(1000100001); //拾億零壹拾萬零壹
console.log('[ n ]-66', n)

```