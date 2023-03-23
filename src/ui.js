// Importing CSS file
import "./styles/styles.css";

// Importing API handling module
import { getExchangeRate } from "./api";

// Add UI logic here, example:

document.addEventListener("DOMContentLoaded", () => {
  // Get the necessary DOM elements
  const form = document.querySelector("#currency-form");
  const inputAmount = document.querySelector("#input-amount");
  const selectCurrency = document.querySelector("#select-currency");
  const resultDisplay = document.querySelector("#result-display");

  // Function to handle form submission
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const amount = parseFloat(inputAmount.value);
    const currency = selectCurrency.value;

    if (isNaN(amount) || amount < 0) {
      alert("Please enter a valid amount.");
      return;
    }

    try {
      const exchangeRate = await getExchangeRate(currency);
      const result = amount * exchangeRate;
      resultDisplay.textContent = `Converted amount: ${result.toFixed(2)} ${currency}`;
    } catch (error) {
      resultDisplay.textContent = `Error: ${error.message}`;
    }
  });
});
