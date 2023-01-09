<script lang="ts" setup>
import { defineProps, ref } from 'vue'
export interface Props {
  id: number;
}

const props = withDefaults(defineProps<Props>(), {
    id:0
})
</script>

<template>
  <button />
</template>

