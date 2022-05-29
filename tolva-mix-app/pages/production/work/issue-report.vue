<template>
  <MySection title="Reportar inconveniente">
    <v-select
      v-model="recursosFaltantes"
      multiple
      chips
      :items="
        returns.map((x) => x.resurceName + '  ' + x.brand + '  ' + x.model)
      "
      label="Recurso faltante"
      outlined
    ></v-select>
    <v-select
      v-model="recursosRotos"
      multiple
      chips
      :items="
        returns.map((x) => x.resurceName + '  ' + x.brand + '  ' + x.model)
      "
      label="Recurso rotos"
      outlined
    ></v-select>
    <TheActionsBar
      saveText="Registrar"
      @save="finalizar"
      @cancel="clickCancel"
    />
  </MySection>
</template>

<script>
import MySection from "~/components/base/MySection";
import MyTable from "~/components/base/MyTable";
import TheConfirmDialog from "~/components/base/dialogs/TheConfirmDialog";
import TheDialog from "~/components/base/dialogs/TheDialog";
import MyInfo from "~/components/base/MyInfo";
import TheFormDialog from "~/components/base/dialogs/TheFormDialog";
import TheActionsBar from "~/components/base/buttons/TheActionsBar";

export default {
  components: {
    MyTable,
    TheActionsBar,
    TheFormDialog,
    MyInfo,
    MySection,
    TheConfirmDialog,
    TheDialog,
  },
  layout: "production",
  data() {
    return {
      recursosFaltantes: [],
      recursosRotos: [],
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
      console.log(this.recursosFaltantes);
      console.log(this.recursosRotos);
      this.$router.push(`/production/work`);
    },
    clickCancel() {
      this.$router.push(`/production/work`);
    },
  },
};
</script>
