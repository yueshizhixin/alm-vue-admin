import Vue from 'vue'
import Router from 'vue-router'

import index from '../components/index'
import note_add from '../components/note/add'
import note_list from '../components/note/list'
import signPage from '../components/system/signPage'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: index
    },
    {
      path: '/note/add',
      component: note_add,
    },
    {
      path: '/note/list',
      component: note_list,
    },
    {
      path: '/sign',
      component: signPage,
    },
    // {
    //   path: '/index',
    //   component: {
    //     main: index,
    //     sign: signPage,
    //   }
    // },
    // {
    //   path: '/note/add',
    //   component: {
    //     main: signPage,
    //     sign: signPage,
    //   }
    // },
    // {
    //   path: '/note/list',
    //   component: {
    //     main: note_list,
    //     sign: signPage,
    //   }
    // },
    // {
    //   path: '/sign',
    //   component: {
    //     main: note_list,
    //     sign: signPage
    //   }
    // },
  ]
})
