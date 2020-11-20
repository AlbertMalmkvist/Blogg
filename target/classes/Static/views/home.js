import listAllBloggs from '../components/bloggsummaryList.js'

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

        let blogg = await fetch('/rest/blogg')
        blogg = await blogg.json()

        this.$store.commit('setBlogg', blogg)
      }
}
