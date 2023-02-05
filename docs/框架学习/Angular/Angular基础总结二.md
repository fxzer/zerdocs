
## 双向绑定

### 1. 基本双向绑定

**方法一：**

:memo:父组件：

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
<app-sbind [size]="fontSizePx" (change)=" fontSizePx = $event"></app-sbind>

<p [style.font-size.px]="fontSizePx">APP 字体大小: {{fontSizePx}}px</p>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fontSizePx = 16
}

```

:memo:子组件：

```typescript
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sbind',
  template: `<div>
    <button (click)="dec()">-</button>
    <button (click)="inc()">+</button>
    <p [style.font-size.px]="size">sbind 字体大小: {{size}}px</p>
</div>`,
  styleUrls: ['./sbind.component.css']
})
export class SbindComponent implements OnInit {

  //默认值
  @Input()  size=16;
  
  @Output() change = new EventEmitter<number>();
    
  dec() {
    this.change.emit(this.size-1)
  }
  inc() {
    this.change.emit(this.size+1)
  }
    
  constructor() { }
  ngOnInit(): void {
  }
}

```

**方法二：**（联合写法）

:memo:父组件：`app.component.html`

```html
<app-sbind [(size)]="fontSizePx"></app-sbind>
<p [style.font-size.px]="fontSizePx">APP 字体大小: {{fontSizePx}}px</p>
```

:memo:父组件：`app.component.ts`

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fontSizePx = 16
}
```



:memo:子组件：`sbind.component.html`

```html
<div>
    <button (click)="dec()">-</button>
    <button (click)="inc()">+</button>
    <p [style.font-size.px]="size"> sbind 字体大小: {{size}}px</p>
</div>
```



:memo:子组件：`sbind.component.ts`

```typescript
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sbind',
  templateUrl: './sbind.component.html',
  styleUrls: ['./sbind.component.css']
})
export class SbindComponent implements OnInit {

  //默认值
  @Input()  size=16;
  
  // 双向绑定语法：output变量名=输入属性名+Change
  @Output() sizeChange = new EventEmitter<number>();
  constructor() { }

  dec() {//减
    this.sizeChange.emit(this.size-1)
  }
  inc() {//加
    this.sizeChange.emit(this.size+1)
  }
  ngOnInit(): void {
  }
}
```



### 2. input双向绑定

**普通写法：**

```typescript
<input type ="text" [value]="inputVal" (input)="inputVal = $event.target.value">
<p>{{inputVal}}</p> //默认值 inputVal=''
```

**简写形式：**

::: warning 

**ngMoel 指令来源于FormsModule模块**  

`[(ngMoel)]`可拆解为：

1. 名为ngModel的输入属性

2. 名为ngModelChange的输出属性

:::



```html
<input type ="text" [(ngMoel)] ="inputVal">
<p>{{inputVal}}</p> //默认值 inputVal=''
<!-- <input type="text" [ngModel] = "inputVal" (ngModelChange) ="inputVal= $event">
<p>{{inputVal}}</p> 完整写法-->

```

### 3. 表单Form中双向绑定

 ::: tip 

表单中使用[(ngModel)]，满足下列两个条件之一：

- 给控件加上name属性
- 将ngModelOptions.standalone设为true

:::

```html
 <form>
    <input [(ngModel)]="value" name="name" />
    <input [(ngModel)]="value" [ngModelOptions]="{ name: 'name' }" />
    <input [(ngModel)]="value" [ngModelOptions]="{ standalone: true }" />
    <input [(ngModel)]="value" [ngModelOptions]="{  name: 'name' ,standalone: true }" />
  </form>
```



::: details ngModel拓展

```typescript
@ViewChild(NgModel) private ngModel : NgModel;
getVal(){
    console.log(this.ngModel.viewModel)//获取[(ngModel)]所绑定input的值
}
setVal(){
    this.ngModel.viewToModelUpdate( 'newValue')//赋值（不太好使）
}
```

:::

## 属性型指令

> 指令：**用于改变DOM元素的外观或行为的指令**（组件是一种特殊的指令）

::: details  组件改为属性型指令

:memo:AppComponent

```html
<div app-for>dasfsada</div>
```

```typescript
import {Component} from '@angular/core';
@Component({
  selector: '[app-decr]',//属性选择器
  template: `   
  `,
})
export class DecrComponent {
  constructor() {}
}
```

:::



## 结构型指令

### `*ngIf`指令

