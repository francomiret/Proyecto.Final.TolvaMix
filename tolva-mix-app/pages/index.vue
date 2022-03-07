<template>
  <v-col>
    <h1>Áreas</h1>
    <v-row>
      <v-col v-for="app in appliations" :key="app.id" cols="12" md="6">
        <nuxt-link :to="app.to" class="text-decoration-none">
          <v-card height="200">
            <v-card-title>
              <v-icon class="mr-2">{{ app.icon }}</v-icon>
              {{ app.name }}
            </v-card-title>
          </v-card>
        </nuxt-link>
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
          to: "/production",
        },
        {
          id: 2,
          name: "Ventas",
          icon: "mdi-account-cash",
          to: "/sales",
        },
        {
          id: 3,
          name: "Oficina Técnica",
          icon: "mdi-cog",
          to: "/office",
        },
        {
          id: 4,
          name: "Pañol",
          icon: "mdi-semantic-web",
          to: "/deposit",
        },
      ],
    };
  },
};
</script>
