<template>
  <v-list>
    <v-list-item
      v-for="(item, i) in sortItems"
      :key="'list-item-' + i"
      :to="item.to"
    >
      <v-list-item-action v-if="item.icon || icon">
        <v-icon>{{ item.icon || icon }}</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title v-text="item.title" />
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
    icon: {
      type: String,
      default: '',
    }
  },
  computed: {
    sortItems() {
      // TODO Add search box
      return this.items
    }
  }
}
</script>

<style scoped>

</style>
