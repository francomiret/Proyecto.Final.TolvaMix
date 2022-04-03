<template>
  <v-data-table
    :headers="tableHeaders"
    :items="items"
    :items-per-page="20"
    no-data-text="No se encontraron resultados"
    :footer-props="{
      itemsPerPageText: 'Items por página',
      'items-per-page-options': [20, 50, 100]
    }"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template #item.status="data">
      {{ $t(`status.${data.item.status}`) }}
    </template>
    <template v-for="slotName in Object.keys($scopedSlots)" #[slotName]="slotScope">
      <slot :name="slotName" v-bind="slotScope" />
    </template>
    <template v-slot:[`footer.page-text`]="items">
      {{ items.pageStart }} - {{ items.pageStop }} de {{ items.itemsLength }}
    </template>
  </v-data-table>
</template>

<script>
export default {
  props: {
    headers: {
      type: Array,
      default: null
    },
    items: {
      type: Array,
      required: true
    },
    include: {
      type: Array,
      default: null
    }
  },
  computed: {
    tableHeaders() {
      if (this.headers !== null) {
        return this.headers
      }
      if (this.items.length > 0) {
        const headers = Object.keys(this.items[0])
          .filter(key => this.include === null || this.include.includes(key))
          .map(key => ({
            text: this.$t(`headers.${key}`),
            sortable: true,
            value: key
          }))
        if (this.$scopedSlots['item.actions']) {
          headers.push({
            text: 'Acciones',
            sortable: false,
            value: 'actions'
          })
        }
        return headers
      }
      return []
    }
  }
}
</script>

<style scoped>

</style>
