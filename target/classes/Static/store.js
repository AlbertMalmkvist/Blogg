import Vue from './libs/vue.esm.browser.js'
import Vuex from './libs/vuex.esm.browser.js'
Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        bloggs: [],
    },
    mutations: {
        // Blogg
        setBloggs(state, bloggs) {
            state.bloggs = bloggs
        },
        appendBloggs (state, blogg) {
            state.bloggs.push(blogg)
        },
    }
})
export default store