```html
 <p *ngIf="isShow">一段文字 {{ isShow }}</p> 
<!-- <p *ngIf="isShow as s">一段文字 {{ s }}</p> 局部变量：只能在标签内部使用-->
isShow:true显示，反之（取决于绑定的值是否为真）
```

::: warning 

会改变DOM结构，原理：移除和插入DOM节点

:::

::: details *ngIf  完整写法

```html
 <ng-template [ngIf]="isShow" let-s>
     <p *ngIf="isShow">一段文字 {{ isShow }} {{s}}</p> 
 </ng-template>
```



:::

**ngIfElese**

```typescript
import {Component} from '@angular/core';
@Component({
  selector: 'app-if',
  template: `
    <div *ngIf="condition; else elseBlock">condition为真时显示</div>

    <ng-template ##elseBlock> 
      <p> condition为假时显示 </p>
    </ng-template>
  `,
}) // ##elseBlock:模板的引用
export class IfComp {
  condition = true;
}
```

**ngIfThen**

```typescript
import {Component} from '@angular/core';
@Component({
  selector: 'app-if',
  template: `
    <div *ngIf="condition; then thenBlock else elseBlock"></div>
    <ng-template ##thenBlock> condition为true时显示</ng-template>
    <ng-template ##elseBlock> condition为false时显示</ng-template>
  `,
})//只会显示一个ng-template，第一个div只是用于承载，并不会显示
export class IfComp {
  condition = true;
}
```

::: details    TemplateRef拓展

```typescript
import {Component, OnInit, ChangeDetectionStrategy, ViewChild, TemplateRef, AfterViewInit} from '@angular/core';
@Component({
  selector: 'app-if',
  template: `
    <button(click)="condition = !condition">toggle block</button>
    <p *ngIf="condition else elseBlocks">{{ condition }} === true 时显示</p>
    
	<ng-template ##firstTpl>
      <p>{{ condition }} === false 时显示</p>
    </ng-template>
  `,
})
export class IfComponent implements OnInit, AfterViewInit {
  elseBlocks: TemplateRef<any> = null; //获取组件的变量elseBlocks
  @ViewChild('firstTpl', {static: true}) primaryBlock: TemplateRef<any> = null;
  condition = false;
  constructor() {

  }
  ngOnInit(): void {
    console.log('ngOnInit', this.primaryBlock);
    this.elseBlocks = this.primaryBlock;
   //获取到##firstTpl模板引用赋值给elseBlocks变量
  }
}
//运行效果和ngIfElese案例一样
```

:::

### `*ngFor`指令

```typescript
import {Component} from '@angular/core';

@Component({
  selector: 'app-for',
  template: `
    <ul>
      <li *ngFor="let item of Persons; 
			index as i; count as len; let ev = even; let od = odd; let f = first; let l = last;
			trackBy: trackByPerson">{{ item.name }}</li>
    </ul>
  `,
})
export class ForComponent {
     Persons = [
  {
    id: 'p1',
    name: '张三'
  },
    {
    id: 'p2',
    name: '李四'
  },
    {
    id: 'p3',
    name: '王五'
  },
  
];
trackByPerson(index,item){
    return item.id	//追踪id，id值不变不刷新（提升性能）
  }
}
```

::: details ngFor局部变量

```js
 index: number	//可迭代对象中当前条目的索引。
 count: number	//可迭代对象的长度。
 first: boolean	//如果当前条目是可迭代对象中的第一个条目则为 true。
 last: boolean	//如果当前条目是可迭代对象中的最后一个条目则为 true。
 even: boolean	//如果当前条目在可迭代对象中的索引号为偶数则为 true。
 odd: boolean	//如果当前条目在可迭代对象中的索引号为奇数则为 true。
 $implicit: T	//迭代目标（绑定到ngForOf）中每个条目的值。
 ngForOf: NgIterable<T>	//迭代表达式的值。当表达式不局限于访问某个属性时，这会非常有用，比如在使用 async 管道时（userStreams | async）。
```



:::



::: details  *ngFor展开写法

```html
 <ul>
     <ng-template
       ngFor
       [ngForOf]="heros"
       [ngForTrackBy]="trackByHero"
       let-item
       let-i="index"
       let-od="odd"
       let-ev="even"
       let-len="count"
       let-f="first"
       let-l="last">
       <li [class.even]="ev" [class.odd]="od">
         <p>index: {{ i }}</p>
         <p>count: {{ len }}</p>
         <p>name: {{ item.name }}</p>
         <p>first: {{ f }} -- last: {{ l }}</p>
         <hr>
       </li>
     </ng-template>
   </ul>
```



