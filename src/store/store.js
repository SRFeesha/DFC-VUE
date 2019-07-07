import Vue from "vue";
import Vuex from "vuex";
import { db } from "@/main";

Vue.use(Vuex);

const store = new Vuex.Store({
  // state: {
  //   postits: [
  //     {
  //       id: 1,
  //       board: "Improvements",
  //       msg: "Aria condizionata pls!"
  //     },
  //     {
  //       id: 2,
  //       board: "Speakers",
  //       msg: "Filippo Andolfatto"
  //     },
  //     {
  //       id: 3,
  //       board: "Speakers",
  //       msg: "Paolo Spazzini"
  //     },
  //     {
  //       id: 4,
  //       board: "Argomenti",
  //       msg: "Gradienti"
  //     },
  //     {
  //       id: 5,
  //       board: "Improvements",
  //       msg: "più birra! 🍻"
  //     },
  //     {
  //       id: 6,
  //       board: "Improvements",
  //       msg: "More design dollars"
  //     },
  //     {
  //       id: 7,
  //       board: "Improvements",
  //       msg: "finire dopo le 11"
  //     }
  //   ],
  //   events: [
  //     {
  //       id: 0,
  //       date: "2019-01-01",
  //       title: "Event 0",
  //       brief: "this is a brief"
  //     },
  //     {
  //       id: 1,
  //       date: "2019-02-01",
  //       title: "Event 1",
  //       brief: "this is a brief"
  //     },
  //     {
  //       id: 2,
  //       date: "2019-03-01",
  //       title: "Event 2",
  //       brief: "this is a brief"
  //     },
  //     {
  //       id: 3,
  //       date: "2019-04-01",
  //       title: "Event 3",
  //       brief: "this is a brief"
  //     }
  //   ]
  // },
  state: {
    postits: [
      {
        id: "1",
        board: "Improvements",
        msg: "Aria condizionata pls!"
      }
    ],
    events: null
  },
  getters: {
    getPostIts: state => {
      return state.postits;
    }
  },
  mutations: {
    // addPostIt(state, postit) {
    //   state.postits.push(postit);
    // }
    setPostIt: state => {
      let postits = [];
      db.collection("freaks-board")
        .orderBy("board")
        .onSnapshot(snapshot => {
          postits = [];
          snapshot.forEach(doc => {
            postits.push({
              dbid: doc.id,
              id: doc.data().id,
              board: doc.data().board,
              msg: doc.data().msg
            });
          });
          state.postits = postits;
        });
    },
    deletePostIt: function(state, dbid) {
      if (dbid) {
        db.collection("freaks-board")
          .doc(dbid)
          .delete()
          .then(function() {
            console.log("post it succesfully deleted");
          })
          .catch(function(error) {
            console.warn(error);
          });
      } else {
        error = "Invalid ID";
      }
    }
  },
  actions: {
    setPostIt: context => {
      context.commit("setPostIt");
    },
    deletePostIt: context => {
      context.commit("deletePostIt");
    }
  }
});

export default store;
