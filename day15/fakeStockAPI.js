export function stockData() {
     return {
          name: "QtechAI",
          symbol: "QAI",
          price: (Math.random() * 100).toFixed(2),
          time: new Date().toLocaleTimeString()
     }
}