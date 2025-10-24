let links = [];

const inputEl = document.getElementById('input-el');
const saveInputBtn = document.getElementById('save-input-btn');
const saveTabBtn = document.getElementById('save-tab-btn');
const ulEl = document.getElementById('ul-el');

// getting the saved data from local storage

if (localStorage.getItem('links')) {
     const savedLinks = JSON.parse(localStorage.getItem('links'));
     renderLinks(savedLinks);
}

saveInputBtn.addEventListener('click', () => {
     if (inputEl.value.trim().length === 0) return;

     links.push(inputEl.value);
     renderLinks(links);
     inputEl.value = '';
     localStorage.setItem('links', JSON.stringify(links));
});
saveTabBtn.addEventListener('click', () => {
     chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
          links.push(tabs[0].url);
     });
     renderLinks(links);
     localStorage.setItem('links', JSON.stringify(links));
});

// deleting the saved data
const deleteBtn = document.getElementById('delete-btn');
deleteBtn.addEventListener('click', () => {
     ulEl.innerHTML = '';
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

