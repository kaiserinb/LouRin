// LouRin Messages v0.3.3

import {
collection,
query,
orderBy,
onSnapshot
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

const db = window.firebaseDB;

const messagesRef = collection(db, "chats", "lourin", "messages");

const messagesQuery = query(messagesRef, orderBy("time"));

onSnapshot(messagesQuery, (snapshot) => {

    console.log("Messages:", snapshot.size);

});
