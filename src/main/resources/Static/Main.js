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
    let article = await fetch('/rest/article')
    article = await article.json()
    console.log(article)
}

async function getBloggById(id) {
    let blogg = await fetch('/rest/article' + id)
    blogg = await blogg.json()
    console.log(blogg)
}