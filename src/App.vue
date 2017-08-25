<template>
  <div id="app">
    <Header-Bar></Header-Bar>
    <div class="content-div">
      <router-view></router-view>
    </div>
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
 .content-div{
   height: 92%;
   overflow: hidden;
   overflow-y: scroll;
   -webkit-overflow-scrolling: touch;
 }
</style>
