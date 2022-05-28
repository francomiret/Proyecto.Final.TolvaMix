<template>
  <div v-if="item">
    <MySection :title="'Reservar: ' + item.type + ' - ' + item.title">
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
        @save="clickCancel"
      />
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
export default {
  components: {TheFormDialog, ThePrimaryButton, MyTextField, MyAutocomplete, MySection, TheActionsBar, MyInfo},
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
    }
  },
  mounted() {
    this.item = this.$productService.find(this.$route.params.product)
    this.clients = this.$clientService.all().map(this.mapClient)
    this.date = this.item.nextAvailableDate
  },
  methods: {
    mapClient(client) {
      return {
        id: client.id,
        title: client.title + ' - CUIT: ' + client.cuit
      }
    },
    clickCancel() {
      this.$router.back()
    },
    clickReserve() {
      this.$salesService.create({
        client: this.selectedClient,
        deliveryDate: this.date,
        product: this.item,
      })
      this.$ioService.toast('La reserva fue creada con éxito!')
      this.$router.push({path: '/sales/query'})
    },
    createClient() {
      const client = this.mapClient(this.newClient)
      this.clients.push(client)
      this.selectedClient = client
    }
  }
}
</script>

<style scoped>

</style>
