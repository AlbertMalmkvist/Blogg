export default {
    template: `
        <form @submit.prevent = "addNewBlogg" class = "bloggform">
              <input required v-model = "title" type = "text" placeholder = "Enter title">
                <input required v-model = "description" type = "text-box" placeholder = "Enter description">

            <button>Add Comment</button>
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

            let article = {
                title: this.title,
                description: this.description,
                publication: new Date(),
            }
            let result = await fetch('/rest/Article', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(article)
            })
            result = await result.json()
            this.$store.commit('appendblogg', result)
            this.confirmationMessage = this.title + ' has been added as an comment.'
            this.valid = ""
              //clearing the fields
        this.title = ''
        this.description = ''
        this.publishing_Time = ''
    }
}
}