<script lang="ts" setup>
import { ref, Ref } from "vue";

class Thing {
  key: string;
  value: string;
  description: string;
  constructor(key: string, value: string, description: string) {
    this.key = key
    this.value = value
    this.description = description
  }
}

const thing: Ref<Thing> = ref(new Thing('selected', 'selected', 'a selected description'));
</script>

<template>
  <v-card title="bowling" subtitle="play a game">

    <v-list>
      <v-list-item :title="thing.value" :subtitle="thing.description"></v-list-item>
    </v-list>
  </v-card>
</template>
