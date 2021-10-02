<script>
import Navbar from "../../components/Navbar.vue";
import Container from "./Container.vue";
import componentsJSON from "./components.json";
import Buttons from "./Buttons/index.vue";

export default {
  name: "Components",
  
  components: { Navbar, Container, Buttons },
  
  data() {
    return {
      components: componentsJSON,
    };
  },

};
</script>


<template>
  <Navbar />
  <div class="max-w-7xl mx-auto min-h-screen">
    <Container :html="components.buttons">
      <template #title>Buttons</template>
      <template #component>
        <Buttons />
      </template>
      <template #html>
        <div class="bg-red-300">
          <span>hello</span>
        </div>
      </template>
    </Container>
  </div>
</template>

<style>
</style>