const variableName = (name) => {
  const string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_';
  if (!isNaN(parseInt(name[0]))) {
    return false;
  }
  for (let i = 0; i < name.length; i++) {
    if (string.includes(name[i]) === false) {
      return false;
    }
  }
  return true;
}
