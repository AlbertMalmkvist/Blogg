import removeblogg from "./removeBlogg";

export default {
    components:{
        removeblogg
    },
    props: ['blogg'],

    template: `
    <div>
    <label>Checking</label> 
        <li @click.self="showBloggDetails(blogg.id)" class="Article-card">
                    Title: {{ blogg.title }} <br>
                    Published: {{ blogg.publication }} <br/>
       <removeBlogg :auction="auction"><removeBlogg/>
        </li>
        </div>
    `,
    computed: {
        Article() {
            return this.$store.state.Article
        }
    },
    methods: {
        showBloggDetails(id) {
            this.$router.push('/Article/' + id)
        }
    }
}
