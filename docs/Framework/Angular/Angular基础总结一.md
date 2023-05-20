# Angular基础总结一

## 一、NgModule

::: warning

被@NgModule所装饰的类被称为angular module

:::

#### @NgModule元数据

+ **declarations** —— 该模块的依赖项（该模块用到的组件、指令、管道）。
+ **imports** —— 导入其他的ngModule。
+ **providers** —— 提供各种服务。
+ **bootstrap** —— 根组件，Angular 创建它并插入 index.html 宿主页面

#### declarations 数组

```js
1.模块中使用的组件必须先在declarations 数组中声名
2.一个组件只能被一个模块声名
3.在declarations中的组件默认只能在当前模块中使用，在其他模块使用必须exports导出
```

#### imports 数组

```js
1.只会出现在@NgModule装饰器中。
2.模块想要正常工作，除了本身的依赖项(declarations)，还可能需要其他模块导出的依赖项。
3.只要是angular module，都可以导入imports数组中，比如ng内置、第三方、自定义的模块。
```

#### providers 数组

```js
该数组为当前模块提供一系列服务
```

#### bootstrap 数组

```js
应用是通过引导根模块 AppModule 来启动的，引导过程还会创建 bootstrap 数组中列出的组件，并把它们逐个插入到浏览器的 DOM 中。
该数组中的每个组件，都作为组件树的根（根组件），后续所有组件都是基于根组件的(如图)。
虽然也可以在宿主页面中放多个组件，但是大多数应用只有一个组件树，并且只从一个根组件开始引导。
这个根组件通常叫做 AppComponent，并且位于根模块的 bootstrap 数组中。
```

::: details 结构图

<img src="https://gitee.com/GiteeFXJ/picstore/raw/master/pics/20211101223938.png"/>

:::

## 二、模板基础语法

#### 1. 模板表达式

> **模版中还可以写些简单的逻辑，比如判断或运算**

```typescript
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `<h1>{{title}}</h1>
             <p> sum : {{1 + 1}}</p>
             <p>price: {{price * 0.7}}</p>
             <p>与方法结合: {{price * 0.7 + getVal()}}.</p>
`,    //内联模板
  styles: [`h1 { color: yellow }`]    //内联样式
})    
export class AppComponent {
  title = 'my-angular-title';
  price = 30
  getVal(): number {
        return 33;
  }
}
```

::: warning  <b>模板表达式遵循原则：</b>

- 非常简单
- 执行迅速
- 没有可见的副作用(即模版中的逻辑不能改变组件的变量)

:::

#### 2. 模板来源

```typescript
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] //注意： styleUrls
})
export class AppComponent {

}
```

#### 3. 属性绑定

```html
<img src="../assets/images/zorro.jpg" alt="madao" /><!-- 静态绑定-->
<img [src]="zorroSrc" alt="zorro" />     <!-- 简写形式-->
<img bind-src="zorroSrc" alt="zorro" /> <!-- 完整形式-->
<button [disabled]="isDisabled">click</button>
<!-- zorroSrc、zorro、isDisabled均为变量 -->
```

#### 4. 自定义属性绑定

```html
<p [attr.data-title]="customTitle">一行文字</p>
<p [attr.title]="customTitle">测试自定义标题属性</p>
```

#### 5. 插值表达式属性绑定

```html
<img src="{{ picUrl }}" alt="{{ picInfo }}" /> <!-- 不常用 -->
```

#### 6. 单个class样式绑定

```typescript
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
      <button type="button" class="btn" [class.btn-primary]="theme === 'primary'">Primary</button>
      <button type="button" class="btn" [class.btn-secondary]="true">secondary</button>
      <button type="button" class="btn" [class.btn-success]="isSuccess">success</button>
      <button type="button" class="btn" [class.btn-danger]="'啦啦啦'">danger</button>
      <button type="button" class="btn" [class.btn-danger]="0">danger</button>
      <button type="button" class="btn" [class.btn-danger]="undefined">danger</button>
    `,
  styles: []
})
export class AppComponent {
    theme = 'primary';
    isSuccess = true;
}
```

#### 7. 绑定多个class

```typescript
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
      <button type="button" [class]="btnCls">btnCls</button>
      <button type="button" [class]="btnCls2">btnCls2</button>
      <button type="button" [class]="btnCls3">btnCls3</button>

      <!-- 也可以用内置指令ngClass -->
      <button type="button" [ngClass]="btnCls">btnCls</button>
      <button type="button" [ngClass]="btnCls2">btnCls2</button>
      <button type="button" [ngClass]="btnCls3">btnCls3</button>
    `,
  styles: []
})
export class AppComponent {
    btnCls = 'btn btn-primary';
    btnCls2 = ['btn', 'btn-success'];
    btnCls3 = {
      btn: true,
      'btn-info': true
    };
}
```

