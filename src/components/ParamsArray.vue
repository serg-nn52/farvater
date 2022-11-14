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
        >
          <a-select-option value="bubbling"
            >Сортировка пузырьком</a-select-option
          >
          <a-select-option value="method2">Метод2</a-select-option>
          <a-select-option value="method3">Метод3</a-select-option>
        </a-select>
      </a-space>
      <a-button type="primary" @click="sendData">Старт!</a-button>
    </div>
    <div class="delay">
      <h3>Задержка</h3>
      <a-input-number v-model:value="delay" :min="0" :max="50" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { mapActions } from "vuex";
export default defineComponent({
  setup() {
    const quantity = ref(0);
    const sortMethod = ref();
    const delay = ref(0);

    return {
      quantity,
      sortMethod,
      delay,
    };
  },
  methods: {
    ...mapActions(["sortBubbleAction"]),
    sendData() {
      const tempArray: number[] = [];
      for (let i = 0; i < this.quantity; i++) {
        const random = Math.ceil(Math.random() * 100000);
        !tempArray.includes(random) && tempArray.push(random);
      }
      this.sortMethod && this.$store.commit("statusMutation", "start");
      this.sortMethod &&
        this.$store.commit("addData", {
          quantity: this.quantity,
          method: this.sortMethod,
          array: tempArray,
          delay: this.delay,
        });
      setTimeout(() => {
        if (this.sortMethod === "bubbling") {
          this.$store.dispatch("sortBubbleAction");
        } else return;
        this.$store.commit("statusMutation", "sorting");
      }, 1000);
    },
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
