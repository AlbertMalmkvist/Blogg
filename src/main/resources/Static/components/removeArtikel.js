export default {
    template: `
        <form @submit.prevent = "removeArtikel" class = "Artikelform">
              <input required v-model = "title" type = "text" placeholder = "Enter title of Artikel which is to be deleted">

            <button>Delete</button>
            <p>{{ confirmationMessage }}</p>
            <p>{{valid}}</p>
        </form>
    `,
    data() {
        return {
            // lägg till att hitta inloggad
            title: '',
            description: '',
            publishing_Time: '',
            confirmationMessage: '',
            valid: ""
        }
    },
    methods: {
        async removeArtikel() {
            // LÄGG TILL FÖR KORT LÖSEN MM
            let Artikel = {
                title: this.title,
                description: this.description,
                publishing_Time: this.nowDate,
            }
            let result = await fetch('/rest/Article', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(Artikel)
            })
            result = await result.json()
            this.$store.commit('appendArtikel', result)
            this.confirmationMessage = this.title + ' has been added as an comment.'
            this.valid = ""
              //clearing the fields
        this.title = ''
        this.description = ''
        this.publishing_Time = ''
    }
}
}