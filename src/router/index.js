import Vue from 'vue'
import Router from 'vue-router'
const Home = resolve => require(['../views/Home'], resolve)
const Job = resolve => require(['../views/Job'], resolve)
const Good = resolve => require(['../views/Good'], resolve)
const Share = resolve => require(['../views/Share'], resolve)
const Ask = resolve => require(['../views/Ask'], resolve)
const TopicDetails = resolve => require(['../views/topicDetails/TopicDetails'], resolve)

Vue.use(Router)

export default new Router({
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    console.log(to)
    console.log(from)
    console.log(savedPosition)
    return {x: 0, y: 100}
  },
  routes: [
    {
      path: '/',
      name: 'All',
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
    },
    {
      path: '/topicDetails/:id',
      name: 'TopicDetails',
      component: TopicDetails
    }
  ]
})
