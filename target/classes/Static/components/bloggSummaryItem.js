export default {
    props: ['blogg'],

    template: `
    <div>
    <label>Checking</label> 
        <li @click.self="showBloggDetails(blogg.id)" class="Article-card">
                    Title: {{ blogg.title }} <br>
                    Published: {{ blogg.publication }} <br/>
        </li>
        </div>
    `,
    computed: {
        Article() {
            return this.$store.state.Article
        }
    },
    methods: {
        showBloggDetails(id) {
            this.$router.push('/Article/' + id)
        }
    }
}
