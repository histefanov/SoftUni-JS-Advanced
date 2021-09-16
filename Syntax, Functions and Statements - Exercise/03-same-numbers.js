function sameNumbers(num) {
  const digits = num.toString().split("").map(Number);
  console.log(digits.every((x) => x === digits[0]));
  console.log(digits.reduce((a, b) => a + b));
}

sameNumbers(10);
