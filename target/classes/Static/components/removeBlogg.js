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
            title: "",
            description: "",
            publication: "",
        }
    },
    methods: {
        async removeBlogg() {
            let Article = {
                article = this.blogg.id
                
            }
            let result = await fetch('/rest/Article/remove', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(Article)
            })
            result = await result.json()
            this.$store.commit('removeBlogg', result)
            this.valid = ""
    }
}
}