const differentSymbolsNaive = (s) => {
  const array = [];
  for (let i = 0; i < s.length; i++) {
    if (!array.includes(s[i])) {
      array.push(s[i]);
    }
  }
  return array.length;
}
