<template>
  <div class="">
    <div>
      <h1>List of Products</h1>
      <div v-if="loading">Loading...</div>
      <div v-else-if="error">Error: {{ error }}</div>
      <div v-else>
        <div>
          <label for="category-filter">Filter by category:</label>
          <select id="category-filter" v-model="selectedCategory">
            <option value="">All categories</option>
            <option
              v-for="category in categories"
              :key="category"
              :value="category"
            >
              {{ category }}
            </option>
          </select>
        </div>
        <div v-if="filteredProducts.length">
          <ul>
            <li v-for="product in currentPageProducts" :key="product.id">
              <div class="card card-compact w-96 bg-base-100 shadow-xl">
                <img
                  v-if="product.thumbnail"
                  :src="product.thumbnail"
                  :alt="product.title"
                />

                <div class="card-body">
                  <h2 class="card-title">{{ product.title }}</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div class="card-actions justify-end">
                    <RouterLink
                      :to="{
                        name: 'ProductDetail',
                        params: { id: product.id },
                      }"
                    >
                      <button class="btn btn-primary">Buy Now</button>
                    </RouterLink>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div>
            <div class="btn-group">
              <span>Page {{ currentPage }} of {{ totalPages }}</span>
            </div>

            <div class="btn-group">
              <button
                class="btn"
                :disabled="currentPage === 1"
                @click="currentPage--"
              >
                «
              </button>
              <button
                class="btn"
                v-for="page in pages"
                :key="page"
                @click="setCurrentPage(page)"
                :class="{ active: currentPage === page }"
              >
                {{ page }}
              </button>
              <button
                class="btn"
                :disabled="currentPage * perPage >= filteredProducts.length"
                @click="currentPage++"
              >
                »
              </button>
            </div>
          </div>
        </div>
        <div v-else>
          <p>No products available.</p>
        </div>
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
      return this.filteredProducts.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.filteredProducts.length / this.perPage);
    },
    pages() {
      const pages = [];
      for (let i = 1; i <= this.totalPages; i++) {
        pages.push(i);
      }
      return pages;
    },
    categories() {
      const categories = new Set();
      this.products.forEach((product) => categories.add(product.category));
      return Array.from(categories).sort();
    },
    filteredProducts() {
      if (this.selectedCategory === "") {
        return this.products;
      } else {
        return this.products.filter(
          (product) => product.category === this.selectedCategory
        );
      }
    },
  },
  data() {
    return {
      products: [],
      loading: false,
      error: null,
      perPage: 5,
      currentPage: 1,
      selectedCategory: "",
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
      this.$router.push({ name: "Login" });
    }
  },
};
</script>

<style>
/* ... */
</style>
