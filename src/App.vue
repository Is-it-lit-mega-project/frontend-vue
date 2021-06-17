<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/characters">Characters</router-link>
    <router-link to="/parties">Parties</router-link>
    <router-link to="/quests">Quests</router-link>
    <router-link to="/relationships">Relationships</router-link>
  </nav>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 2rem;

  a {
    font-weight: bold;
    color: #2c3e50;
    padding: 0 .5rem;
    border-right: solid 1px magenta;

    &:last-of-type { border-right: none;}

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
