<template>
  <div class="commentParent">
    <div v-for="(item,index) in commentdata" :key="index">
      <div class="commentItem">
        <div class="userImg">
          <img v-if="item.userinfo && item.userinfo.user_img" :src="item.userinfo.user_img" alt />
          <img v-else src="@/assets/image/default_img.jpg" alt="">
        </div>
        <div class="commentContent">
          <p>
            <span>{{item[0]}}</span>
            <span>{{item[1]}}</span>
          </p>
          <div>
            {{item[2]}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
     props: ["commentdata"]
};
</script>

<style lang="less">
.commentParent {
  padding: 2.778vw 2.778vw;
  > div {
    border-bottom: 0.278vw solid #e7e7e7;
  }
  .commentItem {
    display: flex;
    margin: 2.778vw 0;
    .userImg {
      margin-right: 2.778vw;
      img {
        width: 9.722vw;
        height: 9.722vw;
      }
    }
    .commentContent {
      flex: 1;
      position: relative;
      p {
        font-size: 3.611vw;
        color: #555;
        display: flex;
        justify-content: space-between;
        margin-bottom: 1.389vw;
      }
      div {
        font-size: 3.611vw;
      }
      .publishs{
        position: absolute;
        right: 0;
        color: red;
      }
    }
  }
}
</style>