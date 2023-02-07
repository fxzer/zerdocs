

## 一、前置知识

### 虚拟DOM

```jsx
const VDOM = (  /* 此处一定不要写引号，因为不是字符串 */
			<h1 id="title">
				<span>Hello,React</span>
			</h1>
		)
//2.渲染虚拟DOM到页面   准备好一个“容器”<div id="root"></div> 
ReactDOM.render(VDOM,document.getElementById('root'))
```

**关于虚拟DOM：**

1.本质是Object类型的对象（一般对象）

​     2.虚拟DOM比较“轻”，真实DOM比较“重”，因为虚拟DOM是React内部在用，无需真实DOM上那么多的属性。

​     3.虚拟DOM最终会被React转化为真实DOM，呈现在页面上

**JSX语法规则**

​      1.定义虚拟DOM时，不要写引号。

​	   2.标签中混入JS表达式时要用 `{}`。

​      3.样式的类名指定不要用class，要用className。

​      4.只有一个根标签

​      5.标签必须闭合

​      6.标签首字母

**注意**

一定注意区分：【js语句(代码)】与【js表达式】

> 1.表达式：一个表达式会产生一个值，可以放在任何一个需要值的地方

     (1). a
          (2). a+b
          (3). demo(1)
          (4). arr.map() 
          (5). function test () {}

>  2.语句(代码)：

```js
(1).if(){}
(2).for(){}
(3).switch(){case:xxxx}
```

## 二、组件

### 函数式组件

```js
	<!-- 准备好一个“容器” -->
	<div id="root"></div>
	
	<!-- 引入react核心库 -->
	<script type="text/javascript" src="../js/react.development.js"></script>
	<!-- 引入react-dom，用于支持react操作DOM -->
	<script type="text/javascript" src="../js/react-dom.development.js"></script>
	<!-- 引入babel，用于将jsx转为js -->
	<script type="text/javascript" src="../js/babel.min.js"></script>

	<script type="text/babel">
		//1.创建函数式组件
		function MyComponent(){
			console.log(this); //此处的this是undefined，因为babel编译后开启了严格模式
			return <h2>函数式组件</h2>
		}
		//2.渲染组件到页面
		ReactDOM.render(<MyComponent/>,document.getElementById('root'))
		/* 
			执行了ReactDOM.render(<MyComponent/>.......之后，发生了什么？
					1.React解析组件标签，找到了MyComponent组件。
					2.发现组件是使用函数定义的，随后调用该函数，将返回的虚拟DOM转为真实DOM，随后呈现在页面中。
		*/
	</script>
```



### 类式组件

```js
//创建类式组件
class MyComponent extends React.Component {
	render(){
		//render在MyComponent的原型对象上，供实例使用。
		//render中的this指向MyComponent组件实例对象。
		console.log('render中的this:',this);
		return <h2>类式组件</h2>
	}
}
//渲染组件到页面
ReactDOM.render(<MyComponent/>,document.getElementById('root'))
```
::: tip
  执行了`ReactDOM.render(<MyComponent/>`.......之后，发生了什么？

  ​     1.React解析组件标签，找到了MyComponent组件。

  ​     2.发现组件是使用类定义的，随后new出来该类的实例，并通过该实例调用到原型上的render方法。

  ​     3.将render返回的虚拟DOM转为真实DOM，随后呈现在页面中。
:::
### 补充

**受控组件**：React 中受控组件的是指表单元素的控制是交给 React ，表单元素的值是完全交由组件的 state 控制。

​					受控组件也可以用于描述内部状态由传入 props 控制的 React 自定义组件。

**非受控组件**： 表单元素的状态并不受 React 组件状态的影响，表单元素的值存储于 DOM 元素中。

​						如果要 React 组件要获取 DOM 元素的值，需要通过绑定 ref 的方式去获取。





### 组实例三大属性

#### state

```jsx
//1.创建组件
class Weather extends React.Component{
	//初始化状态
	state = {isHot:false,wind:'微风'}
	render(){
		const {isHot,wind} = this.state
		return <h1 onClick={this.changeWeather}>今天天气很{isHot ? '炎热' : '凉爽'}，{wind}</h1>
	}
	//自定义方法————要用赋值语句的形式+箭头函数 **
	changeWeather = () =>{
		const isHot = this.state.isHot
		this.setState({isHot:!isHot})
	}
}
//2.渲染组件到页面
ReactDOM.render(<Weather/>,document.getElementById('test'))
```

