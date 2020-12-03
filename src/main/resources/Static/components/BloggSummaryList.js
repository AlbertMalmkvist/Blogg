import bloggSummaryItem from './bloggSummaryItem.js'

export default {
    components: {
        bloggSummaryItem
    },
   template: ` 
    <div>
    <ul>
      <button @click="getArticles">Fetch Article</button>
        <bloggSummaryItem v-for="blogg of Article" :key="blogg.id" :blogg="blogg" />
     </ul>
     </div>
    `,
    computed: {
        Article() {
            return this.$store.state.Article
        }},
        methods: {
          async getArticles() {
            let blogg = await fetch('/rest/Article')
            blogg = await blogg.json()
            console.log(blogg)
            this.$store.commit('setArticle', blogg)
          }}
}