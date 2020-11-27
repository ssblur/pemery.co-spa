import VueRouter from 'vue-router';
import Vue from 'vue';
import Pages from '../components/Pages';

const router = new VueRouter({
    routes: Pages.routes,
});

Vue.use(VueRouter);

export default router;