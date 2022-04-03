<template>
  <v-container class="d-flex justify-end">
    <TheSecondaryButton inner-text="Cancelar" @click="$emit('cancel')"/>
    <TheConfirmDialog
      header-message="Guardar"
      body-message="¿Desea guardar los cambios?"
      @confirm="$emit('save')"
    >
      <template #activator="{ on }">
        <ThePrimaryButton inner-text="Guardar" v-on="on"/>
      </template>
    </TheConfirmDialog>
  </v-container>
</template>

<script>
import TheSecondaryButton from "~/components/base/buttons/TheSecondaryButton";
import ThePrimaryButton from "~/components/base/buttons/ThePrimaryButton";
import TheConfirmDialog from "~/components/base/dialogs/TheConfirmDialog";
export default {
  components: {TheConfirmDialog, ThePrimaryButton, TheSecondaryButton}
}
</script>

<style scoped>

</style>
