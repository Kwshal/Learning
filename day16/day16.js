// Rest parameters
const sum = (...nums) => nums.reduce((acc, num) => acc + num, 0)


// ...REST CHALLENGE from tutorial
const labelsConatainer = document.querySelector('#labels-container')
function getLabelHTML(text, sender, ...labels) {
     return labels.map(label => {
          return `<div class="label-card">
               <p> Dear ${label}</p>
               <p>${text}</p>
               <p>Best Wishes</p>
               <p>${sender}</p>
          </div>`
     }).join('')

}


const text = "Thank you for all your hard work throughout the year! 🎁"
const sender = "Kushal Mathuria";

labelsConatainer.innerHTML = getLabelHTML(text, sender, 'Kushal Mathuria', 'Mom', 'Dad', 'Brother')

















