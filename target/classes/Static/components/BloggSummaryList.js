//import bloggSummaryItem from './bloggSummaryItem.js'
   // components: {
 //       bloggSummaryItem
   // },

export default {
   template: ` 
   <div>
       <label>List</label>
    <ul>
        <li @click.self="showBloggDetails(blogg.id)" v-for="blogg of Article" :key="blogg.id" class="Bloggtext">
                    Title: {{ blogg.title }} <br>
                    Published: {{ blogg.publication }} <br/>
        </li>
     </ul>
     </div>
    `,
    computed: {
        Article() {
            return this.$store.state.Article
        }
    },
    methods: {
        showBloggDetails(id) {
            this.$router.push('/Article/' + id)
        }
    },
}