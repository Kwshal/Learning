const inputEl = document.getElementById('input-el');
const saveBtn = document.getElementById('save-btn');
const ulEl = document.getElementById('ul-el');

let links = [];
// getting the saved data from local storage

if (localStorage.getItem('links')) {
     const savedLinks = JSON.parse(localStorage.getItem('links'));
     renderLinks(savedLinks);
}

saveBtn.addEventListener('click', () => {
     if (inputEl.value.trim().length === 0) return;

     links.push(inputEl.value);
     renderLinks(links);
     inputEl.value = '';
     let stringifiedLinks = JSON.stringify(links);
     localStorage.setItem('links', stringifiedLinks);
     // saveBtn.textContent = 'Saved!';
     // saveBtn.style.backgroundColor = '#555';
     // setTimeout(() => {
     //      saveBtn.textContent = 'Save Input';
     //      saveBtn.style.backgroundColor = '#444';
     // }, 1000);
});

// deleting the saved data
const deleteBtn = document.getElementById('delete-btn');
deleteBtn.addEventListener('click', () => {
     ulEl.textContent = '';
     links = [];
     localStorage.removeItem('links');
});

function renderLinks(links) {
     let listItems = '';
     for (let i = 0; i < links.length; i++) {
          listItems += `<li><a target="_blank" href="${links[i]}">${links[i]}</a></li>`;
     }
     ulEl.innerHTML = listItems;
}
