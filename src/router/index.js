import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import MyDesign from '@/views/myDesign'
import Cart from '@/views/cart'
import LoginRegister from '@/views/login-register'
import Address from '@/views/address'
import OrderList from '@/views/orderList'
import Order from '@/views/order'
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
            component: Cart
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
        }
    ]
})