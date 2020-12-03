import Vue from './libs/vue.esm.browser.js'
import {store} from './store.js'
import router from './router.js'
import app from './app.js'

new Vue({
    store,
    router,
    render: h => h(app)
}).$mount('#app');

async function getAllBloggs() {
    let Article = await fetch('/rest/Article')
    Article = await Article.json()
    console.log(Article)
}

async function getBloggById(id) {
    let blogg = await fetch('/rest/Article' + id)
    blogg = await blogg.json()
    console.log(blogg)
}