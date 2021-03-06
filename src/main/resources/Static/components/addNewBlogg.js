
              //  <input required v-model = "publication" type = "text-box" placeholder = "Enter todays date">
export default {
    template: `
        <form @submit.prevent = "addNewBlogg" class = "bloggform">
              <input required v-model = "title" type = "text" placeholder = "Enter title">
                <input required v-model = "description" type = "text-box" placeholder = "Enter description">
            <button>Add Article</button>
            <p>{{ confirmationMessage }}</p>
            <p>{{valid}}</p>
        </form>
    `,
    data() {
        return {
            title: '',
            description: '',
            publication: Date.now(),
            confirmationMessage: '',
            valid: ""
        }
    },
    methods: {
        async addNewBlogg() {

            let blogg = {
                title: this.title,
                description: this.description,
                publication: Date.now(),
            }
            let result = await fetch('/rest/article', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(blogg)
            })
            result = await result.json()
            this.$store.commit('appendBlogg', result)
            this.confirmationMessage = this.title + ' has been added as an Article.'
            this.valid = ""
        this.title = ''
        this.description = ''
        this.publication = ''
    }
}
}