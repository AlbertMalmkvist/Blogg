export default {
    props: [
        'auction'
    ],
    template: `
    <div>
        <li
            @click.self="showAuctionDetails(auction.id)"
            class="auction-card">
                    Title: {{ auction.title }} <br>  
                    <span v-else-if= "Date.parse(this.auction.end_time) < Date.now()">***Auction expired***</span>
        </li>
        </div>
    `,
    computed: {
        auctions() {
            return this.$store.state.auctions
        }
    },
    methods: {
        showAuctionDetails(id) {
            this.$router.push('/auctions/' + id)
        }
    }
}
