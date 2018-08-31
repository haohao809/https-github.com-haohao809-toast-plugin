# vue-toast-plugin

main.js 引入

import VueToastPlugin from 'vue-toast-plugin'
Vue.use(VueToastPlugin)


Vue文件使用
toast 使用
    <VueToastPlugin message="message" :toast="true">
      <div>toast</div>
    </VueToastPlugin>
alert使用
    <VueToastPlugin message="message" :alert="true" :alertFunc="alertFunc">
      <div>alert</div>
    </VueToastPlugin>
confirm 使用
 <VueToastPlugin message="message" :confirm="true" :confirmOkFunc = "confirmOkFunc" :confirmCancelFunc = "confirmCancelFunc">
      <div>confirm</div>
 </VueToastPlugin>
confirmOkFunc 回调执行函数

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
