## 组件投影

:memo:shadow.component.html

```html
<p>    shadow works!
    <ng-content select=".head"></ng-content>
    <ng-content select="[attr-content]"></ng-content>
    <ng-content select="section"></ng-content>
</p>
```

:memo:app.component.html

```html
<!-- 组件投影 -->
<app-shadow>
    <p class="head">头部投影内容</p>
    <section>标签选择器投影内容</section>
    <p attr-content>自定义属性选择器投影内容</p>
</app-shadow>
```

:medal_military:结果展示

<img src="https://gitee.com/GiteeFXJ/picstore/raw/master/pics/20211106153131.png"/>

## ViewChild

:memo:parent.component.ts

```typescript
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
        export class ParentComponent implements OnInit,AfterViewInit {

  // @ViewChild('box',{static:true}) private box:ElementRef //获取dom
  // @ViewChild(ChildComponent,{static:true}) private instance:ChildComponent  //获取子组件方式一
  @ViewChild('childcomponent',{static:true}) private childInstance:ChildComponent //获取子组件实例方式二

  constructor() { //执行秩序（1）
    // console.log('constructor',this.box);
    // console.log('constructor',this.instance?.childdata);
    // console.log('constructor',this.childInstance?.childdata);
    console.log('constructor',this.childInstance);

  }
  ngOnInit(): void {//（2）
    // console.log('ngOnInit',this.box.nativeElement);
    // console.log('ngOnInit',this.instance.childdata);
    console.log('ngOnInit',this.childInstance);
    // console.log('ngOnInit',this.childInstance.childdata);

  }
  ngAfterViewInit(): void { //（3）在变更检测后执行，能保证获取到元素
    //  console.log('ngAfterViewInit',this.box.nativeElement);
    //  console.log('ngAfterViewInit',this.instance.childdata);
     console.log('ngAfterViewInit',this.childInstance.childdata);

  }
```

## ViewChildren

:memo:parent.component.html

```html
<!-- ViewChildren批量获取元素和组件 -->
<div class="boxs" #boxs>mybox</div>
<div class="boxs" #boxs>mybox</div>
<div class="boxs" #boxs>mybox</div>
<app-child></app-child>
<app-child></app-child>
<app-child></app-child>
```

:memo:parent.component.ts

```typescript
import { AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit,AfterViewInit {

  // ViewChildren批量获取元素和组件
  @ViewChildren(ChildComponent) private childs:QueryList<ChildComponent>
  @ViewChildren('boxs') private childs1:QueryList<ChildComponent>
  constructor() { 
  }
  ngOnInit(): void {
  }
  ngAfterViewInit(): void { //（3）
     console.log(this.childs);
     console.log(this.childs1);  //输出QueryList数组 
      //QueryList中监听子组件变化的回调函数
     this.childs1.changes.subscribe((changes)=>{
       console.log(changes);

      })
  }
}
```

## ContentChild

> 获取投影中的dom元素、指令、组件

:memo:content-parent.html

```html
<app-content-child>
    <div class="head" #head>head</div>
    <div class="main">main</div>
    <div class="footer">footer</div>
    <app-content-box #cbox></app-content-box>
    <app-content-box #cbox></app-content-box>
    <app-content-box #cbox></app-content-box>
    <app-content-box #cbox></app-content-box>
</app-content-child>
```

📝content-child.html

```html
<p>content-child works!</p>
<ng-content></ng-content>
```

:memo:content-child.ts

```typescript
import { AfterViewInit, Component, ContentChild, ElementRef, OnInit } from '@angular/core';
import { ContentBoxComponent } from '../content-box/content-box.component';

@Component({
  selector: 'app-content-child',
  templateUrl: './content-child.component.html',
  styleUrls: ['./content-child.component.css']
})
export class ContentChildComponent implements OnInit,AfterViewInit {
  @ContentChild('head',{static:true}) private head:ElementRef //获取投影中的dom元素
  @ContentChild(ContentBoxComponent) private contentbox:ElementRef //获取组件
  @ContentChild('cbox',{static:true}) private cbox:ElementRef // 有多个只会获取第一个
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    console.log(this.head);
   console.log(this.contentbox);
    console.log(this.cbox);

  }
}
```

## ContentChildren

> **用法类似ViewChildren, 批量获取投影中到组件或指令。**
> 
> **默认只批量获取直属组件，获取所有组件需开启：{ descendants: true }**

:memo:content-parent.html

