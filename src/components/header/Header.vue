<template>
    <div class="flex justify-content menu-font relative">
      <div>全部</div>
      <div>精华</div>
      <div>问答</div>
      <div>分享</div>
      <div>招聘</div>
      <div class="under-line"></div>
    </div>
</template>

<script>
  export default {
    name: 'header',
    data () {
      return {}
    }
  }
</script>
<style scoped>
  .menu-font{
    font-size: 0.4rem;
    color: #fff;
    background: #2196f3;
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
    background: #000;
    bottom: 0px;
    left: 0%;
  }
</style>
