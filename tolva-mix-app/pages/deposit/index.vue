<template>
  <div>
    <v-tabs v-model="tab" dark fixed-tabs>
      <v-tab key="stock"> Insumo </v-tab>
      <v-tab key="steel"> Herramienta </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item key="stock">
        <!-- Make a data-table component -->
        <v-data-table
          :headers="stock.headers"
          :items="stocks"
          class="elevation-1"
        >
          <template v-slot:top>
            <v-toolbar flat>
              <v-dialog v-model="stock.dialog" max-width="500px">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="primary"
                    dark
                    class="mb-2"
                    v-bind="attrs"
                    v-on="on"
                  >
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
                      v-model="stock.editedItem.loation"
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
                    <v-btn
                      color="blue darken-1"
                      text
                      @click="deleteStockConfirm"
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
      </v-tab-item>
      <v-tab-item key="steel">
        <v-card flat>
          <v-data-table
            :headers="steel.headers"
            :items="steels"
            class="elevation-1"
          >
            <template v-slot:top>
              <v-toolbar flat>
                <v-dialog v-model="steel.dialog" max-width="500px">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      color="primary"
                      dark
                      class="mb-2"
                      v-bind="attrs"
                      v-on="on"
                    >
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
                        label="Tipo de insumo"
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
                        v-model="steel.editedItem.loation"
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
                      <v-btn
                        color="blue darken-1"
                        text
                        @click="closeDeleteSteel"
                        >CANCELAR</v-btn
                      >
                      <v-btn
                        color="blue darken-1"
                        text
                        @click="deleteSteelConfirm"
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
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>
<script>
export default {
  layout: "deposit",
  data: () => ({
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

    tab: null,
  }),

  computed: {
    formSteelTitle() {
      return this.steel.editedIndex === -1
        ? "Nueva Herramienta"
        : "Editar Herramienta";
    },
    formStockTitle() {
      return this.stock.editedIndex === -1 ? "Nuevo Insumo" : "Editar Insumo";
    },
  },

  methods: {
    takeSteel(item) {
      this.steel.editedIndex = this.steels.indexOf(item);
      this.steel.editedItem = Object.assign({}, item);
      this.steel.takeDialog = true;
    },

    takeStock(item) {
      this.stock.editedIndex = this.steels.indexOf(item);
      this.stock.editedItem = Object.assign({}, item);
      this.stock.takeDialog = true;
    },

    editSteel(item) {
      this.steel.editedIndex = this.steels.indexOf(item);
      this.steel.editedItem = Object.assign({}, item);
      this.steel.dialog = true;
    },

    editStock(item) {
      this.stock.editedIndex = this.stocks.indexOf(item);
      this.stock.editedItem = Object.assign({}, item);
      this.stock.dialog = true;
    },

    deleteSteel(item) {
      this.steel.editedIndex = this.steels.indexOf(item);
      this.steel.editedItem = Object.assign({}, item);
      this.steel.dialogDelete = true;
    },

    deleteStock(item) {
      this.stock.editedIndex = this.stocks.indexOf(item);
      this.stock.editedItem = Object.assign({}, item);
      this.stock.dialogDelete = true;
    },

    deleteSteelConfirm() {
      this.steels.splice(this.steel.editedIndex, 1);
      this.closeDeleteSteel();
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
    closeSteel() {
      this.steel.takeDialog = false;
      this.steel.dialog = false;
      this.$nextTick(() => {
        this.steel.editedItem = Object.assign({}, this.steel.defaultItem);
        this.steel.editedIndex = -1;
      });
    },

    closeDeleteStock() {
      this.stock.dialogDelete = false;
      this.$nextTick(() => {
        this.stock.editedItem = Object.assign({}, this.stock.defaultItem);
        this.stock.editedIndex = -1;
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
