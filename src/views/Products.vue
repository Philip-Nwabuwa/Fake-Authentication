<template>
  <div>
    <h1>Protected Products</h1>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">Error: {{ error }}</div>
    <div v-else>
      <div v-if="products.length">
        <ul>
          <li v-for="product in currentPageProducts" :key="product.id">
            {{ product.title }} {{ product.price }}
          </li>
        </ul>
        <div>
          <span>Page {{ currentPage }} of {{ totalPages }}</span>

          <div>
            <button :disabled="currentPage === 1" @click="currentPage--">
              Prev
            </button>
            <button
              v-for="page in pages"
              :key="page"
              @click="setCurrentPage(page)"
              :class="{ active: currentPage === page }"
            >
              {{ page }}
            </button>
            <button
              :disabled="currentPage * perPage >= products.length"
              @click="currentPage++"
            >
              Next
            </button>
          </div>
        </div>
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
    currentPageProducts() {
      const start = (this.currentPage - 1) * this.perPage;
      const end = start + this.perPage;
      return this.products.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.products.length / this.perPage);
    },
    pages() {
      const pages = [];
      for (let i = 1; i <= this.totalPages; i++) {
        pages.push(i);
      }
      return pages;
    },
  },
  data() {
    return {
      products: [],
      loading: false,
      error: null,
      perPage: 10,
      currentPage: 1,
    };
  },
  created() {
    this.loading = true;
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        this.products = response.data.products;
      })
      .catch((error) => {
        this.error = error.message;
      })
      .finally(() => {
        this.loading = false;
      });
  },
  methods: {
    setCurrentPage(page) {
      this.currentPage = page;
    },
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
