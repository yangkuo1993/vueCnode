<template>
  <div>
    <ul class="list">
      <li v-for="list in itemList" :key="list.id">
        <div class="left-img">
          <img class="header-img" :src="list.author.avatar_url" alt="">
        </div>
        <div class="right-content">
          <p class="list-title">{{list.title}}</p>
          <div class="list-under-describe">
            <span>{{list.reply_count}}&nbsp;/&nbsp;{{list.visit_count}}</span>
            <span class="span-left">{{list.tab | typeFilter}}</span>
            <span v-if="list.top" class="span-left" style="color: #f25e5e">顶</span>
            <span v-if="list.good" class="span-left" style="color: #00e676">精</span>
            <span class="right-date">{{list.last_reply_at | timeFormat}}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'list',
    props: {
      itemList: {
        type: Array,
        required: true
      }
    },
    data () {
      return {}
    },
    filters: {
      typeFilter (data) {
        const backData = data === 'share' ? '分享' : data === 'ask' ? '问答' : data === 'job' ? '招聘' : '精华'
        return backData
      },
      timeFormat (val) {
        let nowDate = new Date()
        let replyDate = new Date(val)
        let diffSeconds = (nowDate.getTime() - Number(replyDate.getTime())) / 1000
        let years = 365 * 24 * 60 * 60
        let months = 30 * 24 * 60 * 60
        let days = 24 * 60 * 60
        let hours = 60 * 60
        let minutes = 60
        let seconds = 1
        if (diffSeconds < seconds) {
          return '1秒以前'
        } else if (seconds <= diffSeconds && diffSeconds < minutes) {
          return Math.floor(diffSeconds / seconds) + '秒前'
        } else if (minutes <= diffSeconds && diffSeconds < hours) {
          return Math.floor(diffSeconds / minutes) + '分钟前'
        } else if (hours < diffSeconds && diffSeconds < days) {
          return Math.floor(diffSeconds / hours) + '小时前'
        } else if (days < diffSeconds && diffSeconds < months) {
          return Math.floor(diffSeconds / days) + '天前'
        } else if (months < diffSeconds && diffSeconds < years) {
          return Math.floor(diffSeconds / months) + '个月前'
        } else {
          return Math.floor(diffSeconds / years) + '年前'
        }
      }
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
    background: #ffffff;
    overflow: hidden;
    border-bottom: 1px solid #f3f3f3;
  }
  .left-img{
    width: 20%;
    display: flex;
    align-items: center;
  }
  .right-content{
    width: 80%;
  }
  .list-title{
    margin: 0;
    font-size: 0.3rem;
    height: 0.75rem;
    line-height: 0.75rem;
    white-space: nowrap;
    word-break: break-all;
    text-overflow: ellipsis;
    overflow: hidden;
    padding-right: 20px;
    color: #333333;
  }
  .list-under-describe{
    font-size: 0.2rem;
    display: flex;
    height: 0.75rem;
    align-items: center;
    color: #999999;
  }
  .header-img{
    width: 80%;
    height: 80%;
    border-radius: 100%;
    border: 1px solid #f0f0f0;
    margin: 10%;
  }
  .span-left{
    margin-left: 0.4rem;
  }
  .right-date{
    flex-grow: 100;
    text-align: right;
    margin-right: 0.4rem;
  }
</style>
