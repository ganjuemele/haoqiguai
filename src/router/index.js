import Vue from 'vue'
import Router from 'vue-router'
// import App from '@/App'

import Home from '@/components/Home/Home'
import Mine from '@/components/Mine/Mine'
import Discover from '@/components/Discover/Discover'
import Content from '@/components/Home/Content/Content'
import Attention from '@/components/Attention/Attention'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    }, {
      path: '/index',
      component: Home
    }, {
      path: '/discover',
      name: 'Discover',
      component: Discover
    },{
      path: '/mine',
      name: 'Mine',
      component: Mine
    },{
      path: '/content',
      name: 'Content',
      component: Content
    },{
      path: '/attention',
      name: 'Attention',
      component: Attention
    }

  ]
})
