<script lang="ts" setup>
import { watch, ref } from "vue";

// Components
import Message from "../components/Message.vue";
import StatusBar from "../components/StatusBar.vue";
import WPFooter from "../components/WhatsApp/Footer.vue";

enum MessageType {
  INCOMING,
  OUTGOING,
}

interface IMessage {
  type: MessageType;
  content: string;
}

const messages: IMessage[] = [
  {
    type: MessageType.OUTGOING,
    content: "Selam Sudenaz ❤️",
  },
  {
    type: MessageType.OUTGOING,
    content: "Biliyorum henüz birbirimizi tanımıyoruz.",
  },
  {
    type: MessageType.OUTGOING,
    content: "Vermiş olduğun karara da saygı duyuyorum.",
  },
  {
    type: MessageType.OUTGOING,
    content: "Bu yüzden hiçbir şey için üstelemek istemiyorum.",
  },
  {
    type: MessageType.OUTGOING,
    content: "Tek dileğim senin de istediğin gibi arkadaşlığımızın baki kalması.",
  },
  {
    type: MessageType.OUTGOING,
    content: "Doğum günün için geçici ve klişe şeyler yapmak istemedim.",
  },
  {
    type: MessageType.OUTGOING,
    content: "Yoksa sana çiçeklerin en güzelini almasını bilirim.",
  },
  {
    type: MessageType.OUTGOING,
    content: "Bu web sayfasına kimse kafasına estiği gibi giremeyecek.",
  },
  {
    type: MessageType.OUTGOING,
    content: "Bu sayfa sadece sana özel.",
  },
  {
    type: MessageType.OUTGOING,
    content: "Umarım hayatın boyunca bütün istediklerine erişirsin ve güzelliklerin en güzeli seni bulur. Çünkü sen her güzel şeyin bir fazlasısın. Doğum günün kutlu olsun ❤️",
  },
  {
    type: MessageType.INCOMING,
    content: "Teşekkür ederim Furkan.",
  }
];

const currentMessages = ref<IMessage[]>([]);
const startAudio = ref(false);
const acceptedAudio = ref(false);

watch(
  () => acceptedAudio.value,
  (val) => {
    if (val !== true) return;

    let index = 0;
    const interval = setInterval(function () {
      if (currentMessages.value.length === messages.length)
        clearInterval(interval);

      const nextMessage = messages[index];
      currentMessages.value.push(nextMessage);

      startAudio.value = true;
      index++;
    }, 1000);
  },
  { immediate: true }
);
</script>

<template>
  <div
    v-if="acceptedAudio === false"
    class="fixed inset-0 flex items-center justify-center w-screen h-screen p-4 bg-black/70"
  >
    <div class="p-4 space-y-4 bg-white rounded-lg lg:w-1/4">
      <div>
        <h3 class="text-lg font-medium">Selam!</h3>
        <p class="opacity-50">
          Bu web sayfasını senin için yaptım 🥳. Hazır olduğunda tamama tıkla. Lütfen önce sayfanın tamamının yüklenmesini bekle.
        </p>
      </div>

      <button
        type="button"
        class="px-6 py-1 text-sm text-white transition-colors bg-pink-600 rounded-lg hover:bg-pink-700"
        @click="acceptedAudio = true"
      >
        Tamam
      </button>
    </div>
  </div>

  <!-- Phone -->
  <div class="w-screen h-screen max-h-screen p-2 lg:p-8">
    <!-- Outer Side -->
    <div
      class="w-full h-full p-2 mx-auto border-gray-300/10 lg:w-1/4 rounded-xl"
    >
      <!-- Inner Screen -->
      <div class="w-full h-full rounded-lg">
        <!-- Header -->
        <main class="flex flex-col justify-between h-full">
          <!-- Status Bar -->
          <StatusBar />

          <!-- WhatsApp -->
          <header
            class="flex items-center px-2 py-2 space-x-4 bg-gray-200 border-b border-gray-600/20"
          >
            <!-- Back Button -->
            <div class="text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </div>

            <!-- Name -->
            <div class="flex items-center flex-grow space-x-2">
              <img
                src="/sudenaz.jpg"
                alt="sudenaz avatar"
                class="rounded-full w-7 h-7"
              />

              <span style="font-size: 13.5px">Sudenaz Yağız</span>
            </div>

            <div
              class="flex items-center justify-end pr-2 space-x-2 text-blue-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1.5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1.5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
          </header>

          <!-- Messages -->
          <div
            class="flex-grow overflow-y-auto flex flex-col space-y-1 py-2 px-1 h-full bg-[url('/wp-background.png')] bg-center bg-cover"
          >
            <template
              v-for="(message, index) in currentMessages"
              :key="`message-${index}`"
            >
              <Message :content="message?.content" :type="message?.type" />
            </template>
          </div>

          <WPFooter />
        </main>
      </div>
    </div>
  </div>
</template>
