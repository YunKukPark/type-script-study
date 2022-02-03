const BASE_URL = `https://api.coinpaprika.com/v1`;

export const fetchCoins = async () => {
  return fetch(`${BASE_URL}/coins`)
    .then(res => res.json())
    .then(data => data.slice(0, 100));
};

export const fetchCoinInfo = async (coinId: string) => {
  return fetch(`${BASE_URL}/coins/${coinId}`).then(res => res.json());
};

export const fetchCoinTickers = async (coinId: string) => {
  return fetch(`${BASE_URL}/tickers/${coinId}`).then(res => res.json());
};

export const fetchCoinHistory = (coinId: string) => {
  const oneWeek = 60 * 60 * 24 * 7;
  const endDate = Math.floor(Date.now() / 1000);
  const startDate = endDate - oneWeek * 2;
  return fetch(`${BASE_URL}/coins/${coinId}/ohlcv/historical?start=${startDate}&end=${endDate}`).then(res =>
    res.json()
  );
};
