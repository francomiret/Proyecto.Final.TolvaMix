<template>
  <v-container>
    <h1>Producción</h1>
    <MyList :items="menu" />
  </v-container>
</template>

<script>
import MyList from '@/components/base/MyList'
export default {
  components: {MyList},
  layout: 'production',
  computed: {
    menu() {
      return this.$menuService.getProductionMenu()
    }
  }
};
</script>
