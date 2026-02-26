import { useState } from 'react'
import { currencyConverter } from './currency_converter'

function App() {
  const[amount, setAmount] = useState(0);
  const[fromcurrency, setFromCurrency] = useState('USD');
  const[tocurrency, setToCurrency] = useState('KES');
  const[result, setResult] = useState(1);

  const handleChange = async () => {
   if(!amount){
    alert('Please enter an amount');
    return;
   }
   try{
    const rates = await currencyConverter(fromcurrency);
    const rate = rates(tocurrency);
    setResult(amount * rate);
   }
   catch(error){
  }



  return (
    <div className="App">
      <h1>Currency Converter</h1>
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <select value={fromcurrency} onChange={(e) => setFromCurrency(e.target.value)}>
        <option value="USD">USD</option>
        <option value="KES">KES</option>
      </select>
      <select value={tocurrency} onChange={(e) => setToCurrency(e.target.value)}>
        <option value="USD">USD</option>
        <option value="KES">KES</option>
      </select>
      <button onClick={handleChange}>Convert</button>
      <p>{result}</p>
    </div>
  );
}
}
export default App;