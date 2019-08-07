import Vue from 'vue'
import Router from 'vue-router'

import index from '../components/index'
import note_add from '../components/note/add'
import note_list from '../components/note/list'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: index
    },
    {
      path: '/note/add',
      component: note_add
    },
    {
      path: '/note/list',
      component: note_list
    },
  ]
})
