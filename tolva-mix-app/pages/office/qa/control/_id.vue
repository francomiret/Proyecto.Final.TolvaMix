<template>
  <MySection :title="`Control de calidad - ${item.title}`">
    <MyInfo>
      El nuevo estado de la planilla será <strong>{{ $t(item.status.toLocale()) }}</strong>
    </MyInfo>
    <MySection title="Detalles">
      <MyTable :items="item.details">
        <template #item.justification="{ item }">
          {{ item.justification? item.justification : '-' }}
        </template>
        <template #item.actions="{ item }">
          <v-icon @click="clickApprove(item)" title="Aprobar">mdi-checkbox-marked-outline</v-icon>
          <TheFormDialog @confirm="saveRejectedDetail(item)">
            <template #activator="{ on }">
              <v-icon @click="editDetail = {...item}" v-on="on" title="Rechazar">mdi-cancel</v-icon>
            </template>
            <v-form>
              <v-textarea autofocus v-model="editDetail.justification" label="Justificación"/>
            </v-form>
          </TheFormDialog>
        </template>
      </MyTable>
    </MySection>
    <TheActionsBar @save="clickSave" @cancel="clickCancel"/>
  </MySection>
</template>

<script>
import MySection from '~/components/base/MySection'
import MyTable from '~/components/base/MyTable'
import {QualityDetailStatus, QualityStatus} from '~/services/api/QualityService'
import TheConfirmDialog from '~/components/base/dialogs/TheConfirmDialog'
import TheDialog from '~/components/base/dialogs/TheDialog'
import TheFormDialog from '~/components/base/dialogs/TheFormDialog'
import ThePrimaryButton from '~/components/base/buttons/ThePrimaryButton'
import TheSecondaryButton from '~/components/base/buttons/TheSecondaryButton'
import TheActionsBar from '~/components/base/buttons/TheActionsBar'
import MyInfo from '~/components/base/MyInfo'
export default {
  components: {
    MyInfo,
    TheActionsBar,
    TheSecondaryButton, ThePrimaryButton, TheFormDialog, TheDialog, TheConfirmDialog, MyTable, MySection},
  layout: 'office',
  data() {
    return {
      item: null,
      status: QualityDetailStatus,
      editDetail: null
    }
  },
  created() {
    this.item = this.$qualityService.find(this.$route.params.id)
    this.resetEditDetail()
  },
  methods: {
    clickApprove(detail) {
      detail.status = QualityDetailStatus.APPROVED
      this.updateStatus()
    },
    saveRejectedDetail(detail) {
      detail.justification = this.editDetail.justification
      detail.status = QualityDetailStatus.REJECTED
      this.updateStatus()
    },
    updateStatus() {
      if (this.item.details.findIndex(detail => !detail.status.equals(QualityDetailStatus.APPROVED))) {
        this.item.status = QualityStatus.APPROVED
      } else {
        this.item.status = QualityStatus.PENDING
      }
    },
    resetEditDetail() {
      this.editDetail = {
        justification: ''
      }
    },
    clickSave() {
      this.$qualityService.save(this.item)
      this.$router.push('/office/qa')
    },
    clickCancel() {
      this.$router.push('/office/qa')
    }
  }
}
</script>
