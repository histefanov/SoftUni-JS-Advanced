function calc(input) {
  const nums = [];

  while (input.length > 0) {
    const item = input.shift();

    if (isNaN(item)) {
      if (nums.length > 1) {
        const second = nums.pop();
        const first = nums.pop();
        let result;

        switch (item) {
          case "+":
            result = first + second;
            break;
          case "-":
            result = first - second;
            break;
          case "*":
            result = first * second;
            break;
          case "/":
            result = first / second;
            break;
          default:
            throw new Error("Invalid arithmetic operator.");
        }

        nums.push(result);
      } else {
        console.log("Error: not enough operands!");
        return;
      }
    } else {
      nums.push(item);
    }
  }

  console.log(nums.length == 1 ? nums.pop() : "Error: too many operands!");
}

calc([5, 3, 4, "*", "-"]);
