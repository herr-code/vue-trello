<template>
  <app-header></app-header>
  <router-view class="container"/>
  <app-footer></app-footer>
</template>

<script>
  import AppHeader from "@/components/AppHeader";
  import AppFooter from "@/components/AppFooter";

  export default {
    name: 'app',
    components: {
      AppHeader, AppFooter
    }
  }
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

.container {
  padding-bottom: 4rem;
}

/*nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
*/
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  color: #37474f;
  background-image: linear-gradient(90deg, rgba(181,190,255,1) 0%, rgba(215,166,245,1) 100%);
  position: relative;
  padding-bottom: 3em;
  min-height: 100vh;
}
</style>
