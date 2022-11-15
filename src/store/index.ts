import { bubbleSort, insertionSort, selectionSort } from "./../helpers/index";
import { createStore } from "vuex";

export interface State {
  array: number[];
  indexArray: number[];
  quantity: number;
  method: string;
  status: string;
  delay: number;
  id: number;
}

export default createStore<State>({
  state: {
    array: [],
    indexArray: [],
    quantity: 0,
    method: "",
    status: "",
    delay: 0,
    id: 0,
  },
  getters: {
    getArray(state: State) {
      return state.array;
    },
    getIndexArray(state: State) {
      return state.indexArray;
    },
    heightItemArray(_, getters) {
      return window.innerWidth < 575.98
        ? getters.getArray.map((el: number) => Math.ceil(el / 200))
        : getters.getArray.map((el: number) => Math.ceil(el / 125));
    },
    widthItemArray(_, getters) {
      return Math.floor(1400 / getters.getArray.length);
    },
    getStatus(state: State) {
      return state.status;
    },
    getDelay(state: State) {
      return state.delay;
    },
    getMethod(state: State) {
      return state.method;
    },
    getId(state: State) {
      return state.id;
    },
  },
  mutations: {
    addData(state: State, { quantity, method, array, delay }) {
      state.quantity = quantity;
      state.method = method;
      state.array = array;
      state.indexArray = [...array];
      state.delay = delay;
      state.id = Math.random();
    },
    sortArrayMutation(state: State, sortArr: number[]) {
      state.array = sortArr;
    },
    statusMutation(state: State, status: string) {
      state.status = status;
    },
    stopMutation(state: State) {
      state.array = [];
      state.indexArray = [];
      state.quantity = 0;
      state.method = "";
      state.status = "";
      state.delay = 0;
    },
  },
  actions: {
    async sortAction(ctx) {
      const { commit, state, getters } = ctx;
      commit("statusMutation", "sorting");
      //привязываюсь к id, чтобы присвоить finish именно текущему действию
      if (getters.getMethod === "bubbling") {
        const id = await bubbleSort(
          state.array,
          getters.getDelay,
          getters.getId
        );
        getters.getId === id && commit("statusMutation", "finish");
      } else if (getters.getMethod === "insertionSort") {
        const id = await insertionSort(
          state.array,
          getters.getDelay,
          getters.getId
        );
        getters.getId === id && commit("statusMutation", "finish");
      } else if (getters.getMethod === "selectionSort") {
        const id = await selectionSort(
          state.array,
          getters.getDelay,
          getters.getId
        );
        getters.getId === id && commit("statusMutation", "finish");
      }
    },
  },
});
