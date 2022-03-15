<template>
  <MyNavBar :items="menu" :title="title">
    <Nuxt />
  </MyNavBar>
</template>

<script>
import MyNavBar from "~/components/base/MyNavBar";
export default {
  components: { MyNavBar },
  data() {
    return {
      title: "Tolva Mix | Pañol",
      menu: [
        {
          icon: "mdi-view-dashboard",
          title: "Dashboard",
          to: "/deposit",
        },
        {
          icon: "mdi-plus",
          title: "Agregar Insumo",
          to: "/deposit/add",
        },
        {
          icon: "mdi-database-search",
          title: "Buscar Insumo",
          to: "/deposit/search",
        },
        {
          icon: "mdi-delete",
          title: "Eliminar Insumo",
          to: "/deposit/remove",
        },
        {
          icon: "mdi-pencil",
          title: "Editar Insumo",
          to: "/deposit/edit",
        },
      ],
    };
  },
};
</script>
