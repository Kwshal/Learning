let count = 0;
let countEl = document.getElementById("count");
let saveBtn = document.getElementById("save");

function increment() {
     count += 1;
     countEl.textContent = count;
}

function save() {
     let entriesEl = document.getElementById("entries");
     entriesEl.textContent += (entriesEl.textContent !== "" && ", ") + count; 
     count = 0;
     countEl.textContent = count;
}