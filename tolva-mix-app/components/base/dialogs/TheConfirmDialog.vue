<template>
  <TheDialog
    v-model="show"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template #activator="{on}">
      <slot name="activator" :on="on" />
    </template>
    <v-card-title class="headline">
      {{ headerMessage }}
    </v-card-title>
    <v-card-text>
      {{ bodyMessage }}
      <slot />
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <TheSecondaryButton
        :inner-text="cancelButton"
        @click="cancel"
      />
      <ThePrimaryButton
        :inner-text="confirmButton"
        @click="confirm"
      />
    </v-card-actions>
  </TheDialog>
</template>
<script>
import TheSecondaryButton from '~/components/base/buttons/TheSecondaryButton'
import ThePrimaryButton from '~/components/base/buttons/ThePrimaryButton'
import TheDialog from '~/components/base/dialogs/TheDialog'
export default {
  components: {TheDialog, ThePrimaryButton, TheSecondaryButton},
  props: {
    headerMessage: {
      type: String,
      default: 'headerMessage'
    },
    bodyMessage: {
      type: String,
      default: 'bodyMessage'
    },
    confirmButton: {
      type: String,
      default: 'Aceptar'
    },
    cancelButton: {
      type: String,
      default: 'Cancelar'
    },
    goToConfirm: {
      type: String,
      default: '#labelResponse'
    }
  },
  methods: {
    confirm () {
      this.$emit('confirm')
      this.show = false
    },
    cancel () {
      this.$emit('cancel')
      this.show = false
    }
  },
  data() {
    return {
      show: false
    }
  }
}
</script>
