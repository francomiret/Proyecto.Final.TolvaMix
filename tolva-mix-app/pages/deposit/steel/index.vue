<template>
  <div>
    <v-data-table
      :headers="steel.headers"
      :items="steels"
      :search="steelSearch"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Herramientas Disponibles</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-text-field
            v-model="steelSearch"
            class="ma-4"
            append-icon="mdi-magnify"
            label="Buscar"
            single-line
            hide-details
          ></v-text-field>
          <v-dialog v-model="steel.dialog" max-width="500px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
                NUEVA HERRAMIENTA
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">{{ formSteelTitle }}</span>
              </v-card-title>
              <v-card-text>
                <v-select
                  v-model="steel.editedItem.select"
                  :items="steel.steelType"
                  label="Tipo de herramenta"
                ></v-select>
                <v-text-field
                  v-model="steel.editedItem.brand"
                  label="Marca"
                ></v-text-field>
                <v-text-field
                  v-model="steel.editedItem.model"
                  label="Modelo"
                ></v-text-field>
                <v-text-field
                  v-model="steel.editedItem.quantity"
                  label="Cantidad"
                  type="number"
                ></v-text-field>
                <v-text-field
                  v-model="steel.editedItem.code"
                  label="Código"
                  type="number"
                ></v-text-field>
                <v-text-field
                  v-model="steel.editedItem.location"
                  label="Ubicación"
                  type="text"
                ></v-text-field>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeSteel">
                  CANCELAR
                </v-btn>
                <v-btn color="blue darken-1" text @click="saveSteel">
                  GUARDAR
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="steel.takeDialog" max-width="500px">
            <v-card>
              <v-card-title>
                <span class="text-h5">Retirar Herramienta</span>
              </v-card-title>
              <v-card-text>
                <v-text-field
                  v-model="steel.takeItem.quantity"
                  label="Cantidad"
                  type="number"
                ></v-text-field>
                <v-text-field
                  v-model="steel.takeItem.workerId"
                  label="Legajo Operario"
                  type="number"
                ></v-text-field>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeSteel">
                  CANCELAR
                </v-btn>
                <v-btn color="blue darken-1" text @click="saveSteel">
                  RETIRAR
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="steel.dialogDelete" max-width="500px">
            <v-card>
              <v-card-subtitle class="text-h5"
                >¿Esta seguro que desea eliminar esta
                herramienta?</v-card-subtitle
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDeleteSteel"
                  >CANCELAR</v-btn
                >
                <v-btn color="blue darken-1" text @click="deleteSteelConfirm"
                  >CONFIRMAR</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-btn small text color="primary" @click="takeSteel(item)">
          RETIRAR
        </v-btn>
        <v-btn small text color="success" @click="editSteel(item)">
          EDITAR
        </v-btn>
        <v-btn small text color="error" @click="deleteSteel(item)">
          BORRAR
        </v-btn>
      </template>
    </v-data-table>
  </div>
</template>
<script>
export default {
  layout: "deposit",
  data: () => ({
    steelSearch: "",
    // steels harcoded data
    steels: [
      {
        select: "Amoladora",
        brand: "Steel",
        model: "Dragon",
        quantity: 3,
        code: 1,
        location: "S11",
      },
      {
        select: "Amoladora",
        brand: "Stanley",
        model: "Sarasa",
        quantity: 2,
        code: 2,
        location: "S12",
      },
      {
        select: "Taladro",
        brand: "Bosch",
        model: "Superpoderoso",
        quantity: 1,
        code: 3,
        location: "S13",
      },
      {
        select: "Amoladora",
        brand: "Bosch",
        model: "Sarasa",
        quantity: 2,
        code: 4,
        location: "S15",
      },
    ],

    steel: {
      dialog: false,
      takeDialog: false,
      dialogDelete: false,
      headers: [
        { text: "Tipo de Herramienta", value: "select" },
        { text: "Marca", value: "brand" },
        { text: "Marca", value: "model" },
        { text: "Cantidad", value: "quantity" },
        { text: "Código", value: "code" },
        { text: "Ubicación", value: "location" },
        { text: null, value: "actions", sortable: false },
      ],
      editedIndex: -1,
      steelType: [
        "Amoladora",
        "Soldadora",
        "Taladro",
        "Compresor",
        "Herramienta de mano",
      ],
      editedItem: {
        select: null,
        brand: "",
        model: "",
        quantity: 1,
        code: 0,
        location: "",
      },
      defaultItem: {
        select: null,
        brand: "",
        model: "",
        quantity: 1,
        code: 0,
        location: "",
      },
      takeItem: {
        quantity: 1,
        workerId: null,
      },
    },
  }),

  computed: {
    formSteelTitle() {
      return this.steel.editedIndex === -1
        ? "Nueva Herramienta"
        : "Editar Herramienta";
    },
  },

  methods: {
    takeSteel(item) {
      this.steel.editedIndex = this.steels.indexOf(item);
      this.steel.editedItem = Object.assign({}, item);
      this.steel.takeDialog = true;
    },

    editSteel(item) {
      this.steel.editedIndex = this.steels.indexOf(item);
      this.steel.editedItem = Object.assign({}, item);
      this.steel.dialog = true;
    },

    deleteSteel(item) {
      this.steel.editedIndex = this.steels.indexOf(item);
      this.steel.editedItem = Object.assign({}, item);
      this.steel.dialogDelete = true;
    },

    deleteSteelConfirm() {
      this.steels.splice(this.steel.editedIndex, 1);
      this.closeDeleteSteel();
    },

    closeSteel() {
      this.steel.takeDialog = false;
      this.steel.dialog = false;
      this.$nextTick(() => {
        this.steel.editedItem = Object.assign({}, this.steel.defaultItem);
        this.steel.editedIndex = -1;
      });
    },

    closeDeleteSteel() {
      this.steel.dialogDelete = false;
      this.$nextTick(() => {
        this.steel.editedItem = Object.assign({}, this.steel.defaultItem);
        this.steel.editedIndex = -1;
      });
    },

    saveSteel() {
      if (this.steel.editedIndex > -1) {
        Object.assign(
          this.steels[this.steel.editedIndex],
          this.steel.editedItem
        );
      } else {
        this.steels.push(this.steel.editedItem);
      }
      this.closeSteel();
    },
  },
};
</script>
