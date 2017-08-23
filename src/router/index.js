import Vue from 'vue'
import Router from 'vue-router'
const Hello = resolve => require(['../components/Hello'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})
