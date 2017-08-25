<template>
    <div>
      <keep-alive>
        <List-Item :itemList="homeList"></List-Item>
      </keep-alive>
      <!--<Footer-Item :styleObject="leftFooter"></Footer-Item>-->
      <!--<Footer-Item :styleObject="rightFooter"></Footer-Item>-->
    </div>
</template>

<script>
  import list from '../components/list/list'
  import footer from '../components/footer/footer'
  export default {
    name: 'home',
    data () {
      return {
        leftFooter: {
          position: 'fixed',
          width: '1rem',
          height: '1rem',
          background: '#fff',
          left: '0.5rem',
          bottom: '0.5rem',
          overflow: 'hidden',
          fontSize: '30px',
          borderRadius: '0.5rem'
        },
        rightFooter: {
          position: 'fixed',
          width: '1rem',
          height: '1rem',
          background: '#fff',
          right: '0.5rem',
          bottom: '0.5rem',
          overflow: 'hidden',
          fontSize: '30px',
          borderRadius: '0.5rem'
        },
        homeList: []
      }
    },
    created () {
    },
    mounted () {
      this.$http.get('/topics').then((backData) => {
        this.homeList = backData.data.data
      })
    },
    destroyed () {
      console.log('就这么销毁了？')
    },
    components: {
      'List-Item': list,
      'Footer-Item': footer
    },
    methods: {
    }
  }
</script>
<style scoped>
</style>
