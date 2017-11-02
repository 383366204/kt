import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import MyDesign from '@/views/myDesign'
import Cart from '@/views/cart'
import Address from '@/views/Address'
import orderList from '@/views/orderList'
import order from '@/views/order'
import detailPost from '@/views/detailPost'
import detailClothes from '@/views/detailClothes'
import searchPost from '@/views/searchPost'
import searchClothes from '@/views/searchClothes'

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
            path: '/Address',
            name: 'Address',
            component: Address
        },
        {
            path: '/orderList',
            name: 'orderList',
            component: orderList
        },
        {
            path: '/order',
            name: 'order',
            component: order
        },
        {
            path: '/detailPost',
            name: 'detailPost',
            component: detailPost
        },
        {
            path: '/detailClothes',
            name: 'detailClothes',
            component: detailClothes
        },
        {
            path: '/searchPost',
            name: 'searchPost',
            component: searchPost
        },
        {
            path: '/searchClothes',
            name: 'searchClothes',
            component: searchClothes
        }
    ]
})