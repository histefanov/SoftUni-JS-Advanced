function equalNeighbors(matrix) {
  function isValid(index, length) {
    return index >= 0 && index < length;
  }

  const equalElementsIndexes = [];
  counter = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      const current = matrix[i][j];
      if (isValid(i - 1, matrix.length) && current === matrix[i - 1][j]) {
        counter++;
      }
      if (isValid(i + 1, matrix.length) && current === matrix[i + 1][j]) {
        counter++;
      }
      if (current === matrix[i][j - 1]) {
        counter++;
      }
      if (current === matrix[i][j + 1]) {
        counter++;
      }
    }
  }
  console.log(Math.ceil(counter / 2));
}

equalNeighbors([
  ["2", "3", "4", "7", "0"],
  ["4", "0", "5", "3", "4"],
  ["2", "3", "5", "4", "2"],
  ["9", "8", "7", "5", "4"],
]);
