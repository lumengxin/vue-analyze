// 来源 node_modules/vue/dist(package.json中"module": "dist/vue.runtime.esm.js")
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// new Vue执行 source\vue\src\core\instance\index.js - init.js ...
new Vue({
	router,
	store,
	render: (h) => h(App)
}).$mount('#app')
