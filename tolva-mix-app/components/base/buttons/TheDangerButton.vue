<template>
  <TheButton
    class="white--text"
    color="error"
    v-bind="$attrs"
    large
    v-on="$listeners"
  />
</template>
<script>
import TheButton from '~/components/base/buttons/TheButton'
export default {
  components: {TheButton}
}
</script>
