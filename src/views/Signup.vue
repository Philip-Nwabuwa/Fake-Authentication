<!-- Signup.vue -->

<template>
  <div>
    <h1>Sign Up</h1>
    <div class="flex bg-slate-100 py-2 px-6">
      <form
        @submit.prevent="signup"
        class="flex-col items-center justify-center"
      >
        <div>
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="name" required />
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <div>
          <label for="confirm-password">Confirm Password:</label>
          <input
            type="password"
            id="confirm-password"
            v-model="confirmPassword"
            required
          />
        </div>

        <button type="submit">Sign Up</button>
      </form>
    </div>
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
      confirmPassword: "",
    };
  },
  methods: {
    ...mapActions(["registerUser"]),
    async signup() {
      await this.registerUser({
        name: this.name,
        email: this.email,
        password: this.password,
      });
      this.$router.push("/products");
    },
  },
  computed: {
    isValid() {
      return this.password === this.confirmPassword;
    },
  },
};
</script>
