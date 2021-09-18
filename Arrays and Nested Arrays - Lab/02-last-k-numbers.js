function sequence(n, k) {
  const result = [1];
  for (let i = 0; i < n - 1; i++) {
    let nextNum = 0;
    for (let j = 0; j < k && i >= j; j++) {
      nextNum += result[i - j];
    }
    result.push(nextNum);
  }
  return result;
}

sequence(6, 3);
sequence(8, 2);
