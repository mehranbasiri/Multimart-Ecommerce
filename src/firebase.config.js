import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyA5qNtaZ0bfw5BSK2FPJnDehiJ0GB-WbkA",
  authDomain: "maltimart-f546a.firebaseapp.com",
  projectId: "maltimart-f546a",
  storageBucket: "maltimart-f546a.appspot.com",
  messagingSenderId: "832056650129",
  appId: "1:832056650129:web:fabed8942b7e8fae059230",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
