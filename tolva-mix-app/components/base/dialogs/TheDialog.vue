<template>
  <v-dialog
    v-model="mostrar"
    :persistent="persistent"
    v-bind="$attrs"
    :loading="loading"
    :max-width="maxWidth"
  >
    <template #activator="{on}">
      <slot name="activator" :on="on" />
    </template>
    <v-card>
      <v-progress-linear v-if="loading" :indeterminate="loading" />
      <template v-if="headerMessage">
        <v-toolbar
          v-if="toolbarMode"
          extended
          class=" w-100"
        >
          <div class="d-flex justify-space-between w-100">
            <v-card-title
              color="transparent"
              class="headline"
            >
              {{ headerMessage }}
              <slot name="header-append-inner" />
            </v-card-title>
            <div class="mt-2">
              <TheButtonWithTooltip bottom :title="$t('close')" icon="mdi-close" @click="cancel" />
            </div>
          </div>
          <template #extension>
            <slot name="header-append" />
          </template>
        </v-toolbar>
        <template v-else>
          <v-card-title
            color="transparent"
            class="headline"
          >
            {{ headerMessage }}
            <v-spacer />
            <v-toolbar-items>
              <TheButtonWithTooltip bottom :title="$t('close')" icon="mdi-close" @click="cancel" />
            </v-toolbar-items>
          </v-card-title>
        </template>
      </template>
      <slot />
    </v-card>
  </v-dialog>
</template>
<script>
import TheButtonWithTooltip from '~/components/base/buttons/TheButtonWithTooltip'
export default {
  components: {TheButtonWithTooltip},
  props: {
    persistent: {
      type: Boolean,
      default: true
    },
    value: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    maxWidth: {
      type: String,
      default: '800'
    },
    headerMessage: {
      type: String,
      default: ''
    },
    toolbarMode: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    mostrar: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    }
  },
  methods: {
    cancel (ev) {
      this.$emit('cancel', ev)
      this.mostrar = false
    }
  }
}
</script>
