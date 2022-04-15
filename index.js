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

async function processBtcUsd() {
  const axios = require('axios');
  const response = await axios.get(
    'https://api.binance.com/api/v3/klines?symbol=BTCBUSD&interval=1m',
  );

  const closes = response.data.map((candle) => parseFloat(candle[4]));
  const rsi = calcRSI(closes);
  console.log(rsi);

  // const price = parseFloat(candle[4]);
  // if (price >= 42195) {
  //   console.log('Sell');
  // } else if (price <= 41000) {
  //   console.log('buy');
  // } else console.log('Wait...');
  // console.log(candle[4]);
}
if (rsi > 70) console.log('sobrecomprado');
else if (rsi < 30) console.log('sobrevendido');

// async function processEthUsd() {
//   const axios = require('axios');
//   const response = await axios.get(
//     'https://api.binance.com/api/v3/klines?symbol=ETHBUSD&interval=1m',
//   );
//   const candle = response.data[499];
//   const price = parseFloat(candle[4]);
//   if (price >= 3185) {
//     console.log('Sell');
//   } else if (price <= 3100) {
//     console.log('Buy');
//   } else console.log('Wait...');
//   console.log(candle[4]);
// }

setInterval(processBtcUsd, 1000);
// setInterval(processEthUsd, 1000);

processBtcUsd();
// processEthUsd();
