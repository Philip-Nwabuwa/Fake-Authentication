<template>
  <nav>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/products">Products</router-link>
      </li>
      <li v-if="!isAuthenticated">
        <router-link to="/signup">Sign Up</router-link>
      </li>
      <li v-if="!isAuthenticated">
        <router-link to="/login">Login</router-link>
      </li>
      <button v-if="isAuthenticated" @click="logout">Logout</button>
    </ul>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["isAuthenticated"]),
  },
  methods: {
    ...mapActions(["logout"]),
  },
};
</script>
