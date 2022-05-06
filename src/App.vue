<template>
  <div id="app">
    <nav>
      <router-link to="/home">Home</router-link>
    </nav>
    <router-view/>
    <footer class="bg-light text-center text-lg-start">
      <!-- Grid container -->
      <div class="container p-4">
        <!--Grid row-->
        <div class="row">
        </div>
        <!--Grid row-->
      </div>
      <!-- Grid container -->

      <!-- Copyright -->
      <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
        Desarrollado por: 
        <a class="text-dark" href="https://github.com/LuianOrtiz">@LuianOrtiz</a>
      </div>
      <!-- Copyright -->
    </footer>
  </div>
  
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url('@/assets/formulario-background.jpg');
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
