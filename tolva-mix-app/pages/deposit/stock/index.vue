<template>
  <div>
    <!-- Make a data-table component -->
    <v-data-table
      :headers="stock.headers"
      :items="stocks"
      :search="stockSearch"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Insumos Disponibles</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-text-field
            v-model="stockSearch"
            class="ma-4"
            append-icon="mdi-magnify"
            label="Buscar"
            single-line
            hide-details
          ></v-text-field>
          <v-dialog v-model="stock.dialog" max-width="500px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark class="m-2" v-bind="attrs" v-on="on">
                NUEVO INSUMO
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">{{ formStockTitle }}</span>
              </v-card-title>
              <v-card-text>
                <v-select
                  v-model="stock.editedItem.select"
                  :items="stock.stockType"
                  label="Tipo de insumo"
                ></v-select>
                <v-text-field
                  v-model="stock.editedItem.brand"
                  label="Marca"
                ></v-text-field>
                <v-text-field
                  v-model="stock.editedItem.quantity"
                  label="Cantidad"
                  type="number"
                ></v-text-field>
                <v-text-field
                  v-model="stock.editedItem.code"
                  label="Código"
                  type="number"
                ></v-text-field>
                <v-text-field
                  v-model="stock.editedItem.location"
                  label="Ubicación"
                  type="text"
                ></v-text-field>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeStock">
                  CANCELAR
                </v-btn>
                <v-btn color="blue darken-1" text @click="saveStock">
                  CONFIRMAR
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="stock.takeDialog" max-width="500px">
            <v-card>
              <v-card-title>
                <span class="text-h5">Retirar Insumo</span>
              </v-card-title>
              <v-card-text>
                <v-text-field
                  v-model="stock.takeItem.quantity"
                  label="Cantidad"
                  type="number"
                ></v-text-field>
                <v-text-field
                  v-model="stock.takeItem.workerId"
                  label="Legajo Operario"
                  type="number"
                ></v-text-field>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeStock">
                  CANCELAR
                </v-btn>
                <v-btn color="blue darken-1" text @click="saveStock">
                  RETIRAR
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="stock.dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5"
                >¿Esta seguro que desea eliminar este insumo?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDeleteStock"
                  >CANCELAR</v-btn
                >
                <v-btn color="blue darken-1" text @click="deleteStockConfirm"
                  >CONFIRMAR</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-btn small text color="primary" @click="takeStock(item)">
          RETIRAR
        </v-btn>
        <v-btn small text color="success" @click="editStock(item)">
          EDITAR
        </v-btn>
        <v-btn small text color="error" @click="deleteStock(item)">
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
    stockSearch: "",

    // stock harcoded data
    stocks: [
      {
        select: "Alambre",
        brand: "Sarmiento",
        quantity: 222,
        code: 2,
        location: "B35",
      },
      {
        select: "Electrodos",
        brand: "",
        quantity: 800,
        code: 3,
        location: "B36",
      },
      {
        select: "Grasa",
        brand: "",
        quantity: 3,
        code: 4,
        location: "B37",
      },
    ],

    stock: {
      dialog: false,
      takeDialog: false,
      dialogDelete: false,
      stockType: [
        "Electrodos",
        "Bolilleros",
        "Mechas de taladro",
        "Alambre",
        "Alabre de soldadora",
        "Guantes",
        "Acople rapido hembra",
        "Bulones",
        "Aceite",
        "Grasa",
        "Tornillos",
        "Arandelas",
      ],
      headers: [
        { text: "Tipo de Insumo", value: "select" },
        { text: "Marca", value: "brand" },
        { text: "Cantidad", value: "quantity" },
        { text: "Código", value: "code" },
        { text: "Ubicación", value: "location" },
        { text: null, value: "actions", sortable: false },
      ],
      editedItem: {
        select: null,
        brand: "",
        quantity: 1,
        code: 0,
        location: "",
      },
      editedIndex: -1,
      defaultItem: {
        select: null,
        brand: "",
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
    formStockTitle() {
      return this.stock.editedIndex === -1 ? "Nuevo Insumo" : "Editar Insumo";
    },
  },

  methods: {
    takeStock(item) {
      this.stock.editedIndex = this.stocks.indexOf(item);
      this.stock.editedItem = Object.assign({}, item);
      this.stock.takeDialog = true;
    },

    editStock(item) {
      this.stock.editedIndex = this.stocks.indexOf(item);
      this.stock.editedItem = Object.assign({}, item);
      this.stock.dialog = true;
    },

    deleteStock(item) {
      this.stock.editedIndex = this.stocks.indexOf(item);
      this.stock.editedItem = Object.assign({}, item);
      this.stock.dialogDelete = true;
    },

    deleteStockConfirm() {
      this.stocks.splice(this.editedIndex, 1);
      this.closeDeleteStock();
    },

    closeStock() {
      this.stock.takeDialog = false;
      this.stock.dialog = false;
      this.$nextTick(() => {
        this.stock.editedItem = Object.assign({}, this.stock.defaultItem);
        this.stock.editedIndex = -1;
      });
    },

    closeDeleteStock() {
      this.stock.dialogDelete = false;
      this.$nextTick(() => {
        this.stock.editedItem = Object.assign({}, this.stock.defaultItem);
        this.stock.editedIndex = -1;
      });
    },

    saveStock() {
      if (this.stock.editedIndex > -1) {
        Object.assign(
          this.stocks[this.stock.editedIndex],
          this.stock.editedItem
        );
      } else {
        this.stocks.push(this.stock.editedItem);
      }
      this.closeStock();
    },
  },
};
</script>
