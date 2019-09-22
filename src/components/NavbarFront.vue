<template>
    <div>
        <loading :active.sync="isLoading"></loading>
        <Alert></Alert>
        <div>
            <b-navbar type="dark" variant="gray" class="d-flex justify-content-center py-3" style="position:relative">
                <b-navbar-nav>
                <ul class="navbar-nav">
                <li class="d-block mx-4">
                    <router-link class="nav-link navbarfont-brand" to="/Index">
                     <img src="https://i.imgur.com/kKU64oJ.png" width="180" height="60" class="d-inline-block align-top" alt="">
                </router-link>
                </li>
                <li class="nav-item px-sm-4 mt-sm-1 mt-3">
                    <router-link class="nav-link text-dark h5" to="/login">
                    <div class="text-center">
                        <i class="far fa-user-circle mr-sm-2"></i>
                    </div>
                    <h5 class="d-sm-block d-none">登入</h5> 
                    </router-link>
                </li>
                <li class="nav-item px-sm-4 mt-sm-1 mt-3" >
                   <router-link class="nav-link text-dark h5" to="/shoppingcart">
                        <div class="text-center" style="position:relative">
                            <i class="fas fa-shopping-cart mr-sm-2"></i>
                             <span class="badge badge-pill badge-danger rounded-circle"
                             v-if="cart.length"
                            >{{cart.length}}</span>
                        </div>
                         <h5 class="d-sm-block d-none">購物車</h5>
                    </router-link>
                </li>
                </ul>
                </b-navbar-nav>
            </b-navbar>
        </div>
         <b-navbar toggleable="md" variant="gray" class="bg-md-primary" >
                   <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                        <b-collapse id="nav-collapse" is-nav class="rounded">
                        <b-navbar-nav>
                            <ul class="navbar-nav d-flex align-items-center">
                            <li class="nav-item px-4">
                                <router-link class="nav-link h5 mb-0" to="/Index">
                                <i class="fas fa-home mr-2"></i>首頁
                                </router-link>
                            </li> 
                            <li class="nav-item px-4">
                                <router-link class="nav-link h5 mb-0" to="/petproduct">
                                <i class="fas fa-bone mr-2"></i>寵物館
                                </router-link>
                            </li>
                            <li class="nav-item px-4">
                                <router-link class="nav-link h5 mb-0" to="/coupon">
                                <i class="fas fa-ticket-alt mr-2"></i>優惠券
                                </router-link>
                            </li>
                            </ul>
                        </b-navbar-nav>
                        </b-collapse>
                </b-navbar>
          
   
         <router-view></router-view> 
         <Footer></Footer>
    </div>
</template>


<script>
import $ from 'jquery';
import Alert from './AlertMessage';
import Footer from './Footer';

export default {
  name:'NavbarFront',
  data(){
      return{
          cart:{},
          status:{
                loadingItem:'',
            },
            isLoading:false,
      };
  },
   components:{
        Alert,
        Footer,
    },
  methods: {
        getProducts(){
            const vm = this;
            const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products`;
            vm.isLoading = true;
            this.$http.get(url).then((response)=>{
                vm.products = response.data.products;
                console.log(response.data);
                vm.isLoading = false;
            });
        },
        getCart(){
            const vm = this;
            const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
             vm.isLoading = true;
             this.$http.get(url).then((response)=>{
                 vm.cart = response.data.data.carts;
                 console.log(response.data);
                 vm.isLoading = false;
            
          });
        },
        
  },
  created(){
      const vm = this
        this.getProducts();
        this.getCart();
        vm.$bus.$on('updateCart',()=>{
            vm.getCart();
        })
    }
};
</script>

<style>
.navbar{
    padding:0;
}
.navbar-toggler{
    position: absolute;
    top:-80px;
    right:10px;
}
.navbar-light .navbar-nav .nav-link {
    color: #000;
}
@media (min-width: 768px) { 
    #nav-collapse{
        background: #ee948a;
    }
    .collapse{
        display: flex;
        justify-content: center;
    }   
    .navbar-light .navbar-nav .nav-link {
        color: #f7f5f5fd;
    }
    .bg-md-primary{
        margin-left: 15%;
        margin-right: 15%;
        margin-top:-20px;
    }
}
.badge{
    font-size: 12px;
    position: absolute;
    top:5px;
    right:10px;
}
.badge-pill{
    padding: 0.2rem; 
}
@media (min-width: 576px){
    .badge{
    right:15px;
    }
}
a{
    text-decoration:none;
}
</style>