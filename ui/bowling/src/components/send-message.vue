<template>
  <v-form v-model="valid">
    <v-text-field
      v-model="message"
      :rules="messageRules"
      :loading="loading"
      density="compact"
      variant="solo"
      label="send message"
      :counter="10"
      append-inner-icon="$sendMessage"
      class="rounded-0"
      hide-details
      @click:append-inner="onClick"
    ></v-text-field>
  </v-form>
</template>

<script lang="ts" setup>
import { ref, Ref } from "vue";

const loaded: Ref<boolean> = ref(false);
const loading: Ref<boolean> = ref(false);
const valid: Ref<boolean> = ref(false);
const message: Ref<string> = ref("");
// const email: Ref<string> = ref(false);
const messageRules: Ref<Array<Function>> = ref([
  (value: string) => {
    if (value) return true;

    return "Name is required.";
  },
  (value: string) => {
    if (value?.length <= 10) return true;

    return "Name must be less than 10 characters.";
  },
]);
// let emailRules = [
//   (value) => {
//     if (value) return true;

//     return "E-mail is requred.";
//   },
//   (value) => {
//     if (/.+@.+\..+/.test(value)) return true;

//     return "E-mail must be valid.";
//   },
// ];

function onClick() {
  loading.value = true;

  setTimeout(() => {
    loading.value = false;
    loaded.value = true;
  }, 2000);
}
</script>
