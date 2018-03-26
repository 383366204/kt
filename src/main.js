// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store'
import 'element-ui/lib/theme-default/index.css'
import ElementUI from 'element-ui'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

Vue.use(ElementUI)

Vue.prototype.$ajax = axios;

router.beforeEach((to,from,next) => {
    window.scrollTo(0, 0);
    if (to.meta.requireAuth) {
        if (store.state.token) {
            next();
        } else {
            next({
                path:'/login',
                query:{
                    redirect: to.fullPath
                }
            })
        }
    } else {
        next();
    }
})
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})