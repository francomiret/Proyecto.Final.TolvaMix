<template>
  <MySection title="Nuevo Producto">
    <!-- Mover formulario a un componente aparte -->
    <v-row>
      <v-col>
        <v-select
          filled
          v-model="product.type"
          :items="productType"
          label="Tipo de producto"
        ></v-select>
      </v-col>
      <v-col>
        <v-text-field
          filled
          v-model="product.title"
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
    </v-row>
    <v-combobox
      filled
      v-model="product.accessories"
      :items="accessories"
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
    <MySection title="Etapas">
      <MyTable :items="stages" :search="search" class="elevation-1">
        <template v-slot:top>
          <v-toolbar flat>
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              class="ma-4"
              append-icon="mdi-magnify"
              label="Buscar"
              single-line
              hide-details
            ></v-text-field>
            <TheFormDialog @confirm="saveNewStage()">
              <template #activator="{ on }">
                <v-btn color="primary" dark class="mb-2" v-on="on">
                  NUEVA ETAPA
                </v-btn>
              </template>
              <!-- Mover formulario a un componente aparte -->
              <v-form>
                <h1>Nuea etapa</h1>
                <v-text-field
                  v-model="stage.editedItem.title"
                  label="Nombre"
                ></v-text-field>
                <v-select
                  v-model="stage.editedItem.location"
                  :items="locations"
                  label="Localización"
                ></v-select>
                <v-text-field
                  v-model="stage.editedItem.productionTimeInHours"
                  label="Tiempo estimado"
                  type="number"
                ></v-text-field>
                <!-- Cambiar componente para seleccionar insumo a uno que te deje seleccionar la cantidad neesaria -->
                <v-combobox
                  v-model="stage.editedItem.items"
                  :items="inputs"
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
              </v-form>
            </TheFormDialog>
          </v-toolbar>
        </template>
        <template v-slot:item.actions="{ item }">
          <TheFormDialog @confirm="saveEditStage(item)">
            <template #activator="{ on }">
              <v-btn small text color="success" v-on="on"> EDITAR </v-btn>
            </template>
            <!-- Mover formulario a un componente aparte -->
            <v-form>
              <h1>Editar etapa</h1>
              <v-text-field v-model="item.title" label="Nombre"></v-text-field>
              <v-select
                v-model="item.location"
                :items="locations"
                label="Localización"
              ></v-select>
              <v-text-field
                v-model="item.productionTimeInHours"
                label="Tiempo estimado"
                type="number"
              ></v-text-field>
              <!-- Cambiar componente para seleccionar insumo a uno que te deje seleccionar la cantidad neesaria -->
              <v-combobox
                v-model="item.inputs"
                :items="inputs"
                chips
                clearable
                label="Insumos"
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
            </v-form>
          </TheFormDialog>
          <TheConfirmDialog
            header-message="Eliminar etapa"
            body-message="¿Desea eliminar esta etapa?"
            @confirm="deletePart(item)"
          >
            <template #activator="{ on }">
              <v-btn small text color="error" v-on="on"> BORRAR </v-btn>
            </template>
          </TheConfirmDialog>
        </template>
      </MyTable>
    </MySection>

    <v-row class="mt-5 mb-5">
      <v-spacer></v-spacer>
      <v-btn class="ma-2" to="/office/products"> CANCELAR </v-btn>
      <v-btn class="ma-2" color="primary" @click="saveProduct()">
        GUARDAR
      </v-btn>
    </v-row>
  </MySection>
</template>
<script>
import MySection from "~/components/base/MySection";
import MyTable from "@/components/base/MyTable";
import TheConfirmDialog from "@/components/base/dialogs/TheConfirmDialog";
import TheFormDialog from "~/components/base/dialogs/TheFormDialog";
import TheDialog from "~/components/base/dialogs/TheDialog";
import { PartsService } from "@/services/api/PartsService";
import { ProductService } from "@/services/api/ProductService";
import { InputsService } from "@/services/api/InputsService";
import { LocationService } from "@/services/api/LocationService";
import { AccessoriesService } from "@/services/api/AccessoriesService";

export default {
  components: {
    TheConfirmDialog,
    TheDialog,
    MyTable,
    TheFormDialog,
    MySection,
  },
  layout: "office",
  data: () => ({
    search: "",
    stages: [],
    inputs: [],
    locations: [],
    accessories: [],
    stage: {
      editedIndex: -1,
      editedItem: {
        title: "",
        location: "",
        productionTimeInHours: "",
        inputs: [],
      },
    },
    productType: ["Tolva", "Carrosería", "Caja Volcadora"],
    product: {
      type: null,
      title: "",
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

  methods: {
    saveProduct() {
      this.$productService.create(this.product);
      this.$router.push(`/office/products`);
    },

    remove(item) {
      this.chips.splice(this.chips.indexOf(item), 1);
      this.chips = [...this.chips];
    },

    deletePart(part) {
      this.$partsService.delete(this.$partsService.find(part.id));
      this.getAllStages();
    },

    saveNewStage() {
      console.log(this.stage.editedItem);
      this.$partsService.create(this.stage.editedItem);
      this.getAllStages();
    },

    saveEditStage(part) {
      console.log(part);
      this.$partsService.update(part.id, part);
      this.getAllStages();
    },

    getAllStages() {
      this.stages = this.$partsService.all().map((x) => ({
        id: x.id,
        title: x.title,
        location: x.location.title,
        inputs: x.inputs.map((x) => x.input.title).toString(),
        productionTimeInHours: x.productionTimeInHours,
      }));
    },
  },
  mounted() {
    this.getAllStages();
    this.inputs = this.$inputsService.all().map((x) => x.title);
    this.locations = this.$locationService.all().map((x) => x.title);
    this.accessories = this.$accessoriesService.all().map((x) => x.title);
  },
};
</script>
