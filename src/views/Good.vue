<template>
    <div>
      <List-Item :itemList="goodList"></List-Item>
    </div>
</template>

<script>
  import list from '../components/list/list'
  export default {
    name: 'good',
    data () {
      return {
        goodList: []
      }
    },
    mounted () {
      this.$http.get('/topics?tab=good').then((backData) => {
        this.goodList = backData.data.data
      })
    },
    components: {
      'List-Item': list
    }
  }
</script>
<style>

</style>
