function growingPlant(upSpeed, downSpeed, desiredHeight) {
  let days = 0;
  let height = 0;
  while (days < desiredHeight) {
    height += upSpeed;
    days++;
    if (height >= desiredHeight) {
      break;
    }
    height -= downSpeed;
  }
  return days;
}
