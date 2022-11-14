<template>
  <div class="container">
    <div class="visual">
      <div
        ref="inner"
        :class="{ green: getStatus === 'start' }"
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
          inners[i].classList.add("red");
        }
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.visual {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 800px;
  .inner {
    background-color: grey;
  }
  .red {
    background-color: red;
  }
  .green {
    background-color: green;
  }
}
</style>
