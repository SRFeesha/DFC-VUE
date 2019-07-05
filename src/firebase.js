// ~config/firebase.js
import * as Firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDZBEZIGxD6-HZFF7EATX1iSB7vwmFfOQg",
  authDomain: "dfc-vue.firebaseapp.com",
  databaseURL: "https://dfc-vue.firebaseio.com",
  projectId: "dfc-vue",
  storageBucket: "",
  messagingSenderId: "392522122490",
  appId: "1:392522122490:web:b1c3738b12a4b076"
};

function initFirebase() {
  Firebase.initializeApp(firebaseConfig);
  return new Promise((resolve, reject) => {
    Firebase.firestore()
      .enablePersistence()
      .then(resolve)
      .catch(err => {
        if (err.code === "failed-precondition") {
          reject(err);
          // Multiple tabs open, persistence can only be
          // enabled in one tab at a a time.
        } else if (err.code === "unimplemented") {
          reject(err);
          // The current browser does not support all of
          // the features required to enable persistence
        }
      });
  });
}

export { Firebase, initFirebase };
