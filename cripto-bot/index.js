function calcRSI(closes) {
  let gains = 0;
  let loses = 0;
  for (let i = closes.length - 14; i < closes.length; i++) {
    const diff = closes[i] - closes[i - 1];
    if (diff >= 0) gains += diff;
    else loses -= diff;
  }
  const strength = gains / loses;
  return 100 - 100 / (1 + strength);
}

fetch(`https://api.binance.com/api/v3/klines?symbol=BTCBUSD&interval=1m`).then(response=>{
  return response.json();  
}).then(body=>{
  candle = body[499];
  document.getElementById('price').innerHTML = parseFloat(candle[4]);
})

async function processBTCUSD(){
const closes = response.data.map((candle) => parseFloat(candle[4]));
const rsi = calcRSI(closes);
console.log(rsi);
}

setInterval(processBTCUSD(), 1000)

processBTCUSD();