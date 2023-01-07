import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID
// }

const firebaseConfig = {
  apiKey: "AIzaSyCX8Ixj1DFaP3V5IdbyBEJmgC6aU_4mRtk",
  authDomain: "mps-checklist.firebaseapp.com",
  projectId: "mps-checklist",
  storageBucket: "mps-checklist.appspot.com",
  messagingSenderId: "636689872687",
  appId: "1:636689872687:web:1fabf18c23a43a27f793da"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth
// export const createUserWithEmailAndPasswordFunc = createUserWithEmailAndPassword
// export const onAuthStateChangedFunc  = onAuthStateChanged
