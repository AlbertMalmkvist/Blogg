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
        setbloggs(state, Article) {
            state.Article = Article
        },
        appendblogg (state, blogg) {
            state.Article.push(blogg)
        },
        updatenewest(state, bloggs) {
            bloggs.forEach(Article => {
                let blogg = state.Article.find(blogg => blogg.id === Article.publish)
                blogg.highestBid = Article.Article
            })},
        removeblogg(state, title){
            let index = state.Article.findIndex(Article => Article.title == title)
            state.Article.splice(index, 1)
           },
    }
})
export default store