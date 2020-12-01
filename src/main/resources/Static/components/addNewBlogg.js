export default {
    template: `
        <form @submit.prevent = "addNewArtikel" class = "blooggform">
              <input required v-model = "title" type = "text" placeholder = "Enter title">
                <input required v-model = "description" type = "text-box" placeholder = "Enter description">

            <button>Add Artikel</button>
            <p>{{ confirmationMessage }}</p>
            <p>{{valid}}</p>
        </form>
    `,
    data() {
        return {
            // lägg till att hitta inloggad
            title: '',
            description: '',
            publication: '',
            confirmationMessage: '',
            valid: ""
        }
    },
    methods: {
        async addNewBlogg() {

            let Article = {
                title: this.title,
                description: this.description,
                publication: new Date(),
            }
            let result = await fetch('/rest/Article', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(Article)
            })
            result = await result.json()
            this.$store.commit('appendArticle', result)
            this.confirmationMessage = this.title + ' has been added as an Article.'
            this.valid = ""
        this.title = ''
        this.description = ''
        this.publication = ''
    }
}
}