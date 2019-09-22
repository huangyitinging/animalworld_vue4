// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from 'axios' ; //主要AJAX套件
import VueAxios from 'vue-axios' ;   //將它轉為 ＶＵＥ的套件
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import 'bootstrap';
import BootstrapVue from 'bootstrap-vue'
import VueCarousel from '@chenfengyuan/vue-carousel'
import VeeValidate from 'vee-validate';
import VueI18n from 'vue-i18n';
import zh_TW from 'vee-validate/dist/locale/zh_TW';

import App from './App';
import router from './router';
import './bus';
import currencyFilter from './filters/currency';
import timeTampsFilter from './filters/timetamps';
import Pagination from '@/components/Pagination';




Vue.use(VueAxios, axios);
Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueCarousel);




Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: 'zh_TW'
});
 
Vue.use(VeeValidate, {
  i18n,
  dictionary: {
    zh_TW
  }
});

Vue.component('Loading',Loading);
Vue.filter('currency',currencyFilter);
Vue.filter('timeTamps',timeTampsFilter);
Vue.component('Pagination',Pagination);

axios.defaults.withCredentials=true;

/* eslint-disable no-new */
new Vue({
  i18n,
  el: '#app',
  components: { App },
  template: '<App/>',
  router,

});
router.beforeEach((to, from, next) => {
  console.log('to',to,'from', from,'next', next)
  if(to.meta.requiresAuth){
    const api =`${process.env.APIPATH}/api/user/check`;
    axios.post(api).then((response)=>{
        console.log(response.data)
         if(response.data.success){
             //vm.$router.push('/')
             next();
         }else{
           next({
             path:'/login'
           })
         }
       })
  }else{
    next();
  }
})
