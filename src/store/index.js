import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    fields: [
      {
        sample: [
          [1, 1, 1],
          [1, 1, 1],
          [1, 1, 1],
        ],
        touch: [[1, 1]],
        completed: false,
      },
      {
        sample: [
          [1, 1, 1],
          [1, 1, 1],
          [1, 1, 1],
        ],
        touch: [[0, 0]],
        completed: false,
      },
      {
        sample: [
          [1, 1, 1],
          [-1, 1, -1],
          [1, 0, 1],
          [1, -1, 1],
        ],
        touch: [[1, 1]],
        completed: false,
      },
      {
        sample: [
          [-1, 1, -1],
          [1, 1, 1],
          [-1, 1, -1],
        ],
        touch: [[1, 0]],
        completed: false,
      },
      {
        sample: [
          [-1, 1, -1, 1],
          [1, 0, 1, 1],
          [-1, 1, 0, -1],
          [1, 1, -1, 1],
        ],
        touch: [[2, 1]],
        completed: false,
      },
      {
        sample: [
          [1, 1, 1],
          [1, -1, 1],
          [1, 1, 1],
        ],
        touch: [
          [1, 0],
          [2, 0],
          [0, 1],
        ],
        completed: false,
      },
      {
        sample: [
          [-1, 1, -1, 1],
          [1, -1, 1, -1],
          [-1, 1, -1, 1],
          [1, -1, 1, -1],
        ],
        touch: [
          [0, 0],
          [3, 3],
        ],
        completed: false,
      },
      {
        sample: [
          [-1, 1, 1, -1],
          [1, -1, -1, 1],
          [1, -1, -1, 1],
          [-1, 1, 1, -1],
        ],
        touch: [
          [1, 1],
          [2, 2],
        ],
        completed: false,
      },
      {
        sample: [
          [1, 1, 1, 1, 1],
          [1, -1, -1, -1, 1],
          [-1, 0, -1, 0, -1],
          [-1, -1, -1, -1, -1],
          [-1, 0, 0, 0, -1],
          [-1, -1, -1, -1, -1],
        ],
        touch: [
          [1, 1],
          [1, 3],
          [2, 2],
          [5, 2],
        ],
        completed: false,
      },
      {
        sample: [
          [1, 1, 1, 1, 1],
          [1, -1, -1, -1, 1],
          [1, -1, 1, -1, 1],
          [1, -1, -1, -1, 1],
          [1, 1, 1, 1, 1],
        ],
        touch: [
          [0, 2],
          [4, 4],
          [3, 3],
        ],
        completed: false,
      },
      {
        sample: [
          [-1, -1, -1, -1, -1],
          [-1, -1, -1, -1, -1],
          [-1, -1, -1, -1, -1],
          [-1, -1, -1, -1, -1],
          [-1, -1, -1, -1, -1],
        ],
        touch: [
          [2, 2],
          [0, 0],
          [3, 3],
        ],
        completed: false,
      },
      {
        sample: [
          [1, -1, 1, -1, 1, -1, 1],
          [1, -1, 1, -1, 1, -1, 1],
          [1, -1, 1, -1, 1, -1, 1],
          [1, -1, 1, -1, 1, -1, 1],
          [1, -1, 1, -1, 1, -1, 1],
          [1, -1, 1, -1, 1, -1, 1],
          [1, -1, 1, -1, 1, -1, 1],
        ],
        touch: [
          [4, 1],
          [1, 4],
          [5, 5],
        ],
        completed: false,
      },
      {
        sample: [
          [1, -1, -1, -1, 1],
          [-1, 1, -1, 1, -1],
          [-1, -1, 1, -1, -1],
          [-1, 1, -1, 1, -1],
          [1, -1, -1, -1, 1],
        ],
        touch: [
          [2, 0],
          [2, 4],
          [0, 2],
          [4, 2],
        ],
        completed: false,
      },
    ],
  },
  mutations: {
    complete(state, payload) {
      state.fields[payload].completed = true;
    },
  },
  actions: {
    complete(context, id) {
      console.log(id);
      context.commit("complete", id);
    },
    saveComplete(context) {
      if (context) {
        let completedArr = [];
        for (let i = 0; i < this.state.fields.length; i++) {
          completedArr.push(this.state.fields[i].completed);
        }
        localStorage.completed = JSON.stringify(completedArr);
      }
    },
    roadComplete(context) {
      if (localStorage.completed) {
        let completedArr = JSON.parse(localStorage.completed);
        for (let i = 0; i < completedArr.length; i++) {
          if (completedArr[i]) {
            context.commit("complete", i);
          }
        }
      }
    },
  },
  modules: {},
});