#### props

```jsx
//创建组件
class Person extends React.Component{
    //props简写形式: 对标签属性进行类型、必要性的限制
    static propTypes = {
        name:PropTypes.string.isRequired, //限制name必传，且为字符串
        sex:PropTypes.string,//限制sex为字符串
        age:PropTypes.number,//限制age为数值
	}
	render(){
		const {name,age,sex} = this.props
		return (
			<ul>
				<li>姓名：{name}</li>
				<li>性别：{sex}</li>
				<li>年龄：{age+1}</li>
			</ul>
		)
	}
}
 
/*Person.propTypes = {
	name:PropTypes.string.isRequired, //限制name必传，且为字符串
	sex:PropTypes.string,//限制sex为字符串
	age:PropTypes.number,//限制age为数值
	speak:PropTypes.func,//限制speak为函数
}

Person.defaultProps = {//指定默认标签属性值
	sex:'男',//sex默认值为男
	age:18 //age默认值为18
}*/
//渲染组件到页面
ReactDOM.render(<Person name="jerry" age={19}  sex="男"/>,document.getElementById('test1'))
ReactDOM.render(<Person name="tom" age={18} sex="女"/>,document.getElementById('test2'))

const p = {name:'老刘',age:18,sex:'女'}
// ReactDOM.render(<Person name={p.name} age={p.age} sex={p.sex}/>,document.getElementById('test3'))
ReactDOM.render(<Person {...p}/>,document.getElementById('test3'))
```



**函数组件使用props**

```jsx
function Person (props){
	const {name,age,sex} = props
	return (
        <ul>
            <li>姓名：{name}</li>
            <li>性别：{sex}</li>
            <li>年龄：{age}</li>
        </ul>
	)
}
Person.propTypes = {
	name:PropTypes.string.isRequired, 
	sex:PropTypes.string,
	age:PropTypes.number,
}

Person.defaultProps = {
	sex:'男',
	age:18 
}
```



#### refs

```jsx
class Demo extends React.Component{
    myRef2 = React.createRef() //3.createRef形式
    //React.createRef调用后可以返回一个容器，该容器可以存储被ref所标识的节点
    
	showData = ()=>{
		const {input1} = this.refs //1.字符串形式
        const {input2} = this //2.回调函数形式
	}
    saveInput = (c)=>{
        this.input2 = c;
        console.log('=@=',c);
    }
	render(){
		return(
			<div>
				<input ref="input1" type="text"/> {/*字符串形式*/}
			  	<input ref={(c)=>{this.input2 = c;console.log('@',c);}} type="text"/> {/*回调函数形式*/}
               	<input ref={this.saveInput} type="text"/>
                <input ref={this.myRef} type="text" />{/*createRef形式*/}
			</div>
		)
	}
}
ReactDOM.render(<Demo a="1" b="2"/>,document.getElementById('test'))
```

> 注意: 回调函数形式执行次数



### 事件处理
::: warning
 (1).通过onXxx属性指定事件处理函数(注意大小写)

 ​      a. React使用的是自定义(合成)事件, 而不是使用的原生DOM事件 —————— 为了更好的兼容性

 ​      b. React中的事件是通过事件委托方式处理的(委托给组件最外层的元素) ————————为了的高效

 (2).通过event.target得到发生事件的DOM元素对象 ——————————不要过度使用ref
:::


 **高阶函数**：参数或返回值是一个函数满足一个条件则为高阶函数。

​         常见的高阶函数有：Promise、setTimeout、arr.map()等等



 **函数的柯里化**：通过函数调用继续返回函数的方式，实现多次接收参数最后统一处理的函数编码形式。 

```js
function sum(a){
	return(b)=>{
		return (c)=>{
			return a+b+c
		}
	}
}
//函数柯里化传参
saveFormData = (dataType)=>{
	return (event)=>{
		this.setState({[dataType]:event.target.value})
	}
}
//<input onChange={this.saveFormData('username')} type="text" name="username"/>

//箭头函数传参
saveFormData = (dataType,event)=>{
        this.setState({[dataType]:event.target.value})
    }
//<input onChange={event => this.saveFormData('username',event) } type="text" name="username"/>
```



