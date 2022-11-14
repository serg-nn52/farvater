import { bubbleSort } from "./../helpers/index";
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
      return getters.getArray.map((el: number) => Math.ceil(el / 125));
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
  },
  actions: {
    async sortBubbleAction({ commit, state, getters }) {
      const sortArr = await bubbleSort(state.array, getters.getDelay);
      commit("sortArrayMutation", sortArr);
      commit("statusMutation", "finish");
    },
  },
});
