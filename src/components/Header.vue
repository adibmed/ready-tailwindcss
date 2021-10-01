<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
 <div class="p-4 bg-white">HEADER</div>

  <img alt="Vue logo" src="../assets/logo.png" />
</template>

<style scoped>

</style>
