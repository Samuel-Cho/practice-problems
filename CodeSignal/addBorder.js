const addBorder = (picture) => {
  const length = picture[0].length + 2;
  for (let i = 0; i < picture.length; i++) {
    picture[i] = `*${picture[i]}*`;
  }
  const asterisks = '*';
  picture.unshift(asterisks.repeat(length));
  picture.push(asterisks.repeat(length));
  return picture;
}
