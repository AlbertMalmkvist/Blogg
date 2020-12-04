import bloggSummaryItem from './bloggSummaryItem.js'

export default {
    components: {
        bloggSummaryItem
    },
   template: ` 
    <div>
    <ul>
        <bloggSummaryItem v-for="blogg of article" :key="blogg.id" :blogg="blogg" />
     </ul>
     </div>
    `,
    computed: {
        article() {
            return this.$store.state.article
        }},
}