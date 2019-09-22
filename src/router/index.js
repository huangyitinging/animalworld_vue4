import Vue from 'vue';
import VueRouter from 'vue-router';
import VueCarousel from '@chenfengyuan/vue-carousel';

//官方的元件


//import Home from '@/components/HelloWorld';
import Index from '@/components/Index';
import NavbarFront from '@/components/NavbarFront';
import PetProduct from '@/components/pages/PetProduct';
import Coupon from '@/components/pages/Coupon';
import Login from '@/components/pages/Login';
import Product from '@/components/pages/Product';
import ShoppingCart from '@/components/pages/ShoppingCart';
import Order from '@/components/pages/Order';

import Checkout from '@/components/pages/Checkout';
import Menu from '@/components/pages/menu';
import Dashboard from '@/components/Dashboard';
import Products from '@/components/pages/Products';
import CreateCoupon from '@/components/pages/CreateCoupon';
import OrderList from '@/components/pages/OrderList';
import CustomerOrder from '@/components/pages/CustomerOrders';
import CustomerCheckout from '@/components/pages/CustomerCheckout';
//自訂的分頁元件

Vue.use(VueRouter);
Vue.use(VueCarousel);




export default new VueRouter({
//mode:'history',
routes:[
    {
        path:'*',
        redirect:'/',
    },
    {
        name:'Login',  
        path:'/login',  
        component:Login,  
    },
    {
        name:'Dashboard',  
        path:'/admin',  
        component:Dashboard,  
        children:[
            {
                name:'Products',  
                path:'products',  
                component:Products,  
                meta: { requiresAuth: true },
            },
            {
                name:'CreateCoupon',  
                path:'createcoupon',  
                component:CreateCoupon,  
                meta: { requiresAuth: true },
            },
            {
                name:'OrderList',  
                path:'orderlist',  
                component:OrderList,  
                meta: { requiresAuth: true },
            },
        ],
    },
    
    {
        //name:'NavbarFront',  
        path:'/',  
        component:NavbarFront,  
        children:[
            {
                name:'Index',  
                path:'/',  
                component:Index,  
            },
            {
                name:'PetProduct',  
                path:'petproduct',  
                component:PetProduct,  
            },
            {
                name:'Coupon',  
                path:'coupon',  
                component:Coupon,  
            },
            {
                name:'Product',  
                path:'product/:id',  
                component:Product,  
            },
            {
                name:'ShoppingCart',  
                path:'shoppingcart',  
                component:ShoppingCart,  
            },
            {
                name:'Checkout',  
                path:'checkout',  
                component:Checkout,  
            },
            {
                name:'Order',  
                path:'order/:orderId',  
                component:Order,  
            },
            {
                name:'CustomerOrder',  
                path:'customer_order',  
                component:CustomerOrder,  
            },
            {
                name:'CustomerCheckout',  
                path:'customer_checkout/:orderId', 
                component:CustomerCheckout, 
            },
        ],
    },

    
]
});