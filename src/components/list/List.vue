<template>
  <div>
    <ul class="list">
      <li v-for="n in 20">
        <div>
          <img src="../../assets/image/logo.png" alt="">
        </div>
        <div>
          <p class="list-title">这是一个标题</p>
          <div class="list-under-describe">
            <span>1/100</span>
            <span>分享</span>
            <span>顶</span>
            <span>精</span>
            <span>2ago</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'list',
    data () {
      return {}
    }
  }
</script>
<style scoped>
  .list{
    margin: 0;
    padding: 0;
  }
  .list li{
    display: flex;
    height: 1.5rem;
    background: #efefef;
    overflow: hidden;
  }
  .list li div:first-child{
    flex-basis: 20%;
  }
  .list li div:last-child{
    flex-basis: 80%;
  }
  .list-title{
    margin: 0;
    padding: 0;
    font-size: 0.5rem;
    height: 50%;
  }
  .list-under-describe{
    font-size: 0.2rem;
    display: flex;
    justify-content: space-between;
    height: 50%;
    align-items: center;
  }
</style>
