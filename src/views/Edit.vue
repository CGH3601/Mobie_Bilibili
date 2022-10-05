<template>
  <div class="editViews">
      <div style="margin-bottom:2.778vw;"><nav-bar ref="navbar"></nav-bar></div>
      <div class="uploadfile">
          <div class="uploadimg"><van-uploader preview-size="100vw"  @change="change($event)" /></div>
          <edit-banner left="头像">
              <template v-slot:right>
                 <img :src="require(`@/assets/image/${model.img}.jpg`)"  alt="" ref="aimg">
              </template>
          </edit-banner>
      </div>
         
      <edit-banner left="昵称" @click="nameshow=true">
        <template v-slot:right  >
            <a href="javascript:;">{{model.username}}</a>
        </template>
      </edit-banner>

      <edit-banner left="账号" @click="prohibit">
         <template v-slot:right>
            <a href="javascript:;" >{{model.count}}</a>
        </template>
      </edit-banner>

      <edit-banner left="性别"  @click="gendershow=true">
           <template v-slot:right >
            <a href="javascript:;">{{model.gender ? '男' : '女'}}</a>
          </template>
      </edit-banner>
      <edit-banner left="个性签名" @click="textshow=true">
         <template v-slot:right>
            <a href="javascript:;">{{model.sign}}</a>
          </template>
      </edit-banner>
      <div class="editback" @click="$router.push('/userinfo')">返回个人中心</div>
      <van-dialog v-model:show="nameshow" 
                  title="昵称" 
                  show-cancel-button 
                  @confirm="confirmClick"
                  @cancel="content = ''">
          <van-field v-model="content"  />
      </van-dialog>
      <van-dialog v-model:show="textshow"
                title="个性签名"
                show-cancel-button
                @confirm="textareaClick"
                @cancel="content = ''">
          <van-field v-model="content" type="textarea" autofocus />
      </van-dialog>
       <van-action-sheet v-model:show="gendershow"
                cancel-text="取消" 
                :actions="actions" 
                @select="onSelect" />
  </div>
</template>

<script>
import NavBar from '@/components/common/Navbar.vue'
import editBanner from '@/components/common/editBanner.vue'
export default {
    data() {
        return {
            model:this.$store.state.userinfo,
            nameshow:false,
            textshow:false,
            gendershow:false,
            autofocus:true,
            content:'',
            actions: [
                { name: '男',val:1 },
                { name: '女',val:0 },
            ],
        }
    },
    components:{
        NavBar,
        editBanner
    },
    methods:{
        UserUpdate(str) {
            this.$msg.fail(`${str}修改成功`)
       },
        change(e) {
           var reader = new FileReader()
           let file = e.target.files[0]
           reader.readAsDataURL(file)
           reader.onload = e => {
               this.$refs.aimg.src=e.target.result
               this.UserUpdate('头像')
           }
       },
       confirmClick() {
           this.model.username =  this.content
           this.UserUpdate('昵称')
           this.content = ''
       },
       textareaClick() {
           this.model.sign = this.content
           this.UserUpdate('个性签名')
           this.content = ''
       },
       onSelect(data) {
           this.model.gender = data.val
           this.UserUpdate('性别')
           this.gendershow = false
       },
       prohibit(){
           this.$msg.fail('账号不可修改')
       },
    },
}
</script>

<style scoped lang="less">
.editViews a{
    color: #333;
}
.editViews img{
    height: 12.778vw;
    width: 12.778vw;
    border-radius: 50%;
}
.uploadfile{
    overflow: hidden;
    position: relative;
    .uploadimg{
        opacity: 0;
        position: absolute;
    }
}
.editback{
    margin-top: 5.556vw;
    margin-left:50%;
    transform:translateX(-50%);
    border-radius: 8px;
    background-color:#fb7299;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    padding: 4.167vw 0;
    font-size: 4vw;
}
</style>