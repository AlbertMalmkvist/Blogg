import listAllBloggs from '../components/bloggSummaryList.js'

export default {
    components: {
        listAllBloggs
    },
    
    template: `
        <div class="main-listing">
            <listAllBloggs />
        </div>
    `,
    async created() {
        let blogg = await fetch('/rest/Article')
        blogg = await blogg.json()
        this.$store.commit('setblogg', blogg)
      }
}
