<template>
  <MySection title="Devoluciones Pendientes">
    <MyTable :items="returns" :search="search">
      <template v-slot:top>
        <v-toolbar flat>
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Buscar"
            single-line
            hide-details
          ></v-text-field>
        </v-toolbar>
      </template>
      <template v-slot:item.type="{ item }">
        <v-chip small :color="getColor(item.type)" dark>
          {{ item.type }}
        </v-chip>
      </template>
      <template v-slot:item.actions="{ item }">
        <TheFormDialog @confirm="returnItemConfirmation(item)">
          <template #activator="{ on }">
            <v-btn small text color="primary" v-on="on"> DEVOLVER </v-btn>
          </template>
          <v-form>
            <h1>Devolver recurso</h1>
            <v-text-field
              v-model="itemReturned.quantity"
              label="Cantidad"
              type="number"
            ></v-text-field>
          </v-form>
        </TheFormDialog>
      </template>
    </MyTable>
  </MySection>
</template>

<script>
import TheFormDialog from "~/components/base/dialogs/TheFormDialog";
import TheDialog from "~/components/base/dialogs/TheDialog";
import MySection from "~/components/base/MySection";
import MyTable from "~/components/base/MyTable";

export default {
  components: {
    MyTable,
    MySection,
    TheFormDialog,
    TheDialog,
  },
  layout: "deposit",
  data() {
    return {
      search: "",
      itemReturned: {
        quantity: 1,
      },
      returns: [
        {
          type: "Herramienta",
          workerName: "Roberto Perez",
          workerId: 1,
          resurceName: "Taladro",
          brand: "Bosch",
          model: "SuperTaladro",
          quantity: "1",
          returnDate: Date.now(),
        },
        {
          workerName: "Juan Perez",
          quantity: "1",
          type: "Herramienta",
          resurceName: "Amoladoras",
          brand: "Stanley",
          model: "Sarasa",
          returnDate: Date.now(),
          workerId: 2,
        },
        {
          workerName: "Martin Perez",
          quantity: "1",
          type: "Herramienta",
          resurceName: "Amoladora",
          brand: "Bosch",
          model: "SuperAmoladora",
          returnDate: Date.now(),
          workerId: 3,
        },
        {
          workerName: "Ruben Perez",
          quantity: "50",
          type: "Insumo",
          resurceName: "Alambre",
          brand: "Bosch",
          model: "SuperAmoladora",
          returnDate: Date.now(),
          workerId: 4,
        },
        {
          workerName: "Ruben Perez",
          quantity: "50",
          type: "Insumo",
          resurceName: "Alambre",
          brand: "San Martin",
          model: "",
          returnDate: Date.now(),
          workerId: 4,
        },
      ],
    };
  },
  methods: {
    returnItemConfirmation(item) {
      this.returns.splice(this.returns.indexOf(item), 1);
    },

    getColor(type) {
      if (type === "Herramienta") return "blue";
      else return "green";
    },
  },
};
</script>
