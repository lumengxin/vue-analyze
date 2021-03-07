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

### 从入口开始


