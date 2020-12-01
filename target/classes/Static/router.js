import Vue from './libs/vue.esm.browser.js'
import VueRouter from './libs/vue-router.esm.browser.js'
import store from '/store.js'

Vue.use(VueRouter)

import home from './views/home.js'
import ArticleDetails from './views/ArticleDetails.js'
import addArticle from './views/addArticle.js'
import notFound from './views/notFound.js'

const router = new VueRouter({
  mode: "history",
  routes: [{
      name: "home",
      path: '/',
      component: home
    },
    {
      name: "ArticleDetails",
      path: '/Articles/:id',
      component: ArticleDetails
    },
    {
      name: "addArticle",
      path: '/addArticle',
      component: addArticle,
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