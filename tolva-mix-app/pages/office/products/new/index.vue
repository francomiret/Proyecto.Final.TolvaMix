<template>
  <v-container>
    <v-title>
      <span class="text-h5">Nuevo Producto</span>
    </v-title>
    <v-row>
      <v-col>
        <v-select
          filled
          v-model="product.select"
          :items="productType"
          label="Tipo de producto"
        ></v-select>
      </v-col>
      <v-col>
        <v-text-field
          filled
          v-model="product.name"
          label="Nombre"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field
          filled
          v-model="product.chargeCapacity"
          label="Capacidad de carga"
          suffix="Kgs"
          type="number"
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          filled
          v-model="product.dischargeTime"
          label="Tiempo de descarga"
          suffix="Kgs/min"
          type="number"
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          filled
          v-model="product.weight"
          label="Peso"
          suffix="Kgs"
          type="number"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field
          filled
          v-model="product.lenght"
          label="Largo total"
          suffix="mts"
          type="number"
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          filled
          v-model="product.high"
          label="Alto total"
          suffix="mts"
          type="number"
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          filled
          v-model="product.width"
          label="Ancho total"
          suffix="mts"
          type="number"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-text-field
          filled
          v-model="product.usefulLength"
          label="Largo útil de carga"
          suffix="mts"
          type="number"
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          filled
          v-model="product.usefulHigh"
          label="Alto útil de carga"
          suffix="mts"
          type="number"
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          filled
          v-model="product.usefulWidth"
          label="Ancho útil de carga"
          suffix="mts"
          type="number"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field
          filled
          v-model="product.topTubeLength"
          label="Largo del tubo superior"
          suffix="mts"
          type="number"
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          filled
          v-model="product.topTubeDiameter"
          label="Diámetro del tubo superior"
          suffix="mts"
          type="number"
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          filled
          v-model="product.standpipeLength"
          label="Largo del tubo vertical"
          suffix="mts"
          type="number"
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          filled
          v-model="product.standpipeDiameter"
          label="Diámetro del tubo vertical"
          suffix="mts"
          type="number"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-switch
          v-model="product.hasSideDoor"
          :label="`Puerta lateral`"
        ></v-switch>
      </v-col>
      <v-col>
        <v-switch
          v-model="product.hasBackDoor"
          :label="`Puerta trasera`"
        ></v-switch>
      </v-col>
      <v-col>
        <v-switch v-model="product.hasStairs" :label="`Escaleras`"></v-switch>
      </v-col>
      <v-col>
        <v-switch v-model="product.hasScales" :label="`Balanza`"></v-switch>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field
          filled
          v-model="product.stakeHolder"
          label="Porta estacas"
          type="number"
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          filled
          v-model="product.boquillas"
          label="Boquillas"
          type="number"
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          filled
          v-model="product.winches"
          label="Malacates"
          type="number"
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          filled
          v-model="product.arches"
          label="Arcos"
          type="number"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field
          filled
          v-model="product.litersHydraulicPump"
          label="Bomba hidráulica"
          type="number"
          suffix="Lts"
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          filled
          v-model="product.pto"
          label="Toma de fuerza"
        ></v-text-field>
      </v-col>
      <v-col>
        <v-select
          filled
          v-model="product.cylinder"
          :items="cylinderType"
          label="Cilindro"
        ></v-select>
      </v-col>
    </v-row>
    <v-combobox
      filled
      v-model="product.accesories"
      :items="items"
      chips
      clearable
      label="Accesorios"
      multiple
    >
      <template v-slot:selection="{ attrs, item, select, selected }">
        <v-chip
          v-bind="attrs"
          :input-value="selected"
          close
          @click="select"
          @click:close="remove(item)"
        >
          {{ item }}
        </v-chip>
      </template>
    </v-combobox>
    <v-data-table
      :headers="stage.headers"
      :items="stages"
      :search="search"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Etapas</v-toolbar-title>
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
          <v-dialog v-model="stage.dialog" max-width="500px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
                NUEVA ETAPA
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">{{ formTitle }}</span>
              </v-card-title>
              <v-card-text>
                <v-text-field
                  v-model="stage.editedItem.name"
                  label="Nombre"
                ></v-text-field>
                <v-select
                  v-model="stage.editedItem.area"
                  :items="stage.stageType"
                  label="Área"
                ></v-select>
                <v-text-field
                  v-model="stage.editedItem.time"
                  label="Tiempo estimado"
                  type="number"
                ></v-text-field>
                <v-combobox
                  v-model="stage.editedItem.stocks"
                  :items="stock"
                  chips
                  clearable
                  label="Insumos"
                  multiple
                >
                  <template
                    v-slot:selection="{ attrs, item, select, selected }"
                  >
                    <v-chip
                      v-bind="attrs"
                      :input-value="selected"
                      close
                      @click="select"
                      @click:close="remove(item)"
                    >
                      {{ item }}
                    </v-chip>
                  </template>
                </v-combobox>
                <v-textarea
                  v-model="stage.editedItem.description"
                  label="Descripción"
                ></v-textarea>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">
                  CANCELAR
                </v-btn>
                <v-btn color="blue darken-1" text @click="save">
                  GUARDAR
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="stage.dialogDelete" max-width="500px">
            <v-card>
              <v-card-subtitle class="text-h5"
                >¿Esta seguro que desea eliminar esta etapa?</v-card-subtitle
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
      <template v-slot:item.stocks="{ item }">
        <v-chip-group active-class="primary--text" column>
          <v-chip small v-for="tag in item.stocks" :key="tag">
            {{ tag }}
          </v-chip>
        </v-chip-group>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-btn small text color="success" @click="edit(item)"> EDITAR </v-btn>
        <v-btn small text color="error" @click="deleteItem(item)">
          BORRAR
        </v-btn>
      </template>
    </v-data-table>
    <v-row class="mt-5 mb-5">
      <v-spacer></v-spacer>
      <v-btn class="ma-2" @click="close" to="/office/products">
        CANCELAR
      </v-btn>
      <v-btn class="ma-2" color="primary" @click="save" to="/office/products">
        GUARDAR
      </v-btn>
    </v-row>
  </v-container>
