<template>
<div>
    <login-top Text="登录bilibili">
        <template v-slot:left>
            <div style="font-size:3.611vw" @click="$router.push('/userinfo')">个人中心</div>
        </template>   
        <template v-slot:right>
            <div style="font-size:3.611vw" @click="$router.push('/register')">切换用户注册</div>
        </template>    
    </login-top>
    <login-text label="账号" 
        placeholder="请输入账号"
         style="margin:4.167vw 0"
         >
        </login-text>

        <login-text label="密码" 
            placeholder="请输入密码" 
            type="password"
        >
        </login-text>
        <login-btn BtnText="登录"></login-btn>
</div>
  
</template>

<script>
import LoginTop from '@/components/common/LoginTop.vue'
import LoginText from '@/components/common/LoginText.vue'
import LoginBtn from '@/components/common/LoginBtn.vue'
export default {
    components:{
        LoginTop,
        LoginText,
        LoginBtn
    }
}
</script>

<style>

</style>