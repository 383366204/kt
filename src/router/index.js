import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import MyDesign from '@/views/myDesign'
import Cart from '@/views/cart'

import DetailPost from '@/views/detailPost'
import Detail from '@/views/Detail'
import DetailBanner from '@/views/detailBanner'
import Search from '@/views/search'
import DesignOverview from '@/views/designOverview'

import LoginRegister from '@/views/login-register'
import Address from '@/views/address'
import OrderList from '@/views/orderList'
import Order from '@/views/order'
import CustomDesign from '@/views/customDesign'

import AccountSettings from '@/views/accountSettings'
import Inform from '@/views/inform'

import OrderSubmit from '@/views/OrderSubmit'
import Contact from '@/views/contact';

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
            component: MyDesign
        },
        {
            path: '/Cart',
            name: 'Cart',
            component: Cart,
            // meta:{
            //     requireAuth:true
            // }
        },
        {
            path: '/Login',
            name: 'LoginRegister',
            component: LoginRegister
        },
        {
            path: '/Address',
            name: 'Address',
            component: Address
        },
        {
            path: '/OrderList',
            name: 'OrderList',
            component: OrderList
        },
        {
            path: '/Order',
            name: 'Order',
            component: Order
        },
        {
            path: '/DetailPost',
            name: 'DetailPost',
            component: DetailPost
        },
        {
            path: '/Detail/:Category/:Grand/:Name',
            name: 'Detail',
            component: Detail
        },
        {
            path: '/DetailBanner',
            name: 'DetailBanner',
            component: DetailBanner
        },
        {
            path: '/Search/:Filters?',
            name: 'Search',
            component: Search
        },
        {
            path: '/DesignOverview',
            name: 'DesignOverview',
            component: DesignOverview
        },
        {
            path: '/CustomDesign',
            name: 'CustomDesign',
            component: CustomDesign
        },
        {
            path: '/AccountSettings',
            name: 'AccountSettings',
            component: AccountSettings
        },
        {
            path: '/Inform',
            name: 'Inform',
            component: Inform
        },
        {
            path: '/OrderSubmit',
            name: 'OrderSubmit',
            component: OrderSubmit
        },
        {
            path:'/Contact',
            name:'Contact',
            component:Contact
        }
    ]
})