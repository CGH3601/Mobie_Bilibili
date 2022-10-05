<template>
  <div>
      <form action="/">
          <van-search
            show-action
            placeholder="请输入搜索关键词"
            @search="onSearch"
            @cancel="onCancel"
          />
      </form>
  </div>
  <div class="history">
    <span>大家都在搜</span>
    <div class="item">
        <div>周星驰</div>
        <div>这是一首歌曲</div>
        <div>舞见三千，只宠一人</div>
        <div>周星驰</div>
        <div>这是一首歌曲</div>
        <div>舞见三千，只宠一人</div>
        <div>周星驰</div>
        <div>这是一首歌曲</div>
        <div>舞见三千，只宠一人</div>
    </div>
  </div>
  <div class="line"></div>
  <div class="history">
    <span>历史记录</span>
    <div class="item">
        <div>周星驰</div>
        <div>这是一首歌曲</div>
        <div>舞见三千，只宠一人</div>
        <div>周星驰</div>
        <div>这是一首歌曲</div>
        <div>舞见三千，只宠一人</div>
        <div>周星驰</div>
        <div>这是一首歌曲</div>
        <div>舞见三千，只宠一人</div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            isaa:false
        }
    },
    methods:{
       onSearch() {
          this.$router.push('/article/2')
        },
        onCancel() {
            this.$router.push('/')
            
        }
    }
}
</script>

<style lang='less'>
.history{
  color: #555;
  font-size: 14px;
  padding: 0 15px;
  span{
    display: block;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .item{
    display: flex;  
    justify-content: space-around;
    flex-wrap: wrap;
    div{
      border: 1px solid #555;
      border-radius: 5px;
      padding: 3px 3px;
      margin-bottom: 10px;
      margin-right: 5px;
      &:hover{
        background-color:  #ff9db5;
      }
    }
  }
}
.line{
  width: 100%;
  height: 10px;
  background-color: rgb(237, 226, 226);
}
</style>