### 组件生命周期

**旧版(16)**

![image-20220421223156627](https://vnote-bucket.oss-cn-shanghai.aliyuncs.com/image-20220421223156627.png)



```js
/* 
1. 初始化阶段: 由ReactDOM.render()触发---初次渲染
            1.	constructor()
            2.	componentWillMount()
            3.	render()
            4.	componentDidMount() =====> 常用
            一般在这个钩子中做一些初始化的事，例如：开启定时器、发送网络请求、订阅消息
            
2. 更新阶段: 由组件内部this.setSate()或父组件render触发
            1.	shouldComponentUpdate()
            2.	componentWillUpdate()
            3.	render() =====> 必须使用的一个
            4.	componentDidUpdate()
            
3. 卸载组件: 由ReactDOM.unmountComponentAtNode()触发
            1.	componentWillUnmount()  =====> 常用
            一般在这个钩子中做一些收尾的事，例如：关闭定时器、取消订阅消息
*/
```



**新版(17+)**

![image-20220421223604701](https://vnote-bucket.oss-cn-shanghai.aliyuncs.com/image-20220421223604701.png)



```markdown

1. 初始化阶段: 由ReactDOM.render()触发---初次渲染
            1.	constructor()
            2.	getDerivedStateFromProps
            3.	render()
            4.	componentDidMount() =====> 常用
                        一般在这个钩子中做一些初始化的事，例如：开启定时器、发送网络请求、订阅消息
2. 更新阶段: 由组件内部this.setSate()或父组件重新render触发
            1.	getDerivedStateFromProps
            2.	shouldComponentUpdate()
            3.	render()
            4.	getSnapshotBeforeUpdate
            5.	componentDidUpdate()
3. 卸载组件: 由ReactDOM.unmountComponentAtNode()触发
            1.	componentWillUnmount()  =====> 常用
                        一般在这个钩子中做一些收尾的事，例如：关闭定时器、取消订阅消息

```



**getSnapshotBeforeUpdate** 

> 在render之前调用，state已更新
>
> 典型场景：获取render之前的dom状态



**getDerivedStateFromProps**
::: tip

 1：当state需要从props初始化时，使用

 2：尽量不使用，维护俩者状态需要消耗额外资源，增加复杂度

 3：每次render都会调用

 4：典型场景表单获取默认值

:::

```markdown
 面试相关题:
	1). react/vue中的key有什么作用？（key的内部原理是什么？）
	2). 为什么遍历列表时，key最好不要用index?

1. 虚拟DOM中key的作用：
	1). 简单的说: key是虚拟DOM对象的标识, 在更新显示时key起着极其重要的作用。

	2). 详细的说: 当状态中的数据发生变化时，react会根据【新数据】生成【新的虚拟DOM】, 
                    随后React进行【新虚拟DOM】与【旧虚拟DOM】的diff比较，比较规则如下：

        a. 旧虚拟DOM中找到了与新虚拟DOM相同的key：
                    (1).若虚拟DOM中内容没变, 直接使用之前的真实DOM
                    (2).若虚拟DOM中内容变了, 则生成新的真实DOM，随后替换掉页面中之前的真实DOM

        b. 旧虚拟DOM中未找到与新虚拟DOM相同的key
                    根据数据创建新的真实DOM，随后渲染到到页面

2. 用index作为key可能会引发的问题：
    1. 若对数据进行：逆序添加、逆序删除等破坏顺序操作:
                    会产生没有必要的真实DOM更新 ==> 界面效果没问题, 但效率低。

    2. 如果结构中还包含输入类的DOM：
                    会产生错误DOM更新 ==> 界面有问题。

    3. 注意！如果不存在对数据的逆序添加、逆序删除等破坏顺序操作，
        仅用于渲染列表用于展示，使用index作为key是没有问题的。

3. 开发中如何选择key?:
    1.最好使用每条数据的唯一标识作为key, 比如id、手机号、身份证号、学号等唯一值。
    2.如果确定只是简单的展示数据，用index也是可以的。

	
```

