import Vue from 'vue'
import router from './router'
import App from './App.vue'
import { BootstrapVue, ModalPlugin } from 'bootstrap-vue';

Vue.use(BootstrapVue);
Vue.use(ModalPlugin);


Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')