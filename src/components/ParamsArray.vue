<template>
  <div class="wrapper">
    <div class="quantity group">
      <h3>Количество элементов массива</h3>
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
    <div class="delay group">
      <h3>Задержка</h3>
      <a-input-number
        class="input-delay"
        v-model:value="delay"
        :min="0"
        :max="50"
      />
    </div>
    <div class="method group">
      <h3>Метод сортировки</h3>
      <a-select
        class="select-method"
        placeholder="Выберите метод"
        ref="select"
        v-model:value="sortMethod"
      >
        <a-select-option value="bubbling">Сортировка пузырьком</a-select-option>
        <a-select-option value="insertionSort"
          >Сортировка вставками</a-select-option
        >
        <a-select-option value="selectionSort"
          >Сортировка выбором</a-select-option
        >
      </a-select>
    </div>
    <div class="buttons group">
      <a-button type="primary" @click="sendData">Старт</a-button>
      <a-button type="primary" @click="stopSorting">Стоп</a-button>
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
    ...mapActions(["sortAction", "stopMutation"]),
    sendData() {
      this.$store.commit("stopMutation");
      const tempArray: number[] = [];
      for (let i = 0; i < this.quantity; i++) {
        const random = Math.ceil(Math.random() * 100000);
        !tempArray.includes(random) && tempArray.push(random);
      }
      if (this.sortMethod && this.quantity) {
        this.$store.commit("statusMutation", "start");
        this.$store.commit("addData", {
          quantity: this.quantity,
          method: this.sortMethod,
          array: tempArray,
          delay: this.delay,
        });
      } else {
        return;
      }

      setTimeout(() => {
        this.$store.dispatch("sortAction");
      }, 1000);
    },
    stopSorting() {
      this.$store.commit("stopMutation");
    },
  },
});
</script>
<style lang="scss" scoped>
@import "@/styles/media";
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: center;
  grid-gap: 50px;
  @include media-breakpoint-down(xl) {
    grid-template-columns: max-content max-content;
    grid-template-rows: max-content max-content;
    justify-content: center;
  }
  @media (max-width: 630px) {
    grid-template-columns: 60% 30%;
  }
  @include media-breakpoint-down(sm) {
    grid-gap: 30px;
  }
}
.group {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
h3 {
  text-align: center;
  @media (max-width: 400px) {
    font-size: 18px;
  }
}
.delay {
  display: flex;
  flex-direction: column;
  align-items: center;
  .input-delay {
    width: 100%;
  }
}
.inputs {
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 480px;
  @include media-breakpoint-down(md) {
    width: 100%;
  }
}
.slider {
  width: 100%;
}

.select-method {
  width: 300px;
  @include media-breakpoint-down(xl) {
    width: 100%;
  }
}

.buttons {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5px;
}
.icon-wrapper {
  position: relative;
  padding: 0px 30px;
}
</style>
