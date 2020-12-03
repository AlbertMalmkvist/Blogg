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
        <button @click = "getArticle"> Fetch Article <br></button>
    </div>
    <ul>
        <bloggSummaryItem v-for="blogg of Article" :key="blogg.id" :blogg="blogg" />
     </ul>
     </div>
    `,
    template: `
    `,
    methods: {
        async getArticle() {
            let blogg = await fetch ('/rest/Article')
            blogg = await blogg.json()
            console.log(blogg)
        },
    
}}