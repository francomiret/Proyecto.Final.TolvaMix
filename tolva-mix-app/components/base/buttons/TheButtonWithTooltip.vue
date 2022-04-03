<template>
  <v-tooltip :top="top" :bottom="bottom">
    <template #activator="{ on }">
      <TheActionButton
        v-bind="$attrs"
        v-on="on"
        @click="clicked($event)"
      />
    </template>
    <span>{{ title }}</span>
  </v-tooltip>
</template>
<script>
import TheActionButton from '~/components/base/buttons/TheActionButton'
export default {
  components: {TheActionButton},
  props: {
    title: {
      type: String,
      default: ''
    },
    top: {
      type: Boolean,
      default: true
    },
    bottom: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      dialog: false
    }
  },
  methods: {
    clicked ($event) {
      this.$emit('click', $event)
    }
  }
}
</script>
