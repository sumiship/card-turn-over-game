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
          [0, 1, 0, -1, 0, 1, 0],
          [1, 1, 1, -1, 0, 1, 0],
          [0, 1, 0, -1, 0, 1, 0],
          [0, 1, 1, -1, -1, 1, 0],
          [0, 1, 0, -1, 1, 1, 0],
          [0, 1, 0, -1, 0, 1, 0],
          [0, 1, 0, -1, 0, 1, 0],
        ],
        touch: [[1, 1]],
        completed: false,
      },
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
        completed: false,
      },
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
        completed: false,
      },
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
        completed: false,
      },
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
        completed: false,
      },
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
        completed: false,
      },
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
      console.log(context);
      let completedArr = [];
      for (let i = 0; i < this.state.fields.length; i++) {
        completedArr.push(this.state.fields[i].completed);
      }
      localStorage.completed = JSON.stringify(completedArr);
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
