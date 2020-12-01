import Vue from './libs/vue.esm.browser.js'
import Vuex from './libs/vuex.esm.browser.js'
Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        Article: [],
    },
    mutations: {
        // Artikel
        setArticle(state, article) {
            state.Article = article
        },
        appendArticle (state, article) {
            state.Article.push(article)
        },
    }
})
export default store