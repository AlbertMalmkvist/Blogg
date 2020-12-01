import Vue from './libs/vue.esm.browser.js'
import VueRouter from './libs/vue-router.esm.browser.js'
import store from '/store.js'

Vue.use(VueRouter)

import home from './views/home.js'
import ArtikelDetails from './views/artikelDetails.js'
import addArtikel from './views/addArtikel.js'
import notFound from './views/notFound.js'

const router = new VueRouter({
  mode: "history",
  routes: [{
      name: "home",
      path: '/',
      component: home
    },
    {
      name: "artikelDetails",
      path: '/Article/:id',
      component: artikelDetails
    },
    {
      name: "addArtikel",
      path: '/addArtikel',
      component: addArtikel,
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
export default router;