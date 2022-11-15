<template>
  <div class="wrapper-page">
    <div class="container">
      <ParamsArray />
      <VisualSort v-if="getArray.length" />
      <img v-else src="@/assets/array.jpg" alt="array" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ParamsArray from "@/components/ParamsArray.vue";
import VisualSort from "@/components/VisualSort.vue";
import { mapGetters } from "vuex";

export default defineComponent({
  components: {
    ParamsArray,
    VisualSort,
  },
  computed: mapGetters(["getArray", "getStatus"]),
  mounted() {},
  setup() {},
});
</script>

<style lang="scss" scoped>
@import "@/styles/media";
.wrapper-page {
  @import "@/styles/colors";
  padding: 30px 0;
  min-height: 100vh;
  background: $bg-color;
  img {
    margin-top: 10px;
    width: 100%;
    height: 800px;
    object-fit: cover;
    @include media-breakpoint-down(sm) {
      height: 500px;
    }
  }
}
</style>
