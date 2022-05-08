<template>
  <MySection title="Recursos disponibles">
    <MyTable :items="steels" @click:row="showQualityControl">
      <template v-slot:top>
        <v-toolbar flat>
          <v-spacer></v-spacer>
          <v-text-field
            v-model="steelSearch"
            class="ma-4"
            append-icon="mdi-magnify"
            label="Buscar"
            single-line
            hide-details
          ></v-text-field>
          <TheFormDialog @confirm="save()">
            <template #activator="{ on }">
              <v-btn color="primary" dark class="mb-2" v-on="on">
                NUEVO RECURSO
              </v-btn>
            </template>
            <v-form>
              <h1>Nuevo recurso</h1>
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
                v-model="steel.editedItem.id"
                label="Código"
                type="number"
              ></v-text-field>
              <v-text-field
                v-model="steel.editedItem.location"
                label="Ubicación"
                type="text"
              ></v-text-field>
            </v-form>
          </TheFormDialog>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <TheFormDialog @confirm="takeConfirm()">
          <template #activator="{ on }">
            <v-btn small text color="primary" v-on="on"> RETIRAR </v-btn>
          </template>
          <v-form>
            <h1>Retirar recurso</h1>
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
          </v-form>
        </TheFormDialog>
        <TheFormDialog @confirm="editConfirm()">
          <template #activator="{ on }">
            <v-btn small text color="success" v-on="on"> EDITAR </v-btn>
          </template>
          <v-form>
            <h1>Editar recurso</h1>
            <v-select
              v-model="item.select"
              :items="steel.steelType"
              label="Tipo de herramenta"
            ></v-select>
            <v-text-field v-model="item.brand" label="Marca"></v-text-field>
            <v-text-field v-model="item.model" label="Modelo"></v-text-field>
            <v-text-field
              v-model="item.quantity"
              label="Cantidad"
              type="number"
            ></v-text-field>
            <v-text-field
              v-model="item.id"
              label="Código"
              type="number"
            ></v-text-field>
            <v-text-field
              v-model="item.location"
              label="Ubicación"
              type="text"
            ></v-text-field>
          </v-form>
        </TheFormDialog>
        <TheConfirmDialog
          header-message="Eliminar recurso"
          body-message="¿Desea eliminar este recurso?"
          @confirm="deleteConfirm(item)"
        >
          <template #activator="{ on }">
            <v-btn small text color="error" v-on="on"> BORRAR </v-btn>
          </template>
        </TheConfirmDialog>
      </template>
      <template v-slot:item.type="{ item }">
        <v-chip small :color="getColor(item.type)" dark>
          {{ item.type }}
        </v-chip>
      </template>
    </MyTable>
  </MySection>
</template>
<script>
import TheConfirmDialog from "@/components/base/dialogs/TheConfirmDialog";
import TheFormDialog from "~/components/base/dialogs/TheFormDialog";
import TheDialog from "~/components/base/dialogs/TheDialog";
import MySection from "~/components/base/MySection";
import MyTable from "~/components/base/MyTable";
export default {
  components: {
    MyTable,
    MySection,
    TheConfirmDialog,
    TheFormDialog,
    TheDialog,
  },
  layout: "deposit",
  data: () => ({
    steelSearch: "",
    // definir Base de datos de recursos
    steels: [
      {
        id: 1,
        type: "Herramienta",
        select: "Amoladora",
        brand: "Steel",
        model: "Dragon",
        quantity: 3,
        location: "S11",
        unit: "Unidades",
      },
      {
        id: 2,
        type: "Herramienta",
        select: "Amoladora",
        brand: "Stanley",
        model: "Sarasa",
        quantity: 2,
        location: "S12",
        unit: "Unidades",
      },
      {
        id: 3,
        type: "Herramienta",
        select: "Taladro",
        brand: "Bosch",
        model: "Superpoderoso",
        quantity: 1,
        location: "S13",
        unit: "Unidades",
      },
      {
        id: 4,
        type: "Herramienta",
        select: "Amoladora",
        brand: "Bosch",
        model: "Sarasa",
        quantity: 2,
        location: "S15",
        unit: "Unidades",
      },
      {
        id: 5,
        type: "Insumo",
        select: "Alambre",
        brand: "Sarmiento",
        model: "",
        quantity: 222.2,
        location: "B35",
        unit: "Metros",
      },
      {
        id: 6,
        type: "Insumo",
        select: "Electrodos",
        brand: "",
        model: "",
        quantity: 800,
        location: "B36",
        unit: "Unidades",
      },
      {
        id: 7,
        type: "Insumo",
        select: "Grasa",
        brand: "",
        model: "",
        quantity: 3.7,
        location: "B37",
        unit: "Litros",
      },
    ],

    steel: {
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
        id: 0,
        location: "",
      },
      takeItem: {
        quantity: 1,
        workerId: null,
      },
    },
  }),

  methods: {
    takeConfirm(item) {
      this.steel.editedIndex = this.steels.indexOf(item);
      this.steel.editedItem = Object.assign({}, item);
      this.steel.takeDialog = true;
    },

    editConfirm(item) {
      this.steel.editedIndex = this.steels.indexOf(item);
      this.steel.editedItem = Object.assign({}, item);
      this.steel.dialog = true;
    },

    deleteConfirm(item) {
      this.steels.splice(this.steels.indexOf(item), 1);
    },

    getColor(type) {
      if (type === "Herramienta") return "blue";
      else return "green";
    },

    save() {
      if (this.steel.editedIndex > -1) {
        Object.assign(
          this.steels[this.steel.editedIndex],
          this.steel.editedItem
        );
      } else {
        this.steels.push(this.steel.editedItem);
      }
    },
  },
};
</script>
