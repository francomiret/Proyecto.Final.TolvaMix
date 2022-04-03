<template>
  <TheButton
    text
    v-bind="$attrs"
    v-on="$listeners"
    large
  />
</template>
<script>
import TheButton from '~/components/base/buttons/TheButton'
export default {
  components: {TheButton}
}
</script>
