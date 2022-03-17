<template>
  <v-container>
    <h1>Depósito</h1>
    <MyList :items="menu" />
  </v-container>
</template>

<script>
import MyList from '@/components/base/MyList'
export default {
  components: {MyList},
  layout: 'deposit',
  computed: {
    menu() {
      return this.$menuService.getDepositMenu()
    }
  }
};
</script>
