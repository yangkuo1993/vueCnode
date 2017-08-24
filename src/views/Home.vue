<template>
    <div class="content-div">
      <List-Item :itemList="homeList"></List-Item>
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
      this.$http.get('/topics').then((backData) => {
        console.log(backData.data.data)
        this.homeList = backData.data.data
      })
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
  .content-div{
    height: 92%;
    overflow: hidden;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
  }
</style>
