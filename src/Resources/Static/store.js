import Vue from './libs/vue.esm.browser.js'
import Vuex from './libs/vuex.esm.browser.js'
Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        user: null, // currently logged-in user
        bloggs: [],
         bid: [],
         bidder: null,
    },
    mutations: {
        // USER
        setUser(state, user) {
            state.user = user
        },
        // Blogg
        setBloggs(state, bloggs) {
            state.bloggs = bloggs
        },
        appendAuction (state, blogg) {
            state.bloggs.push(blogg)
        },
        updateHighestBids(state, bids) {
            bids.forEach(bid => {
                let blogg = state.bloggs.find(blogg => blogg.id === bid.auction_id)
                blogg.highestBid = bid.bid
            })
        },
    //   BIDS
      setBid(state, bid) {
        state.bid = bid
    },
    setBidder(state, bidder) {
        state.bidder = bidder
    },
    appendBid (state, bid) {
        state.bid.push(bid)
    }
    }
   // actions: {}
})
export default store