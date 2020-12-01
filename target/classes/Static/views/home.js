import listAllArticles from '../components/ArticlesummaryList.js'

export default {
    components: {
        listAllArticles
    },
    
    template: `
        <div class="main-listing">
            <listAllArticles />
        </div>
    `,

    async created() {

        let Article = await fetch('/rest/Article')
        Article = await Article.json()

        this.$store.commit('setArticle', Article)
      }
}
