<template>
  <MySection title="Planillas de control de calidad">
    <MyTable
      :items="items"
      :include="['id', 'title', 'status', 'location']"
      @click:row="showQualityControl"
    />
  </MySection>
</template>

<script>
import MySection from "~/components/base/MySection";
import MyTable from "~/components/base/MyTable";
export default {
  components: {MyTable, MySection},
  layout: 'office',
  data() {
    return {
      items: []
    }
  },
  mounted() {
    this.loadItems()
  },
  methods: {
    loadItems() {
      this.items = this.$qualityService.all()
    },
    showQualityControl(item) {
      this.$router.push(`/office/qa/control/${item.id}`)
    }
  }
};
</script>
