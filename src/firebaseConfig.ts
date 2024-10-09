import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBTYnHjWGyJCr_3_IRi1vaHb77Ii4YW8s0",
  authDomain: "final-project-fa2ee.firebaseapp.com",
  projectId: "final-project-fa2ee",
  storageBucket: "final-project-fa2ee.appspot.com",
  messagingSenderId: "616228261398",
  appId: "1:616228261398:web:e3d4cf0bea451915882f37",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const authProvider = new GoogleAuthProvider();

export function signInWithGoogle(): void {
  signInWithPopup(auth, authProvider);
}
export function signOutOfGoogle(): void {
  auth.signOut();
}
