<template>
  <TheDialog
    v-model="show"
    v-bind="$attrs"
    :loading="loading"
    v-on="$listeners"
    @cancel="cancel"
  >
    <template>
      <v-card-text>
        <v-form
          ref="form"
          v-model="valid"
          :readonly="loading || readonly"
          class="pt-2"
          @submit.prevent="confirm"
        >
          <input type="submit" value="Submit" style="height: 0 !important">
          <slot />
        </v-form>
      </v-card-text>
      <v-divider />
      <v-card-actions>
        <v-spacer />
        <TheSecondaryButton
          v-if="showSecondaryButton"
          :inner-text="$t(readonly ? closeText : cancelButton)"
          @click="cancel"
        />
        <slot name="second-button" />
        <slot name="third-button" />
        <ThePrimaryButton
          v-if="!readonly"
          :inner-text="$t(confirmButton)"
          :loading="loading"
          :disabled="!canConfirm"
          @click="confirm"
        />
      </v-card-actions>
    </template>
    <template #activator="{on}">
      <slot name="activator" :on="on" />
    </template>
    <template #header-append="scope">
      <slot name="header-append" v-bind="scope" />
    </template>
    <template #header-append-inner="scope">
      <slot name="header-append-inner" v-bind="scope" />
    </template>
  </TheDialog>
</template>
<script>
import TheDialog from '~/components/base/dialogs/TheDialog'
import TheSecondaryButton from '~/components/base/buttons/TheSecondaryButton'
import ThePrimaryButton from '~/components/base/buttons/ThePrimaryButton'
export default {
  components: {ThePrimaryButton, TheSecondaryButton, TheDialog},
  props: {
    confirmButton: {
      type: String,
      default: 'save'
    },
    cancelButton: {
      type: String,
      default: 'cancel'
    },
    closeText: {
      type: String,
      default: 'close'
    },
    loading: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    showSecondaryButton: {
      type: Boolean,
      default: true
    },
    canConfirm: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      valid: true,
      show: false,
    }
  },
  methods: {
    confirm () {
      this.$refs.form.validate()
      if (this.valid) {
        if (!this.readonly) {
          this.$emit('confirm')
        } else {
          this.$emit('cancel')
        }
        this.show = false
      } else {
        this.toastError('Revise los campos para proceder')
      }
    },
    resetValidation () {
      if (this.$refs.form) {
        this.$refs.form.resetValidation()
      }
    },
    cancel () {
      this.$emit('cancel')
      this.resetValidation()
      this.show = false
    }
  }
}
</script>
