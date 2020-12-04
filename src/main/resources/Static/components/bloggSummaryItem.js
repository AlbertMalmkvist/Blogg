/*import removeblogg from "./removeBlogg"
       <removeBlogg :blogg="blogg"></removeBlogg>;
    components:{
        removeblogg
    },*/

export default {
    props: ['blogg'],

    template: `
    <div>
        <li @click.self="showBloggDetails(blogg.id)" class="Article-card">
                    Title: {{ blogg.title }} <br>
                    Published: {{ blogg.publication }} <br/>
        </li>
        </div>
    `,
    computed: {
        article() {
            return this.$store.state.article
        }
    },
    methods: {
        showBloggDetails(id) {
            this.$router.push('/article/' + id)
        }
    }
}
