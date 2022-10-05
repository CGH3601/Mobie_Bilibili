import { createApp} from "vue";
import vuex from 'vuex'
import state from './state'
createApp().use(vuex)
export default new vuex.Store({
    state
})