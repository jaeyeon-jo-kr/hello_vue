<script setup lang="ts">
import { ref } from "vue";

const message = ref("Hello World!");
const inputMessage = ref("");

const setMessage = () => {
  message.value = inputMessage.value;
};
</script>

<template>
  <main>
    <section>
      <p>{{ message }}</p>
      <input role="input" v-model="inputMessage"/>
      <button @click="setMessage" role="button">set message</button>
    </section>
  </main>
</template>
