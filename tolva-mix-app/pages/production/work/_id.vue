<template>
  <MySection :title="`Orden de producción - ${item.part.title}`">
    <MySection title="Insumos">
      <MyTable
        :items="item.part.inputs"
        :include="['input.id', 'input.title', 'quantity']"
      />
    </MySection>
    <TheActionsBar
      save-text="Completar trabajo"
      :can-save="item.status.equals(status.PROGRESS)"
      @save="clickSave"
      @cancel="clickCancel"
    />
  </MySection>
</template>

<script>
import MySection from '~/components/base/MySection'
import TheActionsBar from '~/components/base/buttons/TheActionsBar'
import MyTable from '@/components/base/MyTable'
import TheButton from '@/components/base/buttons/TheButton'
import {ProductionOrderStatus} from "@/services/api/ProductionOrderService";

export default {
  components: {TheButton, MyTable, TheActionsBar, MySection},
  layout: 'office',
  data() {
    return {
      item: null,
      status: ProductionOrderStatus
    }
  },
  created() {
    this.item = this.$productionOrderService.find(this.$route.params.id)
  },
  methods: {
    clickSave() {
      this.$productionOrderService.completeProduction(this.item)
      this.$router.push('/production/work')
    },
    clickCancel() {
      this.$productionOrderService.stopProduction(this.item)
      this.$router.push('/production/work')
    }
  }
}
</script>
