

### this指向


根据函数调用方式的不同，this的值也不同：

:::tip
1. 以函数形式调用，this是window
2. 以方法形式调用, this是调用方法的对象
3. 构造函数中，this是新建的对象
4. 箭头函数没有自己的this, 由外层作用域决定
5. 通过call和apply调用的函数，它们的第一个参数就是函数的this
6. 通过bind返回的函数，this由bind第一个参数决定（无法修改）
:::

```js
function fn(){
	console.log(this)//window
}
let obj = {
	name:'zhansan',
    fn(){
		console.log(this)//obj
        function fn2(){
            console.log(this) //window     
        }
        fn3 = ()=> {
            console.log(this)//obj,与调用方式无关,指向声明时外层作用域的this
        }
        fn2()//以函数形式调用指向window
    }
}
obj.fn()//以方法形式调用,指向obj
```

函数三种调用方式

```js
fn()
fn.call()
fn.apply()
```


:::tip  call和bind与apply
1. call 和 apply除了可以调用函数，还可以用来指定函数中的this
    - 通过call方法调用函数，函数的实参直接在第一个参数后一个一个的列出来
    - apply 实参需要通过一个数组传递

1. bind() 是函数的方法，可以用来创建一个新的函数
    - bind可以为新函数绑定this
    - bind可以为新函数绑定参数
::: 
```js
fn2.call(obj, "hello", true)//会立即执行
fn2.apply(obj, ["hello", true]//会立即执行
let newfn = fn.bind(obj, 10, 20, 30)//不会立即执行, 返回一个新函数 	newfn()
```

 箭头函数没有自身的this，它的this由定义时外层作用域决定，

+ 也无法通过call apply 和 bind修改它的this 

+  箭头函数中没有arguments







### 可变参数 `arguments`

```js
 // 定义一个函数，可以求任意个数值的和
function sum() {
// 通过arguments，可以不受参数数量的限制更加灵活的创建函数
 /* arguments
    - arguments是函数中又一个隐含参数
    - arguments是一个类数组对象（伪数组）
        和数组相似，可以通过索引来读取元素，也可以通过for循环变量，							
        但是它不是一个数组对象，不能调用数组的方法
    - arguments用来存储函数的实参，
        无论用户是否定义形参，实参都会存储到arguments对象中
        可以通过该对象直接访问实参*/
    let result = 0

    for (let num of arguments) {
        result += num
    }

    return result
}

```

### 剩余参数 `...args`

```js
 function sum2(...num) {
 /* 
剩余参数，在定义函数时可以将参数指定为剩余参数
- 剩余参数可以接收任意数量实参，并将他们统一存储到一个数组中返回
- 作用和arguments基本是一致，但是也具有一些不同点：
    是一个数组，名字可以自己指定，配合其他参数一起使用，剩余参数写到最后。
 */
    return num.reduce((a, b) => a + b, 0)
 }
function fn3(a, b, ...args) {
  console.log(args)
 }
```

### Map

- **Map用来存储键值对结构的数据（key-value）**
- Object中存储的数据就可以认为是一种键值对结构
- Map和Object的主要区别：
     - Object中的属性名只能是字符串或符号，如果传递了一个其他类型的属性名，
         JS解释器会自动将其转换为字符串
     - Map中任何类型的值都可以称为数据的key

```js
/*属性和方法：
  map.size() 获取map中键值对的数量
  map.set(key, value) 向map中添加键值对
  map.get(key) 根据key获取值   
  map.delete(key) 删除指定数据
  map.has(key) 检查map中是否包含指定键
  map.clear() 删除全部的键值对*/
    
    const obj = {
        "name":"孙悟空",
        'age':18,
        [Symbol()]:"哈哈",
        [obj2]:"嘻嘻"
    }
```

**将map转换为数组**

```js
const arr = Array.from(map)//const arr = [...map]
 // 遍历map
  for (const [key, value] of map) {
     const [key, value] = entry
    console.log(key, value)
   }

    map.forEach((key, value)=>{
        console.log(key, value)
    })

 map.keys() - 获取map的所有的key
 map.values() - 获取map的所有的value
```

**数组转map**

```js
const map2 = new Map([
    ["name", "猪八戒"],
    ["age", 18],
    [{}, () => {}],
])
```

