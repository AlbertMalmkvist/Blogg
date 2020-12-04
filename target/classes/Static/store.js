import Vue from './libs/vue.esm.browser.js'
import Vuex from './libs/vuex.esm.browser.js'
Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        sort_by: 'publication',
        sort_ascending: true,
        article: [],
    },
    mutations: {
        setarticle(state, article) {
            state.article = article
        },
        appendBlogg (state, blogg) {
            state.article.push(blogg)
        },
        removeBlogg(state, title){
            let index = state.article.findIndex(article => article.title == title)
            state.article.splice(index, 1)
           },
    }
})
export default store