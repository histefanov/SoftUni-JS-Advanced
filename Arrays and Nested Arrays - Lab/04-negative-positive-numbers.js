function arrange(arr) {
  const result = [];
  for (const item of arr) {
    if (item < 0) {
      result.unshift(item);
    } else {
      result.push(item);
    }
  }
  console.log(result.join(" "));
}

arrange([7, -2, 8, 9]);
