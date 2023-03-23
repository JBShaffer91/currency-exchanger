export async function getExchangeRate(targetCurrency) {
  const apiKey = process.env.API_KEY;
  const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Error("Error fetching exchange rate data");
  }

  const data = await response.json();
  const exchangeRate = data.conversion_rates[targetCurrency];

  if (!exchangeRate) {
    throw new Error("Currency not found");
  }

  return exchangeRate;
}
