// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from "firebase/firestore"








// const firebaseConfig = {
//   apiKey: "AIzaSyBUCwVRCJsOWE1McY7G-k10yy9NqU_gnMk",
//   authDomain: "miniblog-a7141.firebaseapp.com",
//   projectId: "miniblog-a7141",
//   storageBucket: "miniblog-a7141.appspot.com",
//   messagingSenderId: "646437676127",
//   appId: "1:646437676127:web:4b4268529125df499527ea",
//   measurementId: "G-YRTESHC0YW"
// };


// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app)
// export const auth = getAuth(app);
// const analytics = getAnalytics(app);



import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBUCwVRCJsOWE1McY7G-k10yy9NqU_gnMk",
  authDomain: "miniblog-a7141.firebaseapp.com",
  projectId: "miniblog-a7141",
  storageBucket: "miniblog-a7141.appspot.com",
  messagingSenderId: "646437676127",
  appId: "1:646437676127:web:4b4268529125df499527ea",
  measurementId: "G-YRTESHC0YW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const db = getFirestore(app)