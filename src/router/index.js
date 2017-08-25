import Vue from 'vue'
import Router from 'vue-router'
const Home = resolve => require(['../views/Home'], resolve)
const Job = resolve => require(['../views/Job'], resolve)
const Good = resolve => require(['../views/Good'], resolve)
const Share = resolve => require(['../views/Share'], resolve)
const Ask = resolve => require(['../views/Ask'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/job',
      name: 'Job',
      component: Job
    },
    {
      path: '/good',
      name: 'Good',
      component: Good
    },
    {
      path: '/share',
      name: 'Share',
      component: Share
    },
    {
      path: '/ask',
      name: 'Ask',
      component: Ask
    }
  ]
})
