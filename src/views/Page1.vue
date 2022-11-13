<script setup lang="ts">

import { ref } from 'vue'

import Page2 from './Page2.vue'

const isPage2Loading = ref(false); 

function togglePage2() {
     isPage2Loading.value = !isPage2Loading.value
}
</script>

<template>
  <Page2 v-if="isPage2Loading"/>
  <button v-else @click="togglePage2">Load page 2</button>
</template>
