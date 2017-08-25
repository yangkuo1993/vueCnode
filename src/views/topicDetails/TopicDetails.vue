<template>
    <div>
      topicDetails
    </div>
</template>

<script>
    export default {
      name: 'topicDetails',
      data () {
        return {}
      },
      destroyed () {
        window.vm.$emit('hiddenHeader', true)
      }
    }
</script>
<style>

</style>
