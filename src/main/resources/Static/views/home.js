import listAllBloggs from '../components/bloggSummaryList.js'
import { createNamespacedHelpers } from '../libs/vuex.esm.browser.js'

export default {
    components: {
        listAllBloggs
    },
    
    template: `
        <div class="main-listing">
            <listAllBloggs> </listAllBloggs>
        </div>
    `,
data(){
  return {
    sortBy: 'publication',
    sortDirection: 'ASC'
  }
},
    async created(){
            let blogg = await fetch('/rest/article')
            blogg = await blogg.json()
            this.$store.commit('setarticle', blogg)
            },

          }