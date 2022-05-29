<template>
  <div v-if="item">
    <MySection :title="'Reserva: ' + item.title">
      <v-banner><strong>Número:</strong> {{ item.number }}</v-banner>
      <v-banner><strong>Estado:</strong> {{ item.status }}</v-banner>
      <v-banner><strong>Cliente:</strong> {{ item.client.title }}</v-banner>
      <v-banner><strong>Producto:</strong> {{ item.product.title }}</v-banner>
      <v-banner><strong>Fecha estimada de entrega:</strong> {{ item.deliveryDate }}</v-banner>
      <v-banner><strong>Completado:</strong> %{{ item.progress }}</v-banner>
    </MySection>
    <TheActionsBar simple>
      <TheConfirmDialog
        header-message="Cancelar Reserva"
        body-message="¿Confirma la cancelación de la reserva?"
        confirm-button="Confirmar"
        @confirm="cancelSale"
      >
        <template #activator="{ on }">
          <TheDangerButton inner-text="Cancelar Reserva" v-on="on" />
        </template>
      </TheConfirmDialog>
    </TheActionsBar>
    <TheDialog header-message="Reserva cancelada" v-model="showCancelConfirmation" >
      <v-card-text>La reserva fué cancelada con éxito.</v-card-text>
    </TheDialog>
    <TheDialog header-message="Error de cancelación" v-model="showCancelError" >
      <v-card-text>La reserva no puede ser cancelada debido a que ya no se encuentra pendiente de confirmación.</v-card-text>
    </TheDialog>
  </div>
</template>

<script>
import TheActionsBar from '@/components/base/buttons/TheActionsBar'
import MySection from '@/components/base/MySection'
import ThePrimaryButton from '@/components/base/buttons/ThePrimaryButton'
import TheDialog from '@/components/base/dialogs/TheDialog'
import TheDangerButton from '@/components/base/buttons/TheDangerButton'
import TheConfirmDialog from '@/components/base/dialogs/TheConfirmDialog'
export default {
  components: {
    TheConfirmDialog,
    TheDangerButton,
    TheDialog, ThePrimaryButton, MySection, TheActionsBar},
  layout: 'sales',
  data() {
    return {
      item: null,
      showCancelConfirmation: false,
      showCancelError: false,
    }
  },
  mounted() {
    this.item = this.$salesService.find(this.$route.params.sale)
  },
  methods: {
    cancelSale() {
      if (this.item.status === 'Pendiente de confirmación') {
        this.item.status = 'Cancelada'
        this.showCancelConfirmation = true
      } else {
        this.showCancelError = true
      }
    }
  }
}
</script>

<style scoped>

</style>
