
## 基础语法

### 一、基础类型

#### JS类型

```js
boolean
number
string
array
object	//对象: {}、 function(){}
null
undefined	//默认情况下null和undefined是所有类型的子类型。可以赋值给其他类型
```

::: warning **object 类型常见用法**
:::

```typescript
//1.严格要求
let b :{name: string ,age: number}
b = { name:'zhangsan ',age :18}
```

```typescript
//2.可选
let b :{name: string ,age?: number}
b = { name:'zhangsna '}
```

```typescript
//3.多个可选
let b :{name: string ,[porname:string]:string}
b = { name:'zhangsna ',address:'上海',gender:'男'}
```

```typescript
//4.箭头函数设置函数结构
let d: (c:number,d:number)=>number
d = function(n1,n2){
    return n1+n2
}
```

::: warning **数组**
:::

```typescript
let arr: string[] 	//字符串数组 arr = ['zhansan','lisi']
let arr1:Array<number>	//数值数组 arr1 = [1,2,3,4,5]
```

::: warning **元组**
:::

```typescript
let h: [string ,number]
h = ['hello', 123]
```

::: warning **枚举**
:::

```typescript
enum Color {Red = 1, Green = 2, Blue = 4}
let c: Color = Color.Green;  //c为2
Color[2] // Green 枚举的值得到它的名字
```



#### TS新增类型

``` typescript
字面量	  //限制类型在几个值之间（联合类型）例：let b : 'male'|'amale' 、 
enum	//枚举类型
tuple	//元组 [string, number];
void	//表示没有返回值，不返回或返回undefined，和其他类型平等关系，不能直接赋值给其他类型	
Any		//任意类型
unknown //未知类型 
never	//永远不返回结果，没有类型是never的子类型、没有类型可以赋值给never类型（除了never本身之外）
//函数用于执行不到返回值那一步，(抛出异常或死循环)的返回值类型
```

::: warning `unknown`与`any`区别
:::

```typescript
let a: any
let b: string 
b =  a // OK  any类型可以赋值任意类型
```

```typescript
let e: unknown
e = 'TypeScript'
let f: string
f = e 	//Error 未知类型不能直接赋值给其他变量（类型安全的any）

//处理方式一：
if(typeof  e === "string" ){
	f = e
}
//处理方式二：类型断言
f = e as string 
f = <string> e
```

::: warning `|`和`&`    ：表示或，&：表示且
:::

```typescript
let g: string | boolean
g = 'sdfj'
g = true

let h :string & number
let i: {name:string} &{age:number}
f = {
    name:'h hh',
    age:18
}
```



### 二、类型声名

```typescript
let name:string	 //声名string类型变量
let age = 19	 //类型声名可省略，会自动类型推断，age推断为number
```



### 三、as const 断言

```typescript
let a = 99 as const 	//a值只能为99,指定明确的值、类型
let b:string = 'asfghj'
let obj = {
    name:b,		//值只能为string
} as const
```



```typescript
let x = 1024
let y = '2048'

let arr = [x,y] 	// arr[1]类型是 number|string
let arr = [x,y] as const 	// 指定为元组，arr[1]类型只能为 number
//同：let arr = <const>[x,y]
```

## 面对对象

### 一、类

```typescript
class 类名 {
    属性名: 类型;
    
    constructor(参数: 类型){
        this.属性名 = 参数;
    }
    
    方法名(){
        ....
    }

}

```

**栗子:**

```typescript
    class Person{
        name: string;
        age: number;
    
        constructor(name: string, age: number){
            this.name = name;
            this.age = age;
        }
    
        sayHello(){
            console.log(`大家好，我是${this.name}`);
        }
    }
```

#### 构造函数

> **注1：在TS中只能有一个构造器方法！**

```typescript
class Person{
    name: string;
    age: number

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

```

> **注2：子类继承父类时，必须调用父类的构造方法（如果子类中也定义了构造方法）！**


```typescript
class A {
    protected num: number;
    constructor(num: number) {
        this.num = num;
    }
}

class X extends A {
    protected name: string;
    constructor(num: number, name: string) {
        super(num);
        this.name = name;
    }
}

```

### 二、封装

- 静态属性（static）：

  - 声明为static的属性或方法不再属于实例，而是属于类的属性；

