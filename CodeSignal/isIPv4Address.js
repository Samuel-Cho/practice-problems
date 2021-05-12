const isIPv4Address = (inputString) => {
  const IPArray = inputString.split('.');
  if (IPArray.length !== 4) {
    return false;
  }
  let returnValue = true;
  for (let i = 0; i < IPArray.length; i++) {
    if (parseInt(IPArray[i]) < 0 || parseInt(IPArray[i]) > 255 || isNaN(+IPArray[i]) || isNaN(parseInt(IPArray[i])) || (IPArray[i][0] === '0' && IPArray[i].length > 1)) {
      return false;
    }
  }
  return returnValue;
};
