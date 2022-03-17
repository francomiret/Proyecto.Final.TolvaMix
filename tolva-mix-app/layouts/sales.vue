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
      title: "Tolva Mix | Ventas"
    };
  },
  computed: {
    menu() {
      return this.$menuService.getSalesMenu()
    }
  },
};
</script>
