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
        <bloggSummaryItem v-for="article of Article" :key="article.id" :article="article"/>
     </ul>
     </div>
    `,
    computed: {
        Article() {
            return this.$store.state.Article.filter((article) => {
                return article.title.toLowerCase().match(this.search.toLowerCase());
            })
        }
    },
    methods: {
    }
}