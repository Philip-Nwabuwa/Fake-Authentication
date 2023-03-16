<template>
  <div>
    <h1>Protected Products</h1>
    <!-- <p v-if="user">Welcome {{ name }}!</p> -->
    <div v-if="products.length">
      <ul>
        <li v-for="product in products" :key="product.id">
          {{ product.name }}
        </li>
      </ul>
    </div>
    <div v-else>
      <p>No products available.</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
// import { useAuth } from "../composable/useAuth.js";

export default {
  name: "Product",

  computed: {
    ...mapGetters(["isAuthenticated"]),
    // user() {
    //   const { user } = useAuth();
    //   return user ? user.name : "";
    // },
  },
  data() {
    return {
      products: [
        { id: 1, name: "Product 1" },
        { id: 2, name: "Product 2" },
        { id: 3, name: "Product 3" },
      ],
    };
  },
  mounted() {
    if (!this.isAuthenticated) {
      // Redirect to login page if user is not authenticated
      this.$router.push({ name: "Login" });
    }
  },
};
</script>

<style>
/* ... */
</style>
