<template>
  <v-data-table
    v-bind:class="computedClass"
    :headers="tableHeaders"
    :items="computedItems"
    :items-per-page="20"
    no-data-text="No se encontraron resultados"
    :footer-props="{
      itemsPerPageText: 'Items por página',
      'items-per-page-options': [20, 50, 100]
    }"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template v-for="slotName in Object.keys($scopedSlots)" #[slotName]="slotScope">
      <slot :name="slotName" v-bind="slotScope" />
    </template>
    <template v-slot:[`footer.page-text`]="items">
      {{ items.pageStart }} - {{ items.pageStop }} de {{ items.itemsLength }}
    </template>
  </v-data-table>
</template>

<script>
import {isObject, upperFirst} from 'lodash'
import {isMoment} from 'moment'
import Enum from '@/services/Enum'

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
    computedHeaders() {
      if (this.include) {
        return this.include.map(value => ({
          text: this.$t(`headers.${value}`),
          sortable: true,
          value
        }))
      }
      if (this.items.length > 0) {
        return Object.keys(this.items[0])
          .map(value => ({
            text: this.$t(`headers.${value}`),
            sortable: true,
            value
          }))
      }
      return []
    },
    tableHeaders() {
      if (this.headers !== null) {
        return this.headers
      }
      const headers = this.computedHeaders
      if (this.$scopedSlots['item.actions']) {
        headers.push({
          text: 'Acciones',
          sortable: false,
          value: 'actions'
        })
      }
      return headers
    },
    computedItems() {
      return this.items.map(this.mapItem)
    },
    computedClass() {
      return {
        'row-pointer': !!this.$listeners['click:row']
      }
    }
  },
  methods: {
    mapItem(item) {
      let result = {}
      Object.keys(item).forEach(key => {
        const value = item[key]
        if (isMoment(value)) {
          result[key] = upperFirst(value.calendar())
          return
        }
        if (value instanceof Enum) {
          result[key] = this.$t(value.toLocale())
          return
        }
        if (isObject(value)) {
          result[key] = this.mapItem(value)
          return
        }
        result[key] = value
      })
      return result
    }
  }
}
</script>

<style scoped>
.row-pointer >>> tbody tr :hover {
  cursor: pointer;
}
</style>
