function alternatingSums(a) {
  const weights = [0, 0];
  for (let i = 0; i < a.length; i++) {
    if (i % 2 === 0) {
      weights[0] += a[i];
    } else {
      weights[1] += a[i];
    }
  }
  return weights;
}
