<template>
  <MySection title="Carritos Pendientes">
        <template>
  <v-card>
    <v-tabs
      background-color="dark accent-4"
      center-active
      dark
    >
      <v-tab href="#tab-1">Cortes de Chapas</v-tab>
      <v-tab href="#tab-2">Fabricacion Autopartes</v-tab>
      <v-tab href="#tab-3">Montaje</v-tab>
      <v-tab href="#tab-4">Lavado y pintura</v-tab>
      <v-tab href="#tab-5">Inst. Hidraulicas/Electricas</v-tab>
    </v-tabs>
  </v-card>
</template>

<MyTable :items="returns" :search="search">
<template>
    <v-tabs
      v-model="tab"
      background-color="primary"
      dark
    >
      <v-tab
        v-for="item in returns"
        :key="item.tab"
      >
        {{ item.tab }}
      </v-tab>
    </v-tabs>
  
  </template>
  
</MyTable>

 <!--   <MyTable :items="returns" :search="search">
      <template v-slot:top>
        <v-toolbar flat>
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Buscar"
            single-line
            hide-details
          ></v-text-field>
        </v-toolbar>
      </template>
      <template v-slot:item.type="{ item }">
        <v-chip small :color="getColor(item.type)" dark>
          {{ item.type }}
        </v-chip>
      </template>
      <template v-slot:item.actions="{ item }">
        <template>
  <v-container fluid>
    <p>{{ selected }}</p>
    <v-checkbox
      v-model="selected"
      value="true"
    ></v-checkbox>
  </v-container>
</template>
      </template>
    </MyTable> -->
  </MySection>
</template>

<script>
import TheFormDialog from "~/components/base/dialogs/TheFormDialog";
import TheDialog from "~/components/base/dialogs/TheDialog";
import MySection from "~/components/base/MySection";
import MyTable from "~/components/base/MyTable";

export default {
  components: {
    MyTable,
    MySection,
    TheFormDialog,
    TheDialog,
  },
  layout: "deposit",
  data() {
    return {
      tab: null,
      search: "",
      itemReturned: {
        quantity: 1,
      },
      returns: [
        {
          type: "Herramienta",
          resurceName: "Taladro",
          brand: "Bosch",
          model: "SuperTaladro",
          quantity: "1",
          content: 'Tab 1 Content',
        },
        {
          quantity: "1",
          type: "Herramienta",
          resurceName: "Amoladoras",
          brand: "Stanley",
          model: "Sarasa",
          content: 'Tab 1 Content',
        },
        {
          quantity: "1",
          type: "Herramienta",
          resurceName: "Amoladora",
          brand: "Bosch",
          model: "SuperAmoladora",
          content: 'Tab 2 Content',
        },
        {
          quantity: "50",
          type: "Insumo",
          resurceName: "Alambre",
          brand: "Bosch",
          model: "SuperAmoladora",
          content: 'Tab 2 Content',
        },
        {
          quantity: "50",
          type: "Insumo",
          resurceName: "Alambre",
          brand: "San Martin",
          model: "",
          content: 'Tab 3 Content',
        },
      ],
    };
  },
  methods: {
    returnItemConfirmation(item) {
      this.returns.splice(this.returns.indexOf(item), 1);
    },

    getColor(type) {
      if (type === "Herramienta") return "blue";
      else return "green";
    },
  },
};
</script>
