import Vue from 'vue';
import routes from './routes';
import Router from 'vue-router';

Vue.use(Router);

let router = new Router({
    routes,
    scrollBehavior() {
        return { x: 0, y: 0 }
    }
});

export default router;