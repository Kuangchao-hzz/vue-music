import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: resolve => require(['../components/recommend/recommend'], resolve)
    },
    {
      path: '/singer',
      component: resolve => require(['../components/singer/singer'], resolve)
    },
    {
      path: '/rank',
      component: resolve => require(['../components/rank/rank'], resolve)
    },
    {
      path: '/search',
      component: resolve => require(['../components/search/search'], resolve)
    }
  ]
})
