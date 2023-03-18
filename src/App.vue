<template>
  <Navbar />
  <router-view />
  <Footer />
</template>

<script>
import { mapGetters } from "vuex";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
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
