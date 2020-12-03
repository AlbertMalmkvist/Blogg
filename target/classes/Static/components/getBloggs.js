
export default {
    template: `
      <button @click="getPets">Fetch Pets</button>
    `,
    methods: {
      async getPets() {
        let pets = await fetch('/rest/pets')
        pets = await pets.json()
  
        console.log(pets)
  
        this.$store.commit('setArticle', pets)
      }
    },