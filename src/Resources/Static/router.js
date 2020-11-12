import Vue from './libs/vue.esm.browser.js'
import VueRouter from './libs/vue-router.esm.browser.js'
import store from '/store.js'

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
      path: '/bloggs/:id',
      component: bloggDetails
    },
    {
      name: "addblogg",
      path: '/addblogg',
      component: addBlogg,
      meta: {
        reguiresAuth: true
      }
    },
    {
      path: "/404",
      alias: "*",
      name: "notfound",
      component: notFound
    }
  ]
});

router.beforeEach((to, from, next) => {
      if (to.matched.some(record => record.meta.reguiresAuth)) {
        // need login
        if (!store.state.user) {
          next({
            name: "home"
          });
        } else {
          next();
        }
      } else {
        next();
      }
    });


export default router;