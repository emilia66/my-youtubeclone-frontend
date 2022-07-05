import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store, key } from './store'

// 项目入口
createApp(App)
  .use(store, key) // 挂载数据容器 key的作用是
  .use(router) // 挂载路由
  .mount('#app')
