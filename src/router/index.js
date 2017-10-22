import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import MyDesign from '@/views/myDesign'
import MyDesignContent from '@/components/MyDesignContent';

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'Index',
        component: Index
    }, {
        path: '/MyDesign',
        name: 'MyDesign',
        component: MyDesign,
        children: [{
            path: 'All',
            component: MyDesignContent
        }]

    }]
})