- 只读属性（readonly）：

  - 如果在声明属性时添加一个readonly，则属性便成了只读属性无法修改

- TS中属性具有三种修饰符：

  - public（默认值），可以在类、子类和对象中修改
  - protected ，可以在类、子类中修改
  - private ，可以在类中修改

  

::: details public

```typescript
class Person{
    public name: string; // 写或什么都不写都是public
    public age: number;

    constructor(name: string, age: number){
        this.name = name; // 可以在类中修改
        this.age = age;
    }

    sayHello(){
        console.log(`大家好，我是${this.name}`);
    }
}

class Employee extends Person{
    constructor(name: string, age: number){
        super(name, age);
        this.name = name; //子类中可以修改
    }
}

const p = new Person('孙悟空', 18);
p.name = '猪八戒';// 可以通过对象修改

```



:::

::: details protected

```typescript
class Person{
    protected name: string;
    protected age: number;

    constructor(name: string, age: number){
        this.name = name; // 可以修改
        this.age = age;
    }

    sayHello(){
        console.log(`大家好，我是${this.name}`);
    }
}

class Employee extends Person{

    constructor(name: string, age: number){
        super(name, age);
        this.name = name; //子类中可以修改
    }
}

const p = new Person('孙悟空', 18);
p.name = '猪八戒';// 不能修改

```



:::



::: details private

```typescript
class Person{
    private name: string;
    private age: number;

    constructor(name: string, age: number){
        this.name = name; // 可以修改
        this.age = age;
    }

    sayHello(){
        console.log(`大家好，我是${this.name}`);
    }
}

class Employee extends Person{

    constructor(name: string, age: number){
        super(name, age);
        this.name = name; //子类中不能修改
    }
}

const p = new Person('孙悟空', 18);
p.name = '猪八戒';// 不能修改

```



:::

### 三、属性存取器

> 对于一些不希望被任意修改的属性，可以将其设置为private
>
> 直接将其设置为private将导致无法再通过对象修改其中的属性
>
> 我们可以在类中定义一组读取、设置属性的方法，这种对属性读取或设置的属性被称为属性的存取器
>
> 读取属性的方法叫做setter方法，设置属性的方法叫做getter方法

::: details 示例

```typescript
class Person{
    private _name: string;

    constructor(name: string){
        this._name = name;
    }

    get name(){
        return this._name;
    }

    set name(name: string){
        this._name = name;
    }

}

const p1 = new Person('孙悟空');
// 实际通过调用getter方法读取name属性
console.log(p1.name);
// 实际通过调用setter方法修改name属性 
p1.name = '猪八戒'; 

```



:::



#### 静态属性

> 静态属性（方法），也称为类属性。使用静态属性无需创建实例，通过类即可直接使用
>
> 静态属性（方法）使用static开头

```typescript
class Tools{
    static PI = 3.1415926;
    
    static sum(num1: number, num2: number){
        return num1 + num2
    }
}

console.log(Tools.PI);
console.log(Tools.sum(123, 456));

```

### 四、继承

> 通过继承可以将其他类中的属性和方法引入到当前类中，通过继承可以在不修改类的情况下完成对类的扩展

```typescript
class Animal{
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}

class Dog extends Animal{

    bark(){
        console.log(`${this.name}在汪汪叫！`);
    }
}

const dog = new Dog('旺财', 4);
dog.bark();

```

#### 重写

> 发生继承时，如果子类中的方法会替换掉父类中的同名方法，这就称为方法的重写

```typescript
class Animal{
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    run(){
        console.log(`父类中的run方法！`);
    }
}

class Dog extends Animal{

    bark(){
        console.log(`${this.name}在汪汪叫！`);
    }

    run(){
        console.log(`子类中的run方法，会重写父类中的run方法！`);
    }
}

const dog = new Dog('旺财', 4);
dog.bark();

```

### 五、抽象类（abstract class）

>  抽象类是专门用来被其他类所继承的类，它只能被其他类所继承不能用来创建实例，用于抽取类的共同特点
>
> 使用abstract开头的方法叫做抽象方法，抽象方法没有方法体只能定义在抽象类中，继承抽象类时抽象方法必须要实现;

```typescript
abstract class Animal{
  abstract run(): void;
  bark(){
      console.log('动物在叫~');
  }
}

class Dog extends Animals{
  run(){
      console.log('狗在跑~');
  }
}

```



