<template>
  <v-container>
    <h1>Create sale for product {{ productId }}</h1>
  </v-container>
</template>

<script>
export default {
  layout: 'sales',
  computed: {
    productId() {
      return this.$route.params.product
    }
  }
}
</script>

<style scoped>

</style>
