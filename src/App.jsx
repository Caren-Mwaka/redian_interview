import { useState } from 'react'
import { currencyConverter } from './currency_converter'

function App() {
  const[amount, setAmount] = useState(0);
  const[fromcurrency, setFromCurrency] = useState('USD');
  const[tocurrency, setToCurrency] = useState('KES');
  const[rate, setRate] = useState(1);

  const handleChange = async () => {
    const rate = await currencyConverter(fromcurrency, tocurrency);
    setRate(rate);
  }

  

  return (
    <div className="App">
      <h1>Currency Converter</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Amount:
          <input type="number" value={amount} onChange={handleChange} />
        </label>
        <label>
          From Currency:
          <select value={fromcurrency} onChange={handleFromCurrencyChange}>
            <option value="USD">USD</option>
            <option value="KES">KES</option>
          </select>
        </label>
        <label>
          To Currency:
          <select value={tocurrency} onChange={handleToCurrencyChange}>
            <option value="USD">USD</option>
            <option value="KES">KES</option>
          </select>
        </label>
        <button type="submit">Convert</button>
      </form>
      <p>Amount Converted: {amountConverted}</p>
    </div>
  );
}

export default App;