<template>
  <v-container>
    <h1>Devoluciones pendientes</h1>
    <MyList :items="products" icon="mdi-plus" />
  </v-container>
</template>

<script>
import MyList from "@/components/base/MyList";
export default {
  components: { MyList },
  layout: "deposit",
  data() {
    return {
      products: [
        {
          id: 1,
          title:
            "Martin Perez | 1 | Amoladoras | Bosch | SuperAmoladora | 20/3/1910 - 15:30hs",
          icon: "mdi-pipe-wrench",
          to: "/deposit/",
        },
        {
          id: 2,
          title:
            "Juan Perez | 1 | Amoladoras | Stanley | Sarasa | 20/3/1910 - 15:30hs",
          icon: "mdi-pipe-wrench",
          to: "/deposit/",
        },
        {
          id: 3,
          title:
            "Roberto Perez | 1 | Taladro | Bosch | SuperTaladro | 20/3/1910 - 15:30hs",
          icon: "mdi-pipe-wrench",
          to: "/deposit/",
        },
        {
          id: 4,
          title:
            "Ruben Perez | 50 | Alambre | Bosch | SuperAmoladora | 20/3/1910 - 15:30hs",
          icon: "mdi-cog",
          to: "/deposit/",
        },
      ],
    };
  },
};
</script>
