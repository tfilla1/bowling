<template>
  <Chat />
  <v-container>
    <v-row>
      <v-col cols="12">
        <Bowling />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
  import Bowling from '@/components/Bowling.vue'
  import Chat from '@/components/Chat.vue'
</script>
