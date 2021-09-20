function isMagical(matrix) {
  const sum = matrix[0].reduce((a, b) => a + b);

  for (const row of matrix) {
    if (row.reduce((a, b) => a + b) != sum) {
      return false;
    }
  }

  for (let c = 0; c < matrix[0].length; c++) {
    let colSum = 0;
    for (let r = 0; r < matrix.length; r++) {
      colSum += matrix[r][c];
    }

    if (colSum != sum) {
      return false;
    }
  }

  return true;
}

console.log(
  isMagical([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5],
  ])
);
