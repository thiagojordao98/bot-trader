  async function processBtcUsd() {
  const axios = require('axios');
  const response = await axios.get(
    'https://api.binance.com/api/v3/klines?symbol=BTCBUSD&interval=1m',
  );
  const candle = response.data[499];
  const price = parseFloat(candle[4]);
  if (price >= 42195) {
    console.log('Sell');
  } else if (price <= 41000) {
    console.log('buy');
  } else console.log('Wait...');
  console.log(candle[4]);
}

async function processEthUsd() {
  const axios = require('axios');
  const response = await axios.get(
    'https://api.binance.com/api/v3/klines?symbol=ETHBUSD&interval=1m',
  );
  const candle = response.data[499];
  const price = parseFloat(candle[4]);
  if (price >= 3185) {
    console.log('Sell');
  } else if (price <= 3100) {
    console.log('Buy');
  } else console.log('Wait...');
  console.log(candle[4]);
}

setInterval(processBtcUsd, 1000);
setInterval(processEthUsd, 1000);

processBtcUsd();
processEthUsd();

