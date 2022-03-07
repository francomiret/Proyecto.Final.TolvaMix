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
      title: "Tolva Mix | Oficina Técnica",
      menu: [
        {
          icon: "mdi-plus",
          title: "Agregar Producto",
          to: "/",
        },
        {
          icon: "mdi-database-search",
          title: "Buscar Producto",
          to: "/",
        },
        {
          icon: "mdi-delete",
          title: "Eliminar Producto",
          to: "/",
        },
        {
          icon: "mdi-pencil",
          title: "Editar Producto",
          to: "/",
        },
        {
          icon: "mdi-clipboard-edit",
          title: "Control de Calidad",
          to: "/",
        },
      ],
    };
  },
};
</script>
