const chessBoardCellColor = (cell1, cell2) => {
  const chessBoard = [];
  for (let i = 1; i < 9; i++) {
    for (let j = 1; j < 9; j++) {
      const square = {};
      if (i === 1) {
        square.cell = `A${j}`;
      } else if (i === 2) {
        square.cell = `B${j}`;
      } else if (i === 3) {
        square.cell = `C${j}`;
      } else if (i === 4) {
        square.cell = `D${j}`;
      } else if (i === 5) {
        square.cell = `E${j}`;
      } else if (i === 6) {
        square.cell = `F${j}`;
      } else if (i === 7) {
        square.cell = `G${j}`;
      } else if (i === 8) {
        square.cell = `H${j}`;
      }
      if ((i + j) % 2 === 0) {
        square.color = 'black';
      } else {
        square.color = 'white';
      }
      chessBoard.push(square);
    }
  }
  let color1 = null;
  let color2 = null;
  for (let k = 0; k < chessBoard.length; k++) {
    if (chessBoard[k].cell === cell1) {
      color1 = chessBoard[k].color;
    }
    if (chessBoard[k].cell === cell2) {
      color2 = chessBoard[k].color;
    }
  }
  return color1 === color2;
}
