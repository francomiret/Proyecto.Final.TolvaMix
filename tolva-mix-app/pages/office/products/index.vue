<template>
  <div>
    <v-data-table
      :headers="product.headers"
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

          <v-dialog v-model="product.dialogDelete" max-width="500px">
            <v-card>
              <v-card-subtitle class="text-h5"
                >¿Esta seguro que desea eliminar este producto?</v-card-subtitle
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete"
                  >CANCELAR</v-btn
                >
                <v-btn color="blue darken-1" text @click="deleteConfirm"
                  >CONFIRMAR</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.accesories="{ item }">
        <v-chip-group active-class="primary--text" column>
          <v-chip small v-for="tag in item.accesories" :key="tag">
            {{ tag }}
          </v-chip>
        </v-chip-group>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-btn small text color="success" to="/office/products/edit">
          EDITAR
        </v-btn>
        <v-btn small text color="error" @click="deleteItem(item)">
          BORRAR
        </v-btn>
      </template>
    </v-data-table>
  </div>
</template>
<script>
export default {
  layout: "office",
  data: () => ({
    search: "",
    products: [
      {
        id: 1,
        select: "Tolva",
        name: "Mono Eje Hidráulica para Tractor",
        chargeCapacity: 3870,
        dischargeTime: 800,
        weight: 2200,
        lenght: 5.8,
        width: 2.6,
        high: 2,
        usefulLength: 3,
        usefulWidth: 2.6,
        usefulHigh: 2,
        topTubeLength: 6,
        topTubeDiameter: 0.24,
        standpipeLength: 2.26,
        standpipeDiameter: 0.31,
        hasSideDoor: false,
        hasBackDoor: false,
        hasStairs: false,
        hasScales: false,
        stakeHolder: 0,
        boquillas: 0,
        winches: 0,
        arches: 0,
        litersHydraulicPump: 120,
        pto: "",
        cylinder: "",
        accesories: ["Caja de herramientas"],
      },
      {
        id: 2,
        select: "Tolva",
        name: "Doble Eje Hidráulica para Tractor",
        chargeCapacity: 3870,
        dischargeTime: 800,
        weight: 3350,
        lenght: 7.6,
        width: 2.6,
        high: 2,
        usefulLength: 5.5,
        usefulWidth: 2.6,
        usefulHigh: 2,
        topTubeLength: 7.5,
        topTubeDiameter: 0.24,
        standpipeLength: 2.26,
        standpipeDiameter: 0.31,
        hasSideDoor: false,
        hasBackDoor: false,
        hasStairs: false,
        hasScales: false,
        stakeHolder: 0,
        boquillas: 0,
        winches: 0,
        arches: 0,
        litersHydraulicPump: 120,
        pto: "",
        cylinder: "",
        accesories: ["Caja de herramientas"],
      },
      {
        id: 3,
        select: "Tolva",
        name: "10 toneladas",
        chargeCapacity: 3870,
        dischargeTime: 800,
        weight: 2200,
        lenght: 5.2,
        width: 2.6,
        high: 2,
        usefulLength: 4.6,
        usefulWidth: 2.6,
        usefulHigh: 2,
        topTubeLength: 7.5,
        topTubeDiameter: 0.24,
        standpipeLength: 2.26,
        standpipeDiameter: 0.31,
        hasSideDoor: false,
        hasBackDoor: false,
        hasStairs: true,
        hasScales: false,
        stakeHolder: 0,
        boquillas: 0,
        winches: 0,
        arches: 0,
        litersHydraulicPump: 120,
        pto: "",
        cylinder: "",
        accesories: [
          "Guardabarros redondos con pantallas de goma",
          "Cajón para herramientas",
          "Tanque para agua",
          "Acelerador de mano",
          "Bandas reflectivas perimetrales reglamentarias",
          "Luces reglamentarias",
          "Escalera aérea",
          "Pasarela antideslizante",
        ],
      },
      {
        id: 4,
        select: "Tolva",
        name: "10 toneladas con balanza",
        chargeCapacity: 3870,
        dischargeTime: 800,
        weight: 2200,
        lenght: 5.2,
        width: 2.6,
        high: 2,
        usefulLength: 4.6,
        usefulWidth: 2.6,
        usefulHigh: 2,
        topTubeLength: 7.5,
        topTubeDiameter: 0.24,
        standpipeLength: 2.26,
        standpipeDiameter: 0.31,
        hasSideDoor: false,
        hasBackDoor: false,
        hasStairs: true,
        hasScales: true,
        stakeHolder: 0,
        boquillas: 0,
        winches: 0,
        arches: 0,
        litersHydraulicPump: 120,
        pto: "",
        cylinder: "",
        accesories: [
          "Guardabarros redondos con pantallas de goma",
          "Cajón para herramientas",
          "Tanque para agua",
          "Acelerador de mano",
          "Bandas reflectivas perimetrales reglamentarias",
          "Luces reglamentarias",
          "Escalera aérea",
          "Pasarela antideslizante",
        ],
      },
      {
        id: 5,
        select: "Tolva",
        name: "15 toneladas",
        chargeCapacity: 3870,
        dischargeTime: 800,
        weight: 2750,
        lenght: 6.6,
        width: 2.6,
        high: 2,
        usefulLength: 6,
        usefulWidth: 2.6,
        usefulHigh: 2,
        topTubeLength: 7.5,
        topTubeDiameter: 0.24,
        standpipeLength: 2.26,
        standpipeDiameter: 0.31,
        hasSideDoor: false,
        hasBackDoor: false,
        hasStairs: true,
        hasScales: false,
        stakeHolder: 0,
        boquillas: 0,
        winches: 0,
        arches: 0,
        litersHydraulicPump: 120,
        pto: "",
        cylinder: "",
        accesories: [
          "Guardabarros redondos con pantallas de goma",
          "Cajón para herramientas",
          "Tanque para agua",
          "Acelerador de mano",
          "Bandas reflectivas perimetrales reglamentarias",
          "Luces reglamentarias",
          "Escalera aérea",
          "Pasarela antideslizante",
        ],
      },

      {
        id: 6,
        select: "Tolva",
        name: "Acoplado",
        chargeCapacity: 3870,
        dischargeTime: 800,
        weight: 6900,
        lenght: 9.9,
        width: 2.6,
        high: 2,
        usefulLength: 9.3,
        usefulWidth: 2.6,
        usefulHigh: 2,
        topTubeLength: 7.5,
        topTubeDiameter: 0.24,
        standpipeLength: 2.26,
        standpipeDiameter: 0.31,
        hasSideDoor: false,
        hasBackDoor: false,
        hasStairs: true,
        hasScales: false,
        stakeHolder: 0,
        boquillas: 0,
        winches: 0,
        arches: 0,
        litersHydraulicPump: 120,
        pto: "",
        cylinder: "",
        accesories: [
          "Guardabarros redondos con pantallas de goma",
          "Cajón para herramientas",
          "Acelerador de mano",
          "Bandas reflectivas perimetrales reglamentarias",
          "Luces reglamentarias",
          "Escalera aérea",
          "Pasarela antideslizante",
          "Soporte de rueda de auxilio tipo canasto doble",
        ],
      },
      {
        id: 7,
        select: "Tolva",
        name: "Semirremolque",
        chargeCapacity: 3870,
        dischargeTime: 800,
        weight: 6800,
        lenght: 10.2,
        width: 2.6,
        high: 2,
        usefulLength: 9.6,
        usefulWidth: 2.6,
        usefulHigh: 2,
        topTubeLength: 7.5,
        topTubeDiameter: 0.24,
        standpipeLength: 2.26,
        standpipeDiameter: 0.31,
        hasSideDoor: false,
        hasBackDoor: false,
        hasStairs: true,
        hasScales: false,
        stakeHolder: 0,
        boquillas: 0,
        winches: 0,
        arches: 0,
        litersHydraulicPump: 120,
        pto: "",
        cylinder: "",
        accesories: [
          "Guardabarros redondos con pantallas de goma",
          "Cajón para herramientas",
          "Acelerador de mano",
          "Bandas reflectivas perimetrales reglamentarias",
          "Luces reglamentarias",
          "Escalera aérea",
          "Pasarela antideslizante",
          "Soporte de rueda de auxilio tipo canasto doble",
        ],
      },
      {
        id: 8,
        select: "Caja Volcadora",
        name: "Vuelco Trasero",
        chargeCapacity: null,
        dischargeTime: null,
        weight: null,
        lenght: 4.1,
        width: 2.6,
        high: 0.85,
        usefulLength: 4.1,
        usefulWidth: 2.6,
        usefulHigh: 0.85,
        topTubeLength: null,
        topTubeDiameter: null,
        standpipeLength: null,
        standpipeDiameter: null,
        hasSideDoor: false,
        hasBackDoor: true,
        hasStairs: false,
        hasScales: false,
        stakeHolder: 0,
        boquillas: 0,
        winches: 0,
        arches: 0,
        litersHydraulicPump: 170,
        pto: "Simple neumática incorporada",
        cylinder: 'Simple efecto de 8"',
        accesories: [
          "Guardabarros redondos con pantallas de goma",
          "Cajón para herramientas",
          "Acelerador de mano",
          "Bandas reflectivas perimetrales reglamentarias",
          "Luces reglamentarias",
        ],
      },
      {
        id: 9,
        select: "Caja Volcadora",
        name: "Vuelco Trasero Barandas Volcables",
        chargeCapacity: null,
        dischargeTime: null,
        weight: null,
        lenght: 4.1,
        width: 2.6,
        high: 0.85,
        usefulLength: 4.1,
        usefulWidth: 2.6,
        usefulHigh: 0.85,
        topTubeLength: null,
        topTubeDiameter: null,
        standpipeLength: null,
        standpipeDiameter: null,
        hasSideDoor: true,
        hasBackDoor: true,
        hasStairs: false,
        hasScales: false,
        stakeHolder: 0,
        boquillas: 0,
        winches: 0,
        arches: 0,
        litersHydraulicPump: 170,
        pto: "Simple neumática incorporada",
        cylinder: 'Simple efecto de 8"',
        accesories: [
          "Guardabarros redondos con pantallas de goma",
          "Cajón para herramientas",
          "Acelerador de mano",
          "Bandas reflectivas perimetrales reglamentarias",
          "Luces reglamentarias",
        ],
      },
      {
        id: 10,
        select: "Caja Volcadora",
        name: "Vuelco Trasero Roquera",
        chargeCapacity: null,
        dischargeTime: null,
        weight: null,
        lenght: 5.5,
        width: 2.6,
        high: 1.2,
        usefulLength: 5.5,
        usefulWidth: 2.6,
        usefulHigh: 1.2,
        topTubeLength: null,
        topTubeDiameter: null,
        standpipeLength: null,
        standpipeDiameter: null,
        hasSideDoor: false,
        hasBackDoor: true,
        hasStairs: false,
        hasScales: false,
        stakeHolder: 0,
        boquillas: 0,
        winches: 0,
        arches: 0,
        litersHydraulicPump: 210,
        pto: "Simple neumática incorporada",
        cylinder: "Telescopico de 5 etapas",
        accesories: [
          "Guardabarros redondos con pantallas de goma",
          "Cajón para herramientas",
          "Acelerador de mano",
          "Bandas reflectivas perimetrales reglamentarias",
          "Luces reglamentarias",
        ],
      },
      {
        id: 11,
        select: "Caja Volcadora",
        name: "Bilateral",
        chargeCapacity: null,
        dischargeTime: null,
        weight: null,
        lenght: 4.5,
        width: 2.6,
        high: 0.85,
        usefulLength: 4.5,
        usefulWidth: 2.6,
        usefulHigh: 0.85,
        topTubeLength: null,
        topTubeDiameter: null,
        standpipeLength: null,
        standpipeDiameter: null,
        hasSideDoor: true,
        hasBackDoor: true,
        hasStairs: false,
        hasScales: false,
        stakeHolder: 0,
        boquillas: 0,
        winches: 0,
        arches: 0,
        litersHydraulicPump: 170,
        pto: "Simple neumática incorporada",
        cylinder: "2 telescópicos de 3 etapas",
        accesories: [
          "Guardabarros redondos con pantallas de goma",
          "Cajón para herramientas",
          "Acelerador de mano",
          "Bandas reflectivas perimetrales reglamentarias",
          "Luces reglamentarias",
        ],
      },
      {
        id: 12,
        select: "Caja Volcadora",
        name: "Trivuelco",
        chargeCapacity: null,
        dischargeTime: null,
        weight: null,
        lenght: 4.5,
        width: 2.6,
        high: 0.85,
        usefulLength: 4.5,
        usefulWidth: 2.6,
        usefulHigh: 0.85,
        topTubeLength: null,
        topTubeDiameter: null,
        standpipeLength: null,
        standpipeDiameter: null,
        hasSideDoor: true,
        hasBackDoor: true,
        hasStairs: false,
        hasScales: false,
        stakeHolder: 0,
        boquillas: 0,
        winches: 0,
        arches: 0,
        litersHydraulicPump: 170,
        pto: "Simple neumática incorporada",
        cylinder: "Telescópico de 5 etapas",
        accesories: [
          "Guardabarros redondos con pantallas de goma",
          "Cajón para herramientas",
          "Acelerador de mano",
          "Bandas reflectivas perimetrales reglamentarias",
          "Luces reglamentarias",
        ],
      },
    ],

    product: {
      dialogDelete: false,
      headers: [
        { text: "Tipo de Producto", value: "select" },
        { text: "Nombre", value: "name" },
        { text: "Largo (m)", value: "lenght" },
        { text: "Ancho (m)", value: "width" },
        { text: "Alto (m)", value: "high" },
        { text: "Peso (Kg)", value: "weight" },
        { text: "Capacidad de carga (kg)", value: "chargeCapacity" },
        { text: "Bomba hidráulica (lts)", value: "litersHydraulicPump" },
        // { text: "Accesorios", value: "accesories" },
        { text: null, value: "actions", sortable: false },
      ],
    },
  }),

  methods: {
    deleteItem(item) {
      this.product.editedIndex = this.products.indexOf(item);
      this.product.editedItem = Object.assign({}, item);
      this.product.dialogDelete = true;
    },

    deleteConfirm() {
      this.products.splice(this.product.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.product.dialog = false;
      this.$nextTick(() => {
        this.product.editedItem = Object.assign({}, this.product.defaultItem);
        this.product.editedIndex = -1;
      });
    },

    closeDelete() {
      this.product.dialogDelete = false;
      this.$nextTick(() => {
        this.product.editedItem = Object.assign({}, this.product.defaultItem);
        this.product.editedIndex = -1;
      });
    },
  },
};
</script>