#### 8. 绑定单个style

```typescript
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
      <p [style.color]="'##f60'">一段文字</p>
      <p [style.height]="'50px'" [style.border]="'1px solid'">设置高度</p>
      <p [style.height.px]="50" [style.border]="'1px solid'">设置高度</p>
    `,
  styles: []
})
export class AppComponent {}
```

#### 9. 绑定多个style

```typescript
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
      <p [style]="style1">style1</p>
      <p [style]="style2">style2</p>
      <p [style]="style3">style3</p>

      <!-- 内置指令ngStyle绑定, 不推荐 -->
      <!--  <p [ngStyle]="style1">style1</p>-->
      <!--  <p [ngStyle]="style2">style2</p>-->

      <!-- ngStyle只接收对象 -->
      <p [ngStyle]="style3">style3</p>
    `,
  styles: []
})
export class AppComponent {
  style1 = 'width: 200px;height: 50px;text-align: center;border: 1px solid;';
  style2 = ['width', '200px', 'height', '50px', 'text-align', 'center', 'border', '1px solid']; // 有问题
  style3 = {
    width: '200px',
    height: '50px',
    'text-align': 'center',
    border: '1px solid'
  };
```

::: warning <b>样式优先级</b>

1.某个类或样式绑定越具体，它的优先级就越高

2.绑定总是优先于静态属性

:::

#### 10. 绑定事件

```typescript
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
      <button (click)="onClick()">CLICK</button>
       <button  (click)="onClick1($event)">Primary</button>
    `,
  styles: []
})
export class AppComponent {
    onClick() {
      console.log('onClick');
    } 
    onClick1(event: MouseEvent) {
        console.log('onClick1', event.target);
    } 
}
```

#### 11. 输入与输出属性

> 输入属性：用于父组件传值给子组件（父传子）` @Input()`
> 
> 输出属性：用于子组件传值给父组件（子传父）`@Output()`

#### 输入属性`@Input`

:memo:父组件

```typescript
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
     <app-mycpn [item]="currentItem"></app-mycpn>
     <!-- <app-mycpn item="我是传入的字符串"></app-mycpn>--> <!--静态属性可不用[]包裹 -->

  `,
})
export class AppComponent {
  currentItem = 'Television';
}
```

:memo:子组件

```typescript
import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-mycpn',
  template: `<p>
               Today's item: {{item}}
             </p>`
})
export class MycpnComponent  {
  @Input() item: string;   
 //@Input('aliasItem') item: string; 提供别名，item变量只可以在本组件使用
 //相当于对父组件传入的aliasItem变量进行重命名
}
```

#### 输出属性`@Output()`

:memo:父组件

```typescript
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
     <app-mycpn  (newItemEvent)="addItem($event)"></app-mycpn>
  `,
})
export class AppComponent {
   items = ['item1', 'item2', 'item3', 'item4'];
    addItem(newItem: string) {
      this.items.push(newItem);
    }
}
```

:memo:子组件

```typescript
import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-mycpn',
  template: `<label>Add an item: <input ##newItem></label>
             <button (click)="addNewItem(newItem.value)">Add to parent's list</button>`
})
export class MycpnComponent  {
  @Output() newItemEvent = new EventEmitter<string>();
  // @Output('newItem') newItemEvent = new EventEmitter<string>();
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
}
```

> 还可以元数据中声名输入、输出属性。[（不推荐）](https://angular.cn/guide/styleguide##decorate-input-and-output-properties)

## 三、组件样式

#### 宿主选择器

>  `:host`选择是是把宿主元素作为目标的唯一方式

```md
它选中的是组件模板标签，比如<app-child></app-child>，相当于在父组件的style中使用标签选择器选择 app-child {}
```

当宿主标签上有 `active` 类名时生效

```css
:host(.active) {
  border-width: 3px solid ##ccc;
}
```

#### 祖先选择器

> 当某个祖先元素有 CSS 类 light 时，才会把 background-color 样式应用到组件内部的所有 .title 元素中，找到根元素(html标签)为止

```css
:host-context(.light) .title {
      background-color: ##bfa;
}
```

#### 样式模块化

> 在 @Component 的元数据中指定的样式只会对该组件的模板生效
> 
> 组件的样式不会影响到子组件中的模板
> 
> 组件的样式不会影响到投影内容

#### 视图封装模式

> ShadowDom -- **不进不出**，没有样式能进来，组件样式出不去, 就自己玩
> 
> Emulated  --**只进不出**， 默认选项，全局样式能进来，组件样式出不去
> 
> None  -- **能进能出**，此时组件的样式是全局生效的，注意与其他组件发生样式冲突，（对父组件样式也能生效）
