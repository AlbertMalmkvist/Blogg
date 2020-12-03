export default {
    props: ['blogg'],
   
    template: `
        <form @submit.prevent = "removeBlogg">
            <button>Delete</button>
        </form>
    `,
    data() {
        return {
            article: "",
        }
    },
    methods: {
        async removeBlogg() {
            let Article = {
                article = this.blogg.id
            }
            let result = await fetch('/rest/Article/'+ this.$route.params.id, {
                method: 'delete',
            })
            result = await result.json()
            this.$store.commit('removeBlogg', result)
            this.valid = ""
    }
}
}