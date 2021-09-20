function biggerHalf(arr) {
  const result = [...arr]
    .sort((a, b) => a - b)
    .slice(Math.floor(arr.length / 2), arr.length);

  return result;
}

biggerHalf([3, 19, 14, 7, 2, 19, 6]);
