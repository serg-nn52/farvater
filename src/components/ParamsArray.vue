<template>
  <div class="wrapper">
    <div class="quantity">
      <h3>Выберите количество элементов массива</h3>
      <div class="inputs">
        <a-slider
          class="slider"
          id="test"
          v-model:value="quantity"
          :min="100"
          :max="1000"
        />
        <a-input-number v-model:value="quantity" :min="100" :max="1000" />
      </div>
    </div>
    <div class="method">
      <h3>Выберите метод сортировки</h3>
      <a-space>
        <a-select
          class="select1"
          placeholder="Выберите"
          ref="select"
          v-model:value="sortMethod"
          @focus="focus"
          @change="handleChange"
        >
          <a-select-option value="method1">Метод1</a-select-option>
          <a-select-option value="method2">Метод2</a-select-option>
          <a-select-option value="method3">Метод3</a-select-option>
        </a-select>
      </a-space>
      <a-button type="primary">Старт!</a-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const quantity = ref(0);
    const sortMethod = ref();
    const focus = () => {
      console.log("focus");
    };

    const handleChange = (value: string) => {
      console.log(`selected ${value}`);
    };
    return {
      quantity,
      sortMethod,
      focus,
      handleChange,
    };
  },
});
</script>
<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: center;
  gap: 50px;
}
.inputs {
  display: flex;
  gap: 20px;
}
.slider {
  width: 400px;
}
.quantity {
  width: 600px;
}

.select1 {
  width: 300px;
}
.icon-wrapper {
  position: relative;
  padding: 0px 30px;
}
</style>
