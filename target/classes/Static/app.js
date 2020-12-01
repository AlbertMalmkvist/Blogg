export default {
    template: `
      <div id="app">
        <nav class="navbar-top">
          <router-link to="/">Home</router-link>
          <router-link to="/addBlogg" >Add Article</router-link>
        </nav>
        <div class="top-picture"> Gamers blogg </div>
        <main>
          <router-view />
        </main>
      </div>
    `,
}