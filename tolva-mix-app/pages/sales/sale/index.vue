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
      products: [
        {
          id: 1,
          title: 'Tolva mono eje #1',
          to: '/sales/sale/1',
        },
        {
          id: 2,
          title: 'Tolva mono eje #2',
          to: '/sales/sale/2',
        },
        {
          id: 3,
          title: 'Tolva doble eje #1',
          to: '/sales/sale/3',
        },
        {
          id: 4,
          title: 'Tolva doble eje #2',
          to: '/sales/sale/4',
        }
      ]
    }
  }
};
</script>
