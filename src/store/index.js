import { createStore } from "vuex";

const KEY_TOKEN = "auth_token";

const store = createStore({
  state: {
    user: null,
    token: localStorage.getItem(KEY_TOKEN),
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setToken(state, token) {
      state.token = token;
      localStorage.setItem(KEY_TOKEN, token);
    },
    clearAuth(state) {
      state.user = null;
      state.token = null;
      localStorage.removeItem(KEY_TOKEN);
    },
  },
  actions: {
    async loginUser({ commit }, credentials) {
      // Call your API to authenticate the user and obtain a token
      const token = "fake_token";

      // Save the token in the store and in local storage
      commit("setToken", token);
      localStorage.setItem(KEY_TOKEN, token);

      // Save user information if needed
      const user = { email: credentials.email };
      localStorage.setItem("user", JSON.stringify(user));
      commit("setUser", user);
    },
    async registerUser({ commit }, userData) {
      // Call your API to register the user and obtain a token
      const token = "fake_token";

      // Save the token in the store and in local storage
      commit("setToken", token);
      localStorage.setItem(KEY_TOKEN, token);

      // Save user information if needed
      const user = { name: userData.name, email: userData.email };
      localStorage.setItem("user", JSON.stringify(user));
      commit("setUser", user);
    },
    logout({ commit }) {
      // Clear the token and user information from the store and local storage
      commit("clearAuth");
    },
  },

  getters: {
    isAuthenticated: (state) => {
      return !!state.token;
    },
    getUser: (state) => {
      return state.user;
    },
    getToken: (state) => {
      return state.token;
    },
  },
});

export default store;
