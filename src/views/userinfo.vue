<template>
  <div class="userinfo">
      <nav-bar/>
      <img src="@/assets/image/bannerTop_new.png" alt="" class="backImg">
      <user-detail />
      <user-article />
  </div>
</template>

<script>
import NavBar from '@/components/common/Navbar'
import userDetail from '@/components/userComponent/userDetail'
import userArticle from '@/components/userComponent/userArticle'
export default {
    components:{
        NavBar,
        userDetail,
        userArticle
    }
}
</script>

<style lang="less">
.userinfo{
.backImg{
    height: 91px;
    width: 100%;
}
}
</style>