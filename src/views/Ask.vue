<template>
    <div>
      <List-Item :itemList="askList"></List-Item>
    </div>
</template>

<script>
  import list from '../components/list/list'
  export default {
    name: 'ask',
    data () {
      return {
        askList: []
      }
    },
    mounted () {
      this.$http.get('/topics?tab=ask').then((backData) => {
        console.log(backData.data.data)
        this.askList = backData.data.data
      })
    },
    components: {
      'List-Item': list
    }
  }
</script>
<style>

</style>
