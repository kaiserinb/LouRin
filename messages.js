// LouRin v0.3.4 - Messages

import {
collection,
query,
orderBy,
onSnapshot,
addDoc,
serverTimestamp
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

window.sendMessage = async function () {

    const input = document.getElementById("textMessage");

    const text = input.value.trim();

    if (!text) return;

    await addDoc(collection(db, "chats", "lourin", "messages"), {

        sender: currentUser,

        text: text,

        time: serverTimestamp(),

        edited: false,

        type: "text"

    });

    input.value = "";

};
// Kiss Mode Toggle

const kissToggle = document.getElementById("kissToggle");

const normalInput = document.getElementById("normalInput");

const kissMode = document.getElementById("kissMode");


if (kissToggle) {

    kissToggle.onclick = () => {

        normalInput.style.display = "none";

        kissMode.style.display = "flex";

    };

}

// Kiss Counter

let kissCount = 0;

const kissButton =
document.getElementById("kissButton");

const kissDisplay =
document.getElementById("kissCount");


if (kissButton) {

    kissButton.onclick = () => {

        if (kissCount < 999) {

            kissCount++;

            kissDisplay.innerHTML =
            kissCount + "×";

        }


        kissButton.style.transform =
        "scale(0.9)";


        setTimeout(()=>{

            kissButton.style.transform =
            "scale(1)";

        },100);

    };

}

const backToMessage =
document.getElementById("backToMessage");


if (backToMessage) {

    backToMessage.onclick = () => {

        kissMode.style.display = "none";

        normalInput.style.display = "flex";

    };

}

