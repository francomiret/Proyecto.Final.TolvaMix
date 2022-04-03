<template>
  <v-container class="d-flex justify-end">
    <slot/>
    <TheSecondaryButton inner-text="Cancelar" @click="$emit('cancel')"/>
    <TheConfirmDialog
      v-if="canSave"
      :header-message="saveText"
      body-message="¿Desea guardar los cambios?"
      @confirm="$emit('save')"
    >
      <template #activator="{ on }">
        <ThePrimaryButton :inner-text="saveText" v-on="on"/>
      </template>
    </TheConfirmDialog>
  </v-container>
</template>

<script>
import TheSecondaryButton from "~/components/base/buttons/TheSecondaryButton";
import ThePrimaryButton from "~/components/base/buttons/ThePrimaryButton";
import TheConfirmDialog from "~/components/base/dialogs/TheConfirmDialog";
export default {
  props: {
    saveText: {
      type: String,
      default: 'Guardar'
    },
    canSave: {
      type: Boolean,
      default: true
    }
  },
  components: {TheConfirmDialog, ThePrimaryButton, TheSecondaryButton}
}
</script>

<style scoped>

</style>
