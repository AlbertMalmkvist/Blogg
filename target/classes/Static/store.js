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
        getArticle(state, bids) {
            bids.forEach(bid => {
                let auction = state.auctions.find(auction => auction.id === bid.auction_id)
                auction.highestBid = bid.bid
            })
        },
        removeArticle(state, id){
            state.Article.remove(id)
        },
    }
})
export default store