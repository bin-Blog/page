
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
// import router from './router'


// Vue.config.productionTip = false



const  routes = [
  {
    path:'/',redirect: '/page/1'
  }

       /*routes:{
  '/page/:pageNum': {
    name: 'page',
      component: {}
  },
  {
    path:'/',redirect: '/page/1'
  }
*/
     ]

const router = new VueRouter({
  routes
});




router.beforeEach((transition) => {
  if (transition.to.path !== '/page/0') {
    transition.next()
  } else {
    transition.abort()
  }
});



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
