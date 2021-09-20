function extractIncreasingSubsequence(arr) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] >= largest) {
      largest = arr[i];
    } else {
      arr.splice(i--, 1);
    }
  }
  return arr;
}

extractIncreasingSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24]);
