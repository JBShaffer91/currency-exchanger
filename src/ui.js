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
  const errorDisplay = document.querySelector("#error-display");

  // Function to handle form submission
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const amount = parseFloat(inputAmount.value);
    const currency = selectCurrency.value;

    // Clear previous result and error messages
    resultDisplay.textContent = "";
    errorDisplay.textContent = "";

    if (isNaN(amount) || amount < 0) {
      errorDisplay.textContent = "Please enter a valid amount.";
      return;
    }

    try {
      const exchangeRate = await getExchangeRate(currency);
      const result = amount * exchangeRate;
      resultDisplay.textContent = `Converted amount: ${result.toFixed(2)} ${currency}`;
    } catch (error) {
      errorDisplay.textContent = `Error: ${error.message}`;
    }
  });
});
