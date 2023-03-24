(()=>{"use strict";document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector("#currency-form"),t=document.querySelector("#input-amount"),n=document.querySelector("#select-currency"),r=document.querySelector("#result-display"),o=document.querySelector("#error-display");e.addEventListener("submit",(async e=>{e.preventDefault();const c=parseFloat(t.value),a=n.value;if(r.textContent="",o.textContent="",isNaN(c)||c<0)o.textContent="Please enter a valid amount.";else try{const e=c*await async function(e){const t=await fetch("https://v6.exchangerate-api.com/v6/3304c4be7b0019313dcfc0f8/latest/USD");if(!t.ok)throw new Error("Error fetching exchange rate data");const n=(await t.json()).conversion_rates[e];if(!n)throw new Error("Currency not found");return n}(a);r.textContent=`Converted amount: ${e.toFixed(2)} ${a}`}catch(e){o.textContent=`Error: ${e.message}`}}))}))})();
//# sourceMappingURL=bundle.js.map