// Firebase Setup

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";

import {
getFirestore,
collection,
addDoc,
query,
orderBy,
onSnapshot,
serverTimestamp
}
from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

const firebaseConfig = {

apiKey: "AIzaSyDKp-oSIIb27t3bE2LpNVONa2cJsCwVnAE",

authDomain: "lourin-71b90.firebaseapp.com",

projectId: "lourin-71b90",

storageBucket: "lourin-71b90.firebasestorage.app",

messagingSenderId: "598113052882",

appId: "1:598113052882:web:a7d1d0bee66abb4d84e50b"

};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

window.firebaseDB = db;

window.firebaseTools = {

collection,

addDoc,

query,

orderBy,

onSnapshot,

serverTimestamp

};

console.log("❤️ Firebase Ready");
