import { computed } from "vue";
import { useStore } from "vuex";

export function useAuth() {
  const store = useStore();

  const user = computed(() => store.getters.getUser);
  const name = computed(() => (user.value ? user.value.name : null));
  return {
    user,
    name,
  };
}
