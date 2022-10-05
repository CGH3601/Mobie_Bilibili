import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vant from 'vant'
import { Toast } from 'vant'
import 'vant/lib/index.css'
import '@/assets/style.css'
const app = createApp(App)
app.config.globalProperties.$msg=Toast
app.use(router)
app.use(vant)
app.use(store)
app.mount('#app')
