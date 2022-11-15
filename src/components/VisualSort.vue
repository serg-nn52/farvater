<template>
  <div class="container">
    <div class="visual">
      <div
        ref="inner"
        :class="{ start: getStatus === 'start' }"
        class="inner"
        :style="{ height: item + 'px', width: widthItemArray + 'px' }"
        :key="getIndexArray[i]"
        v-for="(item, i) in heightItemArray"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import { sleep } from "@/helpers";
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
  computed: mapGetters([
    "getArray",
    "heightItemArray",
    "widthItemArray",
    "getIndexArray",
    "getStatus",
  ]),
  watch: {
    async getStatus() {
      if (this.getStatus === "finish") {
        const inners = this.$refs.inner as HTMLDivElement[];
        for (let i = 0; i < inners.length; i++) {
          await sleep(10);
          inners[i].classList.add("finish");
        }
      }
    },
  },
});
</script>

<style lang="scss" scoped>
@import "@/styles/colors";
@import "@/styles/media";
.visual {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 800px;
  margin-top: 10px;
  @include media-breakpoint-down(sm) {
    height: 500px;
  }
  .inner {
    background-color: $sorting-color;
  }
  .finish {
    background-color: $finish-color;
  }
  .start {
    background-color: darken($sorting-color, 20%);
  }
}
</style>
