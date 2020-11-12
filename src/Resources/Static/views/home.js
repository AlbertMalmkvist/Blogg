import listAllBlogg from '../components/bloggummaryList.js'

export default {
    components: {
        listAllBlogg
    },
    
    template: `
        <div class="main-listing">
            <listAllBlogg/>

        </div>
    `,

    async created() {

        let blogg = await fetch('/rest/blogg')
        blogg = await blogg.json()

        this.$store.commit('setBlogg', blogg)
      }
}
