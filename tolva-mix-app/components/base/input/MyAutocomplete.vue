<template>
  <v-autocomplete
    outlined
    return-object
    item-value="id"
    item-text="title"
    no-data-text="No se encontraron resultados"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template v-for="slotName in Object.keys($scopedSlots)" #[slotName]="slotScope">
      <slot :name="slotName" v-bind="slotScope" />
    </template>
  </v-autocomplete>
</template>
