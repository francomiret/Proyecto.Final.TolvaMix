<template>
  <v-container>
    <MySection title="Consultar Productos">
      <MyInfo>Ingrese la descripción del producto a consultar</MyInfo>
      <MyAutocomplete
        v-model="selectedProduct"
        :items="products"
        label="Descripción del producto"
      ></MyAutocomplete>
      <v-container class="d-flex justify-end">
        <TheConfirmDialog
          header-message="Consulta de fecha de entrega"
          confirm-button="Reservar"
          :body-message="dialogText"
          @confirm="clickConfirm"
        >
          <template #activator="{ on }">
            <ThePrimaryButton
              v-show="selectedProduct"
              inner-text="Consultar fecha de entrega disponible"
              v-on="on"
            />
          </template>
        </TheConfirmDialog>
      </v-container>
    </MySection>
  </v-container>
</template>

<script>
import MyList from '~/components/base/MyList'
import MyInfo from '@/components/base/MyInfo'
import MySection from '@/components/base/MySection'
import ThePrimaryButton from '@/components/base/buttons/ThePrimaryButton'
import TheConfirmDialog from '@/components/base/dialogs/TheConfirmDialog'
import MyAutocomplete from "@/components/base/input/MyAutocomplete";
export default {
  components: {MyAutocomplete, TheConfirmDialog, ThePrimaryButton, MyInfo, MyList, MySection},
  layout: 'sales',
  data() {
    return {
      selectedProduct: null,
      products: []
    }
  },
  computed: {
    dialogText() {
      if (!this.selectedProduct) {
        return ''
      }
      return 'La próxima fecha de entrega disponible para ' + this.selectedProduct.title + ' es el ' + this.selectedProduct.nextAvailableDate
    }
  },
  mounted() {
    this.products = this.$productService.all()
  },
  methods: {
    clickConfirm() {
      this.$router.push('/sales/create/' + this.selectedProduct.id)
    }
  }
};
</script>
