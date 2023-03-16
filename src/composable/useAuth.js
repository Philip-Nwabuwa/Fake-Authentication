import { computed } from "vue";
import { useStore } from "vuex";

export function useAuth() {
  const store = useStore();

  const user = computed(() => store.getters.getUser);
  const isAuthenticated = computed(() => store.getters.isAuthenticated);
  const name = computed(() => (user.value ? user.value.name : null));
  return {
    user,
    isAuthenticated,
    name,
  };
}
