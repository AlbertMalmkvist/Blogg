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

        let Article = await fetch('/rest/Article')
        Article = await Article.json()

        this.$store.commit('setBlogg', Article)
      }
}
