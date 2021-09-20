function smallestTwoNums(arr) {
  const sorted = [...arr].sort((a, b) => a - b);
  console.log(`${sorted[0]} ${sorted[1]}`);
}

smallestTwoNums([30, 15, 50, 5]);
