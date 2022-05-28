<template>
  <MySection title="Carritos Pendientes">
    <v-card class="mx-auto">
      <v-card-title class="text-h6 font-weight-regular justify-space-between">
        <span> Estación de Trabajo {{ steps[step].code }}</span>
      </v-card-title>
      <v-card-subtitle>
        <span>{{ steps[step].area }}</span>
      </v-card-subtitle>

      <v-window v-model="step">
        <div v-for="(item, i) in Object.keys(steps).length + 1" :key="i">
          <v-window-item :value="i">
            <MyTable :items="returns" :search="search">
              <template v-slot:item.inCart="{ item }">
                <v-switch v-model="item.inCart" inset></v-switch>
              </template>
              <template v-slot:item.type="{ item }">
                <v-chip small :color="getColor(item.type)" dark>
                  {{ item.type }}
                </v-chip>
              </template>
            </MyTable>
          </v-window-item>
        </div>
      </v-window>

      <v-divider></v-divider>

      <v-card-actions>
        <v-btn :disabled="step === 1" text @click="step--"> Volver </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          v-if="step !== Object.keys(steps).length"
          color="primary"
          depressed
          @click="step++"
        >
          Siguiente
        </v-btn>
        <TheConfirmDialog
          v-else
          header-message="Finalizar preparación de recursos"
          body-message="¿Desea finalizar la preparación de recursos para la jornada laboral?"
          @confirm="finalizar()"
        >
          <template #activator="{ on }">
            <v-btn v-on="on" color="primary" depressed> Finalizar </v-btn>
          </template>
        </TheConfirmDialog>
      </v-card-actions>
    </v-card>
  </MySection>
</template>

<script>
import TheConfirmDialog from "~/components/base/dialogs/TheConfirmDialog";
import TheDialog from "~/components/base/dialogs/TheDialog";
import MySection from "~/components/base/MySection";
import MyTable from "~/components/base/MyTable";

export default {
  components: {
    MyTable,
    MySection,
    TheConfirmDialog,
    TheDialog,
  },
  layout: "deposit",
  data() {
    return {
      step: 1,
      search: "",
      itemReturned: {
        quantity: 1,
      },
      steps: {
        1: {
          code: "CP01",
          area: "Corte y Plegado",
        },
        2: {
          code: "CP02",
          area: "Corte y Plegado",
        },
        3: {
          code: "A01",
          area: "Autopartes",
        },
        4: {
          code: "A02",
          area: "Autopartes",
        },
        5: {
          code: "A03",
          area: "Autopartes",
        },

        6: {
          code: "M01",
          area: "Montaje",
        },
        7: {
          code: "L01",
          area: "Lavado",
        },
        8: {
          code: "P01",
          area: "Pintado",
        },
        9: {
          code: "IH01",
          area: "Instalaciones Hidráulicas",
        },
        10: {
          code: "IE01",
          area: "Instalaciones Elécticas",
        },
      },

      returns: [
        {
          type: "Herramienta",
          resurceName: "Taladro",
          brand: "Bosch",
          model: "SuperTaladro",
          quantity: "1",
          inCart: false,
        },
        {
          quantity: "1",
          type: "Herramienta",
          resurceName: "Amoladoras",
          brand: "Stanley",
          model: "Sarasa",
          inCart: false,
        },
        {
          quantity: "1",
          type: "Herramienta",
          resurceName: "Amoladora",
          brand: "Bosch",
          model: "SuperAmoladora",
          inCart: false,
        },
        {
          quantity: "50",
          type: "Insumo",
          resurceName: "Alambre",
          brand: "Bosch",
          model: "SuperAmoladora",
          inCart: false,
        },
        {
          quantity: "50",
          type: "Insumo",
          resurceName: "Alambre",
          brand: "San Martin",
          model: "",
          inCart: false,
        },
      ],
    };
  },

  methods: {
    finalizar() {
      console.log("finalizado");
    },
    getColor(type) {
      if (type === "Herramienta") return "blue";
      else return "green";
    },
  },
};
</script>
