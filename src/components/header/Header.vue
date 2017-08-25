<template>
    <div class="flex justify-content menu-font relative">
      <div @click="tabType('all')" :class="[choose === 'all' ? 'choose' : '']">全部</div>
      <div @click="tabType('good')" :class="[choose === 'good' ? 'choose' : '']">精华</div>
      <div @click="tabType('ask')" :class="[choose === 'ask' ? 'choose' : '']">问答</div>
      <div @click="tabType('share')" :class="[choose === 'share' ? 'choose' : '']">分享</div>
      <div @click="tabType('job')" :class="[choose === 'job' ? 'choose' : '']">招聘</div>
      <div class="under-line" :style="[underline]"></div>
    </div>
</template>

<script>
  export default {
    name: 'header',
    data () {
      return {
        underline: {
          left: '0'
        },
        choose: 'all'
      }
    },
    methods: {
      tabType (type) {
        this.choose = type
        window.vm.$emit('chooseType', type)
        type === 'all' ? this.underline.left = '0' : type === 'good' ? this.underline.left = '20%' : type === 'ask' ? this.underline.left = '40%' : type === 'share' ? this.underline.left = '60%' : this.underline.left = '80%'
        if (type === 'all') {
          this.$router.push('/')
        } else {
          this.$router.push(type)
        }
      }
    },
    watch: {
      '$route' (to, from) {
        console.log(to)
        if (to.name.toLowerCase() === 'all' ||
          to.name.toLowerCase() === 'good' ||
          to.name.toLowerCase() === 'ask' ||
          to.name.toLowerCase() === 'share' ||
          to.name.toLowerCase() === 'job'
        ) {
          this.choose = to.name.toLowerCase()
          this.tabType(this.choose)
        } else {
          window.vm.$emit('hiddenHeader', false)
        }
      }
    }
  }
</script>
<style scoped>
  .menu-font{
    font-size: 0.4rem;
    color: #fff;
    background: #03a9f4;
    height: 8%;
    align-items: center;
  }
  .menu-font div{
    width: 20%;
    text-align: center;
  }
  .under-line{
    position: absolute;
    width: 20%;
    height: 5px;
    background: #84ffff;
    bottom: 0px;
    left: 0%;
    transition: left .3s ease;
  }
  .choose{
    color: #84ffff;
  }
</style>
