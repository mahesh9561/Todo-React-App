import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBuUDozHgnn3XPtPoDnE8ZJHyAeIe-zOZw",
    authDomain: "todo-app-ec6f0.firebaseapp.com",
    projectId: "todo-app-ec6f0",
    storageBucket: "todo-app-ec6f0.appspot.com",
    messagingSenderId: "90736609590",
    appId: "1:90736609590:web:a7d7806caa9f100308cb97",
    measurementId: "G-N5SJX37B1Y"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);