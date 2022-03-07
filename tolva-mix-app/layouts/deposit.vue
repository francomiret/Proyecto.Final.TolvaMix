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
      title: "Tolva Mix | Pañol",
      menu: [
        {
          icon: "mdi-plus",
          title: "Agregar Insumo",
          to: "/",
        },
        {
          icon: "mdi-database-search",
          title: "Buscar Insumo",
          to: "/",
        },
        {
          icon: "mdi-delete",
          title: "Eliminar Insumo",
          to: "/",
        },
        {
          icon: "mdi-pencil",
          title: "Editar Insumo",
          to: "/",
        },
      ],
    };
  },
};
</script>
