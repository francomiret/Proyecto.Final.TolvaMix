<template>
  <v-container>
    <h1>Consultar Ventas</h1>
    <MyList :items="items" icon="mdi-plus" />
  </v-container>
</template>

<script>
import MyList from '~/components/base/MyList'
export default {
  components: {MyList},
  layout: 'sales',
  data() {
    return {
      items: []
    }
  },
  mounted() {
    this.items = this.$salesService.all().map((p) => ({
      id: p.id,
      title: p.product.title + ' - ' + p.client.title + ' - ' + p.deliveryDate,
    }))
  }
};
</script>