```html
<p>content-parent works!</p>
<app-content-child>
    <app-content-box #cbox></app-content-box>
    <app-content-box #cbox></app-content-box>
    <app-content-box #cbox></app-content-box>
    <app-content-box #cbox></app-content-box>
    <div class="container">
        <app-content-box #cbox></app-content-box>
        <app-content-box #cbox></app-content-box>
    </div>
</app-content-child>
```

:memo:content-child.ts

```typescript
import { AfterViewInit, Component,ContentChildren,OnInit, QueryList } from '@angular/core';
import { ContentBoxComponent } from '../content-box/content-box.component';

@Component({
  selector: 'app-content-child',
  templateUrl: './content-child.component.html',
  styleUrls: ['./content-child.component.css']
})
export class ContentChildComponent implements OnInit,AfterViewInit {
    //ContentChildren没有{static:true}属性
  @ContentChildren(ContentBoxComponent) private cboxs:QueryList<ContentBoxComponent>
  @ContentChildren('cbox',{descendants: true}) private cboxss:QueryList<ContentBoxComponent>
   constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    console.log(this.cboxs);//只获取直属投影组件
    console.log(this.cboxss);//获取全部投影组件   
  }
}
```

## 自定义管道

```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipepow'
})
export class PipepowPipe implements PipeTransform {

  transform(value: number, exponent?: number): number {
      //value:底数    exponent:指数
    return Math.pow(value,isNaN(exponent) ? 1: exponent);
  }
}
```

> 在相应的Module中导入并使用

```html
<div> {{8| pipepow}}</div>
<div> {{8| pipepow:3}}</div>
<div> {{value | pipepow:2}}</div>
<div>Boost factor: <input [(ngModel)]="factor"></div>
<div>Normal power: <input [(ngModel)]="power"></div>
<div> {{factor | pipepow:power}}</div>
```

## 非纯管道

> 默认的管道都是纯的，Angular 会忽略复合对象中的变化，即管道只会检查原始值或对象引用

::: warning

可如果数组中的元素变化，增删改，由于引用没有变化，不会执行变更检测，所以不会执行管道的逻辑

:::

::: details Pipe2Pipe

```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe2',
  pure: false //非纯管道开启方式一
})
export class Pipe2Pipe implements PipeTransform {

  transform(allheros: any): any { //赛选会飞的英雄
    return allheros.filter((item) => item.canFly);
  }

}
```

:::

::: details  AppComponent

```typescript
import { Component } from '@angular/core';
interface Hero {
  id: string;
  name: string;
  canFly?: boolean;
}

const HEROES = [
              {
                id: 'hero_0',
                name: '盖伦',
                canFly: false
              },
              {
                id: 'hero_1',
                name: '赵信',
                canFly: false
              },
              {
                id: 'hero_2',
                name: '嘉文',
                canFly: false
              },
              {
                id: 'hero_3',
                name: '易大师',
                canFly: false
              },
              {
                id: 'hero_3',
                name: '泰达米尔',
                canFly: true
              }
          ];
@Component({
  selector: 'app-root',
  template: `
     <input type="text" #box (keyup.enter)="addHero(box.value)" placeholder="hero name" />
     <button (click)="reset()">Reset</button>
     <div *ngFor="let hero of (heroes | pipe2)">
       {{hero.name}}
     </div>
  `,
})
export class AppComponent {
    heroes: Hero[] = [];
     canFly = true;
     constructor() {
       this.reset();
     }

     ngOnInit(): void {
     }
     addHero(name: string) {
       name = name.trim();
       if (name) {
         // 不改变引用没有用
         this.heroes.push({ id: 'flier_' + Date.now(), name, canFly: this.canFly });
        // 开启非纯管道方式二、改变引用，触发变更检测
        // this.heroes = [...this.heroes,{id:'flier'+Date.now(),name,canFly:this.canFly}]
       }
     }

   reset() { this.heroes = HEROES.slice(); }
}
```

:::

## 生命周期

> 生命周期函数：组件创建、组件更新、组件销毁的时候会触发的一系列的方法。
> 
> 当 Angular 使用构造函数新建一个组件或指令后，就会按下面的顺序在特定时刻调用这些 生命周期钩子函数。

<img src="https://gitee.com/GiteeFXJ/picstore/raw/master/pics/20211106200214.png"/>

::: details 所有生命周期钩子函数执行顺序

