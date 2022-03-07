<template>
  <MyNavBar :items="menu" :title="title">
    <v-container>
      <h1>Producción</h1>
      <NuxtLink to="/">Home page</NuxtLink>
    </v-container>
  </MyNavBar>
</template>

<script>
import MyNavBar from "~/components/base/MyNavBar";
export default {
  components: {MyNavBar},
  data() {
    return {
      title: "Tolva Mix | Producción",
      menu: [
        {
          icon: "mdi-plus",
          title: "Comenzar Trabajo",
          to: "/",
        },
        {
          icon: "mdi-pipe-wrench",
          title: "Ajustes de Calidad",
          to: "/",
        },
      ],
    };
  },
};
</script>
