<template>
  <nav class="navbar bg-base-100">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </label>
        <ul
          tabindex="0"
          class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/products">Products</router-link>
          </li>
          <li v-if="!isAuthenticated">
            <router-link to="/signup">Sign Up</router-link>
          </li>
          <li v-if="!isAuthenticated">
            <router-link to="/login">Login</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="navbar-center">
      <a class="btn btn-ghost normal-case text-xl"
        >Fake-Auth
        <svg
          class="w-8 h-8 pl-2 text-white fill-current"
          fill="#000000"
          viewBox="0 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <title>key</title>
            <path
              d="M9.938 20.25l-1.219-1.25s-3.469 1.344-6.969-2.125c-2.969-2.969-1.656-7.625 0.281-9.531 2.063-2.063 6.469-3.313 9.688-0.094s1.844 7.031 1.844 7.031l8.844 8.813-0.25 4.594-4.5 0.281-0.25-2.25-2.344-0.281-0.219-2.344-2.313-0.313-0.344-2.25zM3.25 8.594c-1.375 1.375-1.75 3.219-0.844 4.094 0.906 0.906 2.719 0.531 4.094-0.844s1.781-3.219 0.875-4.094c-0.875-0.906-2.75-0.531-4.125 0.844zM21.344 24.844l0.063-1.313-8.406-8.406-0.688 0.688z"
            ></path>
          </g>
        </svg>
      </a>
    </div>
    <div class="navbar-end">
      <button v-if="isAuthenticated" class="btn" @click="logout">Logout</button>
      <button class="btn" v-if="!isAuthenticated">
        <router-link to="/signup">Sign Up</router-link>
      </button>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["isAuthenticated"]),
  },
  methods: {
    ...mapActions(["logout"]),
  },
};
</script>
