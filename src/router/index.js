import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import TeacherClass from '@/components/classification'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/teacher_class',
      name: 'TeacherClass',
      component: TeacherClass
    }
  ]
})
