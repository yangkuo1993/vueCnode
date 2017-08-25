<template>
  <div id="app">
    <Header-Bar v-show="headerShow"></Header-Bar>
    <router-view></router-view>
  </div>
</template>

<script>
  import 'normalize.css'
  import './assets/css/common.css'
  import header from './components/header/header'
  export default {
    name: 'app',
    data () {
      return {
        headerShow: true
      }
    },
    components: {
      'Header-Bar': header
    },
    mounted () {
      window.vm = this
      console.log(window.vm)
      window.vm.$on('hiddenHeader', (data) => {
        console.log(data)
        this.headerShow = data
      })
    }
  }
</script>

<style>
 #app{
   width: 100%;
   height: 100%;
 }
</style>
