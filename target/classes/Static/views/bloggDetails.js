import removeBid from  '../components/removeBid.js'

export default {
    components: {
        removeBid,
    },
    template: `
    <div class="blogg-details">
        <div>
        <h2>{{blogg.title}}</h2>
        <p class="a-description">Description: {{blogg.description}}</p>
        <p>Published: {{blogg.publishing_time}}</p>
        <removeBid/>

        </div>
    </div>
    `,
    data() {
        return {
            blogg: {
                title: '',
                description: '',
            }
        }
    },
    async created() {
        let blogg = await fetch('/rest/bloggs/' + this.$route.params.id)
        blogg = await blogg.json() 
       this.blogg = blogg
     },
}