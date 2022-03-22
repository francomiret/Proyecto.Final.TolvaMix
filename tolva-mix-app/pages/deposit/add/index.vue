<template>
  <v-container>
    <h1>Registrar nuevo Recurso</h1>
    <v-tabs v-model="tab" dark>
      <v-tab key="stock"> Insumo </v-tab>
      <v-tab key="steel"> Herramienta </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item key="stock">
        <v-card flat>
          <v-container>
            <v-form ref="form" v-model="stock.valid" lazy-validation>
              <v-container>
                <v-row>
                  <v-select
                    v-model="stock.select"
                    :items="stock.stockType"
                    :rules="stock.stockTypeRules"
                    label="Tipo de insumo"
                    required
                  ></v-select>
                  <v-btn fab to="/deposit"> <v-icon>mdi-plus</v-icon> </v-btn>
                </v-row>
              </v-container>
              <v-text-field
                v-model="stock.brand"
                :rules="stock.brandRules"
                label="Marca"
                required
              ></v-text-field>
              <v-text-field
                v-model="stock.quantity"
                :rules="stock.quantityRules"
                label="Cantidad"
                type="number"
                required
              ></v-text-field>
              <v-text-field
                v-model="stock.year"
                :rules="stock.yearRules"
                label="Fecha de vencimiento"
                type="date"
                required
              ></v-text-field>
              <v-btn to="/deposit"> Cancelar </v-btn>
              <v-btn
                :disabled="!stock.valid"
                color="primary"
                @click="onStockSubmit"
              >
                Confirmar
              </v-btn>
            </v-form>
          </v-container>
        </v-card>
      </v-tab-item>
      <v-tab-item key="steel">
        <v-card flat>
          <v-container>
            <v-form ref="form" v-model="steel.valid" lazy-validation>
              <v-container>
                <v-row>
                  <v-select
                    v-model="steel.select"
                    :items="steel.steelType"
                    :rules="steel.steelTypeRules"
                    label="Tipo de herramienta"
                    required
                  ></v-select>
                  <v-btn fab to="/deposit"> <v-icon>mdi-plus</v-icon> </v-btn>
                </v-row>
              </v-container>
              <v-text-field
                v-model="steel.brand"
                :rules="steel.brandRules"
                label="Marca"
                required
              ></v-text-field>
              <v-text-field
                v-model="steel.model"
                :rules="steel.modelRules"
                label="Modelo"
                required
              ></v-text-field>
              <v-text-field
                v-model="steel.quantity"
                :rules="steel.quantityRules"
                label="Cantidad"
                type="number"
                required
              ></v-text-field>
              <v-text-field
                v-model="steel.year"
                :rules="steel.yearRules"
                label="Año de fabricación"
                type="number"
                required
              ></v-text-field>
              <v-btn to="/deposit"> Cancelar </v-btn>
              <v-btn
                :disabled="!steel.valid"
                color="primary"
                @click="onSteelSubmit"
              >
                Confirmar
              </v-btn>
            </v-form>
          </v-container>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-container>
</template>

<script>
import MyList from "~/components/base/MyList";
export default {
  components: { MyList },
  layout: "deposit",
  data() {
    return {
      tab: null,
      steel: {
        valid: true,
        brand: "",
        model: "",
        year: null,
        quantity: null,
        steelType: [
          "Amoladora",
          "Soldadora",
          "Taladro",
          "Compresor",
          "Herramienta de mano",
        ],
        select: null,
        checkbox: false,
        modelRules: [(v) => !!v || "El modelo de la herramieta es requerido."],
        brandRules: [(v) => !!v || "La marca de la herramieta es requerida."],
        steelTypeRules: [(v) => !!v || "El tipo de herramienta es requerido"],
        yearRules: [
          (v) => !!v || "El año de fabricación de la herramienta es requerido.",
        ],
        quantityRules: [
          (v) => !!v || "La cantidad de herramientas es requerida",
        ],
      },
      stock: {
        valid: true,
        year: new Date().toISOString().slice(0, 10),
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
        brandRules: [(v) => !!v || "La marca de la herramieta es requerida."],
        stockTypeRules: [(v) => !!v || "El tipo de herramienta es requerido"],
        quantityRules: [(v) => !!v || "La cantidad de insmos es requerida"],
        select: null,
      },
    };
  },
  mounted() {
    this.products = this.$productService.all();
  },
  methods: {
    onStockSubmit() {
      this.$refs.form.validate();
      console.log(this.stock);
    },
    onSteelSubmit() {
      this.$refs.form.validate();
      console.log(this.steel);
    },
  },
};
</script>
