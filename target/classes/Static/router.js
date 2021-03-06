import Vue from './libs/vue.esm.browser.js'
import VueRouter from './libs/vue-router.esm.browser.js'
import store from '/store.js'

  /*  {
    name: "deleteBlogg",
    path: '/deleteBlogg',
    component: deleteBlogg,
    },*/
Vue.use(VueRouter)

import home from './views/home.js'
import bloggDetails from './views/bloggDetails.js'
import addBlogg from './views/addBlogg.js'
import notFound from './views/notFound.js'

const router = new VueRouter({
  mode: "history",
  routes: [{
      name: "home",
      path: '/',
      component: home
    },
    {
      name: "bloggDetails",
      path: '/article/:id',
      component: bloggDetails
    },
    {
      name: "addBlogg",
      path: '/addBlogg',
      component: addBlogg,
    },
    {
      path: "/404",
      alias: "*",
      name: "notfound",
      component: notFound
    }
  ]
});

export default router;