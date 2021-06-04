<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/game/1">Game</router-link>
    </div>
    <router-view />
    <footer></footer>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

footer {
  height: 30px;
  background-color: rgb(42, 75, 64);
}

@media screen and (min-width: 600px) {
  body {
    width: 600px;
    margin: 0 auto;
    background-color: white;
  }
  html {
    background-color: rgb(174, 190, 206);
  }
}
</style>
