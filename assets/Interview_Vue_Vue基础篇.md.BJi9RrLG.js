import{_ as e,b as t,a,a6 as r}from"./chunks/framework.tEnFMXUz.js";const l=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Interview/Vue/Vue基础篇.md","filePath":"Interview/Vue/Vue基础篇.md"}'),o={name:"Interview/Vue/Vue基础篇.md"},n=r('<h2 id="对mvvm的理解" tabindex="-1">对MVVM的理解 <a class="header-anchor" href="#对mvvm的理解" aria-label="Permalink to &quot;对MVVM的理解&quot;">​</a></h2><p>MVVM 由 MVC 模型演变而来，M(Model)代表数据模型，V(View)代表用户操作的界面，VM(ViewModel)代表业务逻辑层，</p><p>充当数据模型与视图界面的桥梁，可以把数据绑定到页面，页面操作触发数据更新，数据修改自动触发视图更新。</p><h2 id="mixins的原理" tabindex="-1">Mixins的原理 <a class="header-anchor" href="#mixins的原理" aria-label="Permalink to &quot;Mixins的原理&quot;">​</a></h2><p>Vue 的 mixins混入 可以抽离封装Vue 组件选项达到复用的效果。</p><p><strong>data、provide</strong>：后者的值将对前者的值进行扩展，相同属性名（非对象）则以后者的属性值为准，如果两者的值是对象，但值不相等，则继续进行合并，</p><p><strong>生命周期钩子函数</strong>：将后者的生命周期钩子函数拼接到前者的生命周期钩子函数，调用时依次执行；</p><p><strong>components、filters、directives</strong>：对前者的属性进行拷贝扩展，属性相同则后者覆盖前者；</p><p>**watch：**与生命周期钩子函数类似，将后者的 watch拼接到前者的 watch后面；</p><p><strong>props、methods、inject、computed</strong>：定义一个对象 ret，遍历前者的属性或方法，对 ret进行扩展，再遍历后者的属性或方法，后者将覆盖前者的属性或方法；</p><p><strong>默认策略</strong>：策略中没有定义的策略，后者有则返回后者，否则返回前者；</p>',11),s=[n];function i(p,_,c,d,V,m){return a(),t("div",null,s)}const u=e(o,[["render",i]]);export{l as __pageData,u as default};
