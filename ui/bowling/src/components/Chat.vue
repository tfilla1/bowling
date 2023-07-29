<script lang="ts" setup>
import  sendMessage from '../components/send-message.vue'

import { computed, ref, Ref } from "vue";
import { useTheme } from "vuetify";

// import { useAppStore } from "@/store/app";

class Thing {
  key: string;
  value: string;
  description: string;
  constructor(key: string, value: string, description: string) {
    this.key = key;
    this.value = value;
    this.description = description;
  }
}

const things: Ref<Array<Thing>> = ref([
  new Thing("selected", "selected", "a selected description"),
  new Thing("message2", "here is a message", "message description"),
]);

// const appStore = useAppStore();

const theme = useTheme();
const isDark = computed(() => theme.global.current.value.dark);

const rail = ref(false);
const showChat = ref(true);

</script>

<template>
  <v-navigation-drawer
    v-model="showChat"
    color="primary"
    density="compact"
    class="d-flex flex-column"
    :rail="rail"
    permanent
    @click="rail = false"
  >
    <template #prepend>
      <v-list-item nav density="comfortable" title="Chats">
        <template v-slot:prepend>
          <v-btn variant="plain" icon="$arrowLeft" @click.stop="rail = !rail">
            <v-icon v-if="rail">$arrowRight</v-icon>
            <v-icon v-else>$arrowLeft</v-icon>
          </v-btn>
        </template>
      </v-list-item>

      <v-divider></v-divider>
    </template>
    <v-list nav>
      <v-list-item
        v-for="(item, i) in things"
        :key="i"
        :value="item"
        :title="item.value"
        :color="isDark ? 'secondary' : ''"
      >
        <template v-slot:prepend>
          <v-icon icon="$listItem"></v-icon>
        </template>
      </v-list-item>
    </v-list>
    <template v-slot:append v-if="!rail">
      <v-divider></v-divider>
      <send-message></send-message>
    </template>
  </v-navigation-drawer>
</template>
