<template>
  <div class="btnBox">
      <div class="btn">
          {{BtnText}}
      </div>
  </div>
</template>

<script>
export default {
    props:['BtnText']
}
</script>

<style scoped lang="less">
.btnBox{
    padding: 5.556vw 2.778vw;
}
.btn{
    display: flex;
    height: 12.778vw;
    justify-content: center;
    align-items: center;
    font-size: 5vw;
    border-radius: 6.389vw;
    background-color: #ff9db5;
    color: white;  
}

</style>