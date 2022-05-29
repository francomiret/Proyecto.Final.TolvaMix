<template>
  <MySection title="Consultar Reservas">
    <MyInfo>Seleccione el cliente y la reserva a consultar</MyInfo>
    <MyAutocomplete
      label="Cliente"
      v-model="selectedClient"
      :items="clients"
    />
    <MyAutocomplete
      :disabled="selectedClient === null"
      label="Reserva"
      v-model="selectedSale"
      :items="clientSales"
      @change="showSale"
    />
  </MySection>
</template>

<script>
import MyAutocomplete from "@/components/base/input/MyAutocomplete";
import MyInfo from "@/components/base/MyInfo";
import MySection from "@/components/base/MySection";
import ThePrimaryButton from "@/components/base/buttons/ThePrimaryButton";
export default {
  components: {ThePrimaryButton, MySection, MyInfo, MyAutocomplete},
  layout: 'sales',
  data() {
    return {
      items: [],
      clients: [],
      selectedClient: null,
      selectedSale: null
    }
  },
  mounted() {
    this.items = this.$salesService.all()
    this.clients = this.items.map((sale) => sale.client)
  },
  methods: {
    showSale() {
      this.$router.push('/sales/query/' + this.selectedSale.id)
    }
  },
  computed: {
    clientSales() {
      return this.items.filter((sale) => sale.client === this.selectedClient)
    }
  }
};
</script>
