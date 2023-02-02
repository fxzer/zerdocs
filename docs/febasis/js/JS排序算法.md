
## 一、括号匹配

```js
let str1 = '{[]}'	//true
let str2 = '{[[]}'	//false
let str3 = '{[]}['	//false
let str4 = '{[()]}'	//true
```

**解决方案：**

```js {11-19}
const isValid = function(str) {
    let map = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    let arr = []
    if (str.length == 0) {
        return false
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
```



## 二、选择排序

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

## 三、快速排序

```js {7,10-19}
var quickSort = function(arr) {
    if (arr.length <= 1) {
        return arr;
    }　　
    var pivotIndex = Math.floor(arr.length / 2);
	//选中心轴索引，并选取中心轴的值
    var pivot = arr.splice(pivotIndex, 1)[0];　　
    var left = [];　　
    var right = [];　
    for (var i = 0; i < arr.length; i++) {　　　　
        //与中心轴比较，小的放在左数组，大的放在由数组　
        if (arr[i] < pivot) {　　　　　　
            left.push(arr[i]);　　　　
        } else {　　　　　　
            right.push(arr[i]);　　　　
        }　
    // item <= pivot ? left.push(item) : right.push(item)
    }　　
    return quickSort(left).concat([pivot], quickSort(right));

};
```



## 四、插入排序

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



## 五、希尔排序

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

