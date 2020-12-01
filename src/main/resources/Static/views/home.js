import listAllArticle from '../components/ArticleummaryList.js'

export default {
    components: {
        listAllArticle
    },
    
    template: `
        <div class="main-listing">
            <listAllArticle />
        </div>
    `,

    async created() {

        let artikel = await fetch('/rest/artikel')
        artikel = await artikel.json()

        this.$store.commit('setArtikel', artikel)
      }
}
