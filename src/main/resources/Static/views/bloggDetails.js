export default {
    template: `
    <div class="blogg-details">
        <div>
        <h2>{{blogg.title}}</h2>
        <p>Title: {{blogg.title}}</p>
        <p>Comment: {{blogg.description}}</p>
        <p>Published: {{blogg.publishing_time}}</p>
        <p class="a-description">Description: {{blogg.description}}</p>
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
        // all dynamic params
        //console.log(this.$route.params)
        let blogg = await fetch('/rest/bloggs/' + this.$route.params.id)
        blogg = await blogg.json() 
       this.blogg = blogg
     },
}