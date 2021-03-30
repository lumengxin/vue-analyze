# Vue源码分析(v2.6.12)

## 准备工作

### 认识Flow

[Flow](https://flow.org/)是Facebook出品的JavaScript静态类型检查工具。

通常类型检查分成2中方式：类型推断、类型注释。

### vue源码目录

-src
  - compiler  # 编译相关
  - core      # 核心代码
  - platforms # 不同平台的支持
  - server    # 服务端渲染
  - sfc       # .vue文件解析
  - shared    # 共享代码

### vue源码构建

Vue.js源码基于[Rollup](http://rollupjs.org/guide/en/)构建的，构建相关配置都在script目录下。

构建过程：build.js -> config.js -> alias.js

vue-cli初始化项目会询问使用Runtime Only版本还是Runtime+Compiler版本。
- Runtime Only：只包含运行时的vue代码，体积轻
- Runtime+Compiler：写template属性，需要编译成render函数，对性能有损耗

## 数据驱动

数据驱动，是指视图是有数据驱动生成的，我们对视图的修改，不会直接操作dom,而是通过修改数据。

采用简洁的模板语法来声明式的将数据渲染到dom
```
<div id="app">
  {{ msg }}
</div>

// new Vue 执行 core/instance/index.js中构造函数 -> init.js初始工作(定义uid,合并options...)
var app = new Vue({
  el: '#app',
  data: {
    msg: 'hello vue'
  }
})
```
### new Vue执行
执行顺序：source\vue\src\core\instance\state.js
props - methods - data - computed - watch

### 实例挂载

编译过程：source\vue\src\platforms\web\entry-runtime-with-compiler.js

render()函数 $mount方法

### render

source\vue\src\core\instance\render.js

返回一个VNode

### Virtual DOM

浏览器dom是非常‘昂贵’的，真正的dom元素是非常庞大的，频繁去做dom更新，会产生一定的性能问题。

Virtual DOM是一个原生的js对象去描述一个DOM节点，代价小。用VNode这么一个Class去描述，定义在`src/core/vdom/vnode.js`中。

vue利用createElement方法创建VNode,定义在`source\vue\src\core\vdom\create-element.js`

### update

_update是实例的一个私有方法，调用的时机，首次渲染、数据更新。

作用是把VNode渲染成真是的DOM，定义在`source\vue\src\core\instance\lifecycle.js`


## 组件化

## 响应式原理

## 编译

## 扩展


