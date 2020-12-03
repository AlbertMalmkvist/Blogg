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
   <div class="search-wrapper">
        <label>Search title:</label>
    <input type="text" v-model="search" placeholder="Search title.."/>
    </div>
    <ul>
        <bloggSummaryItem v-for="blogg of Article" :key="blogg.id" :blogg="blogg" />
     </ul>
     </div>
    `,
   async created() {
            this.fetchInterval = setInterval(async () => {
                let blogg_ids = this.$store.state.Article.map(blogg => blogg.id.toString())
                let Article_query_string = blogg_ids.join(',')
                let publish = await fetch('/rest/Article/newest/' + Article_query_string)
                publish = await publish.json()
            	this.$store.commit('updatenewest', publish)
            }, 1000)
    },
    beforeDestroy() {
        clearInterval(this.fetchInterval)
    },
    computed: {
        Article() {
            return this.$store.state.Article.filter((blogg) => {
                return blogg.title.toLowerCase().match(this.search.toLowerCase());
            })
        }
    }
}