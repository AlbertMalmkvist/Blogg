import bloggSummaryItem from './bloggSummaryItem.js'

export default {
    components: {
        bloggSummaryItem
    },
    data(){
     return {
         search:"",
     }
    },
   template: ` 
    <div>
    <ul>
        <bloggSummaryItem v-for="blogg of Article" :key="blogg.id" :blogg="blogg" />
     </ul>
     </div>
    `,
    async created() {
        let Article = await fetch('/rest/Article')
        
          Article = await Article.json()
          this.$store.commit('setbloggs', Article)
        
    },
    computed: {
        Article() {
            return this.$store.state.Article
        }},
}