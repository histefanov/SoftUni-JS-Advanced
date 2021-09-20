function print(arr, n) {
  //   const result = [];
  //   let index = 0;
  //   while (index < arr.length) {
  //     result.push(arr[index]);
  //     index += n;
  //   }
  //   return result;

  return arr.filter((el, index) => index % n == 0);
}
