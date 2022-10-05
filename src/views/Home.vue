<template>
  <div class="home" >
    <nav-bar></nav-bar>
    <van-tabs >
      <van-tab v-for="index in $store.state.category" :title="index" :key="index" title-active-color="#fb7299">
         <van-swipe :autoplay="3000" lazy-render indicator-color="#fb7299" >
            <van-swipe-item v-for="image in $store.state.images" :key="image">
              <img :src="require(`@/assets/image/${image}.webp`)"/>
            </van-swipe-item>
        </van-swipe>
      </van-tab>
      <div class="detailparent">
          <cover
              class="detailitem"
              v-for="(item,index) in $store.state.video"
              :key="index"
              :detail="item"
           />     
      </div>
    </van-tabs>
  </div>
</template>

<script>
import NavBar from "@/components/common/Navbar.vue";
import cover from "./cover";
export default {
  components: {
    NavBar,
    cover
  }
} 
</script>

<style lang="less">
.home {
  background-color: white;
}
.detailparent {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.van-swipe-item{
  width: 100%;
  height: 170px;
}
img{
    margin-top: 5px;
    width:100%;
    height: 100%;
}
</style>