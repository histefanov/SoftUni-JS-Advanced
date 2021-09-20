function diagonalAttack(input) {
  let matrix = input.map((row) => row.split(" ").map(Number));
  let d1 = 0;
  let d2 = 0;
  for (let i = 0; i < matrix.length; i++) {
    d1 += matrix[i][i];
    d2 += matrix[i][matrix.length - 1 - i];
  }

  if (d1 == d2) {
    matrix = matrix.map((row, rowIndex) => {
      return row.map((col, colIndex) => {
        if (rowIndex != colIndex && rowIndex + colIndex != matrix.length - 1) {
          return d1;
        } else {
          return col;
        }
      });
    });
  }

  for (const row of matrix) {
    console.log(row.join(" "));
  }
}

diagonalAttack(["1 1 1", "1 1 1", "1 1 0"]);
