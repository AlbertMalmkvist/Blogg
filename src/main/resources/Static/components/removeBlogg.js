export default {
    props: ['blogg'],
   
    template: `
        <form @submit.prevent = "removeBlogg">
            <button>Delete</button>
        </form>
    `,
    methods: {
        async removeBlogg() {
            let result = await fetch('/rest/article/'+ this.$route.params.id, {
                method: 'delete',
                headers: {
                    'Content-Type': 'application/json'
                },
            body: JSON.stringify(remove)
            })
            result = await result.json(result)
            this.$store.commit('removeBlogg', result)
            this.valid = ""
            this.$router.push('/')
    }
}
}