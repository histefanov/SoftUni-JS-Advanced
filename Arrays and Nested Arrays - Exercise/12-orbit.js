function orbit(params) {
  const [width, height, x, y] = params;
  let matrix = [];

  for (let r = 0; r < height; r++) {
    matrix[r] = new Array(width).fill(0);
  }

  matrix = matrix.map((row, rowIndex) => {
    return row.map((col, colIndex) => {
      return Math.max(Math.abs(x - rowIndex), Math.abs(y - colIndex)) + 1;
    });
  });

  for (const row of matrix) {
    console.log(row.join(" "));
  }
}

orbit([2, 2, 0, 1]);
