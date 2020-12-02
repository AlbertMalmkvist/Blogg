export default {
    template: `
        <form @submit.prevent = "addNewBlogg" class = "bloggform">
              <input required v-model = "title" type = "text" placeholder = "Enter title">
                <input required v-model = "description" type = "text-box" placeholder = "Enter description">
                <input required v-model = "publication" type = "text-box" placeholder = "Enter todays date">

            <button>Add Article</button>
            <p>{{ confirmationMessage }}</p>
            <p>{{valid}}</p>
        </form>
    `,
    data() {
        return {
            title: '',
            description: '',
            publication: '',
            confirmationMessage: '',
            valid: ""
        }
    },
    methods: {
        async addNewBlogg() {

            let blogg = {
                title: this.title,
                description: this.description,
                publication: this.publication,
            }
            let publish =  Date.parse(this.publication)
            if(publish>0){
            let result = await fetch('/rest/Article', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(blogg)
            })
            result = await result.json()
            this.$store.commit('appendblogg', result)
            this.confirmationMessage = this.title + ' has been added as an Article.'
            this.valid = ""
              //clearing the fields
        this.title = ''
        this.description = ''
        this.publication = ''


        }else {
             this.valid = "invalid date, try again"
             this.confirmationMessage = ""

        }
    }
}
}