```typescript
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, 
        DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,
        AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{
  constructor(){} //组件初始化，写简单的逻辑和数据初始化操作，（获取不到最新输入属性值）
  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes ', changes); 
      //可最早获取到输入属性最新值，输入属性更新时触发，但组件内部改变输入属性是不会触发的
  }
  ngOnInit(): void {
    console.log('ngOnInit '); //适合请求数据初始化组件，只调用一次
  }
  ngDoCheck(): void {
    console.log('ngDoCheck ');
  }

  ngAfterContentInit(): void {
      //在组件内容初始化之后调用，只调用一次。
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
      //组件每次检查内容时调用
    console.log('ngAfterContentChecked ');
  }

  ngAfterViewInit(): void {
      //组件相应的视图初始化之后调用，只调用一次。
    console.log('ngAfterViewInit ');
  }

  ngAfterViewChecked(): void {
      //组件每次检查视图时调用
    console.log('ngAfterViewChecked');

  }

  ngOnDestroy(): void {
    //指令销毁前调用,适合理一些残存的状态操作：
    //取消订阅可观察对象和 DOM 事件、停止 interval 计时器、
    //反注册该指令在全局或应用服务中注册过的所有回调
    console.log('ngOnDestroy');
  }

}
```

::: 

<img src="https://gitee.com/GiteeFXJ/picstore/raw/master/pics/20211106202053.png"/>

> 当组件、父组件发生变更检测后都会调用这三个钩子：
> 
> 模板中的DOM事件触发就会进行变更检测（`<input (input)="$event">`）
> 
> ngDoCheck
> ngAfterContentChecked
> ngAfterViewChecked

- **指令与组件共有的钩子**
  - ngOnChanges
  - ngOnInit
  - ngDoCheck
  - ngOnDestroy
- **组件特有的钩子**
  - ngAfterContentInit
  - ngAfterContentChecked
  - ngAfterViewInit
  - ngAfterViewChecked

## 变更检测

## 默认策略下触发变更检测的时机

```typescript
changeDetection:ChangeDetectionStrategy.Default
```

- 事件：页面 click、submit、mouse down……
- XHR：从后端服务器拿到数据
- 定时器：setTimeout()、setInterval()

> 只要某个组件触发了以上中的一个，就会从顶级组件从上至下开始进行变更检测，每个组件都会进行变更检测，
> 
> 检测组件中的值是否应该改变

::: warning  <b>注意</b>

已经检测完的组件，不允许在被子组件修改，(子组件不能修改检测完的父组件数据)，这就是单向数据流

:::

<img src="https://gitee.com/GiteeFXJ/picstore/raw/master/pics/20211101223945.png"/>

## onPush下触发变更检测时机

```typescript
changeDetection:ChangeDetectionStrategy.OnPush
```

::: warning 

onPush策略会把组件从组件树中剥离出去，他和他的子组件都不会检测了；

定时器会触发变更检测，但是依然会跳过onPush策略组件。

:::

::: tip

- 组件的@Input引用发生变化。
- 组件的 DOM 事件，包括它子组件的 DOM 事件，比如 click、submit、mouse down。
- Observable 订阅事件，同时设置 Async pipe。
- 手动调用：ChangeDetectorRef.detectChanges()、ChangeDetectorRef.markForCheck()、ApplicationRef.tick()方法

```js
markForCheck() //把该视图显式标记为已更改（脏的），以便它下一轮再次进行检查。
detectChanges() //检查该视图及其子视图。与 detach 结合使用可以实现局部变更检测。(强行检测)
```

:::

<img src="https://gitee.com/GiteeFXJ/picstore/raw/master/pics/20211106210242.png"/>

## 动态组件

> 如果说，之前在模版中调用的组件为静态组件（比如：app-xxx）
> 
> 那么不用在模版里声明，而是通过ts动态插入到dom中到组件，可以视为动态组件

:memo:alert.component.ts:

