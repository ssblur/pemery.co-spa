import Vue from 'vue';
import router from './lib/router';
import toast from './plugins/toast/';

const app = new Vue({
    router,
    toast,
}).$mount('#app');