
// import { initializeApp } from "firebase/app";
// import {getAuth, GoogleAuthProvider} from "firebase/auth"
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
//   authDomain: "interviewiq-ba6ba.firebaseapp.com",
//   projectId: "agentiq-6c0cc",
//   storageBucket: "interviewiq-ba6ba.firebasestorage.app",
//   messagingSenderId: "862159592601",
//   appId: "1:862159592601:web:7308d702cd708076ddec08"
// };

// const app = initializeApp(firebaseConfig);

// const auth = getAuth(app);

// const provider = new GoogleAuthProvider()

// export {auth , provider}
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider
} from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "agentiq-6c0cc.firebaseapp.com",
  projectId: "agentiq-6c0cc",
  storageBucket: "agentiq-6c0cc.firebasestorage.app",
  messagingSenderId: "425159690081",
  appId: "1:425159690081:web:387796243490b7ed9a6720"
};

// TEMPORARY DEBUG
console.log("Firebase Project:", firebaseConfig.projectId);
console.log(
  "Firebase API Key Loaded:",
  Boolean(firebaseConfig.apiKey)
);
console.log(
  "Firebase API Key Prefix:",
  firebaseConfig.apiKey?.slice(0, 10)
);

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };