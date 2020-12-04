import removeBlogg from  '../components/removeBlogg.js'
export default {
    components: {removeBlogg},

    template: `
    <div class="Article-details">
        <div>
            
        <h2>{{blogg.title}}</h2>
        <p class="a-description">Description: {{blogg.description}}</p>
        <p>Published: {{blogg.publication}}</p>
       <removeBlogg :blogg='blogg'></removeBlogg>
        </div>
    </div>
    `,
    data() {
        return {
            blogg: {
                title: '',
                description: '',
                publication: '',
            }
        }
    },
    async created(){
            let blogg = await fetch('/rest/article/' + this.$route.params.id)
            blogg = await blogg.json()
            this.blogg = blogg
          },
}