<!-- Signup.vue -->

<template>
  <div class="hero min-h-screen bg-base-200">
    <div
      class="w-[90%] p-4 z-0 flex justify-center items-center gap-4 flex-col lg:flex-row-reverse"
    >
      <div class="text-center lg:text-center w-full">
        <h1 class="text-5xl font-bold uppercase mt-[-80px]">Sign UP</h1>
        <div>
          <form
            @submit.prevent="submitForm"
            class="card flex-shrink-0 w-full shadow-2xl bg-base-100"
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
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Confirm Password</span>
                  </label>
                  <input
                    type="password"
                    class="input input-bordered"
                    id="confirm-password"
                    v-model="confirmPassword"
                    placeholder="password"
                    required
                  />
                </div>
              </div>
              <div class="form-control mt-6">
                <button type="submit" class="btn btn-primary">Sign In</button>
              </div>
              <div>
                <p>Already have an account?</p>
                <router-link to="/login">Login</router-link>
              </div>
            </div>
          </form>
        </div>
      </div>
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
