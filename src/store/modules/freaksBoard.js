const freaksBoard = {
  firestorePath: "freaks-board/",
  firestoreRefType: "collection",
  moduleName: "freaksBoard",
  statePropName: "data",
  namespaced: true, // automatically added //??
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
  getters: {
    setPostIt: function() {
      dispatch("freaksBoard/set", { title: "Hello Firestore 🔥" });
    }
  },
  mutations: {
    addPostIt(state, payload) {
      state.postits.push(payload);
    }
  }
};

export default freaksBoard;
