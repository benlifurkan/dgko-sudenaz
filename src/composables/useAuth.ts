import { computed, ref } from "vue";
import {
  readLoggedIn,
  writeLoggedIn,
  credentialsMatch,
} from "../lib/auth";

const isLoggedInRef = ref(readLoggedIn());

export function useAuth() {
  const isLoggedIn = computed(() => isLoggedInRef.value);

  function login(username: string, password: string): boolean {
    if (!credentialsMatch(username, password)) return false;
    writeLoggedIn(true);
    isLoggedInRef.value = true;
    return true;
  }

  function logout() {
    writeLoggedIn(false);
    isLoggedInRef.value = false;
  }

  function syncFromStorage() {
    isLoggedInRef.value = readLoggedIn();
  }

  return { isLoggedIn, login, logout, syncFromStorage };
}
