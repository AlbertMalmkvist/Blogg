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
        <bloggSummaryItem v-for="blogg of bloggs" :key="blogg.id" :blogg="blogg"
        v-if="Date.parse(blogg.publishing_time) >= Date.now()" />
     </ul>
     </div>
    `,
    computed: {
        bloggs() {
            return this.$store.state.bloggs.filter((blogg) => {
                return blogg.title.toLowerCase().match(this.search.toLowerCase());
            })
        }
    },
    methods: {
    }
}