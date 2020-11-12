export default {
    template: `
        <form @submit.prevent = "addNewBlogg" class = "bloggform">
              <input required v-model = "title" type = "text"
              placeholder = "Enter title">
                <input required v-model = "description" type = "text-box"
                placeholder = "Enter description">

            <button>Add Comment</button>
            <p>{{ confirmationMessage }}</p>
            <p>{{valid}}</p>
        </form>
    `,
    data() {
        return {
            // lägg till att hitta inloggad
            user: '',
            title: '',
            description: '',
            addTime: '',
            confirmationMessage: '',
            valid: ""
        }
    },
    methods: {
        async addNewBlogg() {

            let nowDate = new Date()
            nowDate.setHours(0, 0, 0, 0)
            nowDate = nowDate.toLocaleString()
            // LÄGG TILL FÖR KORT LÖSEN MM
            let blogg = {
                user: this.$store.state.user.id,
                title: this.title,
                description: this.description,
                addTime: this.nowDate,
            }
            let result = await fetch('/rest/bloggs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(blogg)
            })
            result = await result.json()
            this.$store.commit('appendblogg', result)
            this.confirmationMessage = this.title + ' has been added as an comment.'
            this.valid = ""
              //clearing the fields
        this.user = ''
        this.title = ''
        this.description = ''
        this.startTime = ''
    }
}
}