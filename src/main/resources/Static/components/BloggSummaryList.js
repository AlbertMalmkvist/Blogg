import bloggSummaryItem from './bloggSummaryItem.js'

export default {
    components: {
        bloggSummaryItem
    },
   template: ` 
    <div>
    <ul>
      <button @click="getArticles">Fetch Article</button>
        <bloggSummaryItem v-for="blogg of article" :key="blogg.id" :blogg="blogg" />
     </ul>
     </div>
    `,
    computed: {
        article() {
            return this.$store.state.article
        }},
        methods: {
          async getArticles() {
            let blogg = await fetch('/rest/article')
            blogg = await blogg.json()
            console.log(blogg)
            this.$store.commit('setarticle', blogg)
          }}
}