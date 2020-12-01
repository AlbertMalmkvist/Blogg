import listAllBlogg from '../components/bloggSummaryList.js'

export default {
    components: {
        listAllBlogg
    },
    
    template: `
        <div class="main-listing">
            <listAllBlogg />
        </div>
    `,

    async created() {

        let Article = await fetch('/rest/Article')
        Article = await Article.json()

        this.$store.commit('setArticle', Article)
      }
}
