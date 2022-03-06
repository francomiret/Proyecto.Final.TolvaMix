<template>
  <v-col>
    <h1>Áreas</h1>
    <v-row>
      <v-col v-for="app in appliations" :key="app.id" cols="12" md="6">
        <v-card height="200" :href="app.to">
          <v-card-title>
            <v-icon> {{ app.icon }}</v-icon>
            {{ app.name }}
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      appliations: [
        {
          id: 1,
          name: "Producción",
          icon: "mdi-account-hard-hat",
          to: "/produccion",
        },
        {
          id: 2,
          name: "Ventas",
          icon: "mdi-account-cash",
          to: "/ventas",
        },
        {
          id: 3,
          name: "Oficina Técnica",
          icon: "mdi-cog",
          to: "/oficina-tecnica",
        },
        {
          id: 4,
          name: "Pañol",
          icon: "mdi-semantic-web",
          to: "/deposito",
        },
      ],
    };
  },
};
</script>
