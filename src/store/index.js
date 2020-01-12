import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import mutations from './mutations'
// 1.安装插件
Vue.use(Vuex)

const state = {
    cartList:[]
}
// 2.创建store对象
const store = new Vuex.Store({
    state,
    mutations,  
    actions
})

// 3.挂载到Vue实例上
export default store