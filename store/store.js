import Vue from 'vue'
import Vuex from 'vuex'
import moduleCart from './cart.js'
//  将 Vuex 安装为 Vue 的插件
Vue.use(Vuex)

//  创建 Store 的实例对象
const store = new Vuex.Store({
	// TODO：挂载 store 模块
	modules:{
		m_cart: moduleCart
	}
})

export default store
