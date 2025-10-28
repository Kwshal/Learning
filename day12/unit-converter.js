const inputEl = document.getElementById('input-el');
const convertBtn = document.getElementById('convert-btn');
const lengthEl = document.getElementById('length-el');
const volumeEl = document.getElementById('volume-el');
const massEl = document.getElementById('mass-el');

convertBtn.addEventListener('click', () => {
     if (inputEl.value.trim().length === 0) return;
     const inputValue = parseFloat(inputEl.value);

     const feet = inputValue * 3.28084;
     const gallons = inputValue * 0.264172;
     const pounds = inputValue * 2.20462;

     const meters = inputValue / 3.28084;
     const liters = inputValue / 0.264172;
     const kilograms = inputValue / 2.20462;

     lengthEl.innerHTML = `${inputValue} meters = ${feet.toFixed(3)} feet <br> ${inputValue} feet = ${meters.toFixed(3)} meters`;
     volumeEl.innerHTML = `${inputValue} liters = ${gallons.toFixed(3)} gallons <br> ${inputValue} gallons = ${liters.toFixed(3)} liters`;
     massEl.innerHTML = `${inputValue} kilograms = ${pounds.toFixed(3)} pounds <br> ${inputValue} pounds = ${kilograms.toFixed(3)} kilograms`;
});