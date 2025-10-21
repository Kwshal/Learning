let fighters = [
     "🐵","🐶","🐺","🐱","🦁","🐯","🦒","🦊","🦝","🐮","🐷","🐗","🐭","🐼","🐴","🐈","🐫","🦘","🐘","🐇","🦕",
];

let stageEl = document.getElementById("stage");
let fighterBtn = document.getElementById("fighterBtn");

fighterBtn.addEventListener("click", () => {
    let randomIndex1 = Math.floor(Math.random() * fighters.length);
    let randomIndex2 = Math.floor(Math.random() * fighters.length);
    let fighter = fighters[randomIndex1] + " vs " + fighters[randomIndex2];
    stageEl.textContent = fighter;
});