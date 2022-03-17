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
    };
  },
  computed: {
    menu() {
      return this.$menuService.getOfficeMenu()
    }
  }
};
</script>
