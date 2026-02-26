import React from 'react';

// 
export async function currencyConverter(from, to) {
  const response = await fetch(`https://open.er-api.com/v6/latest?base=${from}&symbols=${to}`);
  const data = await response.json();
  return data.rates[to];
}