<template>
  <div>
    <h1>Protected Products</h1>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">Error: {{ error }}</div>
    <div v-else>
      <div v-if="products.length">
        <ul>
          <li v-for="product in products" :key="product.id">
            {{ product.title }}
          </li>
        </ul>
      </div>
      <div v-else>
        <p>No products available.</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";

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
      products: [],
      loading: false,
      error: null,
    };
  },
  created() {
    this.loading = true;
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        this.products = response.data.products;
        console.log(this.products);
      })
      .catch((error) => {
        this.error = error.message;
      })
      .finally(() => {
        this.loading = false;
      });
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
