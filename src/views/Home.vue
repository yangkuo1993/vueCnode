<template>
    <div class="content-div">
      <List-Item></List-Item>
    </div>
</template>

<script>
  import list from '../components/list/list'
  export default {
    name: 'home',
    data () {
      return {}
    },
    components: {
      'List-Item': list
    }
  }
</script>
<style scoped>
  .content-div{
    height: 92%;
    overflow: hidden;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
  }
</style>
