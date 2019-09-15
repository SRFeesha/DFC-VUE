import Vue from 'vue';
import Vuex from 'vuex';
import { db } from '@/main';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    postits: [
      {
        id: '1',
        board: 'Improvements',
        msg: 'Aria condizionata pls!'
      }
    ],
    events: [
      {
        events: null,
        title: '',
        desc: '',
        shortDesc: '',
        img: ''
      }
    ]
  },
  getters: {
    getPostIts: state => {
      return state.postits;
    }
  },
  mutations: {
    addPostIt: function(state, postit) {
      db.collection('freaks-board')
        .add({
          board: postit.board,
          msg: postit.msg,
          // Date.now() restituise un numero in millisecondi. Utile per ordinarlo in base all'inserimento
          inserted: Date.now()
        })
        .then(response => {
          if (response) {
            console.log('added successfully');
          }
        })
        .catch(error => {
          console.warn(error);
        });
    },

    setPostIt: state => {
      let postits = [];
      db.collection('freaks-board')
        .orderBy('inserted')
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
        db.collection('freaks-board')
          .doc(dbid)
          .delete()
          .then(function() {
            console.log('post it succesfully deleted');
          })
          .catch(function(error) {
            console.warn(error);
          });
      } else {
        error = 'Invalid ID';
      }
    },

    showPastEvent: function(state, modal) {
      // state.isModalVisible = true;
      state.events.img = modal.img;
      state.events.title = modal.title;
      state.events.shortDesc = modal.shortdesc;
      state.events.desc = modal.desc;
    }

    // closeModal: function(state) {
    //   state.isModalVisible = false;
    // }
  },
  actions: {
    setPostIt: context => {
      context.commit('setPostIt');
    },
    deletePostIt: context => {
      context.commit('deletePostIt');
    },
    addPostIt: context => {
      context.commit('addPostIt');
    },

    showPastEvent: context => {
      context.commit('showPastEvent');
    }
    // closeModal: context => {
    //   context.commit('closeModal');
    // }
  }
});

export default store;
