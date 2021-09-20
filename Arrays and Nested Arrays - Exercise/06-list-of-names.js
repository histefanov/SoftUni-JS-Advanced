function printSorted(arr) {
  arr
    .sort((a, b) => a.localeCompare(b))
    .forEach((n, index) => console.log(`${index + 1}.${n}`));
}

printSorted(["John", "Bob", "Christina", "Ema"]);
