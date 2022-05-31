<template>
  <MySection title="Productos">
    <MyTable
      :include="includedHeaders"
      :items="products"
      :search="search"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-spacer></v-spacer>
          <v-text-field
            outlined
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
        <v-btn
          small
          icon
          color="success"
          :to="`/office/products/edit/${item.id}`"
        >
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <TheConfirmDialog
          header-message="Eliminar producto"
          body-message="¿Desea eliminar este producto?"
          @confirm="deleteProduct(item)"
        >
          <template #activator="{ on }">
            <v-btn small icon color="error" v-on="on">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </template>
        </TheConfirmDialog>
      </template>
    </MyTable>
  </MySection>
</template>
<script>
import MySection from "~/components/base/MySection";
import MyTable from "~/components/base/MyTable";
import TheConfirmDialog from "@/components/base/dialogs/TheConfirmDialog";

export default {
  components: { TheConfirmDialog, MyTable, MySection },
  layout: "office",
  data: () => ({
    search: "",
    products: [],
    includedHeaders: [
      "type",
      "title",
      "length",
      "width",
      "high",
      "weight",
      "chargeCapacity",
      "litersHydraulicPump",
    ],
  }),
  created() {
    this.products = this.$productService.all();
  },
  methods: {
    deleteProduct(product) {
      this.$productService.delete(product);
      this.products = this.$productService.all();
    },
  },
};
</script>
