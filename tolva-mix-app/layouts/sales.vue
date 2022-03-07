<template>
  <MyNavBar :items="menu" :title="title">
    <Nuxt />
  </MyNavBar>
</template>

<script>
import MyNavBar from "~/components/base/MyNavBar";
export default {
  components: {MyNavBar},
  data() {
    return {
      title: "Tolva Mix | Ventas",
      menu: [
        {
          icon: "mdi-plus",
          title: "Registrar Venta",
          to: "/sales/calendar",
        },
        {
          icon: "mdi-content-save",
          title: "Reservar Entrega",
          to: "/",
        },
        {
          icon: "mdi-database-search",
          title: "Buscar Venta",
          to: "/",
        },
        {
          icon: "mdi-database-search",
          title: "Consultar Entrega",
          to: "/",
        },
        {
          icon: "mdi-delete",
          title: "Cancelar Venta",
          to: "/",
        },
      ],
    };
  },
};
</script>
