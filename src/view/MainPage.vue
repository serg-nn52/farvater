<template>
  <div class="container">
    <ParamsArray />
    <VisualSort />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ParamsArray from "@/components/ParamsArray.vue";
import VisualSort from "@/components/VisualSort.vue";

export default defineComponent({
  components: {
    ParamsArray,
    VisualSort,
  },
  mounted() {},
  setup() {},
});
</script>

<style lang="scss" scoped>
.container {
  padding: 50px 0;
}
</style>
