<template>
  <MySection title="Reportar inconveniente">
    <v-select
      v-model="issues"
      multiple
      chips
      :items="
        returns.map((x) => x.resurceName + '  ' + x.brand + '  ' + x.model)
      "
      label="Recurso faltante"
      outlined
    ></v-select>
    <div style="margin-top: 10px">
      <TheConfirmDialog
        header-message="Reportar inconveniente"
        body-message="¿Desea reportar los inconvenientes?"
        @confirm="finalizar()"
      >
        <template #activator="{ on }">
          <v-btn v-on="on" color="primary" depressed :disabled="!issues.length">
            Reportar
          </v-btn>
        </template>
      </TheConfirmDialog>
      <v-btn to="/production/work" depressed> Cancelar </v-btn>
    </div>
  </MySection>
</template>

<script>
import MySection from "~/components/base/MySection";
import MyTable from "~/components/base/MyTable";
import TheConfirmDialog from "~/components/base/dialogs/TheConfirmDialog";
import TheDialog from "~/components/base/dialogs/TheDialog";
import MyInfo from "~/components/base/MyInfo";
import TheFormDialog from "~/components/base/dialogs/TheFormDialog";

export default {
  components: {
    MyTable,
    TheFormDialog,
    MyInfo,
    MySection,
    TheConfirmDialog,
    TheDialog,
  },
  layout: "production",
  data() {
    return {
      issues: [],
      pause: true,
      step: 1,
      search: "",
      itemReturned: {
        quantity: 1,
      },
      steps: {
        1: {
          code: "0001",
        },
        2: {
          code: "0002",
        },
        3: {
          code: "0003",
        },
        4: {
          code: "0004",
        },
        5: {
          code: "0005",
        },

        6: {
          code: "0006",
        },
        7: {
          code: "0007",
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
      ],
    };
  },

  methods: {
    finalizar() {
      console.log(this.issues);
      this.$router.push(`/production/work`);
    },
  },
};
</script>