```typescript
import {Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter} from '@angular/core';
type AlertTheme = 'primary' | 'danger' | 'warning';

export interface AlertOption {
  content: string;
  theme?: AlertTheme;
}

@Component({
  selector: 'app-alert',
  template: `
    <div [class]="wrapCls" role="alert">
      <span class="content">{{ options.content }}</span>
      <i class="close" (click)="closed.emit()">×</i>
    </div>
  `,
  styles: [`
    .close {
      display: block;
      width: 20px;
      height: 20px;
      position: absolute;
      right: 10px;
      top: 50%;
      margin-top: -10px;
      cursor: pointer;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertComponent implements OnInit {
  options: Required<AlertOption> = {
    content: '',
    theme: 'primary'
  }

  @Output() closed = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {}

  get wrapCls(): string {
    return 'alert alert-' + this.options.theme + ' fixed-top';
  }

  setOptions(options: AlertOption) {
    this.options = { ...this.options, ...options };
  }
}
```

> 调用 `alert.component`

```typescript
import {ApplicationRef, Component, ComponentFactoryResolver, ComponentRef, EmbeddedViewRef, Injector, OnInit} from '@angular/core';
import {AlertComponent} from '../../components/alert/alert.component';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.scss']
})
export class ShowDataComponent implements OnInit {
  private container: AlertComponent;
  private componentRef: ComponentRef<AlertComponent>;
  constructor(
    private cfr: ComponentFactoryResolver,
    private inject: Injector,
    private appRef: ApplicationRef
  ) {}

  ngOnInit(): void {

  }

  showAlert() {
    if (!this.container) {
      this.container = this.getContainer();
    }

    // 调用组件的某个方法执行逻辑，比如下面这个传参
    this.container.setOptions({ content: '一段提示', theme: 'warning' });
  }

  private getContainer(): AlertComponent {
    // 创建指定类型的组件工厂（生产指定类型的组件）
    const factory = this.cfr.resolveComponentFactory<AlertComponent>(AlertComponent);

    // 根据指定的类型，创建组件的示例
    this.componentRef = factory.create(this.inject);

    // 将组件试图添加到试图树中，以激活变更检测
    this.appRef.attachView(this.componentRef.hostView);

    // 将组件到模版(包括app-alert标签)，添加到body最后
    document.body.appendChild((this.componentRef.hostView as EmbeddedViewRef<{}>).rootNodes[0] as HTMLElement);

    // 监听组件销毁事件
    this.componentRef.onDestroy(() => {
      console.log('componentRef destory');
    });

    // 获取组件实例，相当于用@ViewChild获取子组件一样
    const { instance } = this.componentRef;

    // 监听组件到output事件
    instance.closed.subscribe(() => {
      this.componentRef.destroy();
      this.container = null;
    });

    return instance;
  }
}
```

> v9和v10，动态组件都不需要entryComponents了，当然写了也没有问题
> 从v11开始，entryComponents可能被删除
> v8及以前，动态组件一定要声明entryComponents

## NgTemplateOutlet指令

> NgTemplateOutlet是一个结构型指令

:memo:app.component.html

```html
<app-tmp-outlet [render]="mycontent"></app-tmp-outlet>
<ng-template #mycontent>
    <div>一段父组件传入的内容</div>
</ng-template>

<!--使用tem-outlet组件中的数据-->
<ng-template #mycontent let-context let-val="value">
    <div>一段父组件传入的内容</div>
    <div>使用outlet中的context:{{context}}</div>
    <div>使用outlet中的value:{{val}}</div>
</ng-template>
```

:memo:tmp-outlet.component.html

```html
<p>tmp-outlet works!</p>
<ng-container [ngTemplateOutlet]="render || default"></ng-container>

<!--传递出去tem-outlet组件中的数据-->
<ng-container [ngTemplateOutlet]="render || default" [ngTemplateOutletContext]="myContext"></ng-container>
<!-- <ng-container *ngTemplateOutlet="render || default ;context:myContext"></ng-container>简写 -->

<!--ng-template使用效果一样 -->
<ng-template [ngTemplateOutlet]="render || default" [ngTemplateOutletContext]="myContext"></ng-template>
<ng-template *ngTemplateOutlet="render || default ;context:myContext"></ng-template>
<ng-template #default>
    <div>一段组价默认的内容</div>
</ng-template>

<!-- context在内部ng-template也可以绑定 -->
<ng-template #default let-context let-val="value">
    <div>一段组价默认的内容</div>
    <div> context:{{context}}</div>
    <div> value:{{val}}</div>
</ng-template>
```

:memo:tmp-outlet.component.ts

```typescript
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tmp-outlet',
  templateUrl: './tmp-outlet.component.html',
  styleUrls: ['./tmp-outlet.component.css']
})
export class TmpOutletComponent implements OnInit {

  @Input()  render 
  myContext = {$implicit: 'tmp-outlet组件里的context', value: 'tmp-outlet组件里的value'};
  constructor() { }

  ngOnInit(): void {
  }

}
```
