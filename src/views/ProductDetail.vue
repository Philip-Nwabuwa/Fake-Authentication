<template>
  <div v-if="loading">Loading...</div>
  <div v-else-if="error">Error: {{ error }}</div>
  <div v-else>
    <h1>{{ product.title }}</h1>
    <p>{{ product.description }}</p>
    <p>Price: {{ product.price }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ProductDetail",
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      product: null,
      loading: false,
      error: null,
    };
  },
  created() {
    this.loading = true;
    axios
      .get(`https://dummyjson.com/products/${this.id}`)
      .then((response) => {
        this.product = response.data;
      })
      .catch((error) => {
        this.error = error.message;
      })
      .finally(() => {
        this.loading = false;
      });
  },
};
</script>