</template>
<script>
export default {
  layout: "office",
  data: () => ({
    search: "",
    // stages harcoded data
    stages: [
      {
        name: "Corte y Plegado de chapas",
        area: "Corte y plegado",
        time: 2,
        description: "Cortar y plegar las chapas segun lo especificado.",
        stocks: [],
      },
      {
        name: "Autopartes generales",
        area: "Autopartes",
        time: 2,
        description: "",
        stocks: ["Electrodos"],
      },
      {
        name: "Torre inferior",
        area: "Autopartes",
        time: 10,
        description: "",
        stocks: ["Electrodos"],
      },
      {
        name: "Chimango",
        area: "Autopartes",
        time: 12,
        description: "",
        stocks: ["Electrodos"],
      },
      {
        name: "Pasarelas",
        area: "Autopartes",
        time: 4,
        description: "",
        stocks: ["Electrodos"],
      },
      {
        name: "Fabricacion del tacho",
        area: "Tacho",
        time: 17,
        description: "Soldar las chapas de Corte y Plegado.",
        stocks: ["Electrodos"],
      },
      {
        name: "Montaje",
        area: "Montaje",
        time: 85,
        description: "Unir todas las partes del producto.",
        stocks: ["Electrodos"],
      },
      {
        name: "Revisión de montaje",
        area: "Control de calidad",
        time: 0.5,
        description: "",
        stocks: [],
      },
      {
        name: "Lavado",
        area: "Lavado",
        time: 1,
        description: "",
        stocks: [],
      },
      {
        name: "Pintado",
        area: "Pintado",
        time: 1,
        description: "",
        stocks: ["Pintura"],
      },
      {
        name: "Revisión de pintado",
        area: "Control de calidad",
        time: 0.5,
        description: "",
        stocks: [],
      },
      {
        name: "Instalación Eléctrica",
        area: "Instalación Eléctrica",
        time: 4,
        description: "",
        stocks: ["Cables"],
      },
      {
        name: "Instalación Hidráulica",
        area: "Instalación Hidráulica",
        time: 7,
        description: "",
        stocks: ["Cables"],
      },
      {
        name: "Prueba de funcionamiento",
        area: "Control de calidad",
        time: 1.5,
        description: "",
        stocks: [],
      },
    ],

    stage: {
      dialog: false,
      dialogDelete: false,
      headers: [
        { text: "Nombre", value: "name" },
        { text: "Área", value: "area" },
        { text: "Tiempo estimado (hs)", value: "time" },
        { text: "Descripción", value: "description" },
        { text: "Insumos", value: "stocks" },
        { text: null, value: "actions", sortable: false },
      ],
      editedIndex: -1,
      stageType: [
        "Corte y plegado",
        "Autopartes",
        "Tacho",
        "Montaje",
        "Lavado",
        "Pintado",
        "Instalación Eléctrica",
        "Instalación Hidráulica",
        "Control de Calidad",
      ],
      editedItem: {
        name: "",
        area: "",
        time: "",
        description: "",
        stocks: [],
      },
      defaultItem: {
        name: "",
        area: "",
        time: "",
        description: "",
        stocks: [],
      },
    },
    productType: ["Tolva", "Carrosería", "Caja Volcadora"],
    cylinderType: [
      'Simple efecto de 8"',
      "Telescópico de 5 etapas",
      "2 telescópicos de 3 etapas",
    ],
    stock: [
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
    items: [
      "Guardabarros redondos con pantallas de goma",
      "Cajón para herramientas",
      "Bandas reflectivas perimetrales reglamentarias",
      "Luces reglamentarias",
      "Escalera aérea",
      "Pasarela antideslizante",
      "Soporte de rueda de auxilio tipo canasto doble",
      "Tanque para agua",
      "Acelerador de mano",
    ],
    product: {
      select: null,
      name: "",
      chargeCapacity: null,
      dischargeTime: null,
      weight: null,
      lenght: null,
      width: null,
      high: null,
      usefulLength: null,
      usefulWidth: null,
      usefulHigh: null,
      topTubeLength: null,
      topTubeDiameter: null,
      standpipeLength: null,
      standpipeDiameter: null,
      hasSideDoor: false,
      hasBackDoor: false,
      hasStairs: false,
      hasScales: false,
      stakeHolder: null,
      boquillas: null,
      winches: null,
      arches: null,
      litersHydraulicPump: null,
      pto: "",
      cylinder: "",
      accesories: [],
    },
  }),

  computed: {
    formTitle() {
      return this.stage.editedIndex === -1 ? "Nueva Etapa" : "Editar Etapa";
    },
  },

  methods: {
    edit(item) {
      this.stage.editedIndex = this.stages.indexOf(item);
      this.stage.editedItem = Object.assign({}, item);
      this.stage.dialog = true;
    },

    deleteItem(item) {
      this.stage.editedIndex = this.stages.indexOf(item);
      this.stage.editedItem = Object.assign({}, item);
      this.stage.dialogDelete = true;
    },

    deleteConfirm() {
      this.stages.splice(this.stage.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.stage.takeDialog = false;
      this.stage.dialog = false;
      this.$nextTick(() => {
        this.stage.editedItem = Object.assign({}, this.stage.defaultItem);
        this.stage.editedIndex = -1;
      });
    },

    closeDelete() {
      this.stage.dialogDelete = false;
      this.$nextTick(() => {
        this.stage.editedItem = Object.assign({}, this.stage.defaultItem);
        this.stage.editedIndex = -1;
      });
    },

    save() {
      if (this.stage.editedIndex > -1) {
        Object.assign(
          this.stages[this.stage.editedIndex],
          this.stage.editedItem
        );
      } else {
        this.stages.push(this.stage.editedItem);
      }
      this.close();
    },
    remove(item) {
      this.chips.splice(this.chips.indexOf(item), 1);
      this.chips = [...this.chips];
    },
  },
};
</script>
