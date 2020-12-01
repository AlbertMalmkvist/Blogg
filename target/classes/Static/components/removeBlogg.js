export default {
    props: ['article'],
   
    template: `
        <form @submit.prevent = "removeBlogg">

            <button>Delete</button>
            <p>{{valid}}</p>
        </form>
    `,
    data() {
        return {
            title: '',
            description: '',
            publication: '',
            valid: ""
        }
    },
    methods: {
        async removeBlogg() {
            let Article = {
                title: this.title,
                description: this.description,
                publication: this.nowDate,
            }
            let result = await fetch('/rest/Article', {
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