<script lang="ts" setup>
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useAuth } from "../composables/useAuth";

const route = useRoute();
const router = useRouter();
const { login } = useAuth();

const username = ref("");
const password = ref("");
const error = ref("");
const submitting = ref(false);

const envConfigured = computed(() => {
  const u = import.meta.env.VITE_LOGIN_USERNAME ?? "";
  const p = import.meta.env.VITE_LOGIN_PASSWORD ?? "";
  return Boolean(u && p);
});

function onSubmit() {
  error.value = "";
  if (!envConfigured.value) {
    error.value =
      "Giriş bilgileri yapılandırılmamış. Proje kökünde .env dosyasında VITE_LOGIN_USERNAME ve VITE_LOGIN_PASSWORD tanımlayın.";
    return;
  }
  submitting.value = true;
  try {
    const ok = login(username.value.trim(), password.value);
    if (!ok) {
      error.value = "Kullanıcı adı veya şifre hatalı.";
      return;
    }
    const redirect =
      typeof route.query.redirect === "string" ? route.query.redirect : "/";
    router.replace(redirect || "/");
  } finally {
    submitting.value = false;
  }
}
</script>

<template>
  <div
    class="fixed inset-0 flex items-center justify-center w-screen min-h-screen p-4 bg-black/70"
  >
    <form
      class="w-full max-w-sm p-6 space-y-4 bg-white rounded-lg shadow-lg"
      @submit.prevent="onSubmit"
    >
      <div>
        <h1 class="text-xl font-semibold text-gray-900">Giriş</h1>
        <p class="mt-1 text-sm text-gray-500">
          Devam etmek için kullanıcı adı ve şifrenizi girin.
        </p>
      </div>

      <div class="space-y-3">
        <div>
          <label
            for="login-username"
            class="block text-sm font-medium text-gray-700"
            >Kullanıcı adı</label
          >
          <input
            id="login-username"
            v-model="username"
            type="text"
            autocomplete="username"
            class="block w-full px-3 py-2 mt-1 text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            required
          />
        </div>
        <div>
          <label
            for="login-password"
            class="block text-sm font-medium text-gray-700"
            >Şifre</label
          >
          <input
            id="login-password"
            v-model="password"
            type="password"
            autocomplete="current-password"
            class="block w-full px-3 py-2 mt-1 text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            required
          />
        </div>
      </div>

      <p v-if="error" class="text-sm text-red-600 break-words">{{ error }}</p>

      <button
        type="submit"
        class="w-full px-4 py-2 text-sm font-medium text-white transition-colors bg-pink-600 rounded-lg hover:bg-pink-700 disabled:opacity-60"
        :disabled="submitting"
      >
        {{ submitting ? "Giriş yapılıyor…" : "Giriş yap" }}
      </button>
    </form>
  </div>
</template>
