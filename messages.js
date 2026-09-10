// LouRin v0.3.8 - Messages
// AI chat placeholder / legacy partner messaging disabled

// The old partner-message listener has been disabled because
// Messages is now handled by LouRin AI.

const messageList =
    document.getElementById("messageList");

const chatBox =
    document.getElementById("chatBox");


// ----------------------------------------
// OPEN AI CHAT
// ----------------------------------------

window.openChat = function () {

    if (messageList) {
        messageList.style.display = "none";
    }

    if (chatBox) {
        chatBox.style.display = "block";
    }

};


// ----------------------------------------
// CLOSE AI CHAT
// ----------------------------------------

window.closeChat = function () {

    if (chatBox) {
        chatBox.style.display = "none";
    }

    if (messageList) {
        messageList.style.display = "block";
    }

};
