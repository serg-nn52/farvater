<template>
  <div class="container">
    <ParamsArray />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ParamsArray from "@/components/ParamsArray.vue";

export default defineComponent({
  components: {
    ParamsArray,
  },
  setup() {},
});
</script>

<style lang="scss" scoped>
.container {
  padding: 50px 0;
}
</style>
