<template>
    <div :style="[styleObject]">footer
    </div>
</template>

<script>
  export default {
    name: 'footer',
    props: {
      styleObject: {
        type: Object,
        required: true
      }
    },
    data () {
      return {}
    }
  }
</script>
<style>

</style>
