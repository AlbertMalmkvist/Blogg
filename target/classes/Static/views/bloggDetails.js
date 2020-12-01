import removeBid from  '../components/removeBid.js'

export default {
    components: {
        removeBid,
    },
    template: `
    <div class="Article-details">
        <div>
        <h2>{{Article.title}}</h2>
        <p class="a-description">Description: {{Article.description}}</p>
        <p>Published: {{Article.publishing_time}}</p>
        <removeBid/>

        </div>
    </div>
    `,
    data() {
        return {
            Article: {
                title: '',
                description: '',
            }
        }
    },
    async created() {
        let Article = await fetch('/rest/Articles/' + this.$route.params.id)
        Article = await Article.json() 
       this.Article = Article
     },
}