### Set

```js
/* - 使用方式：
    创建
        - new Set()
        - new Set([...])

    方法
        size 获取数量
        add() 添加元素
        has() 检查元素
        delete() 删除元素
        [...set]转为数组获取元素 
        set.entries() 得到键值对(键值对一样)
        */

```

### 随机数生成

```js
 Math.random() --> 0 - 1
//生成 0-x之间的随机数：
Math.round(Math.random() * x)
Math.floor(Math.random() * (x + 1))

//生成 x-y 之间的随机数
Math.round(Math.random() * (y-x) + x)
```

### 时间格式化

```js
const d = new Date()

let result = d.toLocaleDateString() // 将日期转换为本地的字符串		'2021/10/1
result = d.toLocaleTimeString() // 将时间转换为本地的字符串 	'21:32:35'
/*   - 参数：
1. locales: 描述语言和国家信息的字符串
    zh-CN 中文中国
    zh-HK 中文香港
    en-US 英文美国
2. options: 需要一个对象作为参数，在对象中可以通过对象的属性来对日期的格式进行配置
*/
  result = d.toLocaleString("zh-CN", {
    year: "numeric",
    month: "long",
    day: "2-digit",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit"
})

```

### 面向对象之类

```js
 class Person{
	 constructor(name, age, gender){
        // console.log("构造函数执行了~", name, age, gender)
        // 可以在构造函数中，为实例属性进行赋值
        // 在构造函数中，this表示当前所创建的对象
        this.name = name
        this.age = age
        this.gender = gender

    }

    // sayHello = function(){} // 添加方法的一种方式

    sayHello(){
        console.log('大家好，我是' + this.name)
    } // 添加方法（实例方法） 实例方法中this就是当前实例

    static test(){
        console.log("我是静态方法", this)
    } // 静态方法（类方法） 通过类来调用 静态方法中this指向的是当前类

}
```



**面向对象的特点：封装、继承和多态**

> 封装 —— 安全性
> 继承 —— 扩展性
> 多态 —— 灵活性

#### 封装
:::tip
1. 对象就是一个用来存储不同属性的容器
2. 对象不仅存储属性，还要负责数据的安全, 直接添加到对象中的属性，并不安全，因为它们可以被任意的修改
3. 如何确保数据的安全：
   - 私有化数据: 将需要保护的数据设置为私有，只能在类内部使用
   - 提供setter和getter方法来开放对数据的操作
   - 属性设置私有，通过getter setter方法操作属性带来的好处
        1. 可以控制属性的读写权限
        2. 可以在方法中对属性的值进行验证
::: 

```js
 - 实现封装的方式：
    1.属性私有化 加#
    2.通过getter和setter方法来操作属性
        get 属性名(){
            return this.#属性
        }

        set 属性名(参数){
            this.#属性 = 参数
        }
```

```js
 class Person {
	 #name//实例使用#开头就变成了私有属性，私有属性只能在类内部访问
        constructor(name, age, gender) {
            this.#name = name
        }

        sayHello() {
            console.log(this.#name)
        }
 
        getName(){// getter方法，用p.getName()来读取属性
            return this.#name
        }

        // setter方法，用来设置属性,p.setName('zhangsan')
        setName(name){
            this.#name = name
        }

        get name(){//简化读取方式:p.name
            return this.#name
        }

        set name(gender){
            this.#name = name
        }
    }
```

#### 继承
:::tip 继承
- 可以通过extends关键来完成继承
     时，就相当于将另一个类中的代码复制到了当前类中（简单理解）
- 继承发生时，被继承的类称为 父类（超类），继承的类称为 子类
     的代码，并且可以在不修改一个类的前提对其进行扩展
:::

```js
 class Animal{
    constructor(name){
        this.name = name
    }
    sayHello(){
        console.log("动物在叫~")
    }
}

class Dog extends Animal{
    // 重写构造函数
    constructor(name, age){
        // 重写构造函数时，构造函数的第一行代码必须为super()
        super(name) // 调用父类的构造函数
        this.age = age

    }
	// 在子类中，可以通过创建同名方法来重写父类的方法
    sayHello(){
        console.log("汪汪汪")
    }
}
const dog = new Dog("旺财")
dog.sayHello()
```

