import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    fields: [
      "",
      {
        sample: [
          [0, 1, 0, -1, 0, 1, 0],
          [1, 1, 1, -1, 0, 1, 0],
          [0, 1, 0, -1, 0, 1, 0],
          [0, 1, 1, -1, -1, 1, 0],
          [0, 1, 0, -1, 1, 1, 0],
          [0, 1, 0, -1, 0, 1, 0],
          [0, 1, 0, -1, 0, 1, 0],
        ],
        touch: [[1, 1]],
      },
      {
        sample: [
          [1, 1, 1],
          [1, 1, 1],
          [1, 1, 1],
        ],
        touch: [
          [1, 1],
          [0, 0],
          [1, 2],
        ],
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