### 六、接口

```typescript
//用于类型检查
interface Person {
    firstName: string;
     lastName: string;
     address?: string;	//可选属性
 readonly age: number;	//只读属性
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

```

## 基本配置

### 一、TS编译配置

> **但是能直接使用tsc命令的前提时，要先在项目根目录下创建一个ts的配置文件 tsconfig.json**

::: details tsconfig.json详细配置

```js
{
/* 
    tsconfig.json 是ts编译器的配置文件，ts编译器可以更具它的信息来对代码进行编译
    "include" 用来表示指定哪些ts文件需要被编译
        路径：
            *表示任意文件，
            **表示任意目录
    "exclude" 用来表示不需要被编译的文件目录
            默认值：{"node_modules", "bower_components", "jspm_packages"}
*/
    "include": [
        "./src/**/*"
    ],
    
    // "exclude": [
    //     "./src/hello/**/*"
    // ]
     /*
        被继承的配置文件
        例如："extends": "。/configs/base",
      */
  //  "extends": "",
      /*
        指定被编译文件的列表，只有需要编译的文件少时才会用到
      */
    //  "files": [],

    //compilerOptions 编译器的选项 
    "compilerOptions": {
        
        //target 用来指定ts被编译为ES的版本
        //'es3', 'es5', 'es6', 'es2015', 'es2016', 'es2017', 'es2018', 'es2019', 'es2020', 'esnext'.
        "target": "ES2015",

        //module 指定要使用的模块化的规范
        //'none', 'commonjs', 'amd', 'system', 'umd', 'es6', 'es2015', 'es2020', 'esnext'
        "module": "es2015",
        
        //lib 用来指定项目所用的库
       /* 'es5', 'es6', 'es2015', 'es7', 'es2016', 'es2017', 'es2018', 'es2019', 'es2020', 'esnext', 'dom', 
       'dom.iterable', 'webworker', 'webworker.importscripts', 'webworker.iterable', 'scripthost', 'es2015.core', 'es2015.collection', 
          'es2015.generator', 'es2015.iterable', 'es2015.promise', 'es2015.proxy', 'es2015.reflect', 'es2015.symbol', 'es2015.symbol.wellknown', 'es2016.array.include',
          'es2017.object', 'es2017.sharedmemory', 'es2017.string', 'es2017.intl', 'es2017.typedarrays', 'es2018.asyncgenerator', 'es2018.asynciterable', 'es2018.intl', 
         'es2018.promise', 'es2018.regexp', 'es2019.array', 'es2019.object', 'es2019.string', 'es2019.symbol', 'es2020.bigint', 'es2020.promise', 
         'es2020.sharedmemory', 'es2020.string', 'es2020.symbol.wellknown', 'es2020.intl', 'esnext.array', 'esnext.symbol', 'esnext.asynciterable', 'esnext.intl', */


        //outDir 用来指定编译后文件所在的目录
        "outDir": "./dist",

        //outFile 将代码合并为一个文件
        // "outFile": "./dist/app.js",

        // 是否对js文件进行编译，默认是false
        "allowJs": true,

        // 是否检查js代码是否符合语法规范，默认值是false
        "checkJs": true,

        // 是否移除注释
        "removeComments": true,

        // 不生成编译后的文件
        "noEmit": false,

        // 当有错误时不生成编译文件
        "noEmitOnError": true,

        // 所有严格检查的总开关
        "strict": true,

        // 用来设置编译后的文件是否使用严格模式，默认是false
        // 在ES6中的模块化会自动使用严格模式，而无需在文件开头添加`'use strict'`
        "alwaysStrict": true,

        // 不允许隐式的any类型
        "noImplicitAny": true,

        // 不允许不明确类型的this
        "noImplicitThis": true,

        // 严格检查空值
        "strictNullChecks": true


    }
}
```



:::

### 二、webpack整合

步骤如下：

#### 1. 初始化项目

进入项目根目录，执行命令 `npm init -y`，创建package.json文件

#### 2. 下载构建工具

```bash
npm i -D webpack webpack-cli webpack-dev-server typescript ts-loader clean-webpack-plugin
```

#### 3. 配置webpack

