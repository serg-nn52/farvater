<template>
  <MainPage />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainPage from "./view/MainPage.vue";

export default defineComponent({
  name: "App",
  components: {
    MainPage,
  },
});
</script>

<style lang="scss">
@import "styles/index.scss";
</style>
