<template>
  <div id="app">
    <Header-Bar></Header-Bar>
    <router-view></router-view>
  </div>
</template>

<script>
  import 'normalize.css'
  import './assets/css/common.css'
  import header from './components/header/header'
  export default {
    name: 'app',
    components: {
      'Header-Bar': header
    }
  }
</script>

<style>
 #app{
   width: 100%;
   height: 100%;
 }
</style>
