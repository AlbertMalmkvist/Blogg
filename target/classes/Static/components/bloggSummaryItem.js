export default {
    props: [
        'blogg'
    ],
    template: `
    <div>
        <li
            @click.self="showBloggDetails(blogg.id)"
            class="blogg-card">
                    Title: {{ blogg.title }} <br>
        </li>
        </div>
    `,
    computed: {
        Bloggs() {
            return this.$store.state.bloggs
        }
    },
    methods: {
        showBloggDetails(id) {
            this.$router.push('/bloggs/' + id)
        }
    }
}
