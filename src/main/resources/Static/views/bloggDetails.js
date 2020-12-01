import removeBlogg from  '../components/removeBlogg.js'

export default {
    components: {
        removeBlogg,
    },
    template: `
    <div class="Article-details">
        <div>
        <h2>{{Article.title}}</h2>
        <p class="a-description">Description: {{Article.description}}</p>
        <p>Published: {{Article.published}}</p>
        <removeBlogg/>

        </div>
    </div>
    `,
    data() {
        return {
            Article: {
                title: '',
                description: '',
                published: '',
            }
        }
    },
    async created() {
        let Article = await fetch('/rest/Article/' + this.$route.params.id)
        Article = await Article.json() 
       this.Article = Article
     },
}