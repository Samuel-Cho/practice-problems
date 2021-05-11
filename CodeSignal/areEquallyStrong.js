const areEquallyStrong = (yourLeft, yourRight, friendsLeft, friendsRight) => {
  const test1 = (yourLeft === friendsLeft);
  const test2 = (yourLeft === friendsRight);
  if (test1 === false && test2 === false) {
    return false;
  }
  const test3 = (yourRight === friendsLeft);
  const test4 = (yourRight === friendsRight);
  if (test3 === false && test4 === false) {
    return false;
  }
  if (test1 === true && test4 === true) {
    return true;
  } else if (test2 === true && test3 === true) {
    return true;
  } else {
    return false;
  }
};
