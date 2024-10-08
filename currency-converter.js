(function() {
    const exchangeRates = {
        USD: { EUR: 0.92, GBP: 0.76, JPY: 140.0 },
        EUR: { USD: 1.09, GBP: 0.82, JPY: 151.0 },
        GBP: { USD: 1.31, EUR: 1.22, JPY: 183.0 },
        JPY: { USD: 0.0071, EUR: 0.0066, GBP: 0.0054 }
    };

    const converterContainer = document.createElement('div');
    converterContainer.id = 'currency-converter';
    converterContainer.style.padding = '20px';
    converterContainer.style.border = '1px solid #ddd';
    converterContainer.style.width = '300px';
    converterContainer.style.backgroundColor = '#f9f9f9';
    converterContainer.style.borderRadius = '8px';
    converterContainer.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    converterContainer.style.fontFamily = 'Arial, sans-serif';
    converterContainer.innerHTML = `
      <h3 style="margin-bottom: 15px; font-size: 20px;">Currency Converter</h3>
      <div style="display: flex; align-items: center; margin-bottom: 10px;">
          <i class="fas fa-dollar-sign" style="margin-right: 5px;"></i>
          <input type="number" id="amount" placeholder="Amount" style="flex: 1; padding: 8px; border: 1px solid #ddd; border-radius: 4px;">
      </div>
      <div style="margin-bottom: 10px;">
          <label for="fromCurrency" style="display: block; margin-bottom: 5px;">From:</label>
          <select id="fromCurrency" style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;">
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="JPY">JPY</option>
          </select>
      </div>
      <div style="margin-bottom: 10px;">
          <label for="toCurrency" style="display: block; margin-bottom: 5px;">To:</label>
          <select id="toCurrency" style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;">
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="JPY">JPY</option>
          </select>
      </div>
      <button id="convertBtn" style="width: 100%; padding: 10px; margin-top: 10px; background-color: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer;">
          <i class="fas fa-exchange-alt" style="margin-right: 5px;"></i> Convert
      </button>
      <p id="result" style="margin-top: 10px; font-weight: bold;"></p>
    `;

    const widgetDiv = document.getElementById('currency-widget');
    if (widgetDiv) {
        widgetDiv.appendChild(converterContainer);
    }


    function copyButtonStyles(sourceSelector) {
        const sourceButton = document.querySelector(sourceSelector);
        if (sourceButton) {
            const computedStyle = getComputedStyle(sourceButton);
            const convertButton = document.getElementById('convertBtn');
            convertButton.style.backgroundColor = computedStyle.backgroundColor;
            convertButton.style.color = computedStyle.color;
            convertButton.style.border = computedStyle.border;
            convertButton.style.borderRadius = computedStyle.borderRadius;
            convertButton.style.fontSize = computedStyle.fontSize;
            convertButton.style.fontWeight = computedStyle.fontWeight;
            convertButton.style.padding = computedStyle.padding;
            convertButton.style.cursor = 'pointer'; 
        }
    }

    copyButtonStyles('.btn');

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
