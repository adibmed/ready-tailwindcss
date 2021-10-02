<script>
import Navbar from "../../components/Navbar.vue";
import Container from "./Container.vue";
import componentsJSON from "./components.json";
import Buttons from "./Buttons/index.vue";
import ProductCard from "./ProductCard/index.vue";

export default {
  name: "Components",

  components: {
    Navbar,
    Container,
    Buttons,
    ProductCard,
  },

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
    </Container>

    <Container :html="components.product_card">
      <template #title>Product Card</template>
      <template #component>
        <ProductCard />
      </template>
    </Container>
  </div>
</template>

<style>
</style>