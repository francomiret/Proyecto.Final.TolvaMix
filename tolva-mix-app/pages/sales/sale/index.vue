<template>
  <v-container>
    <h1>Consultar fecha de entrega</h1>
    <MyList :items="products" icon="mdi-plus" />
  </v-container>
</template>

<script>
import MyList from "~/components/base/MyList";
export default {
  components: {MyList},
  layout: 'sales',
  data() {
    return {
      products: []
    }
  },
  mounted() {
    this.products = this.$productService.all()
  }
};
</script>
