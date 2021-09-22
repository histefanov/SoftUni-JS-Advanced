function spiralMatrix(rows, columns) {
  const matrix = [];

  for (let r = 0; r < rows; r++) {
    matrix[r] = new Array(columns).fill(0);
  }

  let num = 1;
  let startRow = 0;
  let endRow = rows - 1;
  let startCol = 0;
  let endCol = columns - 1;

  while (startRow <= endRow && startCol <= endCol) {
    //right
    for (let col = startCol; col <= endCol; col++) {
      matrix[startRow][col] = num++;
    }
    startRow++;

    //bottom
    for (let row = startRow; row <= endRow; row++) {
      matrix[row][endCol] = num++;
    }
    endCol--;

    //left
    for (let col = endCol; col >= startCol; col--) {
      matrix[endRow][col] = num++;
    }
    endRow--;

    //top
    for (let row = endRow; row >= startRow; row--) {
      matrix[row][startCol] = num++;
    }
    startCol++;
  }

  for (const row of matrix) {
    console.log(row.join(" "));
  }
}

spiralMatrix(1, 6);
