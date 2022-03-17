<template>
  <v-container>
    <h1>Consultar fecha de entrega</h1>
    <MyInfo>Seleccione un producto para reservarlo</MyInfo>
    <MyList :items="products" icon="mdi-plus" />
  </v-container>
</template>

<script>
import MyList from '~/components/base/MyList'
import MyInfo from '@/components/base/MyInfo'
export default {
  components: {MyInfo, MyList},
  layout: 'sales',
  data() {
    return {
      products: []
    }
  },
  mounted() {
    this.products = this.$productService.all().map((p) => ({
      id: p.id,
      title: p.title + ' - Disponible desde el ' + p.nextAvailableDate,
      to: '/sales/create/' + p.id,
    }))
  }
};
</script>
