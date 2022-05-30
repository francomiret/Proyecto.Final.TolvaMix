<template>
  <v-container>
    <h1>Reservas</h1>
    <MyList :items="menu" />
  </v-container>
</template>

<script>
import MyList from '@/components/base/MyList'
export default {
  components: {MyList},
  layout: 'sales',
  computed: {
    menu() {
      return this.$menuService.getSalesMenu()
    }
  }
}
</script>
