import Vue from './libs/vue.esm.browser.js'
import Vuex from './libs/vuex.esm.browser.js'
Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        Article: [],
    },
    mutations: {
        // Artikel
        setArticle(state, Article) {
            state.Article = Article
        },
        appendArticle (state, article) {
            state.Article.push(article)
        },
        DELETE_CAR(state, id){
            index = state.Article.findIndex(article => article.id == id)
            state.cars.splice(index, 1)
           },
    }
})
export default store