export default {
    props: [
        'Article'
    ],
    template: `
    <div>
        <li
            @click.self="showArticleDetails(Article.id)"
            class="Article-card">
                    Title: {{ Article.title }} <br>
        </li>
        </div>
    `,
    computed: {
        Articles() {
            return this.$store.state.Articles
        }
    },
    methods: {
        showArticleDetails(id) {
            this.$router.push('/Articles/' + id)
        }
    }
}
