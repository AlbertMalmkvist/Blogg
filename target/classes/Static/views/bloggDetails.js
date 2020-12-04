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
       <removeBlogg :blogg='blogg'></removeBlogg>
        </div>
    </div>
    `,
    computed: {
        article() {
            return this.$store.state.article
        }},
}