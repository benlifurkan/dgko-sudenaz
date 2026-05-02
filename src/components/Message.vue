<script lang="ts" setup>
import { PropType } from "vue";

enum MessageType {
  INCOMING,
  OUTGOING,
}

defineProps({
  type: {
    type: Number as PropType<MessageType>,
    required: false,
    default: "outgoing",
  },
  content: {
    type: String,
    required: true,
    default: "",
  },
});
</script>

<template>
  <div
    v-motion-pop
    class="relative inline-block px-2 py-px md:text-sm rounded-xl max-w-[85%] break-words"
    :class="{
      'bg-white mr-auto': type === MessageType.INCOMING,
      'bg-[#DAFED0] ml-auto': type === MessageType.OUTGOING,
    }"
  >
    {{ content }}
  </div>
</template>
