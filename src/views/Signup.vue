<!-- Signup.vue -->

<template>
  <div>
    <h1>Sign Up</h1>
    <form @submit.prevent="signup">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name" required />
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required />
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" required />
      <button type="submit">Sign Up</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(["signup"]),
    async signup() {
      await this.signup({
        name: this.name,
        email: this.email,
        password: this.password,
      });
      this.$router.push("/products");
    },
  },
};
</script>
