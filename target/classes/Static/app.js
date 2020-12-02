export default {
    template: `
      <div id="app">
        <nav class="navbar-top">
          <router-link to="/">Home</router-link>
          <router-link to="/addBlogg" >Add Article</router-link>
        </nav>
        <div class="top-picture"> Gamers Article </div>
        <main>
          <router-view />
        </main>
      </div>
    `,
  async created() {
    let Article = await fetch('/rest/Article')
    Article = await Article.json()
    this.$store.commit('setbloggs', Article)
}