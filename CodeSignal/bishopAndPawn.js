function bishopAndPawn(bishop, pawn) {
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8'];
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const bishopPosition = [letters.indexOf(bishop[0]) + 1, numbers.indexOf(bishop[1]) + 1];
  const pawnPosition = [letters.indexOf(pawn[0]) + 1, numbers.indexOf(pawn[1]) + 1];
  const letterDifference = Math.abs(bishopPosition[0] - pawnPosition[0]);
  const numberDifference = Math.abs(bishopPosition[1] - pawnPosition[1]);
  if (letterDifference === numberDifference) {
    return true;
  } else {
    return false;
  }
}
