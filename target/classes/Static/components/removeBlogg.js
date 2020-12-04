export default {
    props: ['blogg'],
   
    template: `
        <form @submit.prevent = "removeBlogg">
              <input required v-model = "title" type = "text" placeholder = "Enter title">
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
            let remove = {
                title : ""
            }
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