<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="submitForm">
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required />
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" required />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(["loginUser"]),
    async submitForm() {
      await this.loginUser({ email: this.email, password: this.password });
      this.$router.push("/products");
    },
  },
};
</script>
