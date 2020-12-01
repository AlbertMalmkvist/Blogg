export default {
    template: `
        <form @submit.prevent = "removeArticle" class = "Articleform">
              <input required v-model = "title" type = "text" placeholder = "Enter title of Artikel which is to be removed">

            <button>Delete</button>
            <p>{{ confirmationMessage }}</p>
            <p>{{valid}}</p>
        </form>
    `,
    data() {
        return {
            // lägg till att hitta inloggad
            title: '',
            confirmationMessage: '',
            valid: ""
        }
    },
    methods: {
        async removeArticle() {
            // LÄGG TILL FÖR KORT LÖSEN MM
            let Article = {
                title: this.title,
                description: this.description,
                publishing_Time: this.nowDate,
            }
            let result = await fetch('/rest/Articles', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(Article)
            })
            result = await result.json()
            this.$store.commit('appendArticle', result)
            this.confirmationMessage = this.title + ' has been added as an comment.'
            this.valid = ""
              //clearing the fields
        this.title = ''
        this.description = ''
        this.publishing_Time = ''
    }
}
}