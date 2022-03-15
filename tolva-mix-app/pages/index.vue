<template>
  <v-col>
    <h1>Áreas</h1>
    <v-row>
      <v-col
        v-for="item in menu"
        :key="'main-item-' + item.id"
        cols="12"
        md="6"
      >
        <nuxt-link :to="item.to" class="text-decoration-none">
          <v-card height="200">
            <v-card-title>
              <h2>
                <v-icon large class="mr-2">{{ item.icon }}</v-icon>
                {{ item.name }}
              </h2>
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
      menu: [
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
          name: "Depósito",
          icon: "mdi-semantic-web",
          to: "/deposit",
        },
      ],
    };
  },
};
</script>
