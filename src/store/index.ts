import { bubbleSort, insertionSort, selectionSort } from "./../helpers/index";
import { createStore } from "vuex";

export interface State {
  array: number[];
  indexArray: number[];
  quantity: number;
  method: string;
  status: string;
  delay: number;
}

export default createStore<State>({
  state: {
    array: [],
    indexArray: [],
    quantity: 0,
    method: "",
    status: "",
    delay: 0,
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
  },
  mutations: {
    addData(state: State, { quantity, method, array, delay }) {
      state.quantity = quantity;
      state.method = method;
      state.array = array;
      state.indexArray = [...array];
      state.delay = delay;
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
      state.status = "stop";
      state.delay = 0;
    },
  },
  actions: {
    async sortAction(ctx) {
      const { commit, state, getters } = ctx;

      let sortArr: number[] | undefined;

      commit("statusMutation", "sorting");
      if (getters.getMethod === "bubbling") {
        sortArr = await bubbleSort(state.array, getters.getDelay);
      } else if (getters.getMethod === "insertionSort") {
        sortArr = await insertionSort(state.array, getters.getDelay);
      } else if (getters.getMethod === "selectionSort") {
        sortArr = await selectionSort(state.array, getters.getDelay);
      }

      if (getters.getStatus !== "stop") {
        commit("sortArrayMutation", sortArr);
        commit("statusMutation", "finish");
      }
    },
  },
});
