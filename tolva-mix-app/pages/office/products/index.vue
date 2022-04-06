<template>
  <div>
    <MyTable
      :include="includedHeaders"
      :items="products"
      :search="search"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Productos</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            class="ma-4"
            append-icon="mdi-magnify"
            label="Buscar"
            single-line
            hide-details
          ></v-text-field>
          <v-btn color="primary" dark class="mb-2" to="/office/products/new">
            NUEVO PRODUCTO
          </v-btn>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-btn small text color="success" :to="`/office/products/edit/${item.id}`">
          EDITAR
        </v-btn>
        <TheConfirmDialog
          header-message="Eliminar producto"
          body-message="¿Desea eliminar este producto?"
          @confirm="deleteProduct(item)"
        >
          <template #activator="{ on }">
            <v-btn small text color="error" v-on="on">
              BORRAR
            </v-btn>
          </template>
        </TheConfirmDialog>
      </template>
    </MyTable>
  </div>
</template>
<script>
import MyTable from '@/components/base/MyTable'
import TheConfirmDialog from '@/components/base/dialogs/TheConfirmDialog'
export default {
  components: {TheConfirmDialog, MyTable},
  layout: 'office',
  data: () => ({
    search: '',
    products: [],
    includedHeaders: [
      'type',
      'title',
      'length',
      'width',
      'high',
      'weight',
      'chargeCapacity',
      'litersHydraulicPump'
    ],
  }),
  created() {
    this.products = this.$productService.all()
  },
  methods: {
    deleteProduct(product) {
      this.$productService.delete(product)
      this.products = this.$productService.all()
    }
  }
};
</script>
