<template>
  <Navbar />
  <router-view />
</template>

<script>
import { mapGetters } from "vuex";
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar
  },
  computed: {
    ...mapGetters(["isAuthenticated"]),
  },
  watch: {
    isAuthenticated(newValue) {
      // Redirect to login page if user is not authenticated
      if (!newValue) {
        this.$router.push({ name: "Login" });
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