:::



### `[ngSwitch]`指令

::: warning 

`[ngSwitch]` 为属性型指令

`*ngSwitchCase`为结构型指令

:::

```typescript
import {Component} from '@angular/core';
@Component({
  selector: 'app-switch',
  template: `
    <p>
      <input type="radio" name="fruit" value="apple" id="apple" [(ngModel)]="fruit" />
      <label for="apple">🍎</label>
    </p>
    <p>
      <input type="radio" name="fruit" value="pear" id="pear" [(ngModel)]="fruit" />
      <label for="pear">🍐</label>
    </p>
    <p>
      <input type="radio" name="fruit" value="grape" id="grape" [(ngModel)]="fruit" />
      <label for="grape">🍇</label>
    </p>
    <p>
      <input type="radio" name="fruit" value="other" id="other" [(ngModel)]="fruit" />
      <label for="other">other</label>
    </p>
    
    selected fruit: {{ fruit }}
    
    <div class="content" [ngSwitch]="fruit">
      <p *ngSwitchCase="'apple'">这是 苹果</p>
      <p *ngSwitchCase="'pear'"> 这是 梨</p>
      <p *ngSwitchCase="'grape'">这是 葡萄</p>
      <p *ngSwitchDefault>啥都不是</p>
    </div>
  `,
})
export class SwitchComponent {
  fruit = '';
}
```

::: details [ngSwitch]展开写法

```typescript
 <div class="content" [ngSwitch]="fruit">
       <ng-template ngSwitchCase="apple">
         <p>这是苹果</p>
       </ng-template>
       <ng-template ngSwitchCase="pear">
         <p>这是梨</p>
       </ng-template>
       <ng-template ngSwitchCase="grape">
         <p>这是葡萄</p>
       </ng-template>
       <ng-template ngSwitchDefault>
         <p>啥都不是</p>
       </ng-template>
     </div>
```



:::







## 自定义指令

使用：

```html
<p appHighlight highlightColor ='red'></p>
<p appHighlight [highlightColor] ='color'></p>
<p appHighlight='color'></p> <!-- 起别名后，输入属性和指令名设为一样-->
```

### 自定义高亮指令（属性型）

```typescript
import {Directive, ElementRef, EventEmitter, HostListener, Input, Output} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() highlightColor: string;
 // @Input('appHighlight') highlightColor: string;起别名
  @Output() colorChange = new EventEmitter<string>();
    //1.获取dom
  constructor(private el: ElementRef) {
    console.log('appHighlight');
  }
   
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || 'yellow');
  }
	//内部事件监听
  @HostListener('mouseleave',['$event']) onMouseLeave() {
    this.highlight('');
      console.log(event)	//传递事件对象
  }

  private highlight(color: string) {
      //2.操作dom (操作dom备用选择)
    this.el.nativeElement.style.backgroundColor = color;
    this.colorChange.emit(color);
  }
}
```

::: tip <b>相对于原生事件监听 addEventListener()  的优点 ：</b>

1. 会自动销毁，不会导致内存泄漏

2. 不用必须确保每个DOM API都能用

:::



### 自定义unless指令（结构型）

::: details 定义

```typescript
import {Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef} from '@angular/core';
export class UnlessContext<T = unknown> {
  $implicit: T = null;
  appUnless: T = null;
  attr: T = null;
}
@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective implements OnChanges {
  @Input('appUnless') unless: boolean;
  private hasView = false;//是否已显示
  private context = new UnlessContext();
  
  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {
    // console.log(this.templateRef);
    // console.log(this.viewContainer);
  }
	//监听输入属性变化
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['unless']) {
    this.context.$implicit = this.context.appUnless = this.unless;
    this.context.attr = 'aaab';
      if (this.unless) {
        if (this.hasView) {
          this.viewContainer.clear();
          this.hasView = false;
        }
      } else {
        if (!this.hasView) {
          // 这里使用的构造提供的模版（this.templateRef）
          // 实战中可以通过一个input属性传入模版
          this.viewContainer.createEmbeddedView(this.templateRef, this.context);
          this.hasView = true;
        }
      }
    }
  }
}
```



:::

::: details 调用

