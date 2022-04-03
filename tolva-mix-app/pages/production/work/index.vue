<template>
  <MySection title="Ordenes de producción">
    <TheLocationSelector v-model="selectedLocation"/>
    <MyInfo v-show="!selectedLocation">Debe seleccionar un área de trabajo para continuar.</MyInfo>
    <MyTable
      :include="['id', 'part.title', 'status', 'quantity', 'expected_start_at', 'expected_end_at']"
      :items="items"
      @click:row="showProductionOrder"
    />
  </MySection>
</template>

<script>
import MySection from '@/components/base/MySection'
import TheLocationSelector from '@/components/bussines/TheLocationSelector'
import MyInfo from '@/components/base/MyInfo'
import MyTable from '@/components/base/MyTable'
export default {
  layout: 'production',
  components: {MyTable, MyInfo, TheLocationSelector, MySection},
  data() {
    return {
      selectedLocation: null,
      items: []
    }
  },
  watch: {
    selectedLocation(val) {
      if (val) {
        this.items = this.$productionOrderService.query()
          .where('part.location.id', this.selectedLocation.id)
          .get()
      }
    }
  },
  methods: {
    showProductionOrder(order) {
      this.$productionOrderService.startProduction(order)
      this.$router.push(`/production/work/${order.id}`)
    }
  }
}
</script>

<style scoped>

</style>