::: details webpack.config.js详细配置

 ```js
 // 引入一个包
 const path = require('path');
 // 引入html插件
 const HTMLWebpackPlugin = require('html-webpack-plugin');
 //引入clean插件
 const { CleanWebpackPlugin } = require('clean-webpack-plugin')
 
 // npm init -y 初始化 创建package.json文件
 // npm i -D webpack webpack-cli typescript ts-loader  安装四个依赖
 // 编写webpack配置文件
 // 编写tsconfig.json文件
 // 修改package.json中加上build命令
 // npm i -D html-webpack-plugin //自动生成html
 // npm i -D webpack-dev-server //自动响应浏览器更新
 // npm i -D clean-webpack-plugin //清楚dist目录旧文件
 
 //webpack 中所有的配置信息都应该写在module.exports中
 module.exports = {
 
     // 指定入口文件
     entry: "./src/index.ts",
 
     // 指定打包文件所在目录
     output: {
         //指定打包文件的目录
         path: path.resolve(__dirname, 'dist'),
         //打包后文件的名字
         filename: "bundle.js",
         //告诉webpack不使用箭头函数
         environment: {
             arrowFunction: false
         }
 
     },
     //指定webpack打包时要使用的模块
     module: {
         // 指定要loader加载的规则
         rules: [
             {
                 // test指定的时规则生效的文件
                 test: /\.ts$/,//以ts结尾的文件
                 // 要使用的loader
                 use: [
                     // 配置babel
                     {
                         //指定加载器
                         loader: "babel-loader",
                         // 设置babel
                         options: {
                             //设置预定义的环境
                             presets: [
                                 [
                                     //指定环境的插件
                                     "@babel/preset-env",
                                     // 配置信息
                                     {
                                         // 要兼容的目标浏览器及版本
                                         targets: {
                                             "chrome": "58",
                                             "ie": "11"
                                         },
                                         //指定corejs的版本
                                         "corejs": "3",
                                         //使用corejs的方式 "usage"  表示按需加载
                                         "useBuiltIns": "usage" 
                                     }
 
                                 ]
                             ]
                         }
                     },
                     // 'babel-loader',
                     'ts-loader'
                 ],
                 // 要排除的文件
                 exclude: /node-modules/
             }
         ]
     },
 
     //配置Webpack 插件
     plugins: [
         new CleanWebpackPlugin(),
         new HTMLWebpackPlugin({
             // title: "这是一个自定义的title"、
             template: "./src/index.html" 
         }),
     ],
 
     // 用来设置引用模块，可以将这些文件识别为模块
     resolve: {
         extensions: ['.ts', '.js']
     }
 }
 ```

:::

####  4.配置TS编译选项

```json
{
   "compilerOptions": {
       "target": "ES2015",
       "module": "ES2015",
       "strict": true
   }
}

```

#### 5 .修改package.json配置

```typescript {6}
{
   ...
   "scripts": {
       "test": "echo \"Error: no test specified\" && exit 1",
       "build": "webpack",
       "start": "webpack serve --open chrome.exe" //使用chrome启动
   },
   ...
}

```





#### 6.项目使用

在src下创建ts文件，并在并命令行执行`npm run build`对代码进行编译；

或者执行`npm start`来启动开发服务器；

#### 7.Babel

::: warning Babel作用

虽然TS在编译时也支持代码转换，但是只支持简单的代码转换；

对于例如：Promise等ES6特性，TS无法直接转换，这时还要用到babel来做转换；

:::

**7.1 安装依赖包：**

```npm i -D @babel/core @babel/preset-env babel-loader core-js```

共安装了4个包，分别是：

- @babel/core：babel的核心工具
- @babel/preset-env：babel的预定义环境
- @babel-loader：babel在webpack中的加载器
- core-js：core-js用来使老版本的浏览器支持新版ES语法

#### 7.2 修改webpack.config.js配置文件

```js
...
module: {
    rules: [
        {
            test: /\.ts$/,
            use: [
                {
                    loader: "babel-loader",
                    options:{
                        presets: [
                            [
                                "@babel/preset-env",
                                {	//支持的目标版本
                                    "targets":{
                                        "chrome": "58", 
                                        "ie": "11"
                                    },
                                    //corejs版本
                                    "corejs":"3",
                                    "useBuiltIns": "usage"
                                }
                            ]
                        ]
                    }
                },
                {
                    loader: "ts-loader",

                }
            ],
            exclude: /node_modules/
        }
    ]
}
...

```

