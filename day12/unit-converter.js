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

     lengthEl.textContent = `${inputValue} meters = ${feet.toFixed(3)} feet | ${inputValue} feet = ${meters.toFixed(3)} meters`;
     volumeEl.textContent = `${inputValue} liters = ${gallons.toFixed(3)} gallons | ${inputValue} gallons = ${liters.toFixed(3)} liters`;
     massEl.textContent = `${inputValue} kilograms = ${pounds.toFixed(3)} pounds | ${inputValue} pounds = ${kilograms.toFixed(3)} kilograms`;
});