import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Test from '../components/Test'
import Markdown from '../pages/Markdown'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    },
    {
      path: '/markdown',
      name: 'Markdown',
      component: Markdown
    }
  ]
})
