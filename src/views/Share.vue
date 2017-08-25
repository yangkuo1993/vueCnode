<template>
    <div>
      <List-Item :itemList="shareList"></List-Item>
    </div>
</template>

<script>
  import list from '../components/list/list'
  export default {
    name: 'share',
    data () {
      return {
        shareList: []
      }
    },
    mounted () {
      this.$http.get('/topics?tab=share').then((backData) => {
        console.log(backData.data.data)
        this.shareList = backData.data.data
      })
    },
    components: {
      'List-Item': list
    }
  }
</script>
<style>

</style>
