/*
Version: 0.1.3
File: script.js
Project: LouRin
*/

window.addEventListener("DOMContentLoaded", () => {

    const loadingScreen = document.getElementById("loadingScreen");
    const app = document.getElementById("app");

    // Show app after loading animation
    setTimeout(() => {
        loadingScreen.style.display = "none";
        app.style.display = "block";
    }, 2500);

});

function showPage(pageId) {

    // Hide all pages
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    // Show selected page
    document.getElementById(pageId).classList.add("active");

}
