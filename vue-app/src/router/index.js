// 0. 导入vue-router的部分方法
import { createRouter, createWebHistory } from "vue-router";

// 1. 定义路由组件.
// 也可以从其他文件导入
import ArticlePage from '../components/ArticlePage.vue'
import TypeArticlePage from '../components/TypeArticlePage.vue'

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
  { 
    path: '/', 
    component: ArticlePage 
  },
  { 
    path: '/type/:type(\\d+)', 
    component: TypeArticlePage 
  },
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。
  history: createWebHistory(),
  routes, // `routes: routes` 的缩写
})

export default router