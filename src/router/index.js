import Vue from 'vue'
import Router from 'vue-router'
import Blog from '../components'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [{
    path: '/',
    name: 'feed',
    component: Blog,
    meta: {
      // 页面标题title
      title: '翡翠丝带健康知识科普'
    }
  }, {
    path: '/by/:author',
    name: 'author',
    props: true,
    component: Blog,
    meta: {
      // 页面标题title
      title: '翡翠丝带健康知识科普'
    }
  }, {
    path: '/read/:post',
    name: 'post',
    props: true,
    component: Blog,
    meta: {
      // 页面标题title
      title: '翡翠丝带健康知识科普'
    }
  }]
})
