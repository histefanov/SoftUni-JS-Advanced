function checker(x1, y1, x2, y2) {
  const centerToFirst = Math.sqrt(x1 ** 2 + y1 ** 2);
  const centerToSecond = Math.sqrt(x2 ** 2 + y2 ** 2);
  const firstToSecond = Math.sqrt(
    Math.abs(x2 - x1) ** 2 + Math.abs(y2 - y1) ** 2
  );

  console.log(
    `{${x1}, ${y1}} to {0, 0} is ${
      centerToFirst % 1 == 0 ? "valid" : "invalid"
    }`
  );
  console.log(
    `{${x2}, ${y2}} to {0, 0} is ${
      centerToSecond % 1 == 0 ? "valid" : "invalid"
    }`
  );
  console.log(
    `{${x1}, ${y1}} to {${x2}, ${y2}} is ${
      firstToSecond % 1 == 0 ? "valid" : "invalid"
    }`
  );
}

checker(2, 1, 1, 1);
