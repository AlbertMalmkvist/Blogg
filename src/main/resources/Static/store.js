import Vue from './libs/vue.esm.browser.js'
import Vuex from './libs/vuex.esm.browser.js'
Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        Article: [],
    },
    getters: {
           Article: state => {
               return state.Article
           }
    },
    mutations: {
        setBloggs(state, Article) {
            state.Article = Article
        },
        appendBlogg (state, blogg) {
            state.Article.push(blogg)
        },
        removeBlogg(state, title){
            let index = state.Article.findIndex(Article => Article.title == title)
            state.Article.splice(index, 1)
           },
    }
})
export default store