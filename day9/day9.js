let scoreHome = document.getElementById("score-home");
let scoreGuest = document.getElementById("score-guest");

let plus1Home = document.getElementById("plus1-home");
let plus2Home = document.getElementById("plus2-home");
let plus3Home = document.getElementById("plus3-home");

let plus1Guest = document.getElementById("plus1-guest");
let plus2Guest = document.getElementById("plus2-guest");
let plus3Guest = document.getElementById("plus3-guest");

plus1Home.addEventListener("click", () => scoreHome.textContent = parseInt(scoreHome.textContent) + 1);
plus2Home.addEventListener("click", () => scoreHome.textContent = parseInt(scoreHome.textContent) + 2);
plus3Home.addEventListener("click", () => scoreHome.textContent = parseInt(scoreHome.textContent) + 3);

plus1Guest.addEventListener("click", () => scoreGuest.textContent = parseInt(scoreGuest.textContent) + 1);
plus2Guest.addEventListener("click", () => scoreGuest.textContent = parseInt(scoreGuest.textContent) + 2);
plus3Guest.addEventListener("click", () => scoreGuest.textContent = parseInt(scoreGuest.textContent) + 3);