```typescript
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
     <section>
       <h3>unless</h3>
       <button  (click)="showUnless = !showUnless">toggle unless {{ showUnless }}</button>
       <p *appUnless="showUnless">测试unless driective -- {{ showUnless }}</p>
       <p *appUnless="showUnless as un">测试unless driective alias un -- {{ un }}</p>
       <p *appUnless="showUnless; let un; let attr=attr;">别名：  {{ un }} attr: {{ attr }}</p>
     </section>
  `,
})
export class AppComponent {
  show = false;	//false: 显示 	true: 隐藏
}
```

:::

## 模板元素

### `ng-template`

```html
<ng-template>是一个 Angular 元素，用来渲染 HTML。 它永远不会直接显示出来。
事实上，在渲染视图之前，Angular 会把 <ng-template> 及其内容替换为一个注释。
```



::: warning

没有使用结构型指令，ng-template中的元素是不可见的

:::

### `ng-container`

```html
Angular 的 <ng-container> 是一个分组元素，但它不会污染样式或元素布局，因为 Angular 压根不会把它放进 DOM 中。
<ng-container> 是一个由 Angular 解析器负责识别处理的语法元素。 它不是一个指令、组件、类或接口，更像是 JavaScript 中 if 块中的花括号。
```

```js
if (someCondition) {
  statement1;
  statement2;
  statement3;
}
```

### 模板引用变量

> 使用井号（##）声明模板引用变量，可以获取DOM 元素、指令、组件、TemplateRef 或 Web Component。

```typescript
import {Component} from '@angular/core';
@Component({
  selector: 'app-tpl-var',
  template: `
    <input ##phone placeholder="phone number" />
 	<input ref-phone placeholder="phone number" />
    <button (click)="callPhone(phone.value)">Call</button>
  `,
})	//两种写法
export class TplVarComponent {
  constructor() { }
  callPhone(value: string) {
    console.log('callPhone', value);
  }
}
```

> 在外部获取组件引用，绑定组件内方法

```typescript
import {Component} from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
    
      <button (click)="sizer.inc()">app inc</button>
      <app-sbind [(size)]="size" ##sizer></app-sbind>
      size: {{ size }}
    
  `,
})
export class AppComponent {
  size = 16;
  constructor() { }
}
```

## 操作符

### 管道 `|`

::: warning 

模板变量可以通过一条或多条管道格式化数据，

默认的管道都是纯的，Angular 会忽略复合对象中的变化，即管道只会检查原始值或对象引用，

如果数组中的元素变化，增删改，引用没有变化，而不会执行管道的逻辑。

:::

|                           管道名称                           |                作用                 |
| :----------------------------------------------------------: | :---------------------------------: |
|      [DatePipe](https://angular.cn/api/common/DatePipe)      |             格式化日期              |
|   [DecimalPipe](https://angular.cn/api/common/DecimalPipe)   |    数字转字符串，并可以指定格式     |
|  [KeyValuePipe](https://angular.cn/api/common/KeyValuePipe)  |   使ngFor可以循环Object或Map对象    |
|      [JsonPipe](https://angular.cn/api/common/JsonPipe)      |          将值转成json格式           |
| [TitleCasePipe](https://angular.cn/api/common/TitleCasePipe) |       把首字母大写，其它小写        |
|     [SlicePipe](https://angular.cn/api/common/SlicePipe)     |          截取Array或String          |
|   [PercentPipe](https://angular.cn/api/common/PercentPipe)   |            数字转百分比             |
| [LowerCasePipe](https://angular.cn/api/common/LowerCasePipe) |             转化为小写              |
| [UpperCasePipe](https://angular.cn/api/common/UpperCasePipe) |             转化为大写              |
|     [AsyncPipe](https://angular.cn/api/common/AsyncPipe)     | 自动订阅模板中的Observable或Promise |

### 安全链`?`

> 用于可能为空的引用需要使用时，对null、undefined进行保护，保证数据请求前能正常渲染模板

```html
<p>{{person?.name}}</p>
```

### 非空断言`!`

::: danger

在ts中，开启--strictNullChecks后，将一个可能是undefined或null的变量赋给一个有确切类型的变量时，会报错。在特定情况下，我们断定变量一定不是undefined或null，就可以使用非空断言操作符。

:::

> **使用非空断言的两个步骤：**
>
> tsconfig.json中设置`"strictNullChecks": true`
>
> tslint.json中设置` "no-non-null-assertion": false`

### 类型转换函数`$any()`

> 绑定的表达式不能或很难指定类型时使用

假设无法确定item的类型，也就不能确定item是否有bestByDate，这时就会报错。

可以用$any()把item视为any类型，避免其报错（也可以用这个函数绑定组件中不存在的变量）

```typescript
<p> {{$any(item).bestByDate}}</p>
```

