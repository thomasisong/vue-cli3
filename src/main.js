import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index.js';

// Vue.config.Vue.config.productionTip = false

// new Vue({
//     render: h => h(App),
//     router,
// }).mount('#app')

createApp(App).use(router).mount("#app")