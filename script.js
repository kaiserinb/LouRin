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