#### 多态

在JS中不会检查参数的类型，所以这就意味着任何数据都可以作为参数传递
指定的类型，只要对象满足某些条件即可



```js
function sayHello(obj){
 console.log("Hello,"+obj.name)
}
//只要参数有obj.name就可以调用
sayHello(dog)
sayHello(person)

```

### 对象的结构

#### 原型

对象中存储属性的区域实际有两个：

:::tip
1. 对象自身
    - 直接通过对象所添加的属性，位于对象自身中
    - 在**类**中通过 x = y 的形式添加的属性，位于对象自身中

2. 原型对象（prototype）
    - 对象中还有一些内容，会存储到其他的对象里（原型对象）
    - 在对象中会有一个属性用来存储原型对象，这个属性叫做`__proto__`
    - 原型对象也负责为对象存储属性，<br>
        当我们访问对象中的属性时，会优先访问对象自身的属性，<br>
        对象自身不包含该属性时，才会去原型对象中寻找
    - 会添加到原型对象中的情况：
        1. 在类中通过xxx(){}方式添加的方法，位于原型中
        2. 主动向原型中添加的属性或方法

1. 访问一个对象的原型对象
   - `obj.__proto__`
   - `Object.getPrototypeOf(对象)`
   
2. 原型对象中的数据：
   - 对象中的数据（属性、方法等）
   - constructor （对象的构造函数）


**原型链:** 原型对象也有原型，这样就构成了一条原型链，根据对象的复杂程度不同，原型链的长度也不同
 obj对象的原型链：obj对象 --> 原型 --> null
::: 


#### 原型链
::: info 原型链属性查找规则
1. 读取对象属性时，会优先对象自身属性，
2. 如果对象中有，则使用，没有则去对象的原型中寻找
3. 如果原型中有，则使用，没有则去原型的原型中寻找
4. 直到找到`Object`对象的原型（Object的原型没有原型（为`null`））
5. 如果依然没有找到，则返回`undefined`

::: 
:::tip  原型的作用：
 1. 原型就相当于是一个公共的区域，可以被所有该类实例访问，
 2. 可以将该类实例中，所有的公共属性（方法）统一存储到原型中
 3. 这样我们只需要创建一个属性，即可被所有实例访问
 4. 一修改就是修改所有实例的原型
 5. 无需创建实例即可完成对类的修改
::: 


#### 修改原型


::: warning 原则
1. 原型尽量不要手动改
2. 要改也不要通过实例对象去改
3. 通过 类.prototype 属性去修改
4. 最好不要直接给prototype去赋值
:::
```js
 Person.prototype.fly = () => {	//在原型添加方法
    console.log("我在飞！")
}
```

#### instanceof/in/hasOwn

> 用于检查的是对象的原型链上是否有该类 `dog instanceof Animal`
:::info 检查对象属性

- in:使用in运算符检查属性时，无论属性在对象自身还是在原型中，都会返回true
- 对象.hasOwnProperty(属性名):用来检查一个对象的 自身 是否含有某个属性
- Object.hasOwn(对象, 属性名):用来检查一个对象的 自身 是否含有某个属性

:::

### 10.new运算符

::: tip new运算符是创建对象时，将会发生这4件事：


1. 创建一个普通的JS对象（`Object`对象 {}）, 称其为新对象

2. 将构造函数的`prototype`属性设置为新对象的原型

3. 使用实参来执行构造函数，并且将新对象设置为函数中的`this`

4. 如果构造函数返回的是一个**非原始值**，则该值会作为new运算的返回值返回

   如果构造函数的返回值是一个**原始值**或者**没有指定返回值**(`undefined`)

   则*新的对象*将会作为返回值返回（通常不会为构造函数指定返回值）
:::

 ```js
function MyClass(){

      // let newInstance = {}
      // newInstance.__proto__ = MyClass.prototype
      // this = newInstance
      // return newInstance

      }

```

  **对象的分类**：                       
 1. **内建对象**: 由ES标准所定义的对象
 2. **宿主对象**: 由浏览器提供的对象
 3. **自定义对象**: 由开发人员自己创建的对象(Vue, React)
