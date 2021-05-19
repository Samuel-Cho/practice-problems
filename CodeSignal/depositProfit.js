const depositProfit = (deposit, rate, threshold) => {
  let newDeposit = deposit;
  let years = 0;
  while (newDeposit < threshold) {
    newDeposit += (newDeposit * (rate / 100));
    years++;
  }
  return years;
}
