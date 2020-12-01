import Vue from './libs/vue.esm.browser.js'
import Vuex from './libs/vuex.esm.browser.js'
Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        Articles: [],
    },
    mutations: {
        // Article
        setArticles(state, Articles) {
            state.Articles = Articles
        },
        appendArticles (state, Article) {
            state.Articles.push(Article)
        },
    }
})
export default store