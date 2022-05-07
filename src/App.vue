<template>
  <div id="app">
    <nav>
      <router-link to="/home">Home</router-link>
    </nav>
    <router-view/>
    
  </div>
  
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
nav {
  background-color: rgb(197, 197, 197);
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: deepskyblue;
  text-decoration: none;
}


</style>
