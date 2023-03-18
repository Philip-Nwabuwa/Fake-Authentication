<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <div class="text-center lg:text-left">
        <h1 class="text-5xl font-bold">Login</h1>
      </div>
      <form
        @submit.prevent="submitForm"
        class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
      >
        <div class="card-body">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              type="text"
              id="email"
              v-model="email"
              required
              placeholder="email"
              class="input input-bordered"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input
              type="password"
              id="password"
              v-model="password"
              required
              placeholder="password"
              class="input input-bordered"
            />
            <label class="label">
              <a href="#" class="label-text-alt link link-hover"
                >Forgot password?</a
              >
            </label>
          </div>
          <div class="form-control mt-6">
            <button type="submit" class="btn btn-primary">Login</button>
          </div>
          <div>
            <p>Don't have an account?</p>
            <router-link to="/signup">Sign Up</router-link>
          </div>
        </div>
      </form>
    </div>
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
