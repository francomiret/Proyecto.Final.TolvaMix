<template>
  <MySection :title="`Orden de producción - ${item.part.title}`">
    <MyInfo v-if="!canSave">La orden de producción no puede ser modificada porque se encuentra en estado "{{ $t(item.status.toLocale()) }}".</MyInfo>
    <MySection title="Insumos">
      <MyTable
        :items="item.part.inputs"
        :include="['input.id', 'input.title', 'quantity']"
      />
    </MySection>
    <TheActionsBar
      save-text="Completar trabajo"
      :can-save="canSave"
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
import {ProductionOrderStatus} from '@/services/api/ProductionOrderService'
import MyInfo from "@/components/base/MyInfo";

export default {
  components: {MyInfo, TheButton, MyTable, TheActionsBar, MySection},
  layout: 'office',
  data() {
    return {
      item: null,
    }
  },
  created() {
    this.item = this.$productionOrderService.find(this.$route.params.id)
    if (this.canSave) {
      this.$productionOrderService.startProduction(this.item.id)
    }
  },
  methods: {
    clickSave() {
      if (this.canSave) {
        this.$productionOrderService.completeProduction(this.item.id)
      }
      this.$router.push('/production/work')
    },
    clickCancel() {
      if (this.canSave) {
        this.$productionOrderService.stopProduction(this.item.id)
      }
      this.$router.push('/production/work')
    }
  },
  computed: {
    canSave() {
      return ProductionOrderStatus.PROGRESS.equals(this.item.status) || ProductionOrderStatus.PENDING.equals(this.item.status)
    }
  }
}
</script>
