import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDM0iV07FxaSCXHm7i7if06q7PNylkKUZ0",
  authDomain: "maltimart-test-df835.firebaseapp.com",
  projectId: "maltimart-test-df835",
  storageBucket: "maltimart-test-df835.appspot.com",
  messagingSenderId: "467853635693",
  appId: "1:467853635693:web:250a31800034516c64cf64",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
