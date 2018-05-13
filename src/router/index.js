import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import Cart from '@/views/cart'

import Detail from '@/views/Detail'
import Search from '@/views/search'

import LoginRegister from '@/views/login-register'
import Address from '@/views/address'
import OrderList from '@/views/orderList'
import Order from '@/views/order'
import CustomDesign from '@/views/customDesign'

import AccountSettings from '@/views/accountSettings'
import Inform from '@/views/inform'

import OrderSubmit from '@/views/orderSubmit'
import Contact from '@/views/contact';
import Introduce from '@/views/introduce';

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'Index',
            component: Index
        }, {
            path: '/Introduce',
            name: 'Introduce',
            component: Introduce
        },
        {
            path: '/Cart',
            name: 'Cart',
            component: Cart,
            meta:{
                requireAuth:true
            }
        },
        {
            path: '/Login',
            name: 'LoginRegister',
            component: LoginRegister
        },
        {
            path: '/Address',
            name: 'Address',
            component: Address,
            meta:{
                requireAuth:true
            }
        },
        {
            path: '/OrderList',
            name: 'OrderList',
            component: OrderList,
            meta:{
                requireAuth:true
            }
        },
        {
            path: '/Order',
            name: 'Order',
            component: Order,
            meta:{
                requireAuth:true
            }
        },
        {
            path: '/Detail/:Category/:Grand/:Name',
            name: 'Detail',
            component: Detail
        },
        {
            path: '/Search/:Filters?',
            name: 'Search',
            component: Search
        },
        {
            path: '/AccountSettings',
            name: 'AccountSettings',
            component: AccountSettings,
            meta:{
                requireAuth:true
            }
        },
        {
            path: '/Inform',
            name: 'Inform',
            component: Inform,
            meta:{
                requireAuth:true
            }
        },
        {
            path: '/OrderSubmit',
            name: 'OrderSubmit',
            component: OrderSubmit,
            meta:{
                requireAuth:true
            }
        },
        {
            path:'/Contact',
            name:'Contact',
            component:Contact
        }
    ]
})