/*
Version: 0.1.2
File: script.js
Project: LouRin
*/

const loadingScreen = document.getElementById("loadingScreen");
const app = document.getElementById("app");

window.addEventListener("load", () => {
    setTimeout(() => {
        loadingScreen.style.display = "none";
        app.style.display = "block";
    }, 2500);
});

function showPage(pageId){

    const pages = document.querySelectorAll(".page");

    pages.forEach(page=>{
        page.classList.remove("active");
    });

    document
        .getElementById(pageId)
        .classList.add("active");

}
