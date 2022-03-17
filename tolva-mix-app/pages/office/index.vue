<template>
  <v-container>
    <h1>Oficina Técnica</h1>
    <MyList :items="menu" />
  </v-container>
</template>

<script>
import MyList from '@/components/base/MyList'
export default {
  components: {MyList},
  layout: 'office',
  computed: {
    menu() {
      return this.$menuService.getOfficeMenu()
    }
  }
};
</script>
