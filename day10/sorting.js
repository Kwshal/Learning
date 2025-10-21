let fruits = [
     "🍎", "🍌", "🍌", "🍎", "🍌"
];

let appleContainer = document.getElementById("apple-container");
let bananaContainer = document.getElementById("banana-container");

function sortFruits() {
     for (let count = 0; count < fruits.length; count++) {
          if (fruits[count] === "🍎") {
               appleContainer.textContent += "🍎";
          } else {
               bananaContainer.textContent += "🍌";
          }
     }
}

sortFruits();

// fruits.sort((a, b) => {
//     if (a === b) {
//         return 0;
//     } else if (a === "🍎") {
//         return 1;
//     } else {
//         return -1;
//     }
// });

// fruits.forEach((fruit) => {
//     let fruitDiv = document.createElement("div");
//     fruitDiv.textContent = fruit;
//     if (fruit === "🍎") {
//         appleContainer.appendChild(fruitDiv);
//     } else {
//         orangeContainer.appendChild(fruitDiv);
//     }
// });