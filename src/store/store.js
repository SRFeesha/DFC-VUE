import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    postits: [
      {
        id: 1,
        board: "Improvements",
        msg: "Aria condizionata pls!"
      },
      {
        id: 2,
        board: "Speakers",
        msg: "Filippo Andolfatto"
      },
      {
        id: 3,
        board: "Speakers",
        msg: "Paolo Spazzini"
      },
      {
        id: 4,
        board: "Argomenti",
        msg: "Gradienti"
      },
      {
        id: 5,
        board: "Improvements",
        msg: "più birra! 🍻"
      },
      {
        id: 6,
        board: "Improvements",
        msg: "More design dollars"
      },
      {
        id: 7,
        board: "Improvements",
        msg: "finire dopo le 11"
      }
    ]
  },
  mutations: {
    addPostIt(state, payload) {
      state.postits.push(payload);
    }
  }
});
