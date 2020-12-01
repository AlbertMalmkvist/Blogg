import removeartikel from  '../components/removeArtikel.js'

export default {
    components: {
        removeartikel,
    },
    template: `
    <div class="artikel-details">
        <div>
        <h2>{{artikel.title}}</h2>
        <p class="a-description">Description: {{artikel.description}}</p>
        <p>Published: {{artikel.}}</p>
        <removeartikel/>

        </div>
    </div>
    `,
    data() {
        return {
            artikel: {
                title: '',
                description: '',
            }
        }
    },
    async created() {
        let artikel = await fetch('/rest/Article/' + this.$route.params.id)
        artikel = await artikel.json() 
       this.artikel = artikel
     },
}