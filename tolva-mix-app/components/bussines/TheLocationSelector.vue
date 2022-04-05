<template>
  <v-autocomplete
    :items="items"
    label="Área de trabajo"
    item-value="id"
    item-text="title"
    return-object
    v-on="$listeners"
    v-bind="$attrs"
  ></v-autocomplete>
</template>

<script>
export default {
  data() {
    return {
      items: []
    }
  },
  created() {
    this.items = this.$locationService.all()
    this.$emit('input', this.items[0])
  }
}
</script>

<style scoped>

</style>
