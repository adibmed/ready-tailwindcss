<script setup>
  import Navbar from "../../components/Navbar.vue";
  import Footer from "../../components/Footer.vue";
  import componentsJSON from "./components.json";

  import Container from "./Container.vue";
  
  import Buttons from "./Buttons/index.vue";
  import ProductCard from "./ProductCard/index.vue";
  import Alert from "./Alert/index.vue"

  const components = componentsJSON
</script>


<template>
  <Navbar />
  <div class="max-w-7xl mx-auto min-h-screen">
    <Container :html="components.buttons">
      <template #title>Buttons</template>
      <template #component>
        <Buttons />
      </template>
    </Container>

    <Container :html="components.product_card">
      <template #title>Product Card</template>
      <template #component>
        <ProductCard />
      </template>
    </Container>

    <Container :html="components.alert">
      <template #title>Alert</template>
      <template #component>
        <Alert/>
      </template>
    </Container>
  </div>

  <Footer />
</template>

<style>
</style>