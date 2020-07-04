import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import ArticleList from '@/components/ArticleList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: index,
      hidden: true,
    },
    {
      path: '/index',
      component: index,
      name: '文章管理',
      iconCls: 'fa fa-file-text-o',
      children: [
        {
          path: '/articleList',
          name: '文章列表',
          component: ArticleList,
          meta: {
            keepAlive: true
          }
        }
      ]
    }
  ]
})
