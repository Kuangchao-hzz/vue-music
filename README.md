# wechat

## 优化方案
1) 整理开发环境中功能相同的加载器(eg: less-load & sass-load)，统一编译风格。
2) 重新组织项目样式，规范样式代码 **【具体见下方的目录结构】**
3) 规定样式单位rem，自适应浏览器窗口
4) 重新组织API接口，将所有接口方法统一写在一个文件夹里面，方便管理。
5) 重新设计项目路由，将项目功能模块、逻辑模块、通用模块、业务模块等区分开
6) 删除功能相似的第三方库，减小打包后文件大小。(eg vue-resource(从vue2.0开始 官方宣布不在维护这个库))
7) 升级vue-cli编译版本，加快编译速度，提升开发效率
8) 加入es-Lint代码验证，强制规范代码风格

## 优化后目录结构

```shell
├── build                      // 构建相关  
├── config                     // 配置相关
├── src                        // 源代码
│   ├── api                    // 所有请求
│     ├── config.js            // 接口方法配置文件以及接口返回状态码
│   ├── assets                 // 主题 字体等静态资源
│     ├── fonts                // 字体等静态资源
│     ├── images               // 静态图片资源
│     ├── css                  // 通用样式文件
│       ├── index.scss         // 引入文件
│       ├── base.scss          // 公共样式文件
│       ├── varialble.scss     // 样式变量文件
│       ├── mxmin.scss         // 样式方法文件
│   ├── components             // 全局公用组件
│       ├── ...                // 通用、功能、业务组件文件
│   ├── directive              // 全局指令
│   ├── router                 // 路由
│     ├── index.js             // 路由配置文件
│   ├── store                  // 全局store管理
│   ├── utils                  // 全局公用方法
│   ├── views                  // 页面组件
        ├── ...                // 业务逻辑组件
│   ├── App.vue                // 入口页面
│   └── main.js                // 入口 加载组件 初始化等
├── static                     // 第三方不打包资源
├── .babelrc                   // babel-loader 配置
├── eslintrc.js                // eslint 配置项
├── .gitignore                 // git 忽略项
├── favicon.ico                // favicon图标
├── index.html                 // html模板
└── package.json               // package.json
```
        

> tanrey H5 webapp

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
