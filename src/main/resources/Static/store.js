import Vue from './libs/vue.esm.browser.js'
import Vuex from './libs/vuex.esm.browser.js'
Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        Article: [],
    },
    mutations: {
        setbloggs(state, Article) {
            state.Article = Article
        },
        appendblogg (state, blogg) {
            state.Article.push(blogg)
        },
        removeblogg(state, id){
            let index = state.Article.findIndex(Article => Article.id == id)
            state.Article.splice(index, 1)
           },
    }
})
export default store