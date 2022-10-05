<template>
    <div class="detailItem" @click="pathPush">
        <img :src="require(`@/assets/image/${detail.src}.webp`)"  alt="" style="width:100%;height:27.778vw;">
        <div class="bottom">
            <div class="icon-play2"><span class="video"> {{detail.broast }}万</span></div>
            <div class="icon-file-text"> <span class="comment"> {{detail.admine}}万</span> </div>
        </div>
        <p>{{detail.speak}}</p>
    </div>
</template>

<script>
export default {
    props:['detail'],
    methods:{
        pathPush() {
            if(this.$route.path != `/article/${this.detail.id}`) {
                this.$router.push(`/article/${this.detail.id}`)
            }
        }
    }
}
</script>

<style scoped lang="less">
 .detailItem {
    margin: 1.389vw 0;
    width: 45%;
    position: relative;
    .bottom{
        padding: 0 4px;
        position: absolute;
        height: 15px;
        background: linear-gradient(0deg,rgba(0,0,0,.85),transparent);
        justify-content: space-between;
        color: #dbe6ef;
        font-size: 12px;
        display: flex;
        top: 95px;
        left: 0;
        right: 0;
        span{
            margin-left: 3px;
        }
    }
    p{
        font-size: 3.333vw;
        padding: 0.833vw 0;
        margin: 0px;
        color: #3f454a;
    }
}
</style>