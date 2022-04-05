<template>
  <v-container>
    <h1>{{ title }}</h1>
    <slot/>
  </v-container>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
