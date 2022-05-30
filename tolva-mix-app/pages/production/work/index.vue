<template>
  <MySection :title="title">
    <v-card class="mx-auto">
      <v-card-title class="text-h6 font-weight-regular justify-space-between">
        <span> Orden de Producción N° {{ steps[step].code }}</span>
      </v-card-title>
      <v-card-subtitle>
        <span>Estación de trabajo CP01 | Corte y Plegado</span>
      </v-card-subtitle>

      <v-divider></v-divider>

      <v-card-actions>
        <v-btn
          :disabled="pause === false"
          @click="pause = false"
          color="success"
          depressed
        >
          Iniciar
        </v-btn>
        <v-btn
          color="error"
          depressed
          @click="pause = true"
          :disabled="pause === true"
        >
          Pausar
        </v-btn>
        <h1 style="margin-left: 10px">00:00:00 Hs.</h1>
        <v-spacer></v-spacer>
        <v-btn color="primary" depressed to="work/issue-report/">
          Registrar inconveniente
        </v-btn>
      </v-card-actions>
      
      <v-window v-model="step" v-if="!steps[step].isRework">
        <v-container>
          <div v-for="(item, i) in Object.keys(steps).length + 1" :key="i">
            <v-window-item :value="i">
              <MyInfo> Descripción del trabajo a realizar </MyInfo>
              <h3>Lista de recursos</h3>
              <MyTable :items="returns"> </MyTable>
            </v-window-item>
          </div>
        </v-container>
      </v-window>
      <v-window v-model="step" v-else>
        <v-container>
          <div v-for="(item, i) in Object.keys(steps).length + 1" :key="i">
            <v-window-item :value="i">
              <h3>Mejoras a realizar</h3>
              <MyTable :items="qaReport"> </MyTable>
            </v-window-item>
          </div>
        </v-container>
      </v-window>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <TheConfirmDialog
          header-message="Finalizar producción"
          body-message="¿Desea finalizar la producción de la Orden de Producción actual?"
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
import MySection from "~/components/base/MySection";
import MyTable from "~/components/base/MyTable";
import TheConfirmDialog from "~/components/base/dialogs/TheConfirmDialog";
import TheDialog from "~/components/base/dialogs/TheDialog";
import MyInfo from "~/components/base/MyInfo";

export default {
  components: {
    MyTable,
    MyInfo,
    MySection,
    TheConfirmDialog,
    TheDialog,
  },
  layout: "production",
  data() {
    return {
      pause: true,
      step: 1,
      itemReturned: {
        quantity: 1,
      },
      steps: {
        1: {
          code: "0001",
          isRework: false,
        },
        2: {
          code: "0002",
          isRework: true,
        },
        3: {
          code: "0003",
          isRework: false,
        },
        4: {
          code: "0004",
          isRework: true,
        },
        5: {
          code: "0005",
          isRework: false,
        },

        6: {
          code: "0006",
          isRework: true,
        },
        7: {
          code: "0007",
          isRework: false,
        },
      },

      returns: [
        {
          resurceName: "Chapa",
          brand: "SuperChapa",
          quantity: "2",
          model: "Galvanizada",
        },
        {
          quantity: "5",
          resurceName: "Alambre",
          brand: "San Martin",
          model: "",
        },
        {
          quantity: "1",
          resurceName: "Soldadora",
          brand: "Stanley",
          model: "",
        },
        {
          quantity: "1",
          resurceName: "Amoladora",
          brand: "Stanley",
          model: "",
        },
      ],
      qaReport: [
        {
          title: "Soldadura",
          status: "Rechazada",
          justification: "Puntos desprolijos, mala union",
        },
        {
          title: "Calado",
          status: "Rechazada",
          justification: "Desprolijo",
        },
      ],
    };
  },

  computed: {
    title() {
      if (this.steps[this.step].isRework) {
        return "Ajuste de calidad";
      } else {
        return "Producción";
      }
    },
  },

  methods: {
    finalizar() {
      if (Object.keys(this.steps).length !== this.step) {
        this.step++;
        this.pause = true;
      } else {
        console.log("finalizado");
      }
    },
  },
};
</script>
