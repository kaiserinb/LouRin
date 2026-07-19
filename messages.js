// LouRin v0.3.4 - Messages

import {
collection,
query,
orderBy,
onSnapshot
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

const db = window.firebaseDB;

const currentUser =
new URLSearchParams(window.location.search).get("user") || "kaiserin";

const chatBox =
document.getElementById("chatMessages");

const messagesRef =
collection(db, "chats", "lourin", "messages");

const q =
query(messagesRef, orderBy("time"));

onSnapshot(q, (snapshot)=>{

chatBox.innerHTML="";

snapshot.forEach((doc)=>{

const data=doc.data();

if(data.placeholder) return;

const bubble=document.createElement("div");

bubble.className =
data.sender===currentUser
? "message sent"
: "message received";

bubble.innerHTML=`

${data.text}

`;

chatBox.appendChild(bubble);

});

chatBox.scrollTop=chatBox.scrollHeight;

});
