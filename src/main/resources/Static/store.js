import Vue from './libs/vue.esm.browser.js'
import Vuex from './libs/vuex.esm.browser.js'
Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        Article: [],
    },
    mutations: {
        setArticle(state, Article) {
            state.Article = Article
        },
        appendArticle (state, article) {
            state.Article.push(article)
        },
        removeArticle(state, id){
            index = state.Article.findIndex(Article => Article.id == id)
            state.cars.splice(index, 1)
           },
    }
})
export default store