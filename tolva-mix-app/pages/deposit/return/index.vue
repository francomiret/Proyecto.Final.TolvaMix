<template>
  <v-card>
    <v-data-table :headers="headers" :items="returns" :search="search">
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Devoluciones Pendientes</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
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
        <v-btn small text color="primary" @click="returnItem(item)">
          DEVOLVER
        </v-btn>
      </template>
    </v-data-table>
    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-subtitle class="text-h5"
          >¿Esta seguro que desea devolver este recurso?</v-card-subtitle
        >
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeReturn"
            >CANCELAR</v-btn
          >
          <v-btn color="blue darken-1" text @click="returnItemConfirmation"
            >CONFIRMAR</v-btn
          >
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
export default {
  layout: "deposit",
  data() {
    return {
      search: "",
      dialog: false,
      returnedId: null,
      returns: [
        {
          workerName: "Roberto Perez",
          quantity: "1",
          type: "Herramienta",
          resurceName: "Taladro",
          brand: "Bosch",
          model: "SuperTaladro",
          returnDate: Date.now(),
          workerId: 1,
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
      headers: [
        { text: "", value: "type" },
        { text: "Nombre Operario", value: "workerName" },
        { text: "Legajo", value: "workerId" },
        { text: "Cantidad", value: "quantity" },
        { text: "Tipo de Recurso", value: "resurceName" },
        { text: "Marca", value: "brand" },
        { text: "Modelo", value: "model" },
        { text: "Fecha de retiro", value: "returnDate", type: "date" },
        { text: "", value: "actions" },
      ],
    };
  },
  methods: {
    closeReturn() {
      this.dialog = false;
    },

    returnItemConfirmation() {
      this.returns.splice(this.returnedId, 1);
      this.closeReturn();
    },

    returnItem(item) {
      this.returnedId = this.returns.indexOf(item);
      this.dialog = true;
    },

    getColor(type) {
      if (type === "Herramienta") return "blue";
      else return "green";
    },
  },
};
</script>
