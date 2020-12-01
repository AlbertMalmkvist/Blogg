import ArticleSummaryItem from './ArticleSummaryItem.js'

export default {
    components: {
        ArticleSummaryItem
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
        <ArticleSummaryItem v-for="Article of Articles" :key="Article.id" :Article="Article"
        v-if="Date.parse(Article.publishing_time) >= Date.now()" />
     </ul>
     </div>
    `,
    computed: {
        Articles() {
            return this.$store.state.Articles.filter((Article) => {
                return Article.title.toLowerCase().match(this.search.toLowerCase());
            })
        }
    },
    methods: {
    }
}