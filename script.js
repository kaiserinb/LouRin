/*
Version: 0.1.4
File: script.js
Project: LouRin
*/

function showPage(pageId){

document.querySelectorAll(".page").forEach(page=>{
page.classList.remove("active");
});

document.getElementById(pageId).classList.add("active");

document.querySelectorAll(".navButton").forEach(button=>{
button.classList.remove("activeNav");
});

event.currentTarget.classList.add("activeNav");

}

// ---------- User System ----------

const params = new URLSearchParams(window.location.search);

const currentUser = params.get("user") || "kaiserin";

const partner =
currentUser === "kaiserin"
? "Louan"
: "Kaiserin";

document.getElementById("partnerName").textContent =
"❤️ " + partner;

document.getElementById("chatTitle").textContent =
"❤️ " + partner;


// ---------- Chat ----------

function openChat(){

document.getElementById("messageList").style.display="none";

document.getElementById("chatBox").style.display="block";

}

function closeChat(){

document.getElementById("chatBox").style.display="none";

document.getElementById("messageList").style.display="block";

}

function sendMessage(){

const input=document.getElementById("textMessage");

const text=input.value.trim();

if(text==="") return;

const message=document.createElement("div");

message.className="message sent";

message.textContent=text;

document.getElementById("chatMessages").appendChild(message);

input.value="";

}
