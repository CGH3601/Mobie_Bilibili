<template>
  <div class="comment">
      <p class="comment-title">
          <span>评论</span>
          <span>({{dataLength.length}})</span>
      </p>
      <div class="commentMyinfo">
          <img src="@/assets/image/default_img.jpg" alt="">
          <input v-model="comcontent"  type="text" placeholder="说点什么吧">
          <button @click="cmmentPublish">发表</button>
      </div>
  </div>
</template>

<script>
export default {
  props:['dataLength'],
  data() {
      return {
            myuser:null,
            comcontent:'',
      }
  },
  methods: {
    cmmentPublish() {
        this.$emit('postcomment',this.comcontent)
        this.comcontent = ''
    },
   },
};
</script>

<style lang="less">
.comment{
    padding: 0 2.778vw 0 3.7778vw;
    .comment-title{
       margin: 6px 0;
        span:nth-child(2) {
            color: #aaa;
            margin-left: 2.778vw;
        }
    }
    .commentMyinfo{
      padding: 0.2vw 0;
      display: flex;
      img{
        height: 7.944vw;
        width: 7.944vw;
        border-radius: 50%;
      }
      input{
        outline: none;
        border: 0;
        width: 200px;
        background-color: #f4f4f4;
        border-radius: 3.611vw;
        font-size: 3.333vw;
        padding: 0 5.556vw 0 4.167vw;
        margin-left: 2.778vw;
        margin-top: 3px;
      }
      button{
        outline: none;
        border: 0;
        margin-left: 8px;
        border-radius: 3.333vw;
        background: #fb7299;
        color: white;
        font-size: 3.333vw;
        padding: 0 4.167vw;
        margin-top: 3px;
      }
    }
}
</style>