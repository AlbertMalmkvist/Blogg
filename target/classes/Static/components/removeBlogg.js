export default {
    props: ['blogg'],
   
    template: `
        <form @submit.prevent = "removeBlogg">
            <button>Delete</button>
        </form>
    `,
    data() {
        return {
            title: "",
        }
    },
    methods: {
        async removeBlogg() {
            let Article = {
                title : ""
            }
            let result = await fetch('/rest/Article/'+ this.$route.params.id, {
                method: 'delete',
                headers: {
                    'Content-Type': 'application/json'
                },
            body: JSON.stringify(Article)
            })
            result = await result.json(result)
            this.$store.commit('removeblogg', result)
            this.valid = ""
            this.$router.push('/')
    }
}
}