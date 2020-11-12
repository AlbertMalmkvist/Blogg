export default {
    template: `
    <div class="blogg-details">
        <div>
        <h2>{{blogg.title}}</h2>
        <p>Title: {{blogg.title}}</p>
        <p>Comment: {{blogg.description}}</p>
        <p>Added: {{blogg.add_time}}</p>
        <p class="a-description">Description: {{blogg.description}}</p>
        v-if= "Date.parse(this.blogg.end_time) > Date.now() && this.$store.state.user && this.$store.state.user.id !== blogg.blogger"/>
       <p v-else-if= "Date.parse(this.blogg.end_time) < Date.now()">***This Product can not accept anymore bids***</p>
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