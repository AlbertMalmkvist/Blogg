import removeBlogg from  '../components/removeBlogg.js'

export default {
    components: {removeBlogg},
    
    
    template: `
    <div class="Article-details">
        <div>
        <h2>{{blogg.title}}</h2>
        <p class="a-description">Description: {{blogg.description}}</p>
        <p>Published: {{blogg.published}}</p>
       <removeBlogg :blogg="blogg"><removeBlogg/>

        </div>
    </div>
    `,
    data() {
        return {
            blogg: {
                title: '',
                description: '',
                published: '',
            }
        }
    },
        async created() {
            let blogg =  fetch('/rest/Article'+this.$route.params.id)
            blogg =  blogg.json()
            blogg = this.blogg
          }
}