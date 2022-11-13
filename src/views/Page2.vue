<script setup lang="ts">
import { ref } from 'vue'

import Page1 from './Page1.vue'

const isPage1Loading = ref(false);

function togglePage1(){
  isPage1Loading.value = !isPage1Loading.value
}
</script>

<template>
  <Page1 v-if="isPage1Loading"/>
  <button v-else @click="togglePage1">Load page1</button>
</template>
