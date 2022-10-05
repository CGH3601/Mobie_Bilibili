<template>
      <nav-bar></nav-bar> 
      <div class="detailinfo">
         <div class="video">
              <video controls="controls" :src="require(`@/assets/video/1.mp4`)"></video>
         </div>
         <div class="detailinfoText">
              <div>
                  <span>{{model.title}}</span>
                  <span>{{model.name}}</span>
              </div>
              <div>
                  <span>{{model.name}}</span>
                  <span>{{model.broast}}万次观看</span>
                  <span>{{model.admine}}弹幕</span>
                  <span>{{model.data}}</span>
              </div>
              <div>
                  <p @click="collectionClick" :class="{activeColor:model.collectionActive}">
                      <span class="icon-star-full" ></span>
                      <span>收藏</span>
                  </p>
                  <p @click="subscriptClick" :class="{activeColor:model.subscritionActive}">
                      <span class="icon-bubble"></span>
                      <span>关注</span>
                  </p>
                  <p>
                      <span class="icon-redo2"></span>
                      <span>分享</span>
                  </p>
              </div>
         </div>
      <comment-title :dataLength="commentList" @postcomment="postSuccess"  />
      <comment :commentdata='commentList'  />   
      <div class="advice">推荐视频 （8）</div>
      <div class="detailparent">
        <cover
            class="detailitem"
            v-for="(item,index) in $store.state.video"
            :key="index"
            :detail="item"
        />     
        </div>
      </div>
</template>

<script>
import NavBar from '@/components/common/Navbar.vue'
import cover from './cover'
import commentTitle from '@/components/article/commentTitle.vue'
import comment from '@/components/article/comment.vue'
export default {
    data() {
        return {
             model:{},
             commentList:null,
        }
    },
    components:{
        NavBar,
        cover,
        commentTitle,
        comment
    },
    methods: {
        test(){
            let vid=this.$route.params.id;
            let arr=this.$store.state.video;
            let newarr=arr.filter(function(value,index){
                return value.id==vid;
            })  
            this.model=JSON.parse(JSON.stringify(...newarr))
            this.commentList=this.$store.state.comment
        },
        collectionClick() {
               if(this.model.collectionActive){
                   this.collectionActive = false
                   this.model.collectionActive = false
                   this.$msg.fail('取消收藏成功')
               }else{
                   this.collectionActive = true
                     this.model.collectionActive = true
                   this.$msg.fail('收藏成功')
               }        
        },
        subscriptClick() {
               if(this.model.subscritionActive){
                   this.subscritionActive= false
                   this.model.subscritionActive= false
                   this.$msg.fail('取消关注成功')
               }else{
                   this.subscritionActive = true
                   this.model.subscritionActive = true
                   this.$msg.fail('关注成功')
               }        
        },
        postSuccess(res) {
            const date = new Date()
            let m = date.getMonth() + 1
            let d = date.getDate()
            if(m < 10) {
                m = '0' + m
            }
            if(d < 10) {
                d = '0' + d
            }
            let str = `${m}-${d}`
            let username='小雪'
            let commenres=[username,str,res]
            this.commentList.push(commenres)
            this.$msg.fail('评论发表成功')
        },     
    },
    created(){
        this.test();
    }
}
</script>

<style lang="less">
.detailinfo{
    background-color: white;
    .video{
        width: 100%;
        video{
            width: 100%;
        }
    }
}
.detailinfoText{
    padding:4.167vw;
    padding-bottom: 0;
    div:nth-child(1) {
        span:nth-child(1) {
            padding:0 2.778vw;
            color: #fb7299;
            background-color: #f4f4f4;
            border-radius: 2.778vw;
        }
    }
    div:nth-child(2) {
        padding: 2.778vw 2.778vw;
        padding-bottom: 0;
        span{
            color: #aaa;
            font-size: 3.333vw;
            margin-right: 2.778vw;
        }
        span:nth-child(1) {
            color: black;
            font-size: 4vw;
            padding-right:2.778vw;
        }
    }
    div:nth-child(3) {
        margin: 8px 0;
        padding: 0 2.778vw;
        display: flex;  
        p{
            margin-right: 10px;
            display: flex;
            align-items: center;
            color: #757575;
            span:nth-child(1) {
                margin-right: 3px;
                font-size: 21px;
            }
            span:nth-child(2) {
                font-size: 13px;
            }
        }
        .activeColor{
            color: #fb7299;
        }
    }
    
}
.detailparent {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .detailitem {
    margin: 1.389vw 0;
    width: 45%;
  }
}
.advice{
    font-size: 14px;
    color: #101010;
    margin: 9px ;
}
</style>