import Vue from './libs/vue.esm.browser.js'
import {store} from './store.js'
import router from './router.js'
import app from './app.js'

new Vue({
    store,
    router,
    render: h => h(app)
}).$mount('#app');

async function getAllUsers() {
    let users = await fetch('/rest/users')
    users = await users.json()
    console.log(users)
}