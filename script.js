function makeChange(amount) {
  const quarters = Math.floor(amount / 25);
  const dimes = Math.floor((amount % 25) / 10);
  const nickels = Math.floor(((amount % 25) % 10) / 5);
  const pennies = ((amount % 25) % 10) % 5;

  return { q: quarters, d: dimes, n: nickels, p: pennies };
}

function calculateChange() {
  const amount = parseInt(document.getElementById('amount').value);
  const result = makeChange(amount);

  document.getElementById('result').innerText = `Change breakdown: ${JSON.stringify(result)}`;
}

