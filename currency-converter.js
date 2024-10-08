(function() {
    // Hardcoded exchange rates (USD as base currency)
    const exchangeRates = {
      USD: { EUR: 0.92, GBP: 0.76, JPY: 140.0 },
      EUR: { USD: 1.09, GBP: 0.82, JPY: 151.0 },
      GBP: { USD: 1.31, EUR: 1.22, JPY: 183.0 },
      JPY: { USD: 0.0071, EUR: 0.0066, GBP: 0.0054 }
    };
  
    // Create the container for the converter
    const converterContainer = document.createElement('div');
    converterContainer.id = 'currency-converter';
    converterContainer.style.padding = '10px';
    converterContainer.style.border = '1px solid #ddd';
    converterContainer.style.width = '250px';
    converterContainer.style.backgroundColor = '#f9f9f9';
    
    // Insert HTML for the converter
    converterContainer.innerHTML = `
      <h3>Currency Converter</h3>
      <input type="number" id="amount" placeholder="Amount" style="width: 100%; padding: 8px; margin-bottom: 10px;">
      <select id="fromCurrency" style="width: 100%; padding: 8px;">
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
        <option value="JPY">JPY</option>
      </select>
      <select id="toCurrency" style="width: 100%; padding: 8px; margin-top: 10px;">
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
        <option value="JPY">JPY</option>
      </select>
      <button id="convertBtn" style="width: 100%; padding: 10px; margin-top: 10px;">Convert</button>
      <p id="result" style="margin-top: 10px;"></p>
    `;
  
    // Append the container to the document body or another element
    document.body.appendChild(converterContainer);
  
    // Conversion logic
    document.getElementById('convertBtn').addEventListener('click', function() {
      const amount = parseFloat(document.getElementById('amount').value);
      const fromCurrency = document.getElementById('fromCurrency').value;
      const toCurrency = document.getElementById('toCurrency').value;
  
      if (!amount || fromCurrency === toCurrency) {
        document.getElementById('result').innerText = 'Invalid input.';
        return;
      }
  
      const rate = exchangeRates[fromCurrency][toCurrency];
      const convertedAmount = (amount * rate).toFixed(2);
      document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
    });
  })();
  