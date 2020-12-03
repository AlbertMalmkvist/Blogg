import removeBlogg from  '../components/removeBlogg.js'

export default {
    components: {removeBlogg},
    props: ['blogg'],

    template: `
    <div class="Article-details">
        <div>
        <h2>{{blogg.title}}</h2>
        <p class="a-description">Description: {{blogg.description}}</p>
        <p>Published: {{blogg.published}}</p>
       <removeBlogg ></removeBlogg>

        </div>
    </div>
    `,
    computed: {
        Article() {
            return this.$store.state.Article
        }},
}