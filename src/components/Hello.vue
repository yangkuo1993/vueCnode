<template>
  <div>
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    this.$http.get('https://cnodejs.org/api/v1/topics').then((data) => {
      console.log(data)
    }).catch((error) => {
      console.log(error)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
