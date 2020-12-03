export default {
    props: ['blogg'],
   
    template: `
        <form @submit.prevent = "removeBlogg">
              <input required v-model = "title" type = "text" placeholder = "Enter id">
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
                title : this.title

            }
            let result = await fetch('/rest/Article/'+ this.title, {
                method: 'delete',
                headers: {
                    'Content-Type': 'application/json'
                },
            body: JSON.stringify(Article)
            })
            result = await result.json(result)
            this.$store.commit('removeblogg', result)
            this.valid = ""
    }
}
}