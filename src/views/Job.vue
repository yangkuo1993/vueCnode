<template>
    <div>
      <List-Item :itemList="jobList"></List-Item>
    </div>
</template>

<script>
  import list from '../components/list/list'
  export default {
    name: 'job',
    data () {
      return {
        jobList: []
      }
    },
    mounted () {
      this.$http.get('/topics?tab=job').then((backData) => {
        this.jobList = backData.data.data
      })
    },
    components: {
      'List-Item': list
    }
  }
</script>
<style>

</style>
