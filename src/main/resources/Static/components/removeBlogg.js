export default {
    props: ['blogg'],
   
    template: `
        <form @submit.prevent = "removeBlogg">

            <button>Delete</button>
            <p>{{valid}}</p>
        </form>
    `,
    data() {
        return {
            valid: ""
        }
    },
    methods: {
        async removeBlogg() {
            let Article = {
                removing = Article.id
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
            this.title = ''
            this.description = ''
            this.publication = ''
    }
}
}