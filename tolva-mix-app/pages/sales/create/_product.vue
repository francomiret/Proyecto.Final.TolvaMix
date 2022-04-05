<template>
  <v-container v-if="item">
    <h1>Consulta de disponibilidad: {{ item.title }}</h1>
    <MyInfo>Disponible a partir del {{ item.nextAvailableDate }}, por favor seleccione el cliente y la fecha de entrega</MyInfo>
    <v-text-field
      label="Cliente"
      v-model="client"
    />
    <v-text-field
      label="Fecha de entrega"
      type="date"
      :min="item.nextAvailableDate"
      v-model="date"
    />
    <v-btn color="danger" @click="clickCancel">Cancelar</v-btn>
    <v-btn color="success" @click="clickReserve">Reservar</v-btn>
  </v-container>
</template>

<script>
import MyInfo from '@/components/base/MyInfo'
export default {
  components: {MyInfo},
  layout: 'sales',
  data() {
    return {
      item: null,
      client: '',
      date: '',
    }
  },
  mounted() {
    this.item = this.$productService.find(this.$route.params.product)
    this.date = this.item.nextAvailableDate
  },
  methods: {
    clickCancel() {
      this.$router.back()
    },
    clickReserve() {
      this.$salesService.create({
        client: {
          // TODO Use a client service please!
          id: this.client,
          title: this.client
        },
        deliveryDate: this.date,
        product: this.item,
      })
      this.$ioService.toast('La reserva fue creada con éxito!')
      this.$router.push({path: '/sales/query'})
    },
  }
}
</script>

<style scoped>

</style>
