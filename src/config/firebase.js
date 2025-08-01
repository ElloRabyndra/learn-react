import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAjHdVBJUhStY0bPEHvHNIsqbdMcwZfVLg",
  authDomain: "ello-first-project.firebaseapp.com",
  projectId: "ello-first-project",
  storageBucket: "ello-first-project.firebasestorage.app",
  messagingSenderId: "18421086808",
  appId: "1:18421086808:web:af7c9c92a4a90a2718a82d",
  measurementId: "G-DD9LFCP5KG",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
