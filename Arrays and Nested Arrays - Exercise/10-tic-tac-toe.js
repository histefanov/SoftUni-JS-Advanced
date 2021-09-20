function ticTacToe(moves) {
  const checkState = (r, c) => {
    const char = board[r][c];
    let isMatching = true;

    // check row:
    if (board[r].every((p) => p == char)) {
      return char;
    }

    // check col:
    const col = [];

    for (let row = 0; row < board.length; row++) {
      col.push(board[row][c]);
    }

    if (col.every((p) => p == char)) {
      return char;
    }

    // check diagonals:
    const d1 = [];
    const d2 = [];

    for (let i = 0; i < board.length; i++) {
      d1.push(board[i][i]);
      d2.push(board[i][board.length - 1 - i]);
    }

    if (d1.every((p) => p == char) || d2.every((p) => p == char)) {
      return char;
    }

    return false;
  };

  const board = [
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ];

  let currentPlayerChar = "X";
  let hasWinner = false;

  for (let i = 0; i < moves.length; i++) {
    const [r, c] = moves[i].split(" ").map(Number);

    if (board[r][c]) {
      console.log("This place is already taken. Please choose another!");
      continue;
    }

    board[r][c] = currentPlayerChar;

    const current = checkState(r, c);

    if (board.flat().every((p) => p)) {
      break;
    }

    if (current) {
      hasWinner = true;
      break;
    }

    currentPlayerChar = currentPlayerChar == "X" ? "O" : "X";
  }

  if (hasWinner) {
    console.log(`Player ${currentPlayerChar} wins!`);
  } else {
    console.log("The game ended! Nobody wins :(");
  }

  for (const row of board) {
    console.log(row.join("\t"));
  }
}

ticTacToe([
  "0 1",
  "0 0",
  "0 2",
  "2 0",
  "1 0",
  "1 2",
  "1 1",
  "2 1",
  "2 2",
  "0 0",
]);
