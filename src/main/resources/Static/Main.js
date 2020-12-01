import Vue from './libs/vue.esm.browser.js'
import {store} from './store.js'
import router from './router.js'
import app from './app.js'

new Vue({
    store,
    router,
    render: h => h(app)
}).$mount('#app');

async function getAllArticle() {
    let Article = await fetch('/rest/Article')
    Article = await Article.json()
    console.log(Article)
}

async function getArticleById(id) {
    let article = await fetch('/rest/Article' + id)
    article = await article.json()
    console.log(article)
}