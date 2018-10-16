import Vue from 'vue'
import Router from 'vue-router'
import news from '../components/news'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'news',
      component: news
    }
  ]
})
