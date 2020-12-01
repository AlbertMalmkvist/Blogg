export default {
    props: [
        'article'
    ],
    template: `
    <div>
        <li
            @click.self="showBloggDetails(article.id)"
            class="Article-card">
                    Title: {{ article.title }} <br>
                    Published: {{ article.publication }} <br/>
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
