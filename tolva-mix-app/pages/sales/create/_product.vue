<template>
  <div v-if="item">
    <MySection :title="'Reservar: ' + item.title">
      <MyInfo>Disponible a partir del {{ item.nextAvailableDate }}, por favor seleccione el cliente y la fecha de entrega</MyInfo>
      <TheFormDialog header-message="Crear Cliente" @confirm="createClient">
        <template #activator="{on}">
          <MyAutocomplete
            label="Cliente"
            v-model="selectedClient"
            :items="clients"
            append-outer-icon="mdi-plus"
            @click:append-outer="on.click"
          />
        </template>
        <MyTextField
          label="Razón Social"
          v-model="newClient.title"
        ></MyTextField>
        <MyTextField
          label="CUIT"
          v-model="newClient.cuit"
        ></MyTextField>
        <MyTextField
          label="Domicilio"
          v-model="newClient.location"
        ></MyTextField>
        <MyTextField
          label="Teléfono"
          v-model="newClient.phone"
          type="tel"
        ></MyTextField>
      </TheFormDialog>
      <MyTextField
        label="Fecha de entrega"
        type="date"
        :min="item.nextAvailableDate"
        v-model="date"
      />
      <TheActionsBar
        save-text="Reservar"
        @cancel="clickCancel"
        @save="clickReserve"
      />
      <TheDialog header-message="Reserva creada con éxito" v-model="showNewSaleResult" @cancel="goToHome">
        <v-card-text>
          Número de reserva: {{ newSale.number }}
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <ThePrimaryButton
            inner-text="Aceptar"
            @click="goToHome"
          />
        </v-card-actions>
      </TheDialog>
    </MySection>
  </div>
</template>

<script>
import MyInfo from '@/components/base/MyInfo'
import TheActionsBar from '@/components/base/buttons/TheActionsBar'
import MySection from '@/components/base/MySection'
import MyAutocomplete from '@/components/base/input/MyAutocomplete'
import MyTextField from '@/components/base/input/MyTextField'
import ThePrimaryButton from '@/components/base/buttons/ThePrimaryButton'
import TheFormDialog from "@/components/base/dialogs/TheFormDialog";
import TheDialog from "@/components/base/dialogs/TheDialog";
export default {
  components: {TheDialog, TheFormDialog, ThePrimaryButton, MyTextField, MyAutocomplete, MySection, TheActionsBar, MyInfo},
  layout: 'sales',
  data() {
    return {
      item: null,
      clients: [],
      newClient: {
        title: '',
        cuit: '',
        location: '',
        phone: '+54',
      },
      selectedClient: '',
      date: '',
      newSale: { number: '' },
      showNewSaleResult: false
    }
  },
  mounted() {
    this.item = this.$productService.find(this.$route.params.product)
    this.clients = this.$clientService.all()
    this.date = this.item.nextAvailableDate
  },
  methods: {
    clickCancel() {
      this.$router.back()
    },
    clickReserve() {
      this.newSale = this.$salesService.create({
        client: this.selectedClient,
        deliveryDate: this.date,
        product: this.item,
      })
      this.showNewSaleResult = true
    },
    createClient() {
      this.newClient = this.$clientService.create(this.newClient)
      this.clients.push(this.newClient)
      this.selectedClient = this.newClient
    },
    goToHome() {
      this.$router.push({path: '/sales/query'})
    }
  }
}
</script>

<style scoped>

</style>
