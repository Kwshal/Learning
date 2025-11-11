import { stockData } from "./fakeStockAPI.js";

setInterval(() => {
     renderStockTicker(stockData());
}, 1000);

let previousPrice = 0;

function renderStockTicker(stockData) {
     const stockDisplayName = document.getElementById("name");
     const stockDisplaySymbol = document.getElementById("symbol");
     const stockDisplayPrice = document.getElementById("price");
     const stockDisplayPriceIcon = document.getElementById("price-icon");
     const stockDisplayTime = document.getElementById("time");

     const { name, symbol, price, time } = stockData;

     stockDisplayName.textContent = name;
     stockDisplaySymbol.textContent = symbol;
     stockDisplayPrice.textContent = price;
     stockDisplayTime.textContent = time;
     stockDisplayPriceIcon.textContent = price > previousPrice ? "▲" : price < previousPrice ? "▼" : "►";
     stockDisplayPriceIcon.style.color = price > previousPrice ? "green" : price < previousPrice ? "red" : "gray";

     previousPrice = price;
}



