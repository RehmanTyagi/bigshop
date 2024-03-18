// firebase.js

import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDlBIUD8_QvDE8N_5Kc54DA3_QFyuTmfmg",
    authDomain: "bigshop-2024.firebaseapp.com",
    projectId: "bigshop-2024",
    storageBucket: "bigshop-2024.appspot.com",
    messagingSenderId: "182411027459",
    appId: "1:182411027459:web:22600e45641f608d28da36",
    measurementId: "G-T059HX26S7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)