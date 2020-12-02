/*import removeBlogg from  '../components/removeBlogg.js'
       <removeBlogg :blogg="blogg"><removeBlogg/>
    components: {
        removeBlogg
    },*/

export default {
    template: `
    <div class="Article-details">
        <div>
        <h2>{{blogg.title}}</h2>
        <p class="a-description">Description: {{blogg.description}}</p>
        <p>Published: {{blogg.published}}</p>

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
            let blogg = await fetch('/rest/Article')
            blogg = await blogg.json()
            this.$store.commit('setblogg', blogg)
            blogg = this.blogg
          }
}