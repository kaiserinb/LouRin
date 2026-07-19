/*
Version: 0.1.4
File: script.js
Project: LouRin
*/

function showPage(pageId) {
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById(pageId).classList.add("active");
}

window.onload = function () {
    const loading = document.getElementById("loadingScreen");

    setTimeout(() => {
        loading.style.display = "none";
    }, 